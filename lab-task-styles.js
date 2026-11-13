/* Additions are restricted to B/C/D representations, accessible rail buttons,
   and a compact module picker where original E hides its informational rail. */
globalThis.LabTaskStyles = `
.session-rail li {position:relative}
.session-rail .lab-nav {appearance:none;border:0;background:none;color:inherit;font:inherit;text-align:inherit;display:flex;align-items:inherit;flex-direction:inherit;gap:inherit;width:calc(100% + 16px);min-height:44px;margin:-10px -8px;padding:10px 8px;border-radius:inherit}
.lab-nav small {display:block;font-size:9px;font-weight:400;line-height:1.45;margin-top:4px}
.lab-dock-group {display:flex;gap:10px;align-items:center}
.lab-stage {width:100%;min-height:0;overflow:auto;scrollbar-width:thin;padding:12px 18px;display:flex;flex-direction:column;align-items:center;gap:16px;margin:auto 0}
.lab-stage>* {flex-shrink:0;max-width:100%}
.lab-stage .controls {margin:0;gap:10px}
.lab-stage button {min-width:44px;min-height:44px}
.lab-stage .control {max-width:100%}
.lab-stage .stepper button {width:44px;height:44px;flex:none}
.lab-stage .stepper {gap:8px}
.lab-target {font-size:48px;line-height:1.1;font-weight:600;color:var(--forest);font-variant-numeric:tabular-nums;text-align:center}
.lab-tray {position:relative;padding:12px;min-height:64px;width:100%;text-align:center}
.lab-tray-label {display:block;font-size:12px;color:var(--aa-muted);margin:0 0 8px}
.lab-tokens {display:flex;justify-content:center;flex-wrap:wrap;gap:2px;min-height:44px;align-content:center}
.lab-tokens .dot,.lab-slot .dot {position:relative;display:block;flex:none;left:auto;top:auto;width:40px;height:40px;padding:4px}
.lab-tokens .dot[data-token] {transition:none}
.lab-parts {display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%}
.lab-parts .lab-tray {min-width:0}
.lab-empty {color:var(--aa-muted);font-size:12px;align-self:center;line-height:44px}
.lab-field {display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;margin:10px 0;font-size:14px}
.lab-field input {min-height:44px;width:76px}
.lab-partition {display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;font-size:20px;margin:10px 0}
.lab-partition input {min-height:44px;width:62px}
.lab-numerals {display:grid;grid-template-columns:repeat(2,110px);gap:20px;justify-content:center;width:100%}
.lab-numerals .strategy-choice {width:110px;height:110px;margin:0;font-size:42px;padding:11.5px}
.lab-explanation {width:100%;display:grid;gap:8px}
.lab-explanation .lab-tokens .dot {width:28px;height:28px;padding:3px}
.lab-explanation .lab-tokens {min-height:32px}
.lab-line-wrap {width:100%;padding:0 20px}
.lab-line {height:130px;width:100%;position:relative;touch-action:pan-y;border-radius:8px}
.lab-line[role=slider] {cursor:pointer;outline-offset:8px}
.lab-line:focus-visible {outline:3px solid var(--li-blue)}
.lab-line-axis {position:absolute;top:76px;left:0;right:0;border-top:2px solid var(--slate)}
.lab-tick {position:absolute;top:70px;height:14px;width:1px;background:var(--slate);transform:translateX(-50%)}
.lab-tick span {position:absolute;top:23px;left:50%;transform:translateX(-50%);font-size:12px;color:var(--li-text)}
.lab-marker {position:absolute;top:36px;width:40px;height:40px;transform:translateX(-50%)}
.lab-marker .dot {position:relative}
.lab-jumps {position:absolute;top:4px;left:0;width:100%;height:72px;overflow:visible;pointer-events:none}
.lab-jumps path {fill:none;stroke:var(--forest);stroke-width:2;vector-effect:non-scaling-stroke}
.lab-jumps text {fill:var(--forest);font:12px system-ui,sans-serif;text-anchor:middle}
.lab-covered {min-height:72px;display:grid;place-items:center;color:var(--slate);font-size:32px;border:1px dashed var(--slate);border-radius:12px;background:var(--ivory)}
.lab-base10 {display:flex;flex-direction:column;align-items:center;gap:8px}
.lab-rod {display:flex;gap:0;padding:3px;border:1px solid var(--sage);border-radius:8px;background:var(--ivory);width:fit-content}
.lab-base10 .dot {position:relative;width:24px;height:24px;padding:2px;flex:none}
.lab-base10 .lab-tokens {width:100%;min-height:28px}
.lab-base10 .dot:before {top:18px}
.lab-tenframe {display:grid;grid-template-columns:repeat(5,44px);grid-template-rows:repeat(2,44px);gap:4px;padding:7px;border:1px solid #D7DDCF;border-radius:12px;background:#F1F2E9;width:fit-content}
.lab-slot {border:1px solid #D7E0D5;border-radius:10px;display:grid;place-items:center;background:#F6F8F2}
.lab-slot.lab-gap {border-style:dashed}
.lab-tenframe.lab-hinted .lab-gap {outline:2px solid var(--brass);outline-offset:0}
.lab-connection {text-align:center;font-size:14px;margin:8px 0;color:var(--forest)}
.lab-status {min-height:0;flex:none}
.content[data-task="D-03"].resolved .support-surface {display:none}
.lab-status:empty {display:none}
.lab-sr-only {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
@media(max-width:1050px) and (min-width:851px){.session-rail .lab-nav{margin:-8px -4px;padding:8px 4px;width:calc(100% + 8px)}.lab-stage{padding:10px 8px}.lab-parts{gap:8px}}
@media(max-width:850px){
 .product-body {grid-template-rows:auto minmax(0,1fr)}
 .session-rail {display:block;padding:8px 14px;border-right:0;border-bottom:1px solid var(--li-border)}
 .session-rail>.subject-mark,.session-rail>.subject-name,.session-rail>.module-name,.session-rail>.rail-label,.session-rail>.rail-footer {display:none}
 .session-rail ol {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}
 .session-rail li {padding:0;min-width:0}
 .session-rail .lab-nav {margin:0;padding:7px 5px;width:100%;min-height:58px;flex-direction:row;text-align:left;gap:6px}
 .lab-nav small {display:none}.lab-nav .journey-dot{width:21px;height:21px}
}
@media(max-width:650px){
 .product-main {grid-template-rows:64px minmax(0,1fr) 120px}
 .session-rail .lab-nav {flex-direction:column;text-align:center;font-size:10px;line-height:1.2;min-height:62px}
 .session-progress {gap:8px}.module-caption{max-width:116px;white-space:normal;font-size:11px}
 .session-progress .progress {grid-template-columns:1fr;gap:0;min-width:0;font-size:10px}
 .session-progress .track.material-journey{height:26px;max-width:180px}.session-progress .material-journey i{width:24px;height:24px}
 .activity-workspace {overflow:auto;display:block;min-height:0}
 .activity-workspace .playground {height:auto;min-height:250px;overflow:visible}
 .activity-workspace .reasoning {max-height:none;height:auto;margin-top:10px;padding:14px 12px;overflow:visible}
 .lab-stage {overflow:visible;padding:14px 10px;gap:12px;margin:0}
 .task-header {padding:12px}.task-header h2{font-size:22px}.task-header .lead{line-height:1.4}
 .action-dock .actions {flex-wrap:wrap;align-content:center;gap:8px;padding:10px 0}
 .lab-dock-group {width:100%;justify-content:space-between;gap:8px}
 .lab-dock-group .quiet {max-width:none}
 .lab-dock-group button {flex:1}
 .lab-dock-group .lab-solo {max-width:none}
 .lab-numerals{grid-template-columns:repeat(2,94px);gap:14px}.lab-numerals .strategy-choice{width:94px;height:94px}
 .lab-parts{gap:6px}.lab-tray{padding:8px}.lab-line-wrap{padding:0 16px}
 .lab-status .field-feedback{font-size:13px}
}
/* At high browser zoom, scroll the complete activity rather than compressing
   the manipulatives into a few pixels. Original desktop geometry is untouched. */
@media(max-width:850px) and (max-height:560px){
 .product-main .content,.product-main .content[data-layout="split"] {display:block;overflow:auto}
 .activity-workspace {display:block;min-height:480px;overflow:visible}
 .activity-workspace .playground {height:auto;min-height:300px;overflow:visible}
 .activity-workspace .reasoning {height:auto;max-height:none;overflow:visible;margin-top:10px;padding:14px 12px}
 .lab-stage {overflow:visible;margin:0;padding:14px 10px}
}
`;
