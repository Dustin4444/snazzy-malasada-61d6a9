# Quorum — landing page

Marketing site for **Quorum**, an async decision-record tool for engineering teams: write a proposal, collect structured stances from reviewers, and get a named decider to sign off. No meeting needed.

The page has a hero with a live-looking decision record, a customer logo strip, feature highlights with headline metrics, testimonials, a full-bleed call-to-action, and a footer with a newsletter signup for "The Decision Memo".

## Tech

- TanStack Start (React 19) + Vite
- Tailwind CSS 4 with custom theme tokens (paper / ink / signal) in `src/styles.css`
- Instrument Serif, Inter Tight, and JetBrains Mono from Google Fonts
- Netlify Forms for newsletter signups (shown in the Netlify UI under **Forms → newsletter**)

## Run locally

```bash
pnpm install
netlify dev   # or: pnpm dev
```

Newsletter submissions only get recorded on a deployed Netlify site, not in local dev.
