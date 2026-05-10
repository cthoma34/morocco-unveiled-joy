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