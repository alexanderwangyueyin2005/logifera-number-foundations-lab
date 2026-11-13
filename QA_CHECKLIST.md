# QA checklist — 13 November 2026

Evidence: `qa/unit-test-results.txt` (27 passing Node tests), `qa/browser-results.json` (16 passing browser suites), screenshots and geometry JSON in `qa/`. Browser: recorded Chromium user agent in the results file. Tests ran on the delivered static application, not an unrelated mock UI.

| Acceptance | Result | Executed evidence |
|---|---|---|
| B2: 6/8 fail; 7 passes; reversible bounded controls | PASS | Node + browser |
| B3: 7 fails; 9 passes; equivalent cards before response | PASS | Node + browser computed formatting and explanation timing |
| B6: 5 fails; 6 passes; exactly 11 equally spaced ticks | PASS | Node + browser geometry; real arrow-key run |
| C1: 3+5 / 5+3 pass; 2+6 fails; whole always 8 | PASS | Node both orders; browser move-by-move unique token check |
| C2: 4/6 fail; 5 passes; correct inverse fact text | PASS | Node + browser |
| C3: 2T4O passes; 1T4O fails; 1T14O equal but noncanonical | PASS | Node + browser; two rods each show ten units |
| D1: answer 7 requires actual join; conserved seven | PASS | Node + browser |
| D2: exactly three intervals 5→8; two/four fail; undo | PASS | Node + browser; real keyboard run |
| D3: transfer two; explicit 2+3; total 13; conserved thirteen | PASS | Node invalid 1/3 transfers + browser invalid structure/partition |
| Exactly 3 clickable constructs and 3 unique tasks each | PASS | Data tests + live sidebar DOM |
| No credit for viewing, opening, skipping or invalid checks | PASS | Engine and browser counts |
| B→D→C→B state preserved; correct active rail | PASS | Browser navigation + reload |
| Safe refresh, corrupt storage, blocked storage fallback | PASS | Browser reload; Node sanitizer and throwing-storage tests |
| Completed revisit, no double-count, reset only one task | PASS | Node + full browser session |
| New session → nine solved → accurate summary | PASS | Browser integration; separate real keyboard session |
| All nine task families operated with real keyboard events | PASS | Enter, Space, arrows and digit input; no pointer used to solve the nine tasks; `keyboard-session-summary.jpg` |
| Heading focus after navigation; Tab order smoke check | PASS | Live browser focus observations; heading Tab reached first enabled task control |
| 1440×900 / 1366×768 / 1024×768 / 820×900 / 390×844 | PASS | Browser all 9 tasks × all 5 sizes; screenshots |
| Three-item mobile picker; dock visible; ≥44px controls | PASS | Browser geometry for all 45 task/viewport combinations |
| 125% and 200% native Chromium zoom | PASS | Real browser shortcuts; scale 1.25 and 2 observed; 200% content scrolling and focus verified |
| High-zoom scroll retained after input/rerender | PASS | Dedicated browser regression at 681×468 |
| Reduced-motion JS branch and E CSS reduction rules | PASS (simulation) | Test substitutes media preference and activates original reduction blocks in test iframe; no custom token animation, shortened CSS transitions, conserved quantities |
| Native OS reduced-motion preference → browser rendering | NOT VERIFIED | DevTools blocked; temporary OS setting did not propagate and was restored. Must check on a normal local browser. |
| Original E four CSS layers / logo / full core unchanged | PASS | Byte and SHA-256 comparison in `provenance.json` |
| Original protected source directory unchanged | PASS | 94-file before/after hashes; zero modified files |
| E desktop visual comparison | PASS | Same viewport screenshot review and seven-region exact geometry comparison |
| No app JavaScript errors / missing local assets / external resources | PASS | Browser error listener, resource response checks; observed extension metadata errors are infrastructure, not app-origin errors |
| Standalone static packaging, no runtime package dependencies | PASS | Relative script/logo paths; local static server; archive integrity |
| Physical mobile / Safari / Firefox / screen-reader listening / real learners | NOT TESTED | Outside executed environment; do not infer these from Chromium layout tests |

## Issues fixed during QA

- Four small C1 mobile controls enlarged to at least 44×44.
- D3 successful feedback and helper no longer overlap at compact heights.
- Number-line marker and allocation/jump buttons retain focus across rendering.
- D3 pre-check copy no longer exposes the target sum; it describes conservation.
- 200% zoom no longer compresses manipulatives into a shallow strip; complete activity scrolling is used and preserved after input.

## Reproduce

1. Follow the two-command server setup in README.
2. Run `node --test tests/math.test.cjs`.
3. Open `/tests/browser.html`, run all suites, and download JSON. This intentionally resets this prototype's test session.
4. Play all nine tasks with Tab/Shift+Tab, Enter/Space and the B6 arrow keys; check heading focus and inspect the final summary.
5. Set browser zoom to 125% and 200%, inspect the scrollable activity and persistent dock, then restore 100%.
6. On a local OS/browser supporting it, enable reduced motion, verify `prefers-reduced-motion: reduce` is actually active, and play allocation, joining and make-ten. This last native-preference step is explicitly still pending.
