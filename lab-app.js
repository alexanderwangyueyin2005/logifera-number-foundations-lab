(function(){
  'use strict';
  const D=LabData,E=LabEngine,V=LabViews,core=LogiferaInterventionCore;
  class NumberFoundationsLab extends HTMLElement{
    constructor(){super();this.attachShadow({mode:'open'});let storage;try{storage=window.localStorage;}catch{}this.store=E.createStore(storage);this.session=this.store.load();this.motion=[];}
    connectedCallback(){
      this.shadowRoot.addEventListener('click',e=>this.onClick(e));
      this.shadowRoot.addEventListener('input',e=>this.onInput(e));
      this.shadowRoot.addEventListener('keydown',e=>this.onKey(e));
      if(!this.session.summary)E.open(this.session,this.session.activeTask);
      this.render();this.persist();
    }
    persist(){this.store.save(this.session);}
    rail(){const s=this.session;return `<aside class="session-rail" aria-label="Your learning session"><div class="subject-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></div><strong class="subject-name">Math</strong><span class="module-name">Number Foundations Lab</span><p class="rail-label">YOUR SESSION</p><ol>${D.constructs.map((c,i)=>{const done=E.completed(s,c.id)===3,active=s.activeConstruct===c.id;return `<li class="${active?'active ':''}${done?'complete':''}"><button class="lab-nav" type="button" data-action="construct" data-value="${c.id}" aria-label="${c.name}, ${E.completed(s,c.id)} of 3 completed" ${active?'aria-current="step"':''}><span class="journey-dot" aria-hidden="true">${done?'✓':String(i+1).padStart(2,'0')}</span><span>${c.name}<small>${c.caption}</small></span></button></li>`;}).join('')}</ol><div class="rail-footer"><span class="rail-flower" aria-hidden="true"></span><p>Small steps.<br>Connected ideas.</p></div></aside>`;}
    progress(){const s=this.session,c=D.constructs.find(c=>c.id===s.activeConstruct),n=E.completed(s);let rail=core.progressRail(0,3);rail=rail.replace(/class="(?:current)?" data-node="(\d)"/g,(_,index)=>`class="${E.completed(s,D.constructs[index].id)===3?'done':Number(index)===D.constructs.indexOf(c)?'current':''}" data-node="${index}"`);return `<div class="session-progress"><div class="module-caption">${c.name}<span>${s.summary?'Session complete':'Activity '+(Number(s.activeTask.slice(-1)))+' of 3'}</span></div><div class="progress"><span class="progress-label">${n} of 9 completed</span>${rail}</div></div>`;}
    body(){const s=this.session;if(s.summary)return `<div class="summary center"><div class="summary-mark">${core.glyph('complete')}</div><p class="eyebrow">Small steps, connected</p><h2 tabindex="-1">9 activities completed</h2><p class="lead">You built quantities, explored structure and tried calculation strategies.</p><ul class="check-list">${D.constructs.map(c=>`<li>${c.name} · ${E.completed(s,c.id)} of 3 completed</li>`).join('')}</ul><p class="quiet">A research-informed accessible learning prototype.<br>This session is a demonstration, not a measure of mastery, diagnosis or learning efficacy.</p></div>`;const task=D.byId[s.activeTask];return `<div class="task-header"><p class="eyebrow">${task.skillId} · ${task.name}</p><h2 tabindex="-1">${task.prompt}</h2><p class="lead">${task.instructions}</p></div><div class="activity-workspace">${V.render(task,s.tasks[task.id])}</div>`;}
    dock(){const s=this.session,task=s.tasks[s.activeTask],index=Number(s.activeTask.slice(-1));if(s.summary)return `<div class="actions">${V.button('review','Review activities',{kind:'secondary'})}${V.button('restart','Start new session',{kind:'primary'})}</div>`;
      return `<div class="actions"><div class="lab-dock-group">${index>1?V.button('back','Back',{label:'Previous activity'}):'<span class="quiet">'+(this.store.available?'Your work is saved.':'Kept in this open page.')+'</span>'}${task.status==='completed'?V.button('retry','Try again',{label:'Try this activity again'}):V.button('hint',core.icon('hint')+'Show a hint',{kind:'text-button',label:'Show a hint'})}</div><div class="lab-dock-group">${V.button(task.status==='completed'?'continue':'check',task.status==='completed'?(E.completed(s)===9?'View session summary →':index===3?'Next construct →':'Continue →'):'Check →',{kind:'primary'})}</div></div>`;
    }
    render({heading=false,focus=null,animate=false}={}){
      const positions=new Map();if(animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches)this.shadowRoot.querySelectorAll('[data-token]').forEach(el=>positions.set(el.dataset.token,el.getBoundingClientRect()));
      this.motion.forEach(a=>a.cancel());this.motion=[];
      const scroller=this.shadowRoot.querySelector('.activity-workspace'),scroll=scroller?.scrollTop||0;
      const stage=this.shadowRoot.querySelector('.lab-stage'),stageScroll=stage?.scrollTop||0;
      const contentScroll=this.shadowRoot.querySelector('.content')?.scrollTop||0;
      const s=this.session;
      this.shadowRoot.innerHTML=`<style>${LogiferaELocalStyles}${core.styles}${core.productStyles}${core.materialStyles}${LabTaskStyles}</style><section class="card product-shell" aria-label="Logifera Number Foundations Lab">${core.header({title:'Number Foundations Lab'})}<div class="product-body">${this.rail()}<main class="product-main">${this.progress()}<div class="content ${s.tasks[s.activeTask].status==='completed'?'resolved':''}" data-layout="standard" data-stage="${s.summary?'summary':'play'}" data-task="${s.activeTask}">${this.body()}</div><footer class="action-dock" aria-label="Activity actions">${this.dock()}</footer></main></div></section>`;
      if(!heading){const x=this.shadowRoot.querySelector('.activity-workspace');if(x)x.scrollTop=scroll;const y=this.shadowRoot.querySelector('.lab-stage');if(y)y.scrollTop=stageScroll;const c=this.shadowRoot.querySelector('.content');if(c)c.scrollTop=contentScroll;}
      if(heading)this.shadowRoot.querySelector('h2')?.focus({preventScroll:true});
      else if(focus){let target=this.shadowRoot.querySelector(focus);if(target?.disabled)target=this.shadowRoot.querySelector('[data-action="check"], [data-action="continue"]');target?.focus({preventScroll:true});}
      if(positions.size){this.shadowRoot.querySelectorAll('[data-token]').forEach(el=>{const before=positions.get(el.dataset.token);if(!before)return;const after=el.getBoundingClientRect(),dx=before.x-after.x,dy=before.y-after.y;if(Math.abs(dx)+Math.abs(dy)>1){el.classList.add('in-flight');const a=el.animate([{transform:`translate(${dx}px,${dy}px)`},{transform:'translate(0,0)'}],{duration:core.motion.TOKEN_TRAVEL,easing:core.motion.MOTION_EASE});this.motion.push(a);a.finished.then(()=>el.classList.remove('in-flight')).catch(()=>{});}});}
      const feedback=s.tasks[s.activeTask].feedback;if(!s.summary&&feedback){const box=this.shadowRoot.querySelector('#lab-feedback');queueMicrotask(()=>{if(box?.isConnected)box.innerHTML=`<p class="field-feedback ${feedback.type==='success'?'positive':feedback.type==='warning'?'warning':''}">${feedback.type==='hint'?core.glyph('hint'):''}${V.esc(feedback.message)}</p>`;});}
    }
    onInput(event){const input=event.target;if(!input.dataset.field)return;const value=input.value.replace(/\D/g,'').slice(0,2);input.value=value;E.change(this.session,'field',{key:input.dataset.field,value});const box=this.shadowRoot.querySelector('#lab-feedback');if(box)box.textContent='';this.persist();}
    onKey(event){const el=event.target;if(el.hasAttribute('data-line')&&el.getAttribute('aria-disabled')!=='true'){
      const i=this.session.tasks['B-03'].input,pos=i.position??0,keys={ArrowRight:Math.min(10,pos+1),ArrowUp:Math.min(10,pos+1),ArrowLeft:Math.max(0,pos-1),ArrowDown:Math.max(0,pos-1),Home:0,End:10};
      if(Object.hasOwn(keys,event.key)){event.preventDefault();E.change(this.session,'position',keys[event.key]);this.persist();this.render({focus:'[data-line]'});}
    }else if(event.key==='Enter'&&el.dataset.field){event.preventDefault();E.check(this.session);this.persist();this.render({focus:this.session.tasks[this.session.activeTask].status==='completed'?'[data-action="continue"]':`[data-field="${el.dataset.field}"]`});}}
    onClick(event){const line=event.target.closest('[data-line]');if(line&&line.getAttribute('aria-disabled')!=='true'){const r=line.getBoundingClientRect();E.change(this.session,'position',Math.max(0,Math.min(10,Math.round((event.clientX-r.left)/r.width*10))));this.persist();this.render({focus:'[data-line]'});return;}
      const b=event.target.closest('button[data-action]');if(!b||b.disabled)return;const action=b.dataset.action,value=b.dataset.value,s=this.session;let heading=false;
      if(action==='construct'){E.switchConstruct(s,value);heading=true;}
      else if(action==='back'){E.open(s,s.activeConstruct+'-0'+(Number(s.activeTask.slice(-1))-1));heading=true;}
      else if(action==='continue'){heading=E.advance(s);}
      else if(action==='check')E.check(s);
      else if(action==='hint')E.hint(s);
      else if(action==='retry'){E.resetTask(s);heading=true;}
      else if(action==='review'){E.open(s,'B-01');heading=true;}
      else if(action==='restart'){this.session=E.fresh();E.open(this.session,'B-01');heading=true;}
      else if(action==='move'){const p=s.tasks[s.activeTask].input.position;E.change(s,'position',Math.max(0,Math.min(10,(p??0)+Number(value))));}
      else E.change(s,action,['allocate','return'].includes(action)?value:Number(value));
      this.persist();const focus=action==='check'&&s.tasks[s.activeTask].status==='completed'?'[data-action="continue"]':`[data-action="${action}"][data-value="${value}"]`;
      this.render({heading,focus,animate:['allocate','return','join','transfer','jump','move'].includes(action)});
    }
  }
  customElements.define('number-foundations-lab',NumberFoundationsLab);
})();
