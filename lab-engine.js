(function(root){
  'use strict';
  const D=typeof module!=='undefined'&&module.exports?require('./lab-data.js'):root.LabData;
  const KEY='logifera.numberFoundationsLab.v1';
  const copy=x=>JSON.parse(JSON.stringify(x));
  const integer=(v,min,max,otherwise=0)=>Number.isInteger(v)&&v>=min&&v<=max?v:otherwise;
  const field=v=>typeof v==='string'&&/^\d{0,2}$/.test(v)?v:'';
  const number=v=>typeof v==='string'&&/^\d{1,2}$/.test(v)?Number(v):NaN;
  function initialInput(id){return ({'B-01':{count:0},'B-02':{selected:null},'B-03':{position:null},'C-01':{zones:Array(8).fill('tray')},'C-02':{answer:''},'C-03':{tens:0,ones:0},'D-01':{joined:false,answer:''},'D-02':{jumps:0},'D-03':{moved:0,first:'',rest:'',answer:''}})[id];}
  const freshTask=id=>({status:'not_started',input:initialInput(id),hintUsed:false,attempts:0,completedAt:null,feedback:null});
  const fresh=()=>({version:1,activeConstruct:'B',activeTask:'B-01',last:{B:'B-01',C:'C-01',D:'D-01'},summary:false,tasks:Object.fromEntries(D.ids.map(id=>[id,freshTask(id)]))});
  function evaluate(id,i){
    const result=(ok,message)=>({ok,message});
    switch(id){
      case 'B-01':return result(i.count===7,i.count===7?'7 blocks match the numeral 7: seven.':i.count<7?`You have ${i.count} blocks. That is fewer than 7. Add and count again.`:`You have ${i.count} blocks. That is more than 7. Remove and count again.`);
      case 'B-02':return result(i.selected===9,i.selected===9?'9 is greater than 7. It is two more: 7 → 8 → 9.':i.selected===null?'Choose one of the two numerals first.':'Count forward from 7: 8, 9. Nine is two spaces further along. Try your choice again.');
      case 'B-03':return result(i.position===6,i.position===6?'6 is one space after 5, and six equal spaces from 0.':i.position===null?'Place your marker on the line first.':`Your marker is at ${i.position}. Compare this position with the target, 6.`);
      case 'C-01':{const a=i.zones.filter(z=>z==='A').length,b=i.zones.filter(z=>z==='B').length;const ok=i.zones.length===8&&((a===3&&b===5)||(a===5&&b===3));return result(ok,ok?`${a} + ${b} = 8. Both parts belong to the same whole.`:a+b<8?'Move every block from the tray into a part. The whole still needs all eight.':`Your parts are ${a} and ${b}. Keep eight altogether and try parts of 3 and 5.`);}
      case 'C-02':return result(number(i.answer)===5,number(i.answer)===5?'7 + 5 = 12 and 12 − 7 = 5. Five is the missing part.':i.answer===''?'Enter the missing part first.':`Try adding your part to 7. Does the whole become 12?`);
      case 'C-03':{const total=i.tens*10+i.ones,ok=i.tens===2&&i.ones===4;return result(ok,ok?'2 × 10 + 4 = 24. Two tens and four ones.':total===24?'Your total is 24. That is an equal value. For this task, exchange ten loose ones for a ten to show the usual place-value form.':`Your total is ${total}. A ten is worth 10; a loose one is worth 1. Build a total of 24.`);}
      case 'D-01':return result(i.joined&&number(i.answer)===7,!i.joined?'Join the two sets first. Keep every block in the whole.':number(i.answer)===7?'4 + 3 = 7. The same seven blocks now form one whole.':'Count every block in the joined whole once, then check your total.');
      case 'D-02':return result(i.jumps===3,i.jumps===3?'5 → 6 → 7 → 8. Three jumps, so 5 + 3 = 8.':`You made ${i.jumps} ${i.jumps===1?'jump':'jumps'} and landed at ${5+i.jumps}. Cross exactly three intervals from 5.`);
      case 'D-03':{if(i.moved!==2)return result(false,'Fill the ten-frame first. Move only enough blocks to fill its empty spaces.');if(number(i.first)!==2||number(i.rest)!==3)return result(false,'Check the split of 5: how many moved into the frame, and how many stayed in the tray?');return result(number(i.answer)===13,number(i.answer)===13?'5 = 2 + 3. Then 8 + 2 = 10, and 10 + 3 = 13.':'Your split makes a full ten and a remaining part. Include both when finding the total.');}
      default:return result(false,'Unknown activity.');
    }
  }
  function sanitiseInput(id,raw){
    const i=raw&&typeof raw==='object'?raw:{},s=initialInput(id);
    for(const k of Object.keys(s)){
      if(['answer','first','rest'].includes(k))s[k]=field(i[k]);
      else if(k==='zones')s.zones=Array.isArray(i.zones)&&i.zones.length===8?i.zones.map(z=>['A','B','tray'].includes(z)?z:'tray'):s.zones;
      else if(k==='joined')s.joined=i.joined===true;
      else if(k==='selected')s.selected=[7,9].includes(i.selected)?i.selected:null;
      else if(k==='position')s.position=integer(i.position,0,10,null);
      else s[k]=integer(i[k],0,({count:10,tens:4,ones:19,jumps:5,moved:2})[k]);
    }return s;
  }
  function restore(raw){
    const s=fresh();if(!raw||raw.version!==1||!raw.tasks)return s;
    for(const id of D.ids){const r=raw.tasks[id];if(!r||typeof r!=='object')continue;const t=s.tasks[id];t.input=sanitiseInput(id,r.input);t.hintUsed=r.hintUsed===true;t.attempts=integer(r.attempts,0,100000);t.status=r.status==='not_started'?'not_started':'in_progress';
      if(r.status==='completed'&&t.attempts>0&&typeof r.completedAt==='string'&&Number.isFinite(Date.parse(r.completedAt))&&evaluate(id,t.input).ok){t.status='completed';t.completedAt=r.completedAt;t.feedback={type:'success',message:evaluate(id,t.input).message};}
      else if(r.feedback?.type==='hint')t.feedback={type:'hint',message:D.byId[id].hint};
      else if(r.feedback?.type==='warning'&&t.attempts)t.feedback={type:'warning',message:evaluate(id,t.input).message};
    }
    for(const c of D.constructs)if(D.byId[raw.last?.[c.id]]?.constructId===c.id)s.last[c.id]=raw.last[c.id];
    if(D.byId[raw.activeTask]){s.activeTask=raw.activeTask;s.activeConstruct=D.byId[s.activeTask].constructId;s.last[s.activeConstruct]=s.activeTask;}
    s.summary=raw.summary===true&&completed(s)===9;return s;
  }
  function completed(s,c){return D.tasks.filter(t=>(!c||t.constructId===c)&&s.tasks[t.id].status==='completed').length;}
  function open(s,id){if(!D.byId[id])return;s.activeTask=id;s.activeConstruct=D.byId[id].constructId;s.last[s.activeConstruct]=id;s.summary=false;if(s.tasks[id].status==='not_started')s.tasks[id].status='in_progress';}
  function switchConstruct(s,c){if(!D.constructs.some(x=>x.id===c))return;const last=s.last[c];const id=s.tasks[last].status==='not_started'?(D.tasks.find(t=>t.constructId===c&&s.tasks[t.id].status!=='completed')?.id||last):last;open(s,id);}
  function change(s,action,value){
    const id=s.activeTask,t=s.tasks[id];if(t.status==='completed')return false;const i=t.input,before=JSON.stringify(i);
    if(id==='B-01'&&action==='count')i.count=Math.max(0,Math.min(10,i.count+integer(value,-1,1)));
    if(id==='B-02'&&action==='select'&&[7,9].includes(value))i.selected=value;
    if(id==='B-03'&&action==='position')i.position=integer(value,0,10,i.position);
    if(id==='C-01'&&['allocate','return'].includes(action)&&['A','B'].includes(value)){const index=i.zones.indexOf(action==='allocate'?'tray':value);if(index>=0)i.zones[index]=action==='allocate'?value:'tray';}
    if(id==='C-03'&&['tens','ones'].includes(action))i[action]=Math.max(0,Math.min(action==='tens'?4:19,i[action]+integer(value,-1,1)));
    if(id==='D-01'&&action==='join')i.joined=true;
    if(id==='D-02'&&action==='jump')i.jumps=Math.max(0,Math.min(5,i.jumps+integer(value,-1,1)));
    if(id==='D-03'&&action==='transfer')i.moved=Math.max(0,Math.min(2,i.moved+integer(value,-1,1)));
    if(action==='field'&&value&&['answer','first','rest'].includes(value.key)&&Object.hasOwn(i,value.key))i[value.key]=field(value.value);
    if(before===JSON.stringify(i))return false;t.feedback=null;t.status='in_progress';return true;
  }
  function check(s,now=new Date().toISOString()){
    const t=s.tasks[s.activeTask];if(t.status==='completed')return t.feedback;
    const r=evaluate(s.activeTask,t.input);t.attempts++;t.status=r.ok?'completed':'in_progress';t.feedback={type:r.ok?'success':'warning',message:r.message};if(r.ok)t.completedAt=now;return t.feedback;
  }
  function hint(s){const t=s.tasks[s.activeTask];if(t.status==='completed')return;t.hintUsed=true;t.feedback={type:'hint',message:D.byId[s.activeTask].hint};}
  function resetTask(s,id=s.activeTask){if(!D.byId[id])return;s.tasks[id]=freshTask(id);open(s,id);}
  function advance(s){if(s.tasks[s.activeTask].status!=='completed')return false;if(completed(s)===9){s.summary=true;return true;}const list=D.tasks.filter(t=>t.constructId===s.activeConstruct),index=list.findIndex(t=>t.id===s.activeTask);if(index<2)open(s,list[index+1].id);else {const start=D.ids.indexOf(s.activeTask);const order=[...D.ids.slice(start+1),...D.ids.slice(0,start+1)];open(s,order.find(id=>s.tasks[id].status!=='completed'));}return true;}
  function createStore(storage){let available=!!storage;return {get available(){return available;},load(){try{return restore(JSON.parse(storage?.getItem(KEY)||'null'));}catch{available=false;return fresh();}},save(s){try{if(storage)storage.setItem(KEY,JSON.stringify(s));else available=false;}catch{available=false;}}};}
  const api={KEY,initialInput,freshTask,fresh,evaluate,restore,sanitiseInput,completed,open,switchConstruct,change,check,hint,resetTask,advance,createStore,copy};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.LabEngine=api;
})(globalThis);
