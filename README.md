# TED-AI Timelines — Group Elicitation

A 15-minute in-person activity for eliciting AI timeline forecasts from a small group of experts. Each participant privately builds a probability distribution for when **TED-AI** (Top-Expert-Dominating AI) arrives on their phone, and the group watches a live projector view of everyone's cumulative distributions overlaid as submissions come in.

Built for a TED-AI workshop but reusable for any small-group timeline elicitation.

## Quickstart (fork the repo)

You need a Google account and ~5 minutes. The phone page POSTs invisibly to a Google Form, which writes to a Google Sheet, which the projector page polls — so there's no backend to host.

1. **Clone the repo.**
2. **Create the Form + Sheet automatically.** Open [script.google.com](https://script.google.com) → New project. Replace the default `Code.gs` with the contents of [`docs/setup-form.gs`](docs/setup-form.gs). Run `setupTedAiForm`. Authorize when prompted (Forms, Sheets, Drive). Open **View → Logs** — you'll get a ready-to-paste `config.js` block with the Form URL, the seven entry IDs, the Sheet ID, and the GID.
3. **Wire up config.** `cp site/config.example.js site/config.js`, then paste the logged block over the contents. `site/config.js` is gitignored.
4. **Serve.** `cd site && python3 -m http.server 8000` is enough for a workshop on local wifi. The phone page is at `/`, the projector at `/screen/`. For a public URL, push `site/` to any static host (Vercel, Netlify, GitHub Pages — all work; no build step).
5. **Run the activity.** Follow [`docs/facilitation-script.md`](docs/facilitation-script.md). Show the slide deck (`docs/slides.pptx`), let participants scan a QR code for the phone page, they submit, the projector page draws new curves as they arrive.

> **Customising the question.** TED-AI is the default forecast target, but the activity works for any single-event timeline question. Edit the `.def` block and the YEAR_MIN/YEAR_MAX constants in both HTML files. See [Customising](#customising) below.

> **Doing it manually instead of the script.** If you'd rather create the Form by hand: add seven text fields (name, p10, p25, p50, p75, p90, gut), link to a Sheet, set Sheet sharing to "Anyone with link → Viewer", get the `formResponse` URL by replacing `/viewform` with `/formResponse`, and extract entry IDs via the Form menu's "Get pre-filled link". Paste field descriptions from [`docs/form-descriptions.md`](docs/form-descriptions.md). The Apps Script just automates all of this.

## What's here

```
.
├── site/                        # Static web app (phone + projector)
│   ├── index.html               # Phone elicitation page (5 sliders + shape questions)
│   ├── screen/index.html        # Shared-screen group visualisation
│   └── config.example.js        # Form + Sheet IDs template — copy to config.js
├── docs/
│   ├── setup-form.gs            # Apps Script that creates the Form + Sheet
│   ├── facilitation-script.md   # 15-minute run sheet for the facilitator
│   ├── slides.pptx              # 3-slide framing deck (framing + QR codes)
│   ├── slide-deck-briefing.md   # Briefing used to generate slides.pptx
│   └── form-descriptions.md     # Field text for the manual Form-creation path
└── README.md
```

## Key features

**Phone page (`site/index.html`)** — Four steps: set median → shape questions (width + tails) → fine-tune five quantile sliders → gut P(by 2030). Big tappable sliders, sans-serif. Direct submit to the Google Form via `fetch` (no manual copy). Median slider is unanchored until first touched.

**Shared screen (`site/screen/index.html`)** — Polls the Sheet every 5s. Renders each person's CDF (or PDF) overlaid, with a thick group-average line on top. Per-person hover tooltip showing name + quantile values. Reference forecasters (Kokotajlo, Metaculus, Ord, Grace, Cotra) as toggleable dashed curves. Per-submission legend toggles (persisted in `localStorage`). Sheet-level `hide` flag in column I excludes responses without deleting them. CSV + PNG export.

## Customising

- **Definition of TED-AI** — In both HTML files, search for "TED-AI" and edit the `.def` block. Canonical source: [AI Futures Project, Dec 2025 model update](https://blog.aifutures.org/p/ai-futures-model-dec-2025-update).
- **Reference forecasters** — Edit the `REFS` array in `site/screen/index.html`.
- **Year range** — Change `YEAR_MIN` / `YEAR_MAX` in both files.
- **Colour palette** — `:root` CSS variables at the top of each file.

## Credits

Built by Alexander Saeri with [Claude Code](https://claude.com/claude-code). Forecasting framework informed by Toby Ord's [Broad Timelines](https://www.lesswrong.com/posts/6pDMLYr7my2QMTz3s/broad-timelines). TED-AI definition from the [AI Futures Project](https://blog.aifutures.org/p/ai-futures-model-dec-2025-update).
