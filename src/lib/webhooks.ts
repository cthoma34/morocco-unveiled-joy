const GHL_WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL as string | undefined;
const CC_API_KEY = import.meta.env.VITE_CC_API_KEY as string | undefined;
const CC_LIST_ID = import.meta.env.VITE_CC_LIST_ID as string | undefined;

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
 * Fire a request to the GoHighLevel inbound webhook.
 * Silent: never throws, never blocks the UI.
 */
export async function fireGHLWebhook(contact: WebhookContact): Promise<void> {
  if (!GHL_WEBHOOK_URL) return;
  try {
    await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contact.name ?? "",
        email: contact.email ?? "",
        phone: contact.phone ?? "",
        destination: contact.destination ?? "",
        source: contact.source ?? "confirmation-page",
        tag: contact.ghlTag ?? "",
      }),
      keepalive: true,
    });
  } catch {
    // swallow — fire-and-forget
  }
}

/**
 * Add/update a contact in Constant Contact.
 * Silent: never throws, never blocks the UI.
 */
export async function fireConstantContactWebhook(contact: WebhookContact): Promise<void> {
  if (!CC_API_KEY || !CC_LIST_ID || !contact.email) return;
  try {
    await fetch("https://api.cc.email/v3/contacts/sign_up_form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CC_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: contact.email,
        first_name: (contact.name ?? "").split(" ")[0] ?? "",
        last_name: (contact.name ?? "").split(" ").slice(1).join(" "),
        phone_number: contact.phone ?? "",
        list_memberships: [CC_LIST_ID],
        custom_fields: contact.destination
          ? [{ custom_field_id: "destination", value: contact.destination }]
          : [],
      }),
      keepalive: true,
    });
  } catch {
    // swallow — fire-and-forget
  }
}

/**
 * Fire both webhooks in parallel. Always safe to call on page load.
 */
export async function fireAllWebhooks(contact: WebhookContact): Promise<void> {
  await Promise.allSettled([fireGHLWebhook(contact), fireConstantContactWebhook(contact)]);
}

export const webhooksConfigured = {
  ghl: Boolean(GHL_WEBHOOK_URL),
  constantContact: Boolean(CC_API_KEY && CC_LIST_ID),
};