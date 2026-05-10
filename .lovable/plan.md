## Goal

Fully populate the 11 stub destinations in `src/config/destinations-confirm.ts` so every `/confirm/:slug` route renders a real, premium confirmation page (Tanzania is already done).

## Slugs to build out

`zanzibar`, `ghana`, `southafrica`, `kenya`, `ethiopia`, `egypt`, `morocco`, `dubai`, `brazil`, `caribbean`, `gullah`

## What gets populated per destination

For each slug, replace the `stub(...)` call with a fully written config object containing:

- **eventLabel** — e.g. "Ghana Virtual Event"
- **confirmationLine** — destination-flavored variant of "Your seat is locked in…"
- **heroImage** — destination-specific Unsplash URL
- **bookingLink** — `https://maximumimpacttravel.com/destination/<slug>/` (best guess; flagged for review)
- **tags.ghl / tags.constantContact** — `"<Name> Info Session"`
- **welcomeLetter** — 5–7 line letter in Jay's voice, destination-specific (opens with "Family,", closes with Jay's signature)
- **essentials**:
  - `visa` — neutral, nationality-agnostic phrasing (matches earlier audit work)
  - `passport` — "Valid 6+ months from travel date"
  - `vaccines` — minimal, only mentions yellow fever where actually relevant; otherwise "Consult your doctor before travel" (per Jay's directive)
  - `currency` + `currencyCode` — real local currency
- **funFacts** — 5–6 destination-specific facts, opportunity-framed (no "extreme heat", "monsoon", etc., per language reframe)
- **funFactsHeading** — "<Name> Isn't Waiting for Someday"
- **timeZone** — correct IANA zone
- **images.strip** — 6–7 destination-specific Unsplash URLs

`jayVideo` stays `null`, `jayPhoto` stays the existing Jay photo, `gifts.*` stay `null`, `watchLink` / `calendarLink` stay empty (graceful fallbacks already handle these).

## Currency + timezone reference

| Slug | Currency | Code | Timezone |
|------|----------|------|----------|
| zanzibar | Tanzanian Shilling | TZS | Africa/Dar_es_Salaam |
| ghana | Ghanaian Cedi | GHS | Africa/Accra |
| southafrica | South African Rand | ZAR | Africa/Johannesburg |
| kenya | Kenyan Shilling | KES | Africa/Nairobi |
| ethiopia | Ethiopian Birr | ETB | Africa/Addis_Ababa |
| egypt | Egyptian Pound | EGP | Africa/Cairo |
| morocco | Moroccan Dirham | MAD | Africa/Casablanca |
| dubai | UAE Dirham | AED | Asia/Dubai |
| brazil | Brazilian Real | BRL | America/Sao_Paulo |
| caribbean | USD (widely accepted) | USD | America/Barbados |
| gullah | US Dollar | USD | America/New_York |

## Editorial guardrails (from prior turns)

- No "extreme heat", "monsoon", "hurricane season", "challenging", "risky" — every season framed as opportunity.
- Visa language is nationality-agnostic ("Check requirements for your nationality" / "e-visa available to most travelers").
- Vaccine language is minimal — only yellow fever where it genuinely applies (Ghana, Kenya, Tanzania/Zanzibar, Ethiopia depending on routing); otherwise just "Consult your doctor before travel."
- USD-centric phrasing avoided where natural.

## Files changed

- `src/config/destinations-confirm.ts` — only file touched; 11 stub entries replaced with full configs.

## Out of scope (call out so you can decide)

- Real `bookingLink` URLs for each destination (I'll use `https://maximumimpacttravel.com/destination/<slug>/` as a best guess — confirm or send the real ones).
- Real `watchLink` / `calendarLink` per destination (still empty, button shows "Not Live Yet").
- Gift PDFs (still `null`, cards show "Coming Soon").
- Replacing Unsplash placeholders with your branded photography.

## Verification

After implementation, spot-check 3–4 slugs in preview (`/confirm/ghana`, `/confirm/dubai`, `/confirm/brazil`, `/confirm/gullah`) to confirm hero, welcome letter, fun facts, currency rate, and clock all render correctly.