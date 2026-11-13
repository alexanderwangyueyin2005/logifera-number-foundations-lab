# Logifera Number Foundations Lab

A standalone, playable B/C/D numeracy prototype built directly on the supplied Construct E UI source. Three clickable constructs, three distinct activities each, nine real mathematical tasks. No framework, build step, API, account, database or runtime package installation.

## Run locally — two commands

```sh
cd logifera-number-foundations-lab
python3 -m http.server 8000
```

Open http://localhost:8000 in a modern browser. Keep all files in this folder together. Use HTTP rather than relying on browser-specific `file:` storage behavior.

## Static deployment

Upload this folder (the folder containing `index.html`) to Netlify's manual static deployment interface. No build command is needed; publish this folder itself. All runtime scripts and the official logo use relative paths, so hosting under a subdirectory also works. No public deployment has been made as part of this delivery. `tests/` and `qa/` are optional on a public deployment and are not runtime dependencies.

## Play

- **Number Sense:** build 7; compare 7 and 9; place 6 on a number line.
- **Number Structure:** split 8; find the missing part of 12; build 24 with tens and ones.
- **Calculation Strategies:** join 4 and 3; count on three intervals from 5; make ten for 8 + 5 with an explicit partition.

Use the three rail buttons freely. Your active activity and work are restored when you return. Check validates the actual representation and inputs; viewing and navigation never award credit. Continue advances only after a correct result. Back preserves work; Try again resets just the current completed activity. The final summary reports nine completed activities and provides a fresh-session action.

Keyboard: Tab/Shift+Tab navigate; Enter/Space activate buttons; the B6 line accepts arrows, Home and End, with labeled move buttons as an alternative. Numeric fields accept digits and Enter checks the response. Mobile layouts keep a visible three-item module picker, scrollable activity content and the bottom action dock. Native `prefers-reduced-motion` rules from E remain intact.

Progress is stored only under `logifera.numberFoundationsLab.v1`. When storage is blocked, the current page remains playable in memory. No learner data leaves the browser; no analytics are sent.

## Tests

Run the deterministic suite from this folder:

```sh
node --test tests/math.test.cjs
```

With the local server running, open http://localhost:8000/tests/browser.html and click **Run all browser tests**. This runs the real app in an iframe and resets this prototype's own session key. It does not access any original Hub storage keys. Download results with the page's button.

Delivered results: **27 Node tests and 16 browser suites passed**. The browser suite includes all nine task contracts, a full session, persistence, reset isolation, all five requested viewport sizes, high-zoom scrolling, and an explicitly labeled in-page reduced-motion simulation. A separate real-keyboard run completed all nine tasks; actual Chromium 125% and 200% zoom was checked. Native OS-to-browser reduced-motion preference switching remains unverified in this managed environment; the simulation is not described as an OS test.

See [QA_CHECKLIST.md](QA_CHECKLIST.md), [IMPLEMENTATION_REPORT.md](IMPLEMENTATION_REPORT.md) and [VISUAL_FIDELITY_REPORT.md](VISUAL_FIDELITY_REPORT.md). Screenshots and machine-readable results are in `qa/`.

This is a research-informed learning prototype, not a measure of mastery, diagnosis or clinical efficacy. Source branding and original E UI remain the supplied author's materials; this package does not add a new license over those materials.
