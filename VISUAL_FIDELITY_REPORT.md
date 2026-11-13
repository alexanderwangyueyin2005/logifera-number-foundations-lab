# Visual fidelity report

## Provenance gate

The source of truth is the uploaded `Intervention Hub/logifera-intervention-system-ABCDE-latest/games/construct-e/`, not a new stylesheet or external visual reference. Source E remains unchanged.

The new component injects exactly this cascade:

```js
LogiferaELocalStyles + core.styles + core.productStyles + core.materialStyles + LabTaskStyles
```

`e-ui-core.js` is byte-identical to the **whole** original `intervention-core.js`, retaining `styles`, `productStyles`, `materialStyles`, `header`, `sessionProgress`, `journey`, `progressRail`, `feedback`, `glyph`, `icon` and motion constants. `e-local-styles.js` wraps the literal extracted from `array-architects.js`; the literal bytes including its interpolation references are unchanged. The official logo is byte-identical. The host preserves E's body background `#EAF6F3`, viewport dimensions, margins, font stack and shell sizing; only the title, component name and independent script list change.

| Layer | UTF-8 bytes | SHA-256 | Comparison |
|---|---:|---|---|
| array-architects local styles (template bytes) | 39455 | `4728df7f0532c168a6810d0c80d85a81b4350f239dc2cc8c1f7b4e33d79beb40` | PASS |
| styles | 11461 | `e75c789ea2f619954069951271c2d32e774aedf54d7d7d3b18acc501cd5e8c6a` | PASS |
| productStyles | 16929 | `95a3cfdd4793659d1a21c945ee436894a7b8225f98169685430b96802d58ef69` | PASS |
| materialStyles | 11918 | `056e186589aa5cf5ca5a1227862204635e77fd2eed6a13c32a2919abd60a4ef6` | PASS |

Hashes for the three core layers compare exported CSS strings; the first compares the local CSS template literal bytes. See `qa/provenance.json`. Optional reproduction: `node tests/provenance.cjs "/path/to/Intervention Hub/logifera-intervention-system-ABCDE-latest"`.

The full reference integrity audit checked 94 files against the extraction baseline and found zero changes. The per-file baseline is provided in `qa/reference-sha256.json` for a subsequent audit.

## Reused composition and styling

The shell keeps `.product-shell`, `.product-header`, `.product-body`, `.session-rail`, `.product-main`, `.session-progress`, `.content`, `.task-header`, `.activity-workspace`, `.playground`, `.reasoning`, `.support-surface` and `.action-dock`. The original header helper renders the logo and wordmark. The original progressRail emits the material path and nodes; only their count/state and semantic labels change. E's ribbon glyph, tactile beads, forest gradient buttons, shadows, radii and focus styles are used directly.

Original final tokens remain `--forest:#2F4A3B`, `--sage:#A7B89F`, `--ivory:#FAF8F2`, `--slate:#6B7F93`, `--brass:#B69B68`. No font/CDN/framework/image-generation substitute was introduced.

## Identical-viewport visual comparisons

The original E app was rendered from unchanged original game/core/adaptive/telemetry source in an isolated reference host, with its multiplication split stage as a fixture. Missing unrelated Hub host integrations were omitted from that reference host only. This did not alter original source files. New screenshots contain interactive task states; D3 includes a checked result. Fixtures show selected progress and are labeled by task, not evidence of a full session. The separate keyboard summary is evidence of actual full-session completion.

| Original E | New Number Sense | New Number Structure | New Calculation Strategies |
|---|---|---|---|
| [1440×900](qa/E-1440x900.jpg) | [B-01](qa/B-01-1440x900.jpg) | [C-01](qa/C-01-1440x900.jpg) | [D-03](qa/D-03-1440x900.jpg) |
| [1366×768](qa/E-1366x768.jpg) | [B-01](qa/B-01-1366x768.jpg) | [C-01](qa/C-01-1366x768.jpg) | [D-03](qa/D-03-1366x768.jpg) |

The screenshots were visually reviewed against one another and the supplied original `material-guide.png` and `material-split.png`. All nine 1440×900 task captures and a [contact sheet](qa/desktop-contact-sheet.jpg) are included. Representative mobile images: [B6](qa/B-03-390x844.jpg), [C3](qa/C-03-390x844.jpg), [D3](qa/D-03-390x844.jpg). Additional [820×900](qa/C-01-820x900.jpg), [1024×768](qa/D-03-1024x768.jpg) and [real 200% zoom](qa/browser-zoom-200-scrolled.jpg) evidence is included.

| Viewport | Comparison | Regions | Measured result |
|---|---|---|---|
| 1440x900 | E ↔ B-01 | All seven compared regions | Exact x/y/width/height match |
| 1440x900 | E ↔ C-01 | All seven compared regions | Exact x/y/width/height match |
| 1366x768 | E ↔ B-01 | All seven compared regions | Exact x/y/width/height match |
| 1366x768 | E ↔ C-01 | All seven compared regions | Exact x/y/width/height match |

Seven regions: product shell, header, sidebar, main content frame, math panel, reasoning panel, action dock. Raw position, size, typography, background and radius samples are in `qa/geometry-*.json`. The main-stage split and vertical hierarchy visibly follow E, including its compact 1366×768 treatment. These measurements are geometry checks, not a fabricated whole-image pixel-difference score.

## Deliberate deviations, exhaustively scoped

1. Multiplication content, labels, breadcrumb title and footer text are replaced by the specified B/C/D content. Title length can change text wrapping; text itself is not pixel-identical.
2. Four informational E rail stages become three semantic buttons. A local `.lab-nav` reset preserves original list state treatment; required construct captions and completion text are added. There is no fourth module.
3. The material journey uses three construct-level nodes with a separate exact n/9 count, avoiding a crowded nine-node track. Original paths, shapes and state styling are retained.
4. New math-only layouts provide trays, two part fields, equal-interval number lines, two identical numeral cards, ten-unit rods and a ten-frame. Tokens retain E materials; smaller unit sizes let a rod represent ten visible units. Inputs and part labels are added where the specified math requires them.
5. Scoped labels, 44px control minima and slider focus styling support keyboard/touch operation. No new palette or global button theme is introduced.
6. Narrow widths retain a three-button picker where original E hides its sidebar. Mobile workspace stacks and scrolls while the original action dock remains visible; high-zoom short viewports scroll the complete activity. Desktop shell breakpoints are preserved.
7. D3 hides its redundant helper only after a successful answer to make room for explicit partition/result feedback. Feedback is non-growing (`flex:none`) to avoid overlap.
8. FLIP token movement uses the original E timing/easing with conserved object identities; no new decorative animation system is used. The native reduced-motion guard remains in the app and E rules remain intact.

## Honest assessment

The four source CSS layers, full core file and logo are **exactly identical** to the supplied E source. Selected desktop shell geometry also matches exactly. The entire rendered app is not claimed to be pixel-identical: its navigation semantics, task text, math representations and required mobile fallback intentionally differ. The original E visual hierarchy, materials, colors, header, panel proportions and dock are visibly retained. No unresolved desktop visual drift was found in the recorded comparisons. Native OS reduced-motion propagation still needs a local check; the in-page simulation passed and is separately labeled.
