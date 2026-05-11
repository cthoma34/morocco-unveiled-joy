import { supabase } from "@/integrations/supabase/client";

export interface WebhookContact {
  name?: string;
  email?: string;
  phone?: string;
  destination?: string;
  source?: string;
  ghlTag?: string;
  ccTag?: string;
}

/**
 * Fire GHL + Constant Contact via the secure server-side edge function.
 * Silent: never throws, never blocks the UI. All API keys live server-side.
 */
export async function fireAllWebhooks(contact: WebhookContact): Promise<void> {
  try {
    await supabase.functions.invoke("confirm-webhooks", { body: contact });
  } catch {
    // swallow — fire-and-forget
  }
}

export interface RegistrationWebhookPayload {
  name: string;
  email: string;
  phone: string;
  destination: string;
  ghlTag: string;
  ccTag: string;
}

/**
 * Fire GHL + Constant Contact webhooks in parallel directly from the client.
 * Silent: never throws, never blocks the UI.
 */
export async function fireRegistrationWebhooks(
  payload: RegistrationWebhookPayload
): Promise<void> {
  const { name, email, phone, destination, ghlTag, ccTag } = payload;

  const ghlUrl = import.meta.env.VITE_GHL_WEBHOOK_URL as string | undefined;
  const ccApiKey = import.meta.env.VITE_CC_API_KEY as string | undefined;
  const ccListId = import.meta.env.VITE_CC_LIST_ID as string | undefined;

  try {
    await Promise.all([
      ghlUrl
        ? fetch(ghlUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: name,
              email,
              phone,
              tags: [ghlTag, "Webinar Registrant"],
              source: "MIT Confirmation Page",
              customFields: {
                destination,
                registration_source: "webinargeek",
              },
            }),
          })
        : Promise.resolve(),
      ccApiKey
        ? fetch("https://api.cc.email/v3/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${ccApiKey}`,
            },
            body: JSON.stringify({
              email_address: {
                address: email,
                permission_to_send: "implicit",
              },
              first_name: name,
              phone_numbers: [{ phone_number: phone, kind: "mobile" }],
              taggings: [ccTag],
              list_memberships: ccListId ? [ccListId] : [],
            }),
          })
        : Promise.resolve(),
    ]);
  } catch {
    // swallow — fire-and-forget
  }
}