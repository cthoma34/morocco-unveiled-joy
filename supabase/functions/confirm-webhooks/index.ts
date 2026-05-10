import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Payload {
  name?: string;
  email?: string;
  phone?: string;
  destination?: string;
  source?: string;
  ghlTag?: string;
  ccTag?: string;
}

function splitName(name?: string) {
  const parts = (name ?? "").trim().split(/\s+/);
  return { firstName: parts[0] ?? "", lastName: parts.slice(1).join(" ") };
}

async function fireGHL(p: Payload) {
  const apiKey = Deno.env.get("GHL_API_KEY");
  const locationId = Deno.env.get("GHL_LOCATION_ID");
  if (!apiKey || !locationId) return { ok: false, skipped: "ghl-not-configured" };

  const { firstName, lastName } = splitName(p.name);
  const body = {
    locationId,
    firstName,
    lastName,
    name: p.name ?? "",
    email: p.email ?? "",
    phone: p.phone ?? "",
    source: p.source ?? "confirmation-page",
    tags: [p.ghlTag, p.destination].filter(Boolean),
    customFields: p.destination
      ? [{ key: "destination", field_value: p.destination }]
      : [],
  };

  try {
    const res = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

async function fireConstantContact(p: Payload) {
  const apiKey = Deno.env.get("CC_API_KEY");
  const clientSecret = Deno.env.get("CC_CLIENT_SECRET");
  if (!apiKey || !clientSecret) return { ok: false, skipped: "cc-not-configured" };
  if (!p.email) return { ok: false, skipped: "no-email" };

  // Constant Contact v3 sign_up_form endpoint accepts the API key directly
  // for unauthenticated subscribe flows. Tag is sent so it can be matched
  // server-side in CC by an automation rule on tag value.
  const { firstName, lastName } = splitName(p.name);
  const body = {
    api_key: apiKey,
    email_address: p.email,
    first_name: firstName,
    last_name: lastName,
    phone_number: p.phone ?? "",
    tag: p.ccTag ?? p.destination ?? "",
    source: p.source ?? "confirmation-page",
  };

  try {
    const res = await fetch("https://api.cc.email/v3/contacts/sign_up_form", {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`${apiKey}:${clientSecret}`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const payload = (await req.json()) as Payload;
    if (!payload || typeof payload !== "object") {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const [ghl, cc] = await Promise.all([
      fireGHL(payload),
      fireConstantContact(payload),
    ]);

    return new Response(JSON.stringify({ ghl, cc }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("confirm-webhooks error", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});