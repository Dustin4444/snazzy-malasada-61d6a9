# AGENTS.md

Single-page marketing site for **Quorum** (fictional product: async decision records for engineering teams). TanStack Start + React 19 + Tailwind 4, deployed on Netlify.

## Layout

- `src/routes/__root.tsx`: HTML shell, SEO meta, Google Fonts links, favicon.
- `src/routes/index.tsx`: the entire landing page, one function component per section (Nav, Hero + DecisionCard, Proof, Features, Testimonials, CallToAction, Footer). Copy lives inline as small arrays next to each section.
- `src/components/NewsletterForm.tsx`: newsletter signup, submitted via AJAX to Netlify Forms.
- `public/__forms.html`: hidden static copy of the `newsletter` form so Netlify detects it at build time. **Keep its fields in sync with NewsletterForm.**
- `src/styles.css`: Tailwind `@theme` tokens and a few utility classes (`grain`, `eyebrow`, `rise`, `fill`).

## Design system (keep it consistent)

- Colors: `paper` (#f3efe6) background, `ink` (#16140f) text, `ink-soft` secondary text, `rule` hairlines, and a single accent, `signal` (vermilion #e2432a). Don't add other accent hues.
- Type: `font-display` (Instrument Serif) for headlines, often with one italic word in `text-signal`; Inter Tight for body text; `.eyebrow` (mono, uppercase, tracked) for labels.
- Structure comes from hairline borders and a 12-column grid, not cards with shadows. Corners stay sharp, except buttons, which are pills.

## Non-obvious decisions

- The form must POST to `/__forms.html`, not `/`, or TanStack's SSR handler intercepts the request.
- The Netlify Forms feature was turned on with the netlify-forms skill's `enable.cjs` script.
- `src/routeTree.gen.ts` is generated at build time, so don't edit it by hand.
