## Goal

Make the Lovable preview route picker show each confirmation destination as its own clickable entry (e.g. `/confirm/tanzania`, `/confirm/dubai`, `/confirm/ghana`) instead of only the generic `/confirm/:destination` pattern, so you can flip between them quickly.

## Why it currently shows `:destination`

`src/App.tsx` registers a single param route:

```tsx
<Route path="/confirm/:destination" element={<ConfirmationPage />} />
```

The route picker reads route patterns, so it only sees the placeholder. To list real slugs, each slug must be its own route.

## Change

In `src/App.tsx`, add explicit routes for every confirm destination alongside the existing param route (kept as a fallback). Source the slugs from the existing `destinations-confirm.ts` config so we don't hard-code a list.

1. Export an `allConfirmDestinations` array (or expose the existing internal map) from `src/config/destinations-confirm.ts`.
2. In `src/App.tsx`, import it and render one `<Route>` per slug:

```tsx
{allConfirmDestinations.map((d) => (
  <Route
    key={d.slug}
    path={`/confirm/${d.slug}`}
    element={<ConfirmationPage />}
  />
))}
<Route path="/confirm/:destination" element={<ConfirmationPage />} />
```

Result: the route picker dropdown will now show `/confirm/tanzania`, `/confirm/zanzibar`, `/confirm/ghana`, `/confirm/southafrica`, `/confirm/kenya`, `/confirm/ethiopia`, `/confirm/egypt`, `/confirm/morocco`, `/confirm/dubai`, `/confirm/brazil`, `/confirm/caribbean`, `/confirm/gullah` as separate entries.

## Files touched

- `src/config/destinations-confirm.ts` — export the list of configs.
- `src/App.tsx` — map slugs to explicit routes.

## Out of scope

No changes to `ConfirmationPage`, webhooks, or the destination data itself.
