/* Unmodified local CSS template from Array Architects. See VISUAL_FIDELITY_REPORT.md. */
(function(){
  const core=globalThis.LogiferaInterventionCore;
  const {MOTION_FAST,MOTION_NORMAL,MOTION_MATH,STAGGER_SHORT,JOIN_HOLD,EQUATION_HOLD,IDLE_CUE,CUE_DURATION,MATH_REVEAL,RESULT_HOLD,EQUATION_REVEAL,TOKEN_LIFT,TOKEN_TRAVEL,TOKEN_SETTLE,MOTION_EASE} = core.motion;
  const styles = `
    :host { display:block; --aa-ink:#203c37; --aa-muted:#687a75; --aa-accent:#287762; --aa-mint:#eaf5ef; --aa-line:#e3ebe6; color:var(--aa-ink); font-family:inherit; }
    * { box-sizing:border-box; }
    button,input { font:inherit; }
    button { cursor:pointer; touch-action:manipulation; }
    button:disabled { cursor:default; opacity:.38; }
    button:focus-visible,input:focus-visible { outline:3px solid #479f88; outline-offset:4px; }
    .card { background:white; border:1px solid var(--aa-line); border-radius:24px; box-shadow:0 10px 40px #203c3706; overflow:hidden; }
    .top { padding:25px 32px; display:flex; justify-content:space-between; align-items:center; gap:20px; border-bottom:1px solid var(--aa-line); }
    .identity { display:flex; gap:13px; align-items:center; }
    .symbol { width:38px; height:38px; display:grid; grid-template-columns:repeat(3,5px); gap:4px; place-content:center; background:var(--aa-mint); border-radius:11px; }
    .symbol i { width:5px; height:5px; background:var(--aa-accent); border-radius:50%; }
    h1 { font-size:17px; margin:0 0 4px; letter-spacing:-.4px; font-weight:650; }
    .sub { font-size:12px; color:var(--aa-muted); }
    .progress { display:flex; align-items:center; gap:14px; font-size:12px; color:var(--aa-muted); }
    .track { display:flex; gap:5px; }
    .track i { width:18px; height:4px; border-radius:4px; background:#e7eeea; }
    .track i.done { background:var(--aa-accent); }
    .track i.current { background:#8ebdac; }
    .content { padding:30px 36px 28px; }
    .eyebrow { color:var(--aa-accent); font-size:11px; letter-spacing:1.5px; font-weight:700; text-transform:uppercase; margin:0 0 12px; }
    h2 { font-size:clamp(23px,2.4vw,29px); line-height:1.2; font-weight:550; letter-spacing:-.7px; margin:0 0 12px; }
    p { line-height:1.65; }
    .intro-copy { max-width:550px; color:var(--aa-muted); margin:0 auto 10px; font-size:15px; }
    .center { text-align:center; }
    .lead { margin:0; color:var(--aa-muted); font-size:15px; }
    .heading { display:flex; justify-content:space-between; gap:16px; align-items:flex-start; }
    .pill { font-size:11px; white-space:nowrap; padding:8px 12px; border:1px solid var(--aa-line); border-radius:20px; color:var(--aa-muted); }
    .playground { min-height:286px; margin:22px 0; background:#f8faf8; border:1px solid #edf1ed; border-radius:18px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:22px 20px; position:relative; overflow:hidden; }
    .playground-label { align-self:flex-start; font-size:10px; letter-spacing:1.6px; text-transform:uppercase; color:#7b8c85; position:absolute; top:16px; left:20px; }
    .array { position:relative; flex:none; margin:17px auto 10px; transition:width ${MOTION_NORMAL}ms ease,height ${MOTION_NORMAL}ms ease; }
    .dot { position:absolute; left:0; top:0; width:21px; height:21px; border-radius:50%; background:var(--aa-accent); box-shadow:inset 0 -2px 0 #153f3415; transition:transform ${MOTION_NORMAL}ms cubic-bezier(.2,.8,.2,1),background ${MOTION_NORMAL}ms; }
    .dot.second { background:#5c81a6; }
    .dot.new { animation:appear ${MOTION_FAST}ms both; animation-delay:var(--delay,0ms); }
    .divider { position:absolute; left:-13px; right:-13px; height:1px; border-top:1px dashed #97b9ac; opacity:0; transition:top ${MOTION_NORMAL}ms,opacity ${MOTION_FAST}ms; }
    .divider.visible { opacity:1; }
    .pulse { animation:settle ${MOTION_NORMAL}ms ${MOTION_EASE}; }
    .array-caption { min-height:24px; font-size:13px; color:var(--aa-muted); margin-top:8px; text-align:center; }
    .relation { display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:12px; min-height:44px; font-variant-numeric:tabular-nums; }
    .relation strong { font-size:25px; font-weight:550; letter-spacing:-.6px; }
    .relation .part { padding:9px 14px; background:var(--aa-mint); border-radius:10px; font-size:18px; }
    .relation .part.blue { background:#edf2f8; color:#3e6081; }
    .relation .result { animation:mathReveal ${MATH_REVEAL}ms ${MOTION_EASE} both; color:var(--aa-accent); }
    .relation .arrow { color:#8a9c93; }
    .controls { display:flex; justify-content:center; flex-wrap:wrap; gap:20px; margin:18px 0; }
    .control { border:1px solid var(--aa-line); border-radius:14px; padding:12px 15px; display:flex; align-items:center; gap:18px; background:white; }
    .control-label { font-size:13px; color:var(--aa-muted); min-width:60px; }
    .stepper { display:flex; align-items:center; gap:14px; }
    .stepper button { background:#f2f6f3; color:var(--aa-ink); border:0; border-radius:8px; width:38px; height:38px; font-size:21px; }
    output { min-width:20px; text-align:center; font-weight:650; font-size:19px; }
    .guide-target { border-color:#b2c9bc; }
    .actions { border-top:1px solid var(--aa-line); margin-top:24px; padding-top:20px; display:flex; justify-content:space-between; align-items:center; gap:18px; }
    .primary,.secondary,.choice { border-radius:10px; padding:13px 22px; min-height:46px; font-size:14px; font-weight:550; }
    .primary { background:var(--aa-accent); border:1px solid var(--aa-accent); color:white; }
    .primary:hover:not(:disabled) { background:#205e4e; }
    .secondary,.choice { background:white; border:1px solid var(--aa-line); color:var(--aa-ink); }
    .secondary:hover,.choice:hover { background:#f2f7f3; }
    .text-button { color:var(--aa-muted); border:0; background:none; font-size:13px; padding:12px 0; text-decoration:underline; text-underline-offset:4px; }
    .message { min-height:26px; font-size:14px; margin:10px 0 0; color:var(--aa-muted); text-align:center; }
    .feedback { padding:14px 18px; background:var(--aa-mint); border-radius:12px; font-size:14px; color:#28634e; margin:16px 0 0; }
    .answer { display:flex; align-items:center; justify-content:center; gap:12px; margin-top:14px; font-size:14px; }
    input { width:84px; height:46px; text-align:center; border:1px solid #b7cbc0; border-radius:9px; font-size:21px; color:var(--aa-ink); background:white; }
    .quiet { font-size:12px; color:var(--aa-muted); }
    .summary { max-width:480px; margin:0 auto; padding:12px 0; }
    .check-list { list-style:none; padding:0; margin:26px 0; text-align:left; }
    .check-list li { padding:15px 0; border-bottom:1px solid var(--aa-line); font-size:15px; }
    .check-list li::before { content:'✓'; color:var(--aa-accent); margin-right:14px; }
    .summary-mark { width:62px; height:62px; border-radius:50%; background:var(--aa-mint); color:var(--aa-accent); display:grid; place-items:center; margin:5px auto 24px; font-size:25px; }
    .intro .playground { min-height:228px; margin:24px auto 14px; max-width:660px; }
    .intro .actions { justify-content:center; }
    .intro .relation { margin:10px 0; }
    @keyframes appear { from { opacity:0; scale:.94; } to { opacity:1; scale:1; } }
    @keyframes settle { from { opacity:.8; scale:.985; } to { opacity:1; scale:1; } }
    @media(max-width:700px) { .top { padding:20px; } .content { padding:24px 20px; } .track { display:none; } .control { gap:10px; padding:10px; } .controls { gap:10px; } .playground { padding:25px 10px 18px; } .actions { flex-wrap:wrap; } .heading .pill { display:none; } }
    @media(max-width:430px) { .control { width:100%; justify-content:space-between; } .actions .primary { flex:1; } .relation .part { font-size:15px; padding:8px; } h2 { letter-spacing:-.7px; } .top { gap:8px; } .progress { white-space:nowrap; } }
    .subfacts { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:20px; }
    .subfact { padding:18px; background:#f6f9f7; border:1px solid var(--aa-line); border-radius:14px; }
    .subfact.blue { background:#f4f7fa; }
    .subfact label { display:flex; align-items:center; justify-content:center; gap:12px; font-size:20px; }
    .part-chip { white-space:nowrap; }
    .field-feedback { font-size:13px; line-height:1.55; margin:10px 0 0; padding:10px 12px; border-radius:8px; }
    .warning { background:#fff4df; color:#78511a; border:1px solid #ebd4a7; }
    .positive { background:var(--aa-mint); color:#28634e; border:1px solid #b5d8c5; }
    .feedback-slot:empty { display:none; }
    .dot { border:0; padding:0; z-index:2; }
    .dot:disabled { opacity:1; }
    .dot.pooled { background:#a3b7ac; }
    .dot:not(:disabled)[data-action="return"]:hover { outline:3px solid #c5d6cc; }
    .lane-add { position:absolute; top:0; left:0; width:24px; height:24px; padding:0; border:1px dashed #a3b7ac; border-radius:50%; background:white; color:#586d64; z-index:3; line-height:20px; }
    .lane-label { position:absolute; left:-26px; font-size:11px; color:var(--aa-muted); }
    .pool-label { position:absolute; left:0; font-size:10px; color:var(--aa-muted); }
    .row-tally { position:absolute; right:-47px; font-size:12px; color:#78511a; background:#fff4df; padding:2px 6px; border-radius:5px; }
    .cut { position:absolute; left:-20px; right:-55px; height:16px; border:0; border-top:1px dashed #b8c9bf; background:transparent; z-index:4; padding:0; color:#64776c; }
    .cut span { position:absolute; right:-30px; top:-10px; padding:3px 6px; border-radius:6px; font-size:10px; background:#f8faf8; opacity:0; }
    .cut:hover,.cut:focus-visible { border-color:#516d60; background:#d9e8df70; }
    .cut:hover span,.cut:focus-visible span,.cut.recommended span { opacity:1; }
    .cut.recommended { border-top:2px dashed #8a9c75; }
    .debug { padding:14px 6px; color:var(--aa-muted); font-size:12px; }
    .debug summary { cursor:pointer; }
    .playground { min-height:290px; }
    .array { margin-top:24px; }
    @media(max-width:600px) { .subfacts { grid-template-columns:1fr; } .cut { right:-16px; } .cut span { right:-16px; } }
    .math-token { animation:mathReveal ${MATH_REVEAL}ms ${MOTION_EASE} both; transition:opacity ${MOTION_FAST}ms, translate ${MOTION_NORMAL}ms; }
    .math-hidden { opacity:0; visibility:hidden; animation:none; }
    .math-combine { gap:5px; transition:gap ${MOTION_NORMAL}ms; }
    .attention { animation:attention ${CUE_DURATION}ms ease-in-out both; }
    .lane-add { width:28px; height:28px; border:1.5px solid #809b8c; background:#fff; font-size:20px; box-shadow:0 2px 5px #203c3710; transition:scale ${MOTION_FAST}ms,box-shadow ${MOTION_FAST}ms; }
    .lane-add:hover:not(:disabled) { scale:1.04; box-shadow:0 0 0 2px #b7ccbe30; }
    .lane-add:active:not(:disabled) { scale:.97; }
    .dot.placed { animation:settle ${MOTION_NORMAL}ms ${MOTION_EASE}; }
    .cut { border-top:1.5px dashed #9aafa2; }
    .cut::before { content:'↕'; position:absolute; left:-6px; top:-10px; width:19px; height:19px; line-height:17px; border:1px solid #a3b7ac; border-radius:5px; background:white; color:#526c5d; font-size:13px; }
    .cut.recommended { border-top:2px dashed #72897b; }
    .cut.recommended::before { background:#edf2ed; border-color:#6b8374; }
    .cut.recommended span { border:1px solid #c2d0c7; background:white; padding:4px 7px; top:-14px; }
    .cut:active { background:#d6e1d9; }
    [data-action="deal"] { border:1.5px solid #839c8d; background:#f1f5f2; box-shadow:0 2px 5px #203c3710; }
    [data-action="deal"]:active { scale:.98; }
    .share-plus { position:absolute; color:#4e6659; font-size:13px; font-weight:650; animation:sharePlus ${MOTION_MATH}ms both; }
    .support-link { margin:8px auto 0; display:block; color:#52687b; padding:8px 12px; border:1px solid #ccd7df; border-radius:8px; background:white; font-size:12px; }
    .support-link:hover { background:#edf2f6; }
    .support-live { text-align:center; font-size:16px; color:#485f72; min-height:0; }
    .support-live:not(:empty) { padding:12px 4px 4px; }
    .dot.count-active { outline:4px solid #c3ced8; background:#476b88; scale:1.025; }
    @keyframes mathReveal { from { opacity:0; translate:0 3px; } to { opacity:1; translate:0 0; } }
    @keyframes attention { 0%,100% { scale:1; box-shadow:0 0 0 0 #8ca89a00; } 50% { scale:1.035; box-shadow:0 0 0 3px #8ca89a20; } }
    @keyframes sharePlus { 0% { opacity:0; translate:0 6px; } 30%,70% { opacity:1; translate:0 0; } 100% { opacity:0; translate:0 -5px; } }
    .join-equation { display:inline-flex; align-items:baseline; gap:9px; font-size:25px; font-weight:550; letter-spacing:-.6px; font-variant-numeric:tabular-nums; }
    .join-prefix { display:grid; }
    .join-prefix > span { grid-area:1 / 1; text-align:right; white-space:nowrap; transition:opacity ${EQUATION_REVEAL}ms ${MOTION_EASE},translate ${EQUATION_REVEAL}ms ${MOTION_EASE}; }
    .fact-prefix { opacity:0; translate:-3px 0; }
    .join-equation.is-final .sum-prefix { opacity:0; translate:0 -2px; }
    .join-equation.is-final .fact-prefix { opacity:1; translate:0 0; }
    .sum-result { color:var(--aa-accent); animation:mathReveal ${MATH_REVEAL}ms ${MOTION_EASE} both; }
    .attention-dismissed { animation:none!important; }

    /* Quiet workshop system: a single field, clay bodies and independent contact shadows. */
    :host { --aa-accent:#315e51; --aa-ink:#263e35; --aa-muted:#687265; --aa-line:#d8dccf; --aa-mint:#e6ede1; --bead-size:32px; }
    .card { background:#fafaf5; border:1px solid #d6d9cb; border-radius:28px; box-shadow:0 24px 70px #263e3512,0 2px 3px #263e3508; }
    .top { background:#294b40; color:#f7f7eb; border:0; padding:21px 32px; }
    .top .sub,.top .progress { color:#cfdbcb; }
    .symbol { background:#ffffff0d; border:1px solid #e6eddf22; border-radius:13px 11px 15px 7px; }
    .symbol i { background:#d4dfbd; }
    .track i { height:6px; width:19px; background:#ffffff20; transition:background 700ms,scale 700ms; }
    .track i.done { background:#d4dfbd; }.track i.current { background:#8ca68e; }
    .content { padding:30px 30px 22px; }
    .content > .eyebrow,.content > h2,.content > .lead { text-align:center; }
    .content > .eyebrow { margin:0 auto 12px; color:#64705b; letter-spacing:1.9px; font-size:10px; font-weight:650; }
    h2 { font-size:clamp(24px,2.7vw,31px); font-weight:520; letter-spacing:-1px; max-width:650px; margin:0 auto 10px; }
    .lead { font-size:14px; max-width:590px; margin:auto; }
    .playground { padding:48px 20px 22px; margin:24px -10px 0; min-height:360px; border-radius:24px 24px 0 0; background:linear-gradient(165deg,#edf0e6,#e3e7da); border:1px solid #d8ddcf; box-shadow:inset 0 2px 4px #45513c0a,inset 0 -1px 0 #ffffff90; overflow:visible; }
    .relation:empty { display:none; }
    .playground:has(+ .relation:empty) { border-radius:24px; border-bottom:1px solid #d8ddcf; }
    .playground:has(.stage-tools .controls) { min-height:300px; }
    .playground { border-bottom:0; }
    .playground::before,.playground::after { content:''; position:absolute; top:19px; width:5px; height:5px; border-radius:50%; background:#84927a55; box-shadow:inset 0 1px 1px #43513b20; }
    .playground::before { left:19px; }.playground::after { right:19px; }
    .playground-label { position:absolute; top:17px; left:34px; font-size:9px; letter-spacing:2px; color:#66745e; }
    .playground.helper-present::after { content:'··'; width:28px; height:30px; top:10px; right:15px; display:grid; place-items:center; font-size:18px; letter-spacing:3px; padding-left:3px; color:#4d5940; background:#e5ddbf; border-radius:12px 10px 14px 6px; box-shadow:0 2px 0 #cbc5ab; animation:mathReveal 420ms ease both; }
    .field-scroll { width:100%; overflow-x:auto; overflow-y:hidden; padding:14px 38px 12px; scrollbar-width:thin; }
    .array { margin:0 auto; transition:width 620ms ${MOTION_EASE},height 620ms ${MOTION_EASE}; }
    .dot { width:40px; height:40px; background:none!important; box-shadow:none!important; border:0; border-radius:50%; isolation:isolate; padding:4px; overflow:visible; transition:transform ${TOKEN_TRAVEL}ms ${MOTION_EASE}; }
    .dot::before { content:''; position:absolute; z-index:-1; left:8px; right:6px; top:29px; height:10px; border-radius:50%; background:radial-gradient(ellipse,#263c3240 0%,#263c3219 45%,transparent 73%); transform:scale(1); transition:transform 180ms,opacity 180ms; }
    .bead { display:block; position:relative; width:100%; height:100%; border-radius:47% 50% 46% 49%; background:linear-gradient(145deg,#81a28b 0%,#628770 45%,#4b735e 100%); box-shadow:inset 0 1px 1px #edf3d950,inset -1px -2px 2px #1b3d3328; transition:translate 180ms ${MOTION_EASE},scale 180ms,background 300ms; }
    .bead::before { content:''; position:absolute; left:5px; top:3px; width:14px; height:7px; background:linear-gradient(155deg,#f1f5dc32,transparent); border-radius:50%; rotate:-28deg; }
    .bead::after { content:''; position:absolute; inset:1px; border-radius:inherit; border:1px solid #ffffff0c; border-bottom-color:#183b3315; }
    .dot.second .bead { background:linear-gradient(145deg,#9daeb7,#8098a5 45%,#677f8c); }
    .dot.pooled .bead { background:linear-gradient(145deg,#d0c3a2,#b8a983 50%,#a3936f); }
    .dot.in-flight { z-index:7; }.dot.in-flight .bead { translate:0 -3px; scale:1.025; }
    .dot.in-flight::before { transform:scale(1.28); opacity:.5; }
    .dot.landing .bead { animation:claySettle ${TOKEN_SETTLE}ms ease-out; }
    .dot.landing::before { animation:contactSettle ${TOKEN_SETTLE}ms ease-out; }
    .dot.new { animation:appear 260ms ease-out both; }
    .dot.placed { animation:none; }
    .dot:not(:disabled)[data-action="return"]:hover { outline:none; }
    .dot:not(:disabled)[data-action="return"]:hover .bead { translate:0 -2px; }
    .dot:not(:disabled)[data-action="return"]:hover::before { transform:scale(1.15); opacity:.65; }
    .dot:focus-visible { outline:2px solid #315e51; outline-offset:1px; }
    .dot.count-active { outline:2px solid #4f6c7a; outline-offset:2px; background:none; scale:1; }
    .dot.count-active .bead { translate:0 -2px; }
    @keyframes claySettle { 0% { translate:0 -2px; scale:1.015; } 65% { translate:0 1px; scale:1.01 .97; } 100% { translate:0 0; scale:1; } }
    @keyframes contactSettle { 0% { transform:scale(1.2); opacity:.5; } 65% { transform:scale(.9); opacity:1; } 100% { transform:scale(1); opacity:1; } }
    .lane-bed { position:absolute; pointer-events:none; border:0; border-bottom:1px solid #bcc7b366; background:linear-gradient(180deg,#ffffff00,#f9faf12e); border-radius:12px; }
    .pool-bed { position:absolute; pointer-events:none; border:1px solid #c7c2ac; background:#d8d2bc; box-shadow:inset 0 3px 6px #5c594812,inset 0 -1px 0 #fffff780; border-radius:32px 27px 35px 19px; }
    .pool-label,.field-label { position:absolute; color:#64705a; font-size:9px; letter-spacing:1.6px; text-transform:uppercase; white-space:nowrap; }
    .lane-label { position:absolute; color:#5f6c55; font-size:11px; line-height:40px; font-variant-numeric:tabular-nums; }
    .lane-add { width:40px; height:40px; border:1px solid #a4b098; border-radius:15px 15px 17px 10px; background:#f5f5e8; color:#4f6348; box-shadow:inset 0 1px 0 #fff,0 2px 1px #53674c1a; font-size:23px; line-height:36px; }
    .lane-add:hover:not(:disabled) { scale:1.035; box-shadow:0 0 0 3px #9eb19520; }
    .lane-add:active:not(:disabled) { scale:.98; }
    .array-caption { font-size:12px; color:#5b6b55; letter-spacing:.2px; margin:7px 0 0; }
    .array-caption .count-chip { display:inline-flex; align-items:center; justify-content:center; min-width:27px; padding:4px 7px; margin:0 3px; background:#f8f8ed90; border-radius:8px; font-variant-numeric:tabular-nums; }
    .stage-tools { display:flex; justify-content:center; margin-top:16px; min-height:0; }
    .stage-tools:empty { display:none; }
    .stage-tools .controls { margin:0; gap:10px; }
    .control { padding:9px 14px; background:#f6f5e9; border:1px solid #cbd0bd; border-radius:16px; gap:14px; box-shadow:0 3px 0 #bec7b438; }
    .control-label { font-size:12px; min-width:0; }.stepper button { width:40px; height:40px; background:#e8ebdf; border-radius:11px; }
    .stage-tool,[data-action="deal"] { display:flex; align-items:center; gap:15px; min-height:54px; border:1px solid #b6bea7; border-radius:19px 19px 21px 10px; padding:9px 20px 9px 12px; background:#f5f3e5; color:#304f3c; box-shadow:inset 0 1px 0 #fff,0 4px 0 #bdc6ad,0 6px 8px #43553912; font-size:13px; font-weight:600; transition:translate 160ms,box-shadow 160ms; }
    .tool-teeth { display:grid; grid-template-columns:repeat(4,4px); gap:3px; padding:8px; border-right:1px solid #d1d6c3; }.tool-teeth i { width:4px; height:12px; background:#6d8361; border-radius:3px; }
    .stage-tool:hover:not(:disabled) { translate:0 -1px; }.stage-tool:active:not(:disabled) { translate:0 3px; box-shadow:inset 0 1px 2px #65764e15,0 1px 0 #bdc6ad; }
    .stage-tool:disabled { opacity:.6; }
    .relation { position:relative; min-height:72px; margin:0 -10px; padding:16px 20px; border:1px solid #d8ddcf; border-top:0; background:#e3e7da; border-radius:0 0 24px 24px; gap:14px; }
    .relation strong { font-size:30px; font-weight:540; letter-spacing:-.9px; }.relation .part { padding:7px 14px; background:#f3f6eb; border:1px solid #cbd5c2; border-radius:13px 12px 15px 8px; box-shadow:0 2px 0 #c7d0bb70; font-size:19px; }
    .relation .part.blue { background:#edf1f2; border-color:#c5d1d6; box-shadow:0 2px 0 #c2cdd070; }
    .part-tag strong { display:block; font-size:23px; font-weight:550; padding-top:3px; }
    .part-moving { position:relative; z-index:8; }
    .sum-prefix { display:inline-flex; gap:8px; align-items:baseline; justify-content:flex-end; }
    .join-prefix { min-width:175px; }
    .joining .array-caption { opacity:0; transition:opacity 200ms; }
    .joining .subfacts { opacity:.45; transition:opacity 250ms; }
    .join-equation { font-size:30px; }.sum-result { min-width:1.3em; text-align:left; }
    .join-gather { gap:50px; transition:gap 620ms ${MOTION_EASE}; }.join-gather.math-combine { gap:12px; }
    .subfacts { max-width:700px; margin:22px auto 0; gap:20px; }
    .subfact { padding:12px 16px; background:none; border:0; border-left:3px solid #8da78c; border-radius:0; box-shadow:none; }
    .subfact.blue { background:none; border-left-color:#9dafba; }
    .subfact label { gap:10px; font-size:19px; }
    input { width:72px; height:48px; background:#eeefe5; border:1px solid #d5dbca; border-bottom:2px solid #91a385; border-radius:12px 12px 15px 8px; box-shadow:inset 0 2px 3px #34463109; font-size:24px; }
    input:disabled { opacity:1; color:#365941; background:#e4eadb; }
    .support-link { border:0; background:none; color:#4e6671; font-size:12px; border-bottom:1px solid #bbc8cc; border-radius:0; padding:6px 0; }
    .support-link:hover { background:none; color:#273f4a; }
    .actions { max-width:none; background:none; border:0; border-top:1px solid #dce1d3; border-radius:0; padding:17px 0 0; margin:20px 0 0; }
    .primary { border-radius:16px 16px 18px 9px; padding:12px 23px; background:#315e51; border:1px solid #315e51; box-shadow:inset 0 1px 0 #ffffff20,0 3px 0 #23463b; transition:translate 160ms,box-shadow 160ms; }
    .primary:hover:not(:disabled) { background:#284e43; translate:0 -1px; }.primary:active:not(:disabled) { translate:0 2px; box-shadow:0 1px 0 #23463b; }
    .secondary { border-radius:16px 16px 18px 9px; background:#f1f1e6; }
    .text-button { font-size:12px; text-decoration:none; color:#5d6d56; }
    .text-button::before { content:'··'; display:inline-grid; place-items:center; width:24px; height:25px; margin-right:8px; letter-spacing:3px; padding-left:3px; border-radius:10px 9px 12px 5px; background:#e5ddbf; color:#596346; box-shadow:inset 0 1px 0 #ffffff90; font-weight:900; }
    .guide-mark { display:inline-grid; place-items:center; width:31px; height:32px; margin-right:9px; vertical-align:middle; background:#e5ddbf; border:1px solid #cbc4a5; border-radius:13px 11px 15px 6px; color:#49523d; box-shadow:inset 0 1px 0 #fff8,0 2px 2px #53562f12; rotate:-4deg; }
    .guide-mark::after { content:'··'; letter-spacing:4px; padding-left:4px; font-size:16px; font-weight:900; translate:0 -2px; }
    .field-feedback { border-radius:16px 16px 19px 7px; text-align:left; }.warning { background:#f4eddb; border-color:#dfd1b3; color:#6b531e; }
    .feedback { max-width:700px; margin:18px auto 0; padding:12px 15px; background:#edf2e6; text-align:center; border:0; border-radius:17px 17px 20px 8px; font-size:13px; animation:mathReveal 420ms ease both; }
    .feedback::before { content:'✓'; display:inline-grid; place-items:center; width:28px; height:29px; border-radius:12px 10px 14px 6px; background:#d4e1c9; margin-right:9px; }
    .summary-mark { width:76px; height:78px; border-radius:31px 27px 35px 15px; background:#e5ddbf; border:1px solid #cbc4a5; color:#46553b; rotate:-5deg; box-shadow:inset 0 1px 0 #fff8,0 5px 0 #cec7aa; }
    .cut { left:-26px; right:-32px; height:40px; border:0; background:transparent; color:#64745b; opacity:0; animation:boundaryReveal 400ms ease 650ms forwards; }
    .cut::after { content:''; position:absolute; left:2px; right:0; top:19px; border-top:1px dashed #9daa90; pointer-events:none; }
    .cut::before { content:'⋮'; position:absolute; left:auto; right:-23px; top:0; width:25px; height:26px; line-height:24px; translate:0 6px; border:1px solid #bdc5af; border-radius:14px 12px 16px 7px; background:#f6f4e7; font-size:18px; color:#586b4b; box-shadow:0 2px 1px #9fad9125; }
    .cut span { top:6px; right:21px; padding:5px 8px; font-size:10px; border-radius:12px 12px 14px 5px; z-index:1; }
    .cut.recommended { border:0; }.cut.recommended::before { width:36px; height:38px; line-height:36px; translate:0 0; content:'··'; font-size:19px; font-weight:900; letter-spacing:3px; background:#e4dcbf; border-color:#bdb79a; }
    .cut.recommended span { top:6px; padding:5px 8px; background:#faf8ed; border:1px solid #cdd3be; color:#536348; }
    .cut:hover,.cut:focus-visible { background:#ecf2e050; border-radius:12px; }
    .cut.attention,.cut.attention-dismissed { opacity:1; }
    @keyframes boundaryReveal { to { opacity:1; } }
    .divider { left:-20px; right:-20px; border-color:#85947b; }.divider.visible { animation:dividerRest 1300ms ease forwards; }
    @keyframes dividerRest { 0%,45% { opacity:.8; } 100% { opacity:.18; } }
    .part-tag { position:absolute; right:-86px; color:#4f6650; font-size:12px; white-space:nowrap; padding:6px 8px; border-left:1px solid #9aae90; animation:mathReveal 420ms ease both; }
    .part-tag.blue { color:#4f6470; border-color:#a6b8c2; }
    .resolved .playground { box-shadow:inset 0 2px 4px #45513c0a,0 0 0 2px #9fb69130; transition:box-shadow 700ms; }
    .resolved .array { animation:settle 600ms ease-out; }.resolved .part-tag { opacity:0; }
    .intro .playground { max-width:none; min-height:290px; margin:24px -10px 0; }.intro .relation { margin:0 -10px; }
    .intro .actions { border:0; margin-top:20px; }.intro-copy { font-size:14px; }
    .anticipate .lead { animation:mathReveal 450ms 450ms both; }.anticipate h2 { animation:mathReveal 450ms 250ms both; }
    @media(max-width:700px) { .content { padding:24px 20px 18px; }.top { padding:19px 22px; }.track { display:flex; }.track i { width:10px; }.playground { padding:40px 8px 18px; }.field-scroll { padding:14px 32px 12px; }.subfacts { gap:10px; }.part-tag { right:-70px; font-size:11px; }.playground-label { font-size:8px; } }
    @media(max-width:480px) { .content { padding:24px 14px 18px; }.top { padding:16px; }.sub { font-size:10px; }.symbol { display:none; }.track { display:none; }.playground { margin-left:-4px; margin-right:-4px; }.relation { margin-left:-4px; margin-right:-4px; }.field-scroll { padding-left:23px; padding-right:23px; }.part-tag { position:static; display:none; }.subfacts { grid-template-columns:1fr; }.control { width:auto; padding:8px; }.controls { gap:8px; }.control-label { font-size:11px; }.stepper { gap:8px; }.cut { left:0; right:0; }.cut::before { right:-21px; }.cut span { right:20px; }.relation strong,.join-equation { font-size:26px; } }
    @media(prefers-reduced-motion:reduce) { .cut { opacity:1; } *,*::before,*::after { animation:none!important; transition:none!important; }.dot.in-flight .bead { translate:0 0; scale:1; } }

      .stall-glyph{position:absolute;right:22px;top:42px;pointer-events:none}.transfer-stage{max-width:740px;margin:auto}.transfer-fact{font-size:48px;font-weight:550;margin:24px auto;letter-spacing:-2px}.strategy-choices{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:28px 0}.strategy-choice{min-height:78px;border:1px solid #c9cdbd;border-radius:20px 17px 23px 15px;background:#f1f0e4;color:#29443d;box-shadow:inset 0 2px 0 #fff9,0 3px 0 #d2d6c8;font-size:19px;padding:12px}.strategy-choice:hover{transform:translateY(-2px);border-color:#55796b}.strategy-choice:active{transform:translateY(1px)}.strategy-choice[aria-pressed="true"]{opacity:1;border-color:#577365;background:#e3ecdf}.transfer-note.transfer-success{background:#e3ecdf;color:#294d3e}.transfer-note{padding:12px;color:#655437;background:#f1ecd9;border-radius:12px}.area-model{display:flex;max-width:500px;height:150px;margin:28px auto 16px;gap:4px;animation:math-reveal 800ms ease-out}.area-model.area-rows{flex-direction:column;height:220px}.area-model>div{display:grid;place-items:center;background:#d2e0d3;border:1px solid #b4c9b9;border-radius:12px;color:#274f40;font-size:23px}.area-model>div+div{background:#d8e0e4;color:#354e5c;border-color:#b9c8ce}.transfer-stage .actions{margin-top:26px}@media(max-width:600px){.strategy-choices{grid-template-columns:1fr}.strategy-choice{min-height:56px}.transfer-fact{font-size:38px}}

    /* Viewport shell: content yields to the arena; actions keep a stable position. */
    :host {height:100%;min-height:0;position:relative;--aa-ink:#243746;--aa-muted:#5F7480;--aa-accent:#2F5D7C;--aa-mint:#DCEEE8;--aa-line:#E3ECEC;}
    .card {height:100%;min-height:0;display:flex;flex-direction:column;position:relative;border-radius:20px;background:#fff;border:1px solid var(--aa-line);box-shadow:0 10px 30px rgba(36,55,70,.07);}
    .top {flex:none;height:64px;padding:12px 24px;background:#fff;color:var(--aa-ink);border-bottom:1px solid var(--aa-line);}
    .identity {gap:10px}.brand-logo {width:34px;height:34px;object-fit:contain;border-radius:50%;} h1 {font-size:15px;letter-spacing:0;margin:0 0 3px;font-weight:600}.sub {font-size:12px;color:var(--aa-muted)}.header-context {font-size:10px;letter-spacing:1.3px;text-transform:uppercase;color:var(--aa-muted);margin-right:28px;}
    .progress {flex:none;display:grid;grid-template-columns:1fr auto;gap:7px;padding:10px 24px 0;font-size:11px;color:var(--aa-muted);background:#fff;}.track {grid-column:1/-1;display:flex;gap:4px;width:100%;}.track i {flex:1;width:auto;height:3px;background:#E6EFEE}.track i.done {background:#6FA8A3}.track i.current {background:#b3d1cc}
    .content {flex:1;min-height:0;display:flex;flex-direction:column;padding:16px 24px 80px;overflow:hidden;position:static;}
    .content>.eyebrow {flex:none;margin:0 0 6px;font-size:10px;line-height:18px;letter-spacing:1.2px;color:var(--aa-muted)}
    .content>h2 {flex:none;font-size:24px;line-height:1.25;margin:0 0 6px;font-weight:550;color:var(--aa-ink)}.lead,.intro-copy {flex:none;font-size:13px;line-height:1.45;color:var(--aa-muted);margin:0 0 10px}.intro-copy br {display:none}
    .playground,.intro .playground {flex:1;min-height:80px;max-width:none;width:100%;margin:8px 0 0;padding:26px 12px 8px;overflow:hidden;border:1px solid var(--aa-line);border-radius:16px;background:#FBFDFD;box-shadow:inset 0 1px 3px #24374604;justify-content:flex-start;}
    .playground:before,.playground:after {display:none}.playground-label {top:10px;left:16px;font-size:9px;color:var(--aa-muted);letter-spacing:1.2px;}
    .field-scroll {flex:1;min-height:0;display:grid;place-items:center;overflow:auto;width:100%;padding:16px 44px 8px;scrollbar-width:thin;}.array {margin:0;flex:none;transform-origin:center;}.array-caption {flex:none;margin:2px 0 0;font-size:11px;min-height:18px;color:var(--aa-muted)}
    .stage-tools {flex:none;margin-top:6px}.control {padding:4px 12px;gap:12px;background:#fff;border:1px solid var(--aa-line);border-radius:12px;box-shadow:none}.stepper button {width:36px;height:34px;background:#EEF6F5}.stage-tool,[data-action="deal"] {min-height:40px;padding:4px 14px;gap:8px;border-radius:12px;background:#EEF6F5;border-color:var(--aa-line);color:#496D73;box-shadow:0 2px 0 #E3ECEC;}.tool-teeth {padding:5px}.tool-teeth i {background:#6FA8A3}
    .relation,.intro .relation {flex:none;min-height:40px;padding:8px 12px;margin:0;border:0;background:transparent;border-radius:0;gap:10px;}.relation strong,.join-equation {font-size:25px}.relation .part {padding:4px 10px;font-size:16px;background:#EEF6F5;border-color:var(--aa-line);box-shadow:none}.relation .part.blue {background:#EEF6F5;box-shadow:none;color:#2F5D7C}
    [data-work] {flex:none;max-height:36%;overflow:auto;scrollbar-width:thin;}[data-work]>.quiet {margin:4px 0;line-height:1.4}
    .actions,.intro .actions {position:absolute;bottom:0;left:0;right:0;height:66px;min-height:66px;margin:0;padding:10px 24px;display:flex;justify-content:space-between;flex-wrap:nowrap;gap:12px;background:#fff;border-top:1px solid var(--aa-line);z-index:10;}.intro .actions {justify-content:flex-end}.actions .primary {margin-left:auto;}
    .primary,.secondary {min-height:42px;padding:10px 20px;border-radius:12px;font-size:13px;box-shadow:none;}.primary {background:var(--aa-accent);border-color:var(--aa-accent)}.primary:hover:not(:disabled) {background:#244b66}.secondary {background:#EEF6F5;border-color:var(--aa-line);color:#496D73}.text-button {color:#496D73}.text-button:before,.guide-mark {background:#DCEEE8;border-color:#c4ded6;color:#315F58;box-shadow:none;}
    .subfacts {margin:4px auto 0;gap:16px;max-width:760px}.subfact {padding:4px 12px;border-left-color:#6FA8A3}.subfact.blue {border-left-color:#2F5D7C}.subfact label {font-size:17px}input {height:38px;width:64px;font-size:21px;background:#FBFDFD;border:1px solid #b6ccce;border-radius:10px;box-shadow:none}input:disabled {background:#EEF6F5;color:var(--aa-ink)}.support-link {padding:4px 0;min-height:28px;}
    .field-feedback,.feedback {padding:7px 10px;margin:5px 0 0;font-size:12px;line-height:1.4;border-radius:10px;box-shadow:none;}.feedback,.positive {background:#EEF7F3;color:#315F58;border-color:#DCEEE8}.warning {background:#FFF6ED;color:#805C34;border-color:#f0e2d2}.feedback {max-width:none}.feedback:before {margin-right:8px;}
    .pool-bed {background:#EEF6F5;border-color:#E3ECEC;box-shadow:inset 0 2px 4px #24374606;border-radius:16px}.lane-bed {background:none;border-color:#E3ECEC}.pool-label,.field-label,.lane-label {color:var(--aa-muted)}.lane-add {background:#fff;border-color:#6FA8A3;color:#2F5D7C;border-radius:50%;box-shadow:0 1px 2px #2437460d}.count-chip {background:#EEF6F5!important}
    .bead {background:linear-gradient(145deg,#95bdb8,#6FA8A3 58%,#60928e)}.dot.second .bead {background:linear-gradient(145deg,#7092a8,#527d99 58%,#2F5D7C)}.dot.pooled .bead {background:linear-gradient(145deg,#c2d8d4,#a8c4bf 58%,#93b1ac)}.cut,.cut.recommended {border-color:#6FA8A3}.cut span {background:#EEF6F5;color:#2F5D7C}.cut:before {background:#DCEEE8;color:#315F58;border-color:#bfd7d1}
    .summary,.transfer-stage {width:100%;max-width:760px;min-height:0;overflow:auto;margin:auto;padding:0 12px;scrollbar-width:thin}.summary-mark {width:50px;height:50px;margin:0 auto 12px;background:#EEF6F5;border-color:var(--aa-line);box-shadow:none}.check-list {margin:12px 0}.check-list li {padding:10px 0}.transfer-fact {font-size:36px;margin:12px auto}.strategy-choices {margin:16px 0;gap:12px}.strategy-choice {min-height:56px;border-radius:14px;background:#EEF6F5;border-color:var(--aa-line);box-shadow:0 2px 0 #E3ECEC;font-size:17px}.area-model,.area-model.area-rows {height:120px;margin:12px auto}.transfer-note {margin:8px 0;padding:8px}.transfer-stage .lead {margin-bottom:8px}
    .debug {position:absolute;top:18px;right:18px;z-index:20;padding:0;font-size:11px}.debug>summary {font-size:0;list-style:none;cursor:pointer;color:var(--aa-muted)}.debug>summary:after {content:'⋯';font-size:20px}.debug[open] {top:12px;background:#fff;border:1px solid var(--aa-line);padding:10px 12px;border-radius:12px;box-shadow:0 4px 18px #24374612;max-width:270px}.debug[open]>summary {font-size:11px}.debug[open]>summary:after {float:right}.debug .quiet {display:block}
    @media(max-height:760px) {.content {padding-top:10px}.content>h2 {font-size:22px}.content>.eyebrow {margin-bottom:3px}.lead {margin-bottom:4px}.relation {min-height:36px;padding:5px 10px}.guide-mark {width:24px;height:24px}.subfact label {font-size:16px}}
    @media(max-width:700px) {.top {padding:10px 16px}.progress {padding:8px 16px 0}.content {padding:10px 16px 76px}.actions {padding:8px 16px}.header-context {display:none}.subfacts {grid-template-columns:1fr 1fr;gap:8px}.subfact {padding:3px 6px}.field-scroll {padding-left:26px;padding-right:34px}.actions .quiet {font-size:11px}.intro-copy {max-width:470px}}
.top .sub {color:var(--aa-muted)}.content>h2,.content>.intro-copy,.content>.lead {width:100%;max-width:none;text-align:center}.intro-copy {padding:0 12%;}.intro-copy br {display:none}

    /* Release polish: one calm palette, restrained satin material. */
    .brand-logo {border-radius:0;object-fit:contain;box-shadow:none;filter:none;}
    .header-context {margin-right:0}.card:has(+.debug:not([hidden])) .header-context {margin-right:28px}.debug[hidden] {display:none!important}
    .strategy-choice {color:var(--aa-ink)}.strategy-choice[aria-pressed="true"] {background:var(--aa-mint);border-color:#6FA8A3;color:var(--aa-ink)}.strategy-choice:hover {border-color:#6FA8A3;transform:none}.strategy-choice:active {transform:translateY(1px)}
    .transfer-note {background:#FFF6ED;color:#805C34}.transfer-note.transfer-success {background:#EEF7F3;color:#315F58}.area-model>div {background:#DCEEE8;color:#315F58;border-color:#E3ECEC}.area-model>div+div {background:#EEF6F5;color:#2F5D7C;border-color:#E3ECEC}
    .row-tally {background:#EEF6F5;color:#2F5D7C}.cut.recommended:before,.cut:hover:before,.cut:focus-visible:before {background:#DCEEE8;border-color:#6FA8A3;color:#315F58;box-shadow:none}.cut:hover,.cut:focus-visible {background:#EEF6F5;border-color:#6FA8A3}.cut span {background:#EEF6F5;color:#2F5D7C}
    .guide-mark,.summary-mark,.text-button:before {background:#EEF6F5;border-color:#E3ECEC;color:#315F58}.support-link,.part-tag,.part-tag.blue {color:#2F5D7C}.support-live {color:#2F5D7C;background:#EEF6F5}.feedback::before {background:#DCEEE8}.part-tag,.part-tag.blue {border-color:#E3ECEC}
    .bead {background:linear-gradient(145deg,#83b2ad,#6FA8A3);box-shadow:inset 0 1px 1px #ffffff24,inset 0 -1px 1px #24374616}.bead:before {opacity:.45}.bead:after {border-color:#ffffff0a;border-bottom-color:#24374610}.dot:before {opacity:.55}.dot.second .bead {background:linear-gradient(145deg,#61859e,#52778f)}.dot.pooled .bead {background:linear-gradient(145deg,#bfd5d1,#adc8c3)}
    .primary:disabled {opacity:1;background:#DCE5E9;border-color:#DCE5E9;color:#5F7480;box-shadow:none}.secondary:disabled {opacity:1;background:#F7FAFA;color:#5F7480}.primary:hover:not(:disabled),.secondary:hover:not(:disabled) {translate:0 -1px}.primary:active:not(:disabled) {translate:0 1px}.primary,.secondary {font-weight:550;transition:background 200ms ease,translate 200ms ease}
    button:focus-visible,input:focus-visible {outline:2px solid #2F5D7C;outline-offset:3px}.content>.lead {min-height:19px}.content>.eyebrow {min-height:18px}
`;
  globalThis.LogiferaELocalStyles=styles;
})();
