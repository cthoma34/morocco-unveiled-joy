## Goal

Eliminate the duplicate welcome section. Keep `JayWelcomeBlock` (the bigger photo, image-16 style) as the single "Family," moment, and add a short "Did You Know" bullet list directly underneath the letter — inside the same section so it reads as one cohesive welcome.

## Changes

**1. `src/pages/GuidePage.tsx`**
- Remove the `<EditorLetter ... />` line (line 74) and its import.
- Pass `funFacts={guide.funFacts ?? []}` into `<JayWelcomeBlock />`.

**2. `src/components/guide/editorial/JayWelcomeBlock.tsx`**
- Add optional prop: `funFacts?: string[]`.
- Below the signature block (right column), if `funFacts.length > 0`, render a "Did You Know" mini-block:
  - Small uppercase label "A Few Things You Should Know" with a thin burgundy accent rule above it (matches existing editorial label styling).
  - Simple bulleted list, ~5–7 short bullets max (slice the array), warm-white text, generous line spacing, no cards / no images — keeps it quiet and intimate.
  - Lives inside the right column so it sits under the letter on desktop and flows naturally below the photo on mobile.

**3. Decide fate of `EditorLetter` component file**
- Leave the file in place but unused (no other references). Do not delete in this pass to avoid surprise removal; flag as dead code.

## What stays untouched

- The big magazine-style `FunFacts` section under "Did You Know — {destination} Isn't Waiting for Someday" stays as-is. The new bullets are a quieter teaser inside the welcome; the magazine spread later is the full reveal. (If you'd rather drop the magazine spread, say the word and I'll remove it instead.)
- No config/type changes — `guide.funFacts` already exists.
- No styling tokens added; uses existing `--dest-primary`, `foreground`, `muted-foreground`.

## Result

One unified "Family," section: large portrait on the left, letter + signature + a short "things you should know" bullet list on the right. The redundant centered EditorLetter is gone.
