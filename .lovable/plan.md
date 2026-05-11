## Change confirmation routes from `/confirm/{slug}` to `/{slug}`

The user wants the confirmation pages served directly at the destination slug (e.g. `/tanzania`, `/dubai`) instead of nested under `/confirm/`. This matches how `confirm.travelwithmit.com` should work — the subdomain already implies "confirm", so the path only needs the destination.

### Changes

1. **`src/App.tsx`**
   - Replace the 13 hardcoded `/confirm/{slug}` routes with 13 hardcoded `/{slug}` routes pointing to `ConfirmationPage`.
   - Remove the `/confirm/:destination` fallback param route, replace with `/:destination` fallback (placed after all other named routes so it doesn't shadow `/`, `/auth`, etc.).
   - Keep the root `/` route and any existing named routes (auth, etc.) above the catch-all.
   - Keep `NotFound` as the final `*` route.

2. **`src/pages/ConfirmationPage.tsx`**
   - Update the `useParams` lookup if it currently reads `destination` from `/confirm/:destination` — it will continue to read `:destination` from the new `/:destination` route, so likely no change needed. Verify slug resolution still works against `destinationsConfirm`.
   - The Meta Pixel `CompleteRegistration` logic and session-key guard remain unchanged.

3. **No changes** to `src/config/destinations-confirm.ts`, the pixel base script in `index.html`, or any registration form logic.

### Slugs that will become top-level routes

```
/tanzania   /zanzibar   /ghana       /southafrica
/kenya      /ethiopia   /egypt       /morocco
/dubai      /brazil     /caribbean   /gullah
```

### Notes / risks

- Any existing route named the same as a destination slug would collide. Need to confirm no conflicts with current named routes (e.g. there's no `/kenya` page already).
- External links or pixels pointing to old `/confirm/{slug}` URLs will break unless we add redirects. If the user wants backward compatibility, we can additionally keep the `/confirm/{slug}` routes as aliases — confirm preference.
