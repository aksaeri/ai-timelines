# Calculating confidence intervals from predictions

*Model: claude-opus-4-6 | Date: Mar 8, 2026, 08:35 AM | Platform: CLAUDE_AI*

> **Conversation Overview**
> 
> The person worked with Claude to build a structured AI timeline forecasting model, moving from an initial vibe-based approach toward a decomposed, component-driven forecast. The conversation began with the person wanting to construct their own version of Peter Wildeford's AI milestone predictions (80% confidence intervals for events like AGI arrival, white-collar displacement, physical automation, and extinction/disempowerment scenarios). Rather than guessing headline numbers directly, they asked Claude to elicit underlying beliefs through structured questions that could be combined into a model.
> 
> Claude ran two rounds of questioning totaling 13 questions covering: rate of capability improvement, primary drivers of progress, recursive acceleration, AGI timing and uncertainty, diffusion patterns across sectors, regulatory friction, physical automation bottlenecks, open-source model lag, extinction risk mechanisms, and self-correction on timeline compression. The person's answers revealed a view roughly 5-10 years later than Wildeford across milestones, driven by institutional friction, mixed diffusion (fast in software/finance, slow in regulated sectors), a 15-year physical automation lag, and an x-risk model centered on cascading failures and state misuse rather than rogue AI. They noted an important correction mid-conversation: Claude had conflated technical capability with adoption in one question, and the person clarified that by their AGI definition, ~90% of cognitive tasks are within capability at AGI arrival—deployment and diffusion are the binding constraints.
> 
> The conversation then moved to building a deployable interactive model. Claude created a Vite/React single-page app with a questionnaire flow, timeline visualization with adjustable sliders, URL hash encoding for sharing forecasts, and comparison against the reference forecast and Wildeford's estimates. The person then reframed the deployment approach entirely, preferring a shareable prompt/payload that others paste into their own Claude instance rather than a hosted app—reasoning that the conversational elicitation with probing follow-ups is the valuable part. Claude built this as a markdown document containing the 13 questions, parameter mapping rules, timeline computation formulas, and both reference forecasts as payload. An infographic tile was attempted in multiple formats (PDF via ReportLab, HTML/PNG via wkhtmltoimage) but the person found the color contrast illegible and abandoned the visual approach entirely, requesting instead a plain-text under-100-word shareable summary format. The final markdown guide was updated to reflect this, with an explicit output template for the text summary and style instructions emphasizing neutral, precise, conversational language.

---

**Human** (Mar 8, 2026, 08:35 AM)

Help me make my own predictiona. These are peters 80% ci

Try to ask questions that let's you calculate same

**Assistant** (Mar 8, 2026, 08:35 AM)

 I'll work through this systematically. Peter Wildeford is giving 80% confidence intervals for a sequence of AI capability milestones, with his AGI probability at ~8% by end of 2027.

To build your own version, I need to understand your views on several underlying factors. Let me ask in batches.


```
This block is not supported on your current device yet.
```


These three questions anchor the key parameters: capability trajectory, AGI timing, and diffusion speed. Your answers will let me calibrate the rest of the timeline and then ask follow-up questions on the later, higher-stakes milestones (physical automation, existential outcomes).

**Human** (Mar 8, 2026, 08:38 AM)

Q: How would you characterize the current rate of AI capability improvement?
A: Accelerating: each year brings bigger jumps than the last

Q: What's your P(AGI) by end of 2027? (Where AGI = AI that can perform ~all cognitive tasks at human expert level)
A: 5-15%

Q: Once AGI-level systems exist, how quickly do you expect broad economic displacement of white-collar work?
A: non linear but fast in some places and slow in others. can you give me any varied historical analogy?

**Assistant** (Mar 8, 2026, 08:38 AM)



Good question on the historical analogies. A few relevant cases with different diffusion patterns:

1. **Electricity in manufacturing** (1880s-1920s): ~40 years from availability to widespread factory adoption. Required physical restructuring (factories designed around a single steam shaft had to be rebuilt). The bottleneck was complementary infrastructure, not the technology itself.

2. **Containerized shipping** (1956-1980s): ~25 years. Technically simple, but required ports, unions, regulations, and logistics chains to all adapt simultaneously. Coordination costs dominated.

3. **Spreadsheets/PCs in finance** (1979-1995): ~15 years from VisiCalc to near-universal adoption in white-collar office work. Relatively fast because it augmented existing workers rather than replacing organizational structures.

4. **E-commerce displacing retail** (1995-present): 30+ years and still only ~25% of retail. Physical infrastructure and consumer habits create long tails.

The key variable is whether AI displacement looks more like case 3 (software augmenting existing workflows, fast) or case 1 (requiring organizational redesign, slow). Likely both simultaneously across different sectors.


```
This block is not supported on your current device yet.
```


These three will let me fill in the later rows of the timeline. The last question is the critical one for Peter's final line ("all humans dead or obsolete").

**Human** (Mar 8, 2026, 08:39 AM)

Q: Given those analogies, which diffusion pattern feels most likely for white-collar AI displacement post-AGI?
A: Mixed: 3-7 years for software/finance, 10-20 for law/medicine/education

Q: How long after white-collar displacement before AI/robotics handles most physical labor (manufacturing, logistics, construction)?
A: Moderate: 10-20 years

Q: Conditional on AGI arriving, what's your P(human extinction or permanent disempowerment) within 20 years of AGI?
A: 15-30%: a serious risk worth planning around

**Assistant** (Mar 8, 2026, 08:39 AM)



A few more questions to pin down the intervals properly.


```
This block is not supported on your current device yet.
```


These three will let me construct your full set of 80% CIs in Peter's format. The recursive improvement question matters because it determines whether the gaps between milestones compress or stay proportional.

**Human** (Mar 8, 2026, 08:39 AM)

Q: What's the median of your AGI arrival distribution? (50th percentile, not earliest possible)
A: 2030-2035

Q: How wide is your uncertainty on AGI timing? This sets the spread of your 80% CI.
A: Wide: 15-20 years

Q: Do you think AI systems will substantially accelerate AI R&D before full AGI (i.e., recursive improvement as a driver of the timeline)?
A: Partially: it speeds things up but human bottlenecks remain

**Assistant** (Mar 8, 2026, 08:40 AM)



Here's your timeline, constructed from your answers. I'll show it next to Peter's for comparison.

**Your P(AGI by end 2027): ~10%** (midpoint of your 5-15%)

Peter's is ~8%. You're in close agreement here.

**Your 80% CIs for milestones:**

| Milestone | Peter's 80% CI | Your 80% CI | Notes |
|---|---|---|---|
| AI replaces ~all AI researchers | 2026-2030 | 2028-2035 | You expect partial recursive acceleration but human bottlenecks slow it. Your median AGI is ~2032, so this overlaps with AGI arrival. |
| AI replaces ~all white collar | 2027-2033 | 2031-2042 | Your "mixed" diffusion view. Fast sectors (software, finance) by ~2033. Slow sectors (law, medicine, education) drag the upper bound out. |
| AI replaces ~all human industry | 2032-2040 | 2040-2055 | Your 10-20 year lag on physical automation after white-collar displacement pushes this out significantly. |
| All humans dead or obsolete | 2033-2042 | 2042-2060+ | Your 15-30% P(extinction\|AGI) makes this conditional. Maybe better expressed as: 80% CI for *if* this happens, not *that* it happens. |

**Key differences from Peter:**

You're roughly 5-10 years later across the board. The main drivers are:

1. Your median AGI is ~2032 vs. Peter's implicit ~2028.
2. You expect institutional friction to slow diffusion significantly, where Peter seems to assume faster propagation.
3. You see physical automation as genuinely harder, adding a 10-20 year buffer.
4. Your "partially" on recursive improvement means the gaps between milestones don't compress as aggressively as Peter's do.

**One tension to flag:** your view that capabilities are *accelerating* combined with your wide uncertainty (15-20 years) is internally consistent but puts a lot of probability mass on both "sooner than expected" and "much later." That's a defensible position given genuine uncertainty, but it means your 80% CIs are wide enough that they partly overlap with Peter's.

Want me to format this as a shareable image or post-ready text?

**Human** (Mar 8, 2026, 08:42 AM)

Hmm can you build a more squiggle style model and ask me how to 10 more questions to get better calibrated and a better model? I'm concerned that I'm guessing on n% mostly on vibes

**Assistant** (Mar 8, 2026, 08:42 AM)

 

Good instinct. Vibes-based top-down estimates are exactly the kind of thing that benefits from decomposition. Let me build a model from underlying components that combine into the headline predictions.

The logic: instead of asking "when does X happen," I'll ask about the building blocks that *determine* when X happens. Then combine them.


```
This block is not supported on your current device yet.
```


These feed into the "AI replaces AI researchers" node. Next batch will cover the economic diffusion and physical automation components. I'll build the full model as a reactive artifact once I have all 10 answers.

**Human** (Mar 8, 2026, 08:43 AM)

Q: 1. How much has AI already accelerated AI research productivity (papers, architectures, experiments) compared to 2 years ago?
A: Already happening significantly

Q: 2. What's the primary engine of current capability gains?
A: Multiple drivers: scaling + data + algorithms + inference compute all stacking

Q: 3. How far behind frontier capabilities do you think open-source/open-weight models are?
A: 3-5 years behind

**Assistant** (Mar 8, 2026, 08:43 AM)

 


```
This block is not supported on your current device yet.
```


Three more questions after this batch, then I'll build the model.

**Human** (Mar 8, 2026, 08:47 AM)

Q: 4. What % of white-collar tasks (not jobs, tasks) do you think AI will be technically capable of performing within 3 years of AGI?
A: your a and the answers don't match. from my perspective basically 80-90% of jobs are within capabilities of my agi definition but adoption and diffusion is the main barrier

Q: 5. How much will regulation and professional licensing slow actual deployment in regulated sectors (medicine, law, finance)?
A: Moderate: some sectors slowed 2-5 years by regulation

Q: 6. What's the main bottleneck for physical automation once AI cognition is solved?
A: Slow: the physical world is fundamentally harder than information work

Q: 7. If extinction or permanent disempowerment happens, what's the most likely mechanism?
A: don't know well enough but am thinking disempowerment + misuse/state attacks like nuclear or CBRN enabled by AI. also think mostly on cascades or fragile interactions not rogue AI builds nano ots

**Assistant** (Mar 8, 2026, 08:47 AM)

 

Good correction on Q4. You're right, I conflated technical capability with adoption. Your view is clearer: AGI by definition handles ~90% of cognitive tasks, the question is deployment speed. Noted.

Your extinction/disempowerment model is also more interesting than the standard options. Cascading failures, state-level misuse, and fragile system interactions rather than the classic "misaligned superintelligence" scenario. That's a different risk shape: slower onset, harder to detect, more distributed causation.


```
This block is not supported on your current device yet.
```


Last three. After this I'll build an interactive model that shows how your component beliefs combine into the headline CIs, with sliders so you can see how changing individual assumptions shifts the outputs.

**Human** (Mar 8, 2026, 09:00 AM)

Q: 8. Do you expect US frontier labs (Anthropic, OpenAI, Google) to maintain a capability lead over the next decade?
A: unstable esp for China. the issue is that capabilities by itself is not agi. that's dependent on physical infrastructure adoption and politics. and  - these companies . these companies aren't labs any more they are political actors and market actors. 

Q: 9. P(major government or international body imposes a significant (6+ month) pause or moratorium on frontier AI training before 2030)?
A: <10%: very unlikely before 2030

Q: 10. Stepping back: do you think the overall timeline from AGI → full economic transformation will be faster or slower than your intuitions above suggest?
A: Faster: recursive improvement will compress timelines beyond current expectations

**Assistant** (Mar 8, 2026, 09:02 AM)

 

Good. Your Q8 answer adds important nuance: the capability frontier is not the same as the deployment/impact frontier, and lab dynamics are increasingly political-economic, not just technical. That's consistent with your broader view that diffusion and institutional factors dominate.

Interesting tension on Q10: you think timelines will compress faster than your own estimates, which is a useful self-aware correction. I'll build that in as a compression factor.

Let me build the interactive model.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


The default slider positions are calibrated to your answers. The model works by composing your component beliefs rather than asking you to guess the headline numbers directly.

Key features:
- Each milestone year = AGI median + lag factor * compression * recursive acceleration
- Ghost bars behind yours show Peter's CIs for comparison
- Derived quantities (bottom) show implied P(AGI by 2027), P(AGI by 2030), and unconditional extinction probability
- Adjusting any slider propagates through the whole model

Your answers revealed one interesting structural difference from Peter: you have a similar P(AGI by 2027) but your diffusion model is much slower, so the gap between AGI arrival and economic impact is wider. Peter's intervals are compressed because he seems to implicitly assume faster recursive improvement and lower institutional friction.

The "timeline compression" slider captures your self-correction that things will likely move faster than your component estimates suggest. Currently set to 0.8x.

**Human** (Mar 8, 2026, 09:04 AM)

Now let's figure out how to deploy it. I can get Claude code on the web to read a detailed spec and or data file if useful. Especially if you can zip something up.

I'd like others to be able to interact with the model and give their answers. It doesn't have to be rigidly the same but can be if that's easier. I'd like to compare the output predictions.

**Assistant** (Mar 8, 2026, 09:04 AM)

 

Let me think about the architecture for a multi-user version, then package it up.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


These two decisions drive the architecture. The static site option is simplest if you want Claude Code to deploy it. The artifact option requires zero deploy but limits sharing. Let me know and I'll package accordingly.

**Human** (Mar 8, 2026, 09:05 AM)

Q: What deployment approach works best for your situation?
A: Static site (GitHub Pages, Netlify, Vercel) - simplest, free

Q: How should other people interact with it?
A: Same 13 questions as intake, then show computed timeline vs yours

**Assistant** (Mar 8, 2026, 09:09 AM)

 

Good. The architecture is:

1. A single-page React app (Vite + React) deployable to any static host
2. Two modes: **questionnaire** (the 13 questions) and **results** (interactive sliders + timeline comparison)
3. Your answers baked in as the reference forecast
4. Each respondent's parameters encoded in a URL hash so they can share their results
5. A comparison view showing your CIs vs theirs side by side

Let me build the full project.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Now the main application with questionnaire, model logic, and comparison view:


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


There's a problem with the `require()` call in the App component. Let me fix that.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Now let me build it and verify it works:


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Build works. Now let me create the spec document and zip everything:


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


The zip contains the complete Vite project (27KB without node_modules). The README doubles as a spec for Claude Code.

Deployment path:

1. Unzip, push to a GitHub repo
2. Connect to Netlify (or Vercel). Build command: `npm run build`, publish dir: `dist`
3. Share the URL. Respondents answer 13 questions, get a comparison view, get a shareable URL hash encoding their parameters.

The flow: questionnaire (13 Qs) -> computed parameters -> timeline comparison vs. your reference forecast + Peter's -> adjustable sliders -> copy share URL.

One thing the current version lacks: an aggregate dashboard showing all respondents side by side. That would require either a simple backend (a Google Sheet as DB would work) or asking people to paste their URL hashes into a comparison tool. Worth adding if you get more than a handful of respondents.

**Human** (Mar 8, 2026, 09:23 AM)

It should include the ability for responsive discussion through opus. It should allow the persone to get varied responses. What if it was just a skill or a detailed prompt with a payload that people could feed into their own Claude instance? And it might make an infographic at the end. Speaking of which please present my results succinctly as a concise infographic.

**Assistant** (Mar 8, 2026, 09:26 AM)

 

Good reframe. A deployable app is overkill for this. A well-structured prompt + payload that people paste into Claude, which then runs the same conversational elicitation and produces a comparison infographic at the end, is simpler and more flexible.

Let me build both pieces: your infographic now, and the shareable prompt/payload.


```
This block is not supported on your current device yet.
```


I'll use reportlab for a clean infographic PDF, then build the shareable prompt.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Now the shareable prompt/payload:


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Two outputs:

**The infographic** (PDF): your forecast on one page with timeline bars, derived quantities, component parameters, and comparison to Wildeford.

**The shareable prompt** (Markdown): paste the whole thing into a new Claude conversation. It contains the 13 questions, parameter mapping rules, timeline computation, your forecast as reference payload, and instructions to generate a comparison infographic at the end. Works with any Claude instance (Opus, Sonnet, Claude Code).

The prompt approach is better than a deployed app for your use case: respondents get a conversational experience with probing follow-ups, historical analogies, and inconsistency checking, which is the part that actually improves calibration. The structured payload ensures comparable outputs across respondents.

**Human** (Mar 8, 2026, 09:29 AM)

The pdf is not quite right. I suggest to build it like a shareble tile for twitter or signal. Eg you can use the front-end design skill if you have it. Think something readable in a screenshot with a vertical aspect ratio

**Assistant** (Mar 8, 2026, 09:33 AM)

 


```
This block is not supported on your current device yet.
```


Design direction: editorial/data-viz tile. Think Bloomberg terminal meets Edward Tufte. Dense but legible. Vertical 1080x1920 (phone screenshot ratio). Monospaced type. Minimal chrome, maximum information density. The kind of thing that looks credible when screenshotted from Signal and forwarded.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Now convert to a PNG for direct sharing:


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Both wkhtmltoimage and puppeteer available. Puppeteer will render fonts better.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Google Fonts not available in this environment. Let me fix the HTML to use system monospace fonts, then retry.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Good structure but the numbers grid isn't rendering as a horizontal row. Let me fix the CSS grid to work with wkhtmltoimage's limited rendering engine.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


That's much better. Numbers strip is horizontal, params are in two columns, everything is readable at screenshot scale. Let me copy both the HTML (for rendering in browser with nicer fonts) and the PNG to outputs.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Three outputs:

1. **PNG tile** (600x900ish): screenshot-ready for Signal/Twitter. Vertical aspect, readable at phone resolution.
2. **HTML tile**: same design but renders with nicer fonts in a browser. Open in Chrome, screenshot, or right-click save. You can also re-add the Google Fonts link for local use.
3. **Prompt/payload**: the markdown file others paste into Claude. It runs the same 13-question elicitation conversationally, computes their forecast, compares to yours and Peter's, and generates their own infographic tile.

The HTML version will look sharper if you screenshot it from a browser yourself, since this environment lacks web fonts. The PNG is a fallback.

**Human** (Mar 8, 2026, 09:42 AM)

Not sure why this is so hard. The colours you chose are almost illegible. The text colour on the background.

I think let's just abandon that and give me the text to paste in chat. Less than 100 words

**Assistant** (Mar 8, 2026, 09:42 AM)

 

**My AI Timeline Forecast (80% CIs)**

AGI: 2025-2039 (median ~2032)
P(AGI by 2027): ~10%

AI replaces ~all AI researchers: 2026-2040
AI replaces ~all white collar: 2027-2051
AI replaces ~all human industry: 2034-2063
Extinction/disempowerment (if occurs): 2027-2055

P(extinction | AGI): ~22%

vs. Wildeford: 5-10 yr later across the board. Main drivers: institutional friction, physical automation lag (15 yr), mixed diffusion (fast in software, slow in regulated sectors). X-risk via cascading failures + state misuse, not rogue AI.

**Human** (Mar 8, 2026, 09:43 AM)

Update the markdown guide for people to use.

**Assistant** (Mar 8, 2026, 09:44 AM)

 


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Changes from v1:

- Removed infographic PDF generation (replaced with <100 word text summary)
- Added explicit output format template so every respondent gets a comparable, copy-pasteable block
- Added style instructions matching your preferences (neutral, precise, no filler)
- Compressed reference forecast format
- Clearer "how to use" section at the top
- Instructions to offer parameter adjustment via follow-up conversation (the Opus conversational part you wanted)

**Human** (Apr 12, 2026, 02:44 PM)

Can you take my predictions and then look at the predictions that are in Toby awards less wrong post. Called broad timelines and see if you can reconcile them. I guess I didn't give great confidence intervals, but he's made this general point about how even if the median or the kind of point estimate is given. There's often like a wide distribution and so I'm interested in maybe trying to plot that distribution and one of the strategies he suggested is you try and give both the PDF and the CDF at the same time and then you compare against them to kind of help get the figures to match your intuitions so perhaps you first start off with choosing the median and so that is the same point in both the PDF and the CDF obviously. But then the if you sort of say like you know what's the 20% likelihood. And as you like start to add additional estimates for like a certain a band. You can see how that affects the PDF and the CDF at the same time so that if making some judgement is kind of has an implication in the shape of one of the distributions that's different to what you expected. Then you can like update that judgement

**Assistant** (Apr 12, 2026, 02:46 PM)

 

Let me find Toby Ord's post first.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Good. I've got the full post. Let me now build the interactive dual PDF/CDF tool. Toby's key insight is that these distributions all share a characteristic right-skewed shape, and that eliciting a distribution by seeing both PDF and CDF simultaneously helps you catch inconsistencies in your own intuitions.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


The tool lets you set three anchors (10th percentile, median, 90th percentile) and see both PDF and CDF update simultaneously, which is the technique you described from Ord's reasoning.

Key things to notice with your current estimates loaded as defaults:

**Your distribution vs. Ord's.** Your 80% interval is 2027-2050 (23 years). Ord's is 2028-2125 (97 years). His core argument is that your right tail should be much fatter. He'd say you're putting too little probability on worlds where AGI takes 30+ years, given that people like Erdil have medians around 2045 and we've seen expert forecasts shift by decades in a single year.

**The tension in your model.** You said capabilities are accelerating with multiple drivers stacking and AI is already significantly accelerating its own research. Those views push toward a narrow, left-skewed distribution. But you also said your uncertainty is "wide" (15-20 years) and physical automation is fundamentally harder. Those push toward a fat right tail. The dual PDF/CDF view makes this visible: your PDF peaks sharply near 2030 but the CDF doesn't reach 90% until 2050, which implies a long thin tail that might not match your stated conviction about acceleration.

**Ord's practical implication for you.** If your distribution really should be broader (say, 10th-90th of 2027-2060+), then some of your AIRI research investments that take 5-10 years to mature are better bets than they look under a narrow distribution. Ord's argument supports the strategy of building durable research infrastructure rather than optimizing purely for short-timeline impact.

Try dragging the 90th percentile slider rightward and watch the PDF flatten. That's the question: does that flatter PDF match your beliefs about worlds where current approaches hit genuine walls?

**Human** (Apr 12, 2026, 02:49 PM)

Ok the calculator is interesting but we need a few tweaks. The first is that I thinnk the whole theme needs and overhaul. The dark theme is hard to read and the font is too thin. Keep it simple and not over designed. The other thing is that I don't want my name on it. The next thing is that I want to understand the implication of changing values in their effect. The next thing is I don't know if a react or jsx is really necessary, is this so heavyweight it needs a complex renderer?

**Assistant** (Apr 12, 2026, 02:51 PM)

 

You're right on all counts. This is just math and SVG, no state management complexity that justifies React. A single HTML file with vanilla JS will be lighter, faster, and easier to share.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Single HTML file, no dependencies. White background, Georgia serif, black curves. Three sliders. Changes to your settings generate plain-language implications below the charts: what your interval width means relative to published experts, what your P(AGI by 2027/2030/2040) implies for project planning, whether your skew is typical, and whether Ord would consider your distribution appropriately broad.

You can delete the old .jsx file. This one opens in any browser and works offline.

**Human** (Apr 12, 2026, 02:55 PM)

Ok, good. Let's now completely overhaul it to figure out how we can make a proper elicitation instrument. How do we elicit high quality forecasts? What definitions from Toby post could we use? We want something with several or many existing ratings.

**Assistant** (Apr 12, 2026, 02:56 PM)

 

Good question. Let me pull together what's known about high-quality forecast elicitation, then figure out which reference forecasts we can actually anchor against.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Good. I now have a solid picture of the landscape. Let me synthesise what I've found and lay out the design for a proper elicitation instrument, rather than just building it immediately.

Here's what I've gathered:

**Definitions available from published forecasters (with quantiles)**

The AI Futures Model gives us the cleanest operationalised milestones with published p10/p50/p90 from multiple forecasters. The key milestones they define:

1. **AC (Automated Coder)**: AI fully automates coding at a frontier lab. Daniel's latest: p10 ~mid-2027, p50 ~mid-2028. Eli's: p10 ~Jul 2027, p50 ~Mar 2032.
2. **TED-AI**: "At least as good as top human experts at virtually all cognitive tasks." This is close to what Ord uses. Daniel's latest TED-AI median: ~2031. Eli's: ~2035.
3. **ASI (Superintelligence)**: Much better than best humans at virtually all cognitive tasks. Daniel: median ~2032. Eli: ~2037.

Other reference distributions with published quantiles:

4. **Ord**: Transformative AI. Median 2038, 80% CI 2028-2125.
5. **Metaculus community** (AGI question): Median ~Feb 2028, but definition includes robotics.
6. **Metaculus community** (weak AGI): Different definition, shorter.
7. **Ben Todd / Dwarkesh Patel**: Median ~2032, 80% CI roughly 2027-2055.
8. **Ajeya Cotra**: TED-AI by end 2026: 5%. Implying longer median.
9. **Grace et al. survey**: Thousands of AI researchers, median ~2047 (2023 survey, shifted shorter since).
10. **Samotsvety forecasters**: ~28% AGI by 2030.

**Elicitation best practices from the forecasting literature:**

The key problems with naive elicitation are: anchoring on a single number, failing to express right-tail uncertainty, and inconsistency between PDF and CDF intuitions. Ord's dual-view technique addresses the last. The AI Futures Model addresses the first by decomposing into sub-questions. Proper scoring rules from Metaculus address calibration.

For a proper instrument, the design should:

1. **Fix the definition first.** Use TED-AI since it has the most published reference distributions and is closest to what most people mean by "transformative AI." State it clearly.
2. **Elicit 5 quantile anchors**, not 3. The p5, p10, p25, p50, p75, p90, p95 would be ideal but cognitively expensive. A good compromise: p10, p25, p50, p75, p90. Five points let you fit a more flexible distribution (mixture of log-normals) rather than forcing a single log-normal shape.
3. **Show PDF and CDF simultaneously** as the user adjusts, per the technique you described from Ord.
4. **Show many reference forecasters** as comparison lines, not just one or two. The density of references is itself informative about the state of disagreement.
5. **Show implied probabilities** for specific years (P by 2027, 2030, 2035, 2040, 2050) since those are the numbers people have strongest intuitions about.
6. **Flag inconsistencies**: if the implied P(AGI by 2030) from the distribution doesn't match what they'd say if asked directly, surface that tension.
7. **Include a direct-question cross-check**: after fitting the distribution from quantiles, ask "what's your P(AGI by 2030)?" and show the discrepancy.

Do you want me to build this instrument now? Before I do, a few design questions:

- **How many reference forecasters?** I can include Kokotajlo, Eli Lifland, Ord, Ben Todd, Metaculus aggregate, Grace et al. aggregate, and Cotra. That's 7 reference lines, which might be too many. I could group them or let users toggle.
- **Definition**: TED-AI ("at least as good as top human experts at virtually all cognitive tasks") is cleanest. Or do you want something closer to your own "AGI = AI that can perform ~all cognitive tasks at human expert level" which is essentially the same?
- **Output**: shareable text summary (as we have), or do you also want the instrument to produce a structured JSON payload that could feed into comparative analysis?

**Human** (Apr 12, 2026, 03:00 PM)

Let's have Koko, ord, meta agg, grace agg, cotra. Let them toggle on or off. Also by default give just meta agg (if available as full pdf/CDF and Koko). 

Let's have text output for now. 

Let's use ted AI

Let's use 5 points

I guess I was hoping for some kind of qualitative elicitation like we discussed earlier instead of simple "what's your 25% estimate" which is quite hard to think about. But maybe there's nothing to do about it. The naive view for me is to link it to other known 25% likelihood things that are common in daily life, or other things that were predicated as. 25% likely

**Assistant** (Apr 12, 2026, 03:03 PM)

 

That last point is the most important design insight. Asking "what year has a 25% probability?" is cognitively brutal. Nobody thinks in quantiles naturally. But people do have intuitions about whether something is "about as likely as" drawing a face card from a deck, or "about as likely as rain tomorrow in Melbourne in April."

Let me think about this properly before building.

**Calibration anchors for each probability level:**

- **10% likely** = "Would you be surprised? Yes, but not shocked. Like rolling a 1 on a d10. Like Australia losing a home Ashes series." 
- **25% likely** = "Plausible but you wouldn't bet on it. Like drawing a spade from a shuffled deck. Like a given NFL team making the playoffs."
- **50% likely** = "Coin flip. Genuinely could go either way."
- **75% likely** = "You'd be surprised if it *didn't* happen. Like it raining at least once during a Melbourne winter week."
- **90% likely** = "You'd be shocked if it didn't happen. Like a flight departing within 2 hours of scheduled time."

But there's a better version of this: instead of abstract probability anchors, use **concrete AI forecasting reference points** that have already resolved or are close to resolving. Things like "in 2020, Metaculus gave a 10% chance of GPT-4 level systems by 2023" which then happened. This gives people a feel for how fast things have moved and how calibrated (or miscalibrated) previous forecasts were.

The other qualitative approach is what we did earlier: ask questions about *drivers and mechanisms* (scaling, diffusion, regulation) and derive the quantiles computationally. The hybrid would be:

1. Start with the median (one slider, easiest cognitively)
2. Use qualitative questions to set the shape/width
3. Show the implied quantiles and let them adjust
4. Cross-check with "does this P(by 2030) feel right?"

Let me build this.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Single HTML file, no dependencies. The flow:

**Step 1**: Set your median with one slider. Easiest cognitive task.

**Step 2**: Three qualitative questions that set the distribution shape. Instead of "what's your 25th percentile?", the questions ask things you can actually reason about: "could TED-AI plausibly arrive by 2028?" with options anchored to everyday probability analogies (drawing an ace, rolling a d10, flight departures). These compute initial quantile values.

**Step 3**: Fine-tune the 5 quantile sliders if the computed values don't match your intuitions. Each slider has a calibration anchor ("like drawing a spade from a shuffled deck" for 25%).

**Step 4**: Gut check. "What's your P(TED-AI by 2030) without looking?" Then shows the tension between your gut and your implied distribution.

Both PDF and CDF update simultaneously. Five reference forecasters (Kokotajlo, Metaculus, Ord, Grace, Cotra) are toggleable, with Kokotajlo and Metaculus on by default. Distribution diagnostics flag if your interval is suspiciously narrow, symmetric, or inconsistent.

Text output at the bottom is copy-pasteable.

**Human** (Apr 12, 2026, 03:08 PM)

Bit confused about step 2 works. Also my distribution has a strange spike at 2080 from 90% to 100%

**Assistant** (Apr 12, 2026, 03:09 PM)

 

The spike is a bug in the spline interpolation. The CDF jumps sharply between the 90th percentile anchor and the artificial endpoint I placed at YEAR_MAX. I need to add more graceful tail handling.

On Step 2: the idea is that the three qualitative questions compute initial values for the four quantile sliders in Step 3. So instead of asking you "what year is your 25th percentile?" cold, it asks "could TED-AI arrive by 2028?" and "how confident are you in your median?" and uses your answers to set reasonable starting points for p10/p25/p75/p90. Then you fine-tune in Step 3 if the computed values feel wrong.

The problem is that the mapping from qualitative answers to quantiles is opaque. You can't see why your sliders changed. Let me fix both issues: make the qualitative-to-quantile mapping visible, and fix the tail spike.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Now let me look at the Step 2 code and the `updateShape` function:


```
This block is not supported on your current device yet.
```


I see both issues clearly. Let me fix them:

1. **Tail spike**: The 99% anchor point and the 100% endpoint at YEAR_MAX create a steep segment. Fix: add more intermediate tail points that gradually approach 1.0, and extend the chart range past the visible area.

2. **Step 2 opacity**: Add a visible explanation after each dropdown showing what it computed. Like "This sets your 10th percentile to 2027 (~10% chance before then)."


```
This block is not supported on your current device yet.
```


Now fix Step 2 to show what it computed:


```
This block is not supported on your current device yet.
```


Now update the `updateShape` function to populate that explanation:


```
This block is not supported on your current device yet.
```


Now also make Step 3 heading clearer about its relationship to Step 2:


```
This block is not supported on your current device yet.
```


Also make the Step 3 sliders call `update()` not `updateShape()` so they don't reset when you touch them, and make the median slider in Step 1 trigger `updateShape()` so changing it recomputes the shape:


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Three fixes:

1. **Tail spike gone.** The CDF now has four gradual tail points beyond p90 (at 95%, 98%, 99.5%, 100%) spaced proportionally to the right-tail width. The curve should approach 1.0 smoothly.

2. **Step 2 now shows its work.** After you change any dropdown, a box appears: "Your answers set: p10=2027 (10% chance before 2027), p25=2029, p75=2038, p90=2050. 80% interval: 23 years. You can fine-tune these in Step 3 below."

3. **Median slider recomputes shape.** Moving the median in Step 1 reruns the qualitative-to-quantile mapping, so all five quantiles shift together. The Step 3 sliders only override individual values without resetting the others.

**Human** (Apr 12, 2026, 03:11 PM)

Ok I did it. My distribution seems to have a weird shape 

TED-AI Timeline Forecast
Definition: AI at least as good as top human experts at virtually all cognitive tasks.

Quantiles: p10=2028, p25=2032, p50=2037, p75=2047, p90=2077
80% interval: 2028-2077 (49 yr)

P(TED-AI by 2027): 3%
P(TED-AI by 2030): 19%
P(TED-AI by 2035): 42%
P(TED-AI by 2040): 60%

**Assistant** (Apr 12, 2026, 03:12 PM)

 

Your quantiles tell an interesting story but the shape issue is probably coming from the large gap between p75 (2047) and p90 (2077). That's a 30-year span containing only 15% of your probability mass, which creates a very long, thin tail that the spline struggles to render smoothly.

But before fixing the tool, let's look at what your numbers actually say, because I think there's a substantive tension worth resolving.

**Your distribution has two distinct regimes:**

The left half (p10=2028 to p50=2037) is compact: 9 years covering 40pp. This says "if it happens soon, it happens in a fairly narrow window." Consistent with the current acceleration narrative.

The right half (p50=2037 to p90=2077) is sprawling: 40 years covering 40pp. This says "if it doesn't happen by the late 2030s, it could take a very long time." Consistent with a world where current approaches hit walls and new paradigms take decades.

That's actually a coherent worldview. It's bimodal in spirit: either the current trajectory delivers TED-AI within ~12 years, or something goes wrong and it takes much longer. The spline is trying to fit a single smooth curve to what might be better modelled as a mixture of two distributions.

**Comparison to your earlier forecast:**

Your earlier elicitation gave AGI median ~2032 with wide uncertainty. This one gives TED-AI median 2037, five years later. That gap makes sense: TED-AI is a stricter definition (top expert level at virtually all cognitive tasks, 95% of remote work automatable) than your earlier "AGI = all cognitive tasks at human expert level."

**Comparison to the references:**

Your p50 of 2037 puts you between Kokotajlo (~2031) and Ord (~2038). Your 80% width of 49 years is much broader than Kokotajlo (23 yr) but narrower than Ord (97 yr). You're taking Ord's broad-timelines argument seriously.

Your P(by 2030) of 19% is lower than Metaculus (~40-50%) and Kokotajlo (~25-30%). Your P(by 2040) of 60% means you think there's a real 40% chance it takes more than 14 years.

**The question for you:** does your p75 of 2047 feel right? That says: even after 21 years from now, there's still a 25% chance TED-AI hasn't arrived. That's the claim that would distinguish you most from the short-timelines crowd. Is that because you think the physical-world and institutional barriers you identified earlier (regulation, professional licensing, the gap between capability and deployment) genuinely could delay things that long? Or does 2047 feel too late when you sit with it?

If 2047 feels too late for p75, the fix is to pull it in, which will fatten the middle of your distribution and thin the right tail. If it feels right, then the weird shape is just the spline trying to represent a genuinely unusual belief structure.

**Human** (Apr 12, 2026, 03:13 PM)

Take a look, this is the image

**Assistant** (Apr 12, 2026, 03:13 PM)

 

I see the problem. The PDF has a sharp spike near 2025-2027 then drops to a flat near-zero line for decades. That's an artifact of the spline: your p10 at 2028 is very close to the left boundary (2025), so the spline crams a lot of slope into a tiny interval, creating a false spike. Meanwhile the actual bulk of your probability (median 2037) sits in a flat, featureless plateau.

This doesn't reflect your beliefs. You don't think there's a spike of probability mass at 2026. The spline is just poorly conditioned in the left tail.

Two fixes needed:

1. **Push the left boundary earlier** (say 2020) so the spline has room to ramp up smoothly to p10
2. **Use more tail anchor points on the left side** too, not just the right

But honestly, the deeper issue is that the monotone cubic spline is the wrong tool for distributions with wide tails. A better approach: fit a **mixture of two log-normals** (which directly captures your bimodal intuition of "either it works soon or it takes much longer"). Or simpler: just use linear interpolation between quantile points for the CDF (which will always be monotone and well-behaved) and compute the PDF as its numerical derivative with smoothing.

Want me to rebuild with linear CDF interpolation + Gaussian-smoothed PDF? It'll be boring but correct, and the PDF will actually look like what you believe. The fancy spline was introducing more problems than it solved.

**Human** (Apr 12, 2026, 03:14 PM)

Ok I don't know what splines and log normals and stuff are. How do they do it in Ord and AI futures etc

**Assistant** (Apr 12, 2026, 03:14 PM)

 

Good question. Let me check what they actually use.


```
This block is not supported on your current device yet.
```


Here's the short answer to your question:

**What Kokotajlo/AI Futures Model actually does:** They use a Monte Carlo simulation model with ~30 parameters. They run 10,000 simulations and the output *is* the distribution. They don't fit a curve to quantile points at all. The distribution emerges from the model.

**What Ord does:** He doesn't specify his method publicly, but from the shape of his curves and the way he describes them, he's likely drawing a curve by hand or using something like a shifted log-normal fitted to a few anchor points. The distributions in his post all have the same characteristic right-skewed shape.

**What Metaculus does:** Users submit CDFs directly by dragging points on an interactive CDF curve. Then Metaculus aggregates across users. No curve fitting required because users *draw* the CDF.

**What the research literature recommends (Palley & Bansal 2021):** Elicit *both* quantile judgments and probability judgments, then average the resulting distributions. This "inner crowd" effect produces better calibration than either method alone. This is exactly the dual approach we're building (quantile sliders + gut-check probability).

**The practical fix for our tool:** The simplest correct approach is to do what Metaculus does. Instead of eliciting 5 quantile points and trying to fit a smooth curve through them, let the user **draw the CDF directly** by dragging points on the curve. The CDF is always monotonically increasing by construction, and we get the PDF by numerical differentiation with smoothing. No curve-fitting artefacts.

But that's harder to build and harder to use on mobile. The simpler fix is: instead of the fancy spline, just **connect the quantile points with straight lines** for the CDF (piecewise linear), then smooth the resulting PDF with a simple moving average. It won't be as pretty but it will never produce weird spikes or artefacts. Every point on the CDF will be exactly where the user put it.

Want me to rebuild with the piecewise-linear CDF approach? It's the most honest representation: the curve says exactly what you told it, nothing more.

**Human** (Apr 12, 2026, 03:15 PM)

Ok I don't really know what to expect. Can you still ask me the same questions and build the CDF from that? I don't really want to drag anything

**Assistant** (Apr 12, 2026, 03:16 PM)

 

Yes. The flow stays the same: you answer the qualitative questions, it computes quantile starting points, you fine-tune with sliders. The only change is under the hood: instead of a fancy curve that invents shapes between your points, the CDF is just straight lines connecting your 5 anchors. What you see is exactly what you said, nothing more.

The PDF will look like a histogram rather than a smooth curve. That's more honest. You gave 5 data points, you get a shape that reflects 5 data points.

Let me rebuild it.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Also update the method note at the bottom:


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


Same questions, same flow, same sliders. The only change is that the CDF is now just straight lines between your anchor points, and the PDF is the slope of those lines with light smoothing. No more mysterious spikes or weird shapes. The PDF will look like a stepped bar chart rather than a smooth curve, which is the honest representation of 5 data points.

Try entering the same values (p10=2028, p25=2032, p50=2037, p75=2047, p90=2077) and see if the shapes look more like what you believe.

**Human** (Apr 12, 2026, 03:41 PM)

Ok this seems ok except at the end o the range it jumps up again

**Assistant** (Apr 12, 2026, 03:41 PM)

 

That jump is the same tail problem. The CDF has to get from 90% at 2077 to 99% at around 2091 (p90 + tailR*0.7), which is a short interval carrying 9% of probability. That makes the PDF spike up again at the right edge of the visible chart.

Simple fix: push the tail anchors further out so the remaining 10% of probability is spread over a longer, gentler ramp that mostly falls outside the visible chart area.


```
This block is not supported on your current device yet.
```



```
This block is not supported on your current device yet.
```


The remaining 10% beyond p90 is now spread over 6x the tail length, so with your p90=2077 and tail length of 40 years, the 94% point is at ~2117 and the curve reaches 100% around 2317. All of that falls well outside the visible chart (which ends at 2090), so the PDF should just trail off smoothly to near-zero at the right edge.

**Human** (Apr 12, 2026, 03:41 PM)

But I don't give. P99 do I?

**Assistant** (Apr 12, 2026, 03:42 PM)

 

You're right. You didn't say anything about what happens after 2077. The tool is inventing tail shape beyond your last data point, which is exactly the kind of thing I said it wouldn't do.

The honest approach: the CDF goes from 0% to 90% using your 5 anchors. Beyond p90, we just don't know. The chart should show a solid line up to p90 and then either stop or show a faded/dashed line indicating "this part is assumed, not elicited."

The PDF should only show density between p10 and p90 (that's where your 80% CI lives), and be transparent about the fact that the tails are unspecified.

Want me to rebuild it that way? The CDF would be solid from 2025 to your p90, then a dashed line gently approaching ~100%. The PDF would only show the region you actually specified. No more invented tail artefacts.