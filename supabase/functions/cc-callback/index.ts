const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const REDIRECT_URI =
  "https://fmrzsixfvgeqktpglnie.supabase.co/functions/v1/cc-callback";

function html(body: string, status = 200) {
  return new Response(
    `<!doctype html><html><head><meta charset="utf-8"><title>Constant Contact OAuth</title>
<style>body{font-family:system-ui,sans-serif;max-width:680px;margin:48px auto;padding:0 20px;color:#111}
code,pre{background:#f4f4f5;border-radius:6px;padding:12px;display:block;word-break:break-all;white-space:pre-wrap;font-size:14px}
h1{font-size:22px}.ok{color:#15803d}.err{color:#b91c1c}</style></head><body>${body}</body></html>`,
    { status, headers: { ...corsHeaders, "Content-Type": "text/html" } },
  );
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const url = new URL(req.url);

  // Step 1: /cc-callback?start=1 -> redirect user to CC authorize page
  if (url.searchParams.get("start") === "1") {
    const clientId = Deno.env.get("CC_API_KEY");
    if (!clientId) return html(`<h1 class="err">Missing CC_API_KEY</h1>`, 500);
    const authorize = new URL(
      "https://authz.constantcontact.com/oauth2/default/v1/authorize",
    );
    authorize.searchParams.set("client_id", clientId);
    authorize.searchParams.set("redirect_uri", REDIRECT_URI);
    authorize.searchParams.set("response_type", "code");
    authorize.searchParams.set(
      "scope",
      "contact_data offline_access account_read",
    );
    authorize.searchParams.set("state", crypto.randomUUID());
    return Response.redirect(authorize.toString(), 302);
  }

  // Step 2: CC redirects back here with ?code=...
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  if (error) {
    return html(`<h1 class="err">Authorization failed</h1><pre>${error}</pre>`, 400);
  }
  if (!code) {
    return html(
      `<h1>Constant Contact authorize</h1>
       <p>Click the link below to authorize this app and generate a refresh token.</p>
       <p><a href="?start=1">Start authorization →</a></p>`,
    );
  }

  const clientId = Deno.env.get("CC_API_KEY");
  const clientSecret = Deno.env.get("CC_CLIENT_SECRET");
  if (!clientId || !clientSecret) {
    return html(`<h1 class="err">Missing CC_API_KEY or CC_CLIENT_SECRET</h1>`, 500);
  }

  const tokenRes = await fetch(
    "https://authz.constantcontact.com/oauth2/default/v1/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }).toString(),
    },
  );
  const data = await tokenRes.json().catch(() => ({}));
  if (!tokenRes.ok || !data.refresh_token) {
    return html(
      `<h1 class="err">Token exchange failed</h1><pre>${JSON.stringify(data, null, 2)}</pre>`,
      400,
    );
  }

  return html(
    `<h1 class="ok">Success — copy your refresh token</h1>
     <p>Paste this value into the <code>CC_REFRESH_TOKEN</code> secret in Lovable Cloud:</p>
     <pre>${data.refresh_token}</pre>
     <p style="color:#666;font-size:12px">Long-lived refresh token. Store it securely — closing this page will lose it.</p>`,
  );
});