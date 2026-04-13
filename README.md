# TED-AI Timelines — Group Elicitation

A 15-minute in-person activity for eliciting AI timeline forecasts from a small group of experts. Each participant privately builds a probability distribution for when **TED-AI** (Top-Expert-Dominating AI) arrives, submits to a shared Google Form, and the group watches a live projector view of everyone's cumulative distributions overlaid.

Built for a TED-AI workshop but reusable for any small-group timeline elicitation.

## What's here

```
.
├── site/                        # Static web app (phone + projector)
│   ├── index.html               # Phone elicitation page (5 sliders + shape questions)
│   └── screen/index.html        # Shared-screen group visualisation
├── docs/
│   ├── facilitation-script.md   # 15-minute run sheet for the facilitator
│   ├── slide-deck-briefing.md   # Briefing used to generate the slide deck
│   ├── form-descriptions.md     # Paste-in text for the Google Form fields
│   └── source-conversation.md   # Original Claude conversation that seeded the project
├── tedai_elicitation_slides.pptx  # 3-slide deck (framing + QR codes)
└── README.md
```

## How the activity runs

1. **Create the Google Form** — Seven fields: name, p10, p25, p50, p75, p90, gut P(by 2030). Link it to a Google Sheet. Set the Sheet to "Anyone with link → Viewer". Paste field descriptions from `docs/form-descriptions.md`.
2. **Wire up config** — Copy `site/config.example.js` to `site/config.js` and fill in:
   - `FORM_URL` — the Form's `formResponse` endpoint (replace `/viewform` with `/formResponse` in the live URL)
   - `FORM_ENTRIES` — the seven `entry.XXXX` IDs (pick "Get pre-filled link" in the Form menu, fill dummy values, copy the entry IDs from the generated URL)
   - `SHEET_ID` and `GID` — from the Sheet's URL
   `config.js` is gitignored so you can commit your fork without exposing your specific Form/Sheet.
3. **Deploy** — Serve `site/` from any static host. The projector view lives at `/screen/`.
4. **Run** — Follow `docs/facilitation-script.md`. Show the slide deck, let participants scan the QR code for `site/`, they submit, the shared screen at `site/screen/` polls every 5 seconds and draws new curves as they come in.

## Local preview

```bash
cd site && python3 -m http.server 8000
# phone page:     http://localhost:8000/
# projector page: http://localhost:8000/screen/
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
