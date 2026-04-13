# TED-AI Timelines — Group Elicitation

## Overview
15-minute in-person activity for eliciting AI timeline forecasts from ~6 experts. Participants fill in 5 quantiles on a phone page, submit to a Google Form, and a shared screen renders everyone's CDFs overlaid live. Static HTML, no backend.

## Tech Stack
- Pure static HTML/CSS/JS (no build step, no framework)
- Google Form → Google Sheet as the "backend"
- Shared screen polls the Sheet's public CSV (`gviz/tq?tqx=out:csv`) every 5 seconds
- Elicitation page submits directly to `formResponse` with `fetch({mode:'no-cors'})`
- Deployed via labs.aksaeri.com symlink (see `/labs-publish` skill)

## Structure
- `site/index.html` — phone elicitation page
- `site/screen/index.html` — shared-screen projector view
- `docs/facilitation-script.md` — 15-minute run sheet
- `docs/slide-deck-briefing.md` — briefing used by a separate Claude to build the deck
- `docs/form-descriptions.md` — Google Form field text
- `docs/source-conversation.md` — origin conversation (archival)
- `tedai_elicitation_slides.pptx` — the 3-slide framing deck

## Commands
```bash
# Preview locally
cd site && python3 -m http.server 8000

# Publish to labs.aksaeri.com (already symlinked)
# site/ → ~/projects-server/labs/projects/other/tedai-elicit
```

## Config
Form + Sheet IDs are hard-coded in the HTML:
- `site/index.html` → `FORM_URL`, `FORM_ENTRIES` (entry IDs extracted from the Form's prefilled-link JSON)
- `site/screen/index.html` → `SHEET_ID`, `GID`

The Google Sheet must be shared "Anyone with link → Viewer" for the screen page to fetch CSV.

## Key Files
- `site/index.html` — phone elicitation; sans-serif, palette matching the screen page, direct form submit
- `site/screen/index.html` — full-viewport 16:9 projector view; CDF/PDF tabs, hover tooltips, reference forecasters, CSV/PNG export

## Architecture notes
- **No backend by design** — deliberately uses Google Forms/Sheets so workshop organisers don't need to run infra
- **CDF construction** — piecewise linear through 5 user quantile anchors + tail extension. PDF is the smoothed slope of the CDF. No curve fitting.
- **Sheet-level hide flag** — column I in the Sheet; `"hide"` excludes, empty/`"show"` includes. Lets you re-run the activity and keep old responses without deleting.
- **Per-client hide toggles** — `localStorage` with `tedai-hidden:` prefix, for hiding test responses only on the facilitator's view without affecting participants.
- **Median slider is unanchored** — it starts at a range midpoint but displays "—" until first touched, to avoid anchoring bias.

## Gotchas
- **Google Form `no-cors` POST** — you can't read the response (opaque), but the submission goes through. Status UI must assume success if `fetch` didn't throw.
- **Form entry IDs** — extracted from `FB_PUBLIC_LOAD_DATA_` JSON in the live form HTML. If fields are added/removed/reordered in the Form, the entry IDs may shift — re-extract.
- **Sheet CSV endpoint** — must be the `gviz/tq?tqx=out:csv&gid=...` URL, not the `/edit` URL. 401 means the sheet isn't shared publicly.
- **Quantile ordering** — rows where p10 < p25 < p50 < p75 < p90 doesn't hold are silently filtered out of the screen view.
- **Screen page is built for 1080p at ~5m** — don't reduce type sizes for "desktop look"; the layout is intentionally loud.
