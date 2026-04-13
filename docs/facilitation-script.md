# TED-AI Timeline Elicitation — Facilitator Script

**Duration:** 15 minutes
**Group size:** 6
**Audience:** AI safety experts

---

## Purpose

This is not a consensus-building exercise and not a measurement exercise. With an expert audience, the value is:

1. **Force explicit quantile commitment.** Experts often carry vibes ("I think it's soonish") rather than distributions. Naming p10/p25/p50/p75/p90 makes beliefs auditable, to yourself and to the room.
2. **Surface the shape of disagreement.** When the group's curves are overlaid, the interesting question is: are we disagreeing on medians, or on tail widths? That framing is usually sharper than the discussion that would have happened without numbers.
3. **Personal calibration feedback.** The "gut P(by 2030)" cross-check catches internal inconsistency — your distribution implies one number, your gut says another, now you know.
4. **Anchor subsequent discussion in concrete points.** Whatever conversation follows will be sharper because you can point at specific years and specific people's reasons.

If one person leaves with a clearer picture of where their own uncertainty is widest, the activity paid for itself.

---

## Setup checklist (before the session)

- [ ] Phone elicitation page loads: https://labs.aksaeri.com/other/tedai-elicit/
- [ ] Google Form URL in hand (separate from edit URL)
- [ ] Shared screen page loads: https://labs.aksaeri.com/other/tedai-elicit/screen/
- [ ] Sheet is "Anyone with link → Viewer" (already verified)
- [ ] Projector/shared screen connected and showing the screen page
- [ ] QR codes ready for both URLs (slide deck handles this)
- [ ] A spare phone or laptop open to the Form in case a QR scan fails

---

## Script

### Phase 1 — Framing (0:00 – 2:00)

Open with the intro slide on the shared screen.

> "Next fifteen minutes, we're going to build our own TED-AI timelines individually, then compare. Not to reach consensus — we won't — but to make any disagreement we have actually legible.
>
> The definition we're using is from the AI Futures Model: **TED-AI is an AI system at least as good as top human experts at virtually all cognitive tasks**. Operationally: give it the resources of a large tech company and three months to prepare, and it could fully automate 95 percent of remote-work jobs in the US. That's a stricter bar than 'AGI' as most people use the term."

Show the QR code for the elicitation page.

> "Scan this. You'll get a phone page with five sliders: p10, p25, p50, p75, p90. The page has a second step with qualitative questions if you want help setting the widths — you can skip that if you prefer to set sliders directly. At the end, you'll have a gut-check question that compares your distribution to your intuitive P(by 2030). Don't worry about making it perfect. Seven minutes."

### Phase 2 — Solo elicitation (2:00 – 10:00)

Participants fill in the page on their phones.

**Facilitator during this phase:**

- Stay quiet. Don't hover.
- If someone asks "what if I'm really uncertain?" → "Make your 80% interval wider. Ord's is 97 years."
- If someone asks "should I include extinction scenarios?" → "TED-AI is a capability milestone, not conditional on survival. Answer as if nothing else changes."
- Around 7:00 mark, warn gently: "Two minutes to wrap up, then we'll submit."

### Phase 3 — Submit (10:00 – 11:30)

Show the QR code for the Google Form on the shared screen.

> "Take your five numbers from the phone page and enter them into this form. It's just a plain form — name or initials, the five years, and your gut P(by 2030) at the end. It takes thirty seconds."

Watch the shared-screen page. Submissions should start appearing in the table and CDF chart within a few seconds of each submit.

### Phase 4 — Reveal and discussion (11:30 – 15:00)

Switch the shared screen to full focus. Each person's curve is colored and labelled.

> "Here's the room."

Walk through what the screen shows, in this order:

1. **Spread of medians.** "Earliest median is X, latest is Y. That's the core disagreement."
2. **Spread of p90s.** "But look at the right tails. The widest 80% interval is N years. The narrowest is M. That's a disagreement about how much we don't know, which is different."
3. **Compare to the references.** Toggle on the reference forecasters. "Kokotajlo and Metaculus sit here. Ord sits there. Grace sits way out there. Where does the room cluster relative to them?"
4. **Gut-check column.** "If your gut P(by 2030) is very different from what the table shows, that's worth noticing — it means your explicit distribution and your intuition aren't aligned. That's normal. It's also a calibration signal."

**Discussion prompts (pick one, time permitting):**

- "Who has the widest 80% interval, and why? What's generating the uncertainty — capability trajectory, diffusion, institutional friction?"
- "Whose median is furthest from yours? What's the one assumption you're making that they aren't, or vice versa?"
- "If we did this again in six months, which number would you most expect to have moved — and which direction?"

### Wrap (14:30 – 15:00)

> "The Sheet and the shared screen will stay live. If you want to refine your numbers after this, resubmit and the chart updates. If anyone wants the URL later, it's the same QR code."

---

## Failure modes and recovery

| If this happens | Do this |
|---|---|
| WiFi is dead and phones can't load the page | Share the Form URL directly — people can eyeball quantiles mentally. Skip the elicitation page. |
| Someone submits garbage values (p10 > p50 etc.) | The shared screen filters these out automatically. Tell them gently to resubmit. |
| Shared screen won't refresh | Refresh the page manually, or open the Sheet in a new tab and project that instead. |
| Someone wants to know the "right answer" | "There isn't one. Kokotajlo and Grace disagree by 15 years on median." |
| Discussion stalls | Ask: "What would have to be true for the latest median in the room to be correct?" |

---

## What to note afterwards

These aren't for the participants, they're for you:

- Was the median disagreement larger than the tail-width disagreement, or vice versa?
- Did anyone's gut P(by 2030) diverge from their distribution by more than 15 points?
- Which reference forecaster did the group cluster nearest to?
- What was the first thing someone said in the discussion, once they saw the reveal? (Often the most honest reaction.)
