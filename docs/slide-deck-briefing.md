# Slide deck briefing — TED-AI Timeline Elicitation activity

You are building a short PowerPoint deck (**max 3 slides**) for a 15-minute in-person group activity. Read this whole file first, then build the deck.

## What the activity is

Six AI safety experts each privately build a probability distribution for when **TED-AI** arrives, using a phone web page with five sliders (p10, p25, p50, p75, p90). They submit their numbers to a Google Form. A shared-screen page renders everyone's cumulative distribution curves overlaid. Discussion follows. 15 minutes total.

## Audience

Six researchers familiar with AI forecasting, sitting in a room with a projector. They are sophisticated — do **not** patronise. Tone should be spare, precise, confident. No emoji, no hype language, no exclamation points.

## Purpose of the deck

The deck is not a teaching tool. It exists solely to:

1. Get everyone oriented in the first 90 seconds of the activity (what we're doing, why, and the definition we're using).
2. Display the two QR codes people need to scan (elicitation page and submission form).
3. Optionally, display discussion prompts at the end.

The facilitator has their own script and will speak throughout. The deck should be readable at a glance from anywhere in the room. Assume a 1080p projector and viewers up to 5 m away.

## Hard constraints

- **Maximum 3 slides.** Three is the cap, not a target. Two may be better.
- **Sans-serif only** (Inter, Helvetica, or system-ui equivalent).
- **Minimum font size 24pt** for anything meant to be read; headings ≥40pt.
- **High contrast.** Dark text on light background. Reserve one accent colour.
- **No stock photography, no clipart, no gradients.** Minimal visual chrome.
- **Build output**: a `.pptx` file at `/home/alex/projects/ai-timelines/slides.pptx`.
- Use **python-pptx**. It is not installed — install it with `pip3 install --user --break-system-packages python-pptx` before running your generation script.
- Generate QR codes with the `qrencode` CLI (available on Ubuntu: `sudo apt install qrencode` if not present — but try it first before installing). Save PNGs to `/tmp/qr-*.png` and embed them.

## Content to include

### Slide 1 — Framing and definition

- Title: **TED-AI Timelines — Group Elicitation** (or similar; short)
- One-line purpose: something like *"Build your own probability distribution. Submit. Compare."*
- **TED-AI definition box** (this must appear verbatim, it is the anchor of the whole activity):

  > **TED-AI**: An AI system at least as good as top human experts at virtually all cognitive tasks. Operationally: given the resources of a large tech company and three months to prepare, it could fully automate 95% of remote-work jobs in the US. (AI Futures Model)

- Brief cue for the 15-minute structure: "Elicit on your phone (8 min) → submit (1 min) → discuss (6 min)". Don't elaborate.

### Slide 2 — The two QR codes

This is a practical navigation slide. Participants need to scan both.

- Two QR codes side by side, each with a short caption underneath:
  1. **Left QR — "Step 1: Build your distribution"**
     URL: `https://labs.aksaeri.com/other/tedai-elicit/`
  2. **Right QR — "Step 2: Submit your 5 numbers"**
     URL: `https://docs.google.com/forms/d/e/1FAIpQLSeLTpSZYCfxL8xsGKYXEwtUwUopgCv-JVB29VLGApjU96eDbQ/viewform`
- QR codes should be large — at least 400x400 px in the slide — so they can be scanned from 5 m away.
- No other text on this slide. This is a scan-this slide, not a reading slide.

### Slide 3 — Discussion prompts (optional, include if it fits cleanly)

After the reveal, the facilitator will want to point at these. Pick 3 of these (pick, don't cram):

- Where is the group's disagreement — on medians, or on tail widths?
- Whose 80% interval is widest? What's driving that uncertainty?
- If you did this again in six months, which number would have moved most — and which direction?
- What would have to be true for the latest median in the room to be correct?

One prompt per line, large type, no bullets or dashes. Just the questions.

## Style specifics

- **Background**: white (#FFFFFF) or very light grey (#F7F5F0 matches the activity's web pages).
- **Text colour**: near-black (#222222).
- **Accent colour**: one, used sparingly. Suggest #B44 (muted red) for highlights — matches the activity's tension colour.
- **Layout**: generous whitespace. Do not fill the slide to the edges. Keep ~10% margin.
- **No slide numbers, no footer, no date stamp.**
- Aspect ratio: **16:9**.

## How to verify before declaring done

1. Open the `.pptx` in a headless check: count slides with `python-pptx`, confirm it's ≤3.
2. Run `python-pptx` to read back each slide's text and confirm the TED-AI definition appears verbatim.
3. Confirm QR code images are embedded (not just file paths).
4. Report the final slide count, the file path, and file size (e.g. "3 slides, 245 KB, /home/alex/projects/ai-timelines/slides.pptx").

## What NOT to do

- Do not add a title slide with the facilitator's name, the date, or "Agenda".
- Do not add a summary/closing slide.
- Do not include the reference forecaster list (Kokotajlo, Ord, etc.) — that appears on the shared screen later, not here.
- Do not explain probability theory. Everyone in the room already understands it.
- Do not make the deck pretty at the expense of clarity. Utility over aesthetics.

## If blocked

If you can't proceed (missing form URL, can't install python-pptx, can't generate QR codes), stop and report exactly what's blocked and why. Do not invent URLs, do not substitute placeholder QR codes. Better to report the blocker than to ship a broken deck.
