{
const LANGS=[
 {id:'en',name:'Tiếng Anh',c:1,tts:'en-US',lv:'A1'},{id:'zh',name:'Tiếng Trung',c:2,r:3,tts:'zh-CN',lv:'HSK 1'},
 {id:'ja',name:'Tiếng Nhật',c:4,r:5,tts:'ja-JP',lv:'N5'},{id:'ko',name:'Tiếng Hàn',c:6,r:7,tts:'ko-KR',lv:'TOPIK 1'},
 {id:'fr',name:'Tiếng Pháp',c:8,tts:'fr-FR'},{id:'es',name:'Tiếng Tây Ban Nha',c:9,tts:'es-ES'},{id:'de',name:'Tiếng Đức',c:10,tts:'de-DE'}];
const ALL=[];TOPICS.forEach(([tn,ws],ti)=>ws.forEach((s,i)=>ALL.push({key:ti+'-'+i,tn,f:s.split('|')})));
TOPICS_EXTRA.forEach(([tn,s],i)=>ALL.push({key:'x'+i,tn,f:s.split('|')}));
const PHASES=[
 ['Tháng 1–3','Nền tảng','A1 · HSK 1 · N5 · TOPIK 1'],['Tháng 4–6','Giao tiếp hằng ngày','A1+ · HSK 2 · N5'],
 ['Tháng 7–9','Cuộc sống & công việc','A2 · HSK 3 (phần 1) · N5–N4'],['Tháng 10–12','Kể chuyện, mô tả','A2 · HSK 3 · N4 (phần 1)'],
 ['Tháng 13–15','Ý kiến & cảm xúc','A2+ · HSK 3+ · N4'],['Tháng 16–18','Đọc hiểu đoạn văn','B1 (phần 1) · HSK 4 (phần 1) · N4'],
 ['Tháng 19–21','Thảo luận chủ đề','B1 · HSK 4 · N4–N3'],['Tháng 22–24','Tổng ôn & thi thử','B1 · HSK 4 · N4 · TOPIK 2']];
const WPD=5,DPW=6;
const SPK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
const CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7"/></svg>';
const LOCK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
const STAR='<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/></svg>';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $=id=>document.getElementById(id);
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const PFX='hcnn3_',KEYS=['lang','prog','streak','xp','daily','goal','opt','skill'];
const load=(k,d)=>{try{const v=localStorage.getItem(PFX+k);return v?JSON.parse(v):d}catch(e){return d}};
const save=(k,v)=>{try{localStorage.setItem(PFX+k,JSON.stringify(v))}catch(e){}};
const S={lang:load('lang','en'),tab:'path',prog:load('prog',{}),streak:load('streak',{last:'',n:0}),xp:load('xp',0),daily:load('daily',{date:'',n:0}),goal:load('goal',1),opt:Object.assign({slow:false,sound:true,speak:true},load('opt',{})),skill:load('skill',{}),noMic:false,search:'',scrolled:false};
const today=()=>new Date().toDateString();
const L=()=>LANGS.find(l=>l.id===S.lang);
const P=()=>S.prog[S.lang]||(S.prog[S.lang]={done:[]});
const tw=w=>w.f[L().c];const rom=w=>L().r?w.f[L().r]:'';
/* ---- Lộ trình theo ngôn ngữ ---- */
const CC={};
function CUR(){
  if(CC[S.lang])return CC[S.lang];
  const l=L(),ws=ALL.filter(w=>w.f[l.c]),ss=SENT.filter(s=>s[S.lang]),learn=[];
  for(let i=0;i<ws.length;i+=WPD)learn.push(ws.slice(i,i+WPD));
  if(learn.length>1&&learn[learn.length-1].length<3)learn[learn.length-2].push(...learn.pop());
  const nodes=[];
  learn.forEach((d,i)=>{const wk=Math.floor(i/DPW);nodes.push({t:'learn',ws:d,li:i,wk,s:ss.length?ss[Math.min(ss.length-1,Math.floor(i*ss.length/learn.length))]:null});
    if(i%DPW===DPW-1||i===learn.length-1)nodes.push({t:'rev',wk,ws:learn.slice(wk*DPW,i+1).flat()})});
  nodes.forEach((n,k)=>n.k=k);
  const wn=new Map();nodes.forEach(n=>{if(n.t==='learn')n.ws.forEach(w=>wn.set(w.key,n.k))});
  return CC[S.lang]={ws,ss,learn,nodes,wn,weeks:Math.ceil(learn.length/DPW)};
}
const curNode=()=>{const d=P().done;let i=0;while(d.includes(i))i++;return i};
const learned=()=>{const c=CUR(),d=P().done;return c.ws.filter(w=>d.includes(c.wn.get(w.key)))};
const sentsDone=()=>{const d=P().done;return [...new Set(CUR().nodes.filter(n=>n.t==='learn'&&n.s&&d.includes(n.k)).map(n=>n.s))]};
const weekTitle=wk=>[...new Set(CUR().learn.slice(wk*DPW,wk*DPW+DPW).flat().map(w=>w.tn))].slice(0,3).join(' · ');
let tt;function toast(m){const t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2400)}
let warned={};
function say(text){
  if(!S.opt.sound)return;
  try{const sy=window.speechSynthesis;if(!sy)throw 0;sy.cancel();const u=new SpeechSynthesisUtterance(text),l=L();u.lang=l.tts;u.rate=S.opt.slow?.6:.9;
    const vs=sy.getVoices(),v=vs.find(v=>v.lang.replace('_','-').toLowerCase()===l.tts.toLowerCase())||vs.find(v=>v.lang.toLowerCase().startsWith(l.id));
    if(v)u.voice=v;else if(vs.length&&!warned[l.id]){warned[l.id]=1;toast('Máy chưa có giọng '+l.name+', phát âm có thể chưa chuẩn')}
    sy.speak(u)}catch(e){if(!warned.x){warned.x=1;toast('Trình duyệt này chưa đọc thành tiếng được')}}
}
let ac;function beep(ok){if(!S.opt.sound)return;try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();const t=ac.currentTime;(ok?[660,880]:[300,220]).forEach((f,i)=>{const o=ac.createOscillator(),g=ac.createGain();o.frequency.value=f;o.type=ok?'sine':'triangle';g.gain.setValueAtTime(.0001,t+i*.11);g.gain.exponentialRampToValueAtTime(.18,t+i*.11+.02);g.gain.exponentialRampToValueAtTime(.0001,t+i*.11+.16);o.connect(g).connect(ac.destination);o.start(t+i*.11);o.stop(t+i*.11+.18)})}catch(e){}}
function streakAlive(){const d=new Date();d.setDate(d.getDate()-1);return S.streak.last===today()||S.streak.last===d.toDateString()}
function header(){
  $('pStreak').textContent=(streakAlive()?S.streak.n:0)+' ngày liên tiếp';$('pXp').textContent=S.xp+' XP';
  $('langs').innerHTML=LANGS.map(l=>`<button class="lg" data-lang="${l.id}" aria-pressed="${l.id===S.lang}">${l.name}</button>`).join('');
  document.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===S.tab));
}
function goalBox(){
  const n=S.daily.date===today()?S.daily.n:0,p=Math.min(1,n/S.goal),C=2*Math.PI*23;
  return `<div class="goal"><svg class="ring" viewBox="0 0 56 56"><circle cx="28" cy="28" r="23" fill="none" stroke="var(--line)" stroke-width="7"/><circle cx="28" cy="28" r="23" fill="none" stroke="var(--red)" stroke-width="7" stroke-linecap="round" stroke-dasharray="${C*p} ${C}" transform="rotate(-90 28 28)"/><text x="28" y="33" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">${n}/${S.goal}</text></svg>
  <div><b>${n>=S.goal?'Xong mục tiêu hôm nay!':'Mục tiêu hôm nay: '+S.goal+' bài'}</b><span>${n>=S.goal?'Học thêm để tăng XP nhé.':'Học đủ để giữ chuỗi ngày.'}</span>
  <div class="gsel">${[1,2,3].map(g=>`<button data-goal="${g}" aria-pressed="${g===S.goal}">${g} bài/ngày</button>`).join('')}</div></div></div>`;
}
function skillBox(){const T=S.skill[S.lang]||{};
  return `<div class="skills">${[['nghe','Nghe'],['noi','Nói'],['doc','Đọc'],['viet','Viết']].map(([k,n])=>{const [r,t]=T[k]||[0,0],p=t?Math.round(r/t*100):0;return `<button class="skc" data-skill="${k}"><span class="sk sk-${k}">${n}</span><b>${t?p+'%':'–'}</b><div class="bar"><i style="width:${p}%"></i></div><small>${t} câu</small></button>`}).join('')}</div>`}
function roadmap(){
  const c=CUR(),done=P().done.length,full=['en','zh','ja','ko'].includes(S.lang),p1=Math.round(done/c.nodes.length*100);
  return `<section class="road"><h2>Lộ trình 2 năm</h2><p>${full?'Mỗi tuần 6 ngày học từ mới và 1 ngày ôn tập. Các giai đoạn sau sẽ được mở dần.':'Tiếng Pháp, Tây Ban Nha và Đức hiện có bản ngắn. Lộ trình 2 năm đang làm trước cho tiếng Anh, Trung, Nhật, Hàn.'}</p>
  <ol>${PHASES.map((ph,i)=>`<li class="${i===0?'open':''}"><span class="pn">${i+1}</span><div><b>${ph[0]} · ${ph[1]}</b><small>${ph[2]}</small>${i===0?`<div class="bar"><i style="width:${p1}%"></i></div><small>${done}/${c.nodes.length} ngày · ${p1}%</small>`:'<small class="soon">Sắp mở</small>'}</div></li>`).join('')}</ol></section>`;
}
const OFF=[0,56,84,56,0,-56,-84,-56];
function renderPath(){
  const c=CUR(),cur=curNode(),done=P().done;let html='',wk=-1,j=0;
  c.nodes.forEach((n,i)=>{
    if(n.wk!==wk){wk=n.wk;html+=`<div class="wk"><b>Tuần ${wk+1}</b><span>${esc(weekTitle(wk))}</span></div>`}
    const st=done.includes(i)?'done':i===cur?'cur':'lock',isR=n.t==='rev';
    const icon=st==='done'?CHECK:st==='lock'?(isR?STAR:LOCK):(isR?STAR:i+1);
    html+=`<div class="node ${st} ${isR?'rv':''}" ${i===cur?'id="curnode"':''} style="transform:translateX(${OFF[j++%8]}px)"><button class="nb" data-day="${i}" aria-label="Ngày ${i+1}">${icon}</button>
    <div class="nl">${st==='cur'?'<span class="start">BẮT ĐẦU</span>':''}<b>Ngày ${i+1}</b><span>${isR?'Ôn tập tuần '+(wk+1):esc([...new Set(n.ws.map(w=>w.tn))].join(' · '))+' · '+n.ws.length+' từ'}</span></div></div>`;
  });
  $('main').innerHTML=goalBox()+skillBox()+`<div class="path">${html}</div>
    <div class="finish">${cur>=c.nodes.length?'Bạn đã xong giai đoạn đang mở của '+esc(L().name)+'! Vào Luyện tập để giữ trí nhớ.':''}</div>`+roadmap()+settings();
  if(!S.scrolled){S.scrolled=true;const n=$('curnode');if(n&&cur>2)setTimeout(()=>{try{n.scrollIntoView({block:'center'})}catch(e){}},60)}
}
function settings(){
  return `<details class="set"><summary>Cài đặt & sao lưu</summary>
   <div class="opts"><label><input type="checkbox" data-opt="sound" ${S.opt.sound?'checked':''}> Âm thanh</label><label><input type="checkbox" data-opt="slow" ${S.opt.slow?'checked':''}> Đọc chậm</label><label><input type="checkbox" data-opt="speak" ${S.opt.speak?'checked':''}> Có bài luyện nói</label></div>
   <p class="note" style="text-align:start">Tiến độ lưu trên máy này. Để chuyển sang máy khác: bấm "Tạo mã sao lưu", dán mã đó vào ô bên dưới ở máy mới rồi bấm "Khôi phục".</p>
   <div class="bk"><button class="btn2" data-act="export">Tạo mã sao lưu</button><button class="btn2" data-act="import">Khôi phục</button></div>
   <textarea id="bkt" class="tin" rows="3" placeholder="Mã sao lưu sẽ hiện ở đây, hoặc dán mã vào đây" style="min-height:90px;padding:10px;font-size:14px"></textarea>
   <p class="note" style="text-align:start">Phát âm dùng giọng đọc có sẵn trên máy. Nếu không nghe được tiếng Trung, Nhật hoặc Hàn, hãy tải thêm giọng đọc trong Cài đặt của máy.</p></details>`;
}
function renderReview(){
  const n=learned().length,SKD=[['nghe','Nghe','Nghe chọn nghĩa, nghe rồi gõ lại, nghe câu'],['noi','Nói','Nói theo từ và câu mẫu, app chấm phát âm'],['doc','Đọc','Đọc từ, ghép cặp, đọc hiểu câu ngắn'],['viet','Viết','Gõ từ, sắp xếp từ thành câu']];
  $('main').innerHTML=`<div class="sec"><h2>Luyện 4 kỹ năng</h2><p>${n?`Luyện riêng từng kỹ năng với ${n} từ ${esc(L().name)} bạn đã học.`:'Hoàn thành Ngày 1 để mở phần luyện kỹ năng.'}</p></div>
  <div class="skgrid">${SKD.map(([k,t,d])=>`<button class="skbig" data-skill="${k}" ${n?'':'disabled'}><span class="sk sk-${k}">${t}</span><b>Luyện ${t.toLowerCase()}</b><small>${d}</small></button>`).join('')}</div>
  ${n?'<button class="big" style="margin-top:14px" data-act="review">Ôn tổng hợp 10 câu</button>':'<button class="big dark" style="margin-top:14px" data-tab="path">Về lộ trình</button>'}`;
}
function renderDict(){
  const c=CUR(),q=S.search.trim().toLowerCase(),done=P().done,ws=c.ws.filter(w=>!q||w.f.some(x=>x&&x.toLowerCase().includes(q)));
  const show=ws.slice(0,q?400:120);
  $('main').innerHTML=`<div class="sec"><h2>Từ điển</h2><p>${c.ws.length} từ ${esc(L().name)} trong giai đoạn đang mở. Từ ở ngày chưa học hiện mờ.</p></div>
  <input class="search" id="search" type="search" placeholder="Tìm bằng tiếng Việt hoặc ${esc(L().name)}…" value="${esc(S.search)}">
  <div>${show.length?show.map(w=>{const k=c.wn.get(w.key);return `<div class="li ${done.includes(k)?'':'lk'}"><div><b>${esc(tw(w))}</b>${rom(w)?`<em>${esc(rom(w))}</em>`:''}</div><div class="vi">${esc(w.f[0])}<small>Ngày ${k+1}</small></div><button class="spk" data-say="${esc(tw(w))}" aria-label="Nghe">${SPK}</button></div>`}).join(''):'<div class="empty">Không tìm thấy từ nào.</div>'}
  ${ws.length>show.length?`<div class="empty">Đang hiện ${show.length}/${ws.length} từ, gõ để tìm thêm.</div>`:''}</div>`;
  const s=$('search');s.oninput=e=>{S.search=e.target.value;const p=s.selectionStart;renderDict();const n=$('search');n.focus();n.setSelectionRange(p,p)};
}
function render(){header();({path:renderPath,review:renderReview,dict:renderDict})[S.tab]()}

/* ---------- Bài học: 4 kỹ năng ---------- */
const SK={mc:'doc',rev:'doc',match:'doc',read:'doc',listen:'nghe',listenS:'nghe',dict:'nghe',speak:'noi',speakS:'noi',type:'viet',order:'viet'};
const SKN={nghe:'Nghe',noi:'Nói',doc:'Đọc',viet:'Viết'};
const badge=t=>SK[t]?`<span class="sk sk-${SK[t]}">${SKN[SK[t]]}</span>`:'';
const isCJK=()=>S.lang==='zh'||S.lang==='ja';
const toks=s=>s[S.lang][0].split(isCJK()?'/':' ');
const stext=s=>toks(s).join(isCJK()?'':' ');
const srom=s=>s[S.lang][1]||'';
const alts=x=>x?x.split(' / '):[];
function normX(s){s=String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^\p{L}\p{N}]/gu,'');if(S.lang==='ja')s=s.replace(/ou/g,'o').replace(/uu/g,'u');return s}
function lev(a,b){const m=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=m[0];m[0]=i;for(let j=1;j<=b.length;j++){const t=m[j];m[j]=Math.min(m[j]+1,m[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=t}}return m[b.length]}
const sim=(a,b)=>{a=normX(a);b=normX(b);const M=Math.max(a.length,b.length);return M?1-lev(a,b)/M:0};
let LS=null;
function buildLesson(n){
  const ws=n.ws,old=learned().filter(w=>!ws.includes(w)),steps=[],sp=S.opt.speak;
  for(let i=0;i<ws.length;i+=3){const ch=ws.slice(i,i+3);ch.forEach(w=>steps.push({t:'intro',w}));shuf(ch).slice(0,2).forEach(w=>steps.push({t:'mc',w}))}
  steps.push({t:'match',ws:shuf(ws).slice(0,4)});
  const r=shuf(ws),R=i=>r[i%r.length];
  steps.push({t:'listen',w:R(0)},{t:'type',w:R(1)},{t:'listen',w:R(2)},{t:'type',w:R(3)});
  if(sp)steps.push({t:'speak',w:R(4)},{t:'speak',w:R(0)});
  if(n.s){steps.push({t:'read',s:n.s},{t:'order',s:n.s});if(sp)steps.push({t:'speakS',s:n.s})}
  steps.push({t:'dict',w:R(1)},{t:'rev',w:R(2)});
  shuf(old).slice(0,2).forEach(w=>steps.push({t:['mc','listen','type'][Math.floor(Math.random()*3)],w,old:1}));
  return steps;
}
function buildWeek(n){
  const ws=shuf(n.ws),c=CUR(),ss=[...new Set(c.nodes.filter(x=>x.t==='learn'&&x.wk===n.wk&&x.s).map(x=>x.s))],st=[],w=i=>ws[i%ws.length];
  ['mc','rev','listen','dict','type','type','mc','listen','rev','type'].forEach((t,i)=>st.push({t,w:w(i)}));
  if(S.opt.speak)st.push({t:'speak',w:w(10)},{t:'speak',w:w(11)});
  st.push({t:'match',ws:ws.slice(12,16).length===4?ws.slice(12,16):ws.slice(0,4)});
  shuf(ss).slice(0,2).forEach((s,i)=>st.push({t:i?'order':'read',s}));
  return shuf(st);
}
function buildSkill(sk){
  const ws=shuf(learned()),ss=shuf(sentsDone()),st=[],w=i=>ws[i%ws.length],s=i=>ss[i%ss.length];
  if(sk==='nghe'){for(let i=0;i<5;i++)st.push({t:'listen',w:w(i)});for(let i=5;i<8;i++)st.push({t:'dict',w:w(i)});if(ss.length)st.push({t:'listenS',s:s(0)},{t:'listenS',s:s(1)})}
  if(sk==='noi'){for(let i=0;i<6;i++)st.push({t:'speak',w:w(i)});if(ss.length)st.push({t:'speakS',s:s(0)},{t:'speakS',s:s(1)})}
  if(sk==='doc'){for(let i=0;i<4;i++)st.push({t:'mc',w:w(i)});st.push({t:'rev',w:w(4)},{t:'rev',w:w(5)});if(ws.length>=4)st.push({t:'match',ws:ws.slice(0,4)});if(ss.length)st.push({t:'read',s:s(0)},{t:'read',s:s(1)})}
  if(sk==='viet'){for(let i=0;i<6;i++)st.push({t:'type',w:w(i)});if(ss.length)for(let i=0;i<3;i++)st.push({t:'order',s:s(i)})}
  if(sk==='mix'){for(let i=0;i<8;i++)st.push({t:['mc','rev','listen','type','dict'][i%5],w:w(i)});if(ss.length)st.push({t:'read',s:s(0)},{t:'order',s:s(1)})}
  return shuf(st);
}
function start(day,sk){
  const review=day<0,n=review?null:CUR().nodes[day];
  LS={day,review,sk,steps:review?buildSkill(sk||'mix'):n.t==='rev'?buildWeek(n):buildLesson(n),i:0,right:0,total:0,ans:null,retried:new Set(),bySk:{}};
  $('lesson').classList.add('open');document.body.style.overflow='hidden';renderStep();
}
function quit(){$('lesson').classList.remove('open');document.body.style.overflow='';LS=null;stopMic();try{speechSynthesis.cancel()}catch(e){}render()}
function setBtn(text,on,act){const b=$('lbtn');b.textContent=text;b.disabled=!on;b.dataset.act=act||'cont';b.className='big'}
function choicesFor(w){
  const pool=shuf(CUR().ws.filter(x=>x.key!==w.key&&tw(x)!==tw(w)&&x.f[0]!==w.f[0]));
  return shuf([w,...pool.filter(x=>x.tn===w.tn).slice(0,2),...pool.filter(x=>x.tn!==w.tn)].slice(0,4));
}
const sayW=s=>say(s.w?tw(s.w):stext(s.s));
function renderStep(){
  const s=LS.steps[LS.i],lb=$('lb');stopMic();
  $('lbar').style.width=(LS.i/LS.steps.length*100)+'%';$('lf').className='lf';$('fb').innerHTML='';LS.ans=null;
  const B=badge(s.t)+(s.old?'<span class="sk">Ôn lại</span>':'');
  if(s.t==='intro'){setBtn('Tiếp tục',true);
    lb.innerHTML=`<div class="kind">Từ mới</div><div class="intro"><span class="new">MỚI</span><div class="pw">${esc(tw(s.w))}</div>${rom(s.w)?`<div class="pr">${esc(rom(s.w))}</div>`:''}<div class="vi">${esc(s.w.f[0])}</div>${S.lang!=='en'?`<div class="en">${esc(s.w.f[1])}</div>`:''}<button class="spk" data-act="speak" aria-label="Nghe">${SPK}</button></div>`;
    say(tw(s.w));return}
  if(s.t==='match'){setBtn('Ghép hết các cặp',false);LS.m={sel:null,done:0,err:0,L:shuf(s.ws),R:shuf(s.ws)};
    lb.innerHTML=`<div class="kind">${B}Ghép các cặp từ</div><div class="match"><div class="col">${LS.m.L.map(w=>`<button class="mt" data-ml="${w.key}">${esc(tw(w))}</button>`).join('')}</div><div class="col">${LS.m.R.map(w=>`<button class="mt" data-mr="${w.key}">${esc(w.f[0])}</button>`).join('')}</div></div>`;return}
  if(s.t==='type'||s.t==='dict'){setBtn('Kiểm tra',false,'check');
    const hint=L().r?`Gõ chữ ${esc(L().name.replace('Tiếng ',''))} hoặc phiên âm, không cần dấu thanh`:'Không cần gõ dấu, app vẫn chấm đúng';
    lb.innerHTML=`<div class="kind">${B}${s.t==='dict'?'Nghe rồi viết lại':'Viết bằng '+esc(L().name)}</div>
    <div class="prompt">${s.t==='dict'?`<button class="spk" style="width:84px;height:84px" data-act="speak" aria-label="Nghe lại">${SPK}</button><div class="pr" style="color:var(--mute)">Chạm loa để nghe lại</div>`:`<div class="pw">${esc(s.w.f[0])}</div>`}</div>
    <input class="tin" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ câu trả lời…"><div class="thint">${hint}</div>`;
    const a=$('ans');a.oninput=()=>{$('lbtn').disabled=!a.value.trim()};a.onkeydown=e=>{if(e.key==='Enter'&&a.value.trim()){e.preventDefault();e.stopPropagation();check()}};
    if(s.t==='dict')say(tw(s.w));setTimeout(()=>{try{a.focus()}catch(e){}},50);return}
  if(s.t==='order'){setBtn('Kiểm tra',false,'check');
    const own=toks(s.s),others=shuf(CUR().ss.filter(x=>x!==s.s).flatMap(x=>toks(x)).filter(t=>!own.includes(t))).slice(0,2);
    LS.o={bank:shuf([...own,...others]).map((t,i)=>({t,i,used:false})),ans:[]};
    lb.innerHTML=`<div class="kind">${B}Sắp xếp thành câu</div><div class="prompt"><div class="pw" style="font-size:clamp(24px,6vw,34px)">${esc(s.s.vi)}</div></div><div class="ansrow" id="orow"></div><div class="bank" id="obank"></div>`;
    drawOrder();return}
  if(s.t==='speak'||s.t==='speakS'){setBtn('Nói xong rồi bấm mic',false);
    const txt=s.w?tw(s.w):stext(s.s),r=s.w?rom(s.w):srom(s.s),vi=s.w?s.w.f[0]:s.s.vi,mic=micOK();
    lb.innerHTML=`<div class="kind">${B}Nói to câu này</div><div class="intro" style="padding:24px 16px"><div class="pw" style="${s.w?'':'font-size:clamp(26px,7vw,40px)'}">${esc(txt)}</div>${r?`<div class="pr">${esc(r)}</div>`:''}<div class="en">${esc(vi)}</div>
      <button class="ghost" data-act="speak">${SPK.replace('<svg','<svg width="20" height="20"')} Nghe mẫu</button></div>
      ${mic?`<button class="mic" data-act="mic" id="micb" aria-label="Bấm để nói"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg></button><div class="thint" id="mics" style="text-align:center">Bấm micro rồi nói</div>`
      :`<div class="thint" style="text-align:center;margin-top:14px">Trình duyệt này không dùng được micro, nên hãy nghe mẫu, nói to theo, rồi tự chấm:</div><div class="self"><button class="btn2 bad" data-act="selfno">Chưa nói được</button><button class="btn2 ok" data-act="selfok">Mình nói được rồi</button></div>`}
      <button class="skip" data-act="skipspeak">Không nói được lúc này</button>`;
    say(txt);return}
  if(s.t==='read'||s.t==='listenS'){
    const opts=s.opts=s.opts||shuf([s.s,...shuf(CUR().ss.filter(x=>x!==s.s)).slice(0,2)]);setBtn('Chọn một đáp án',false);
    lb.innerHTML=`<div class="kind">${B}${s.t==='read'?'Đọc và chọn nghĩa đúng':'Nghe câu và chọn nghĩa đúng'}</div>
    <div class="prompt">${s.t==='read'?`<div><div class="pw" style="font-size:clamp(26px,7vw,40px)">${esc(stext(s.s))}</div>${srom(s.s)?`<button class="ghost sm" data-act="showrom">Hiện phiên âm</button><div class="pr" id="srom" hidden>${esc(srom(s.s))}</div>`:''}</div>`:`<button class="spk" style="width:84px;height:84px" data-act="speak">${SPK}</button><div class="pr" style="color:var(--mute)">Chạm loa để nghe lại</div>`}</div>
    <div class="choices">${opts.map((o,i)=>`<button class="ch" data-spick="${i}"><span class="n">${i+1}</span><span>${esc(o.vi)}</span></button>`).join('')}</div>`;
    if(s.t==='listenS')say(stext(s.s));return}
  const rev=s.t==='rev';s.opts=s.opts||choicesFor(s.w);setBtn('Chọn một đáp án',false);
  const kind={mc:'Từ này nghĩa là gì?',rev:'Chọn cách nói đúng',listen:'Nghe và chọn nghĩa đúng'}[s.t];
  const prompt=s.t==='listen'?`<button class="spk" style="width:84px;height:84px" data-act="speak" aria-label="Nghe lại">${SPK}</button><div class="pr" style="color:var(--mute)">Chạm loa để nghe lại</div>`
    :rev?`<div class="pw">${esc(s.w.f[0])}</div>`:`<button class="spk" data-act="speak" aria-label="Nghe">${SPK}</button><div><div class="pw">${esc(tw(s.w))}</div>${rom(s.w)?`<div class="pr">${esc(rom(s.w))}</div>`:''}</div>`;
  lb.innerHTML=`<div class="kind">${B}${kind}</div><div class="prompt">${prompt}</div><div class="choices">${s.opts.map((o,i)=>`<button class="ch" data-pick="${i}"><span class="n">${i+1}</span><span>${rev?esc(tw(o))+(rom(o)?`<small>${esc(rom(o))}</small>`:''):esc(o.f[0])}</span></button>`).join('')}</div>`;
  if(s.t!=='rev')say(tw(s.w));
}
function drawOrder(){
  const o=LS.o;
  $('orow').innerHTML=o.ans.length?o.ans.map((b,k)=>`<button class="tk" data-oa="${k}">${esc(b.t)}</button>`).join(''):'<span class="thint">Chạm các từ bên dưới theo đúng thứ tự</span>';
  $('obank').innerHTML=o.bank.map(b=>`<button class="tk ${b.used?'used':''}" data-ob="${b.i}" ${b.used?'disabled':''}>${esc(b.t)}</button>`).join('');
  if(LS.ans===null)$('lbtn').disabled=!o.ans.length;
}
function check(){
  const s=LS.steps[LS.i];if(LS.ans!==null)return;
  if(s.t==='type'||s.t==='dict'){
    const v=$('ans').value.trim();$('ans').disabled=true;const cands=[...alts(tw(s.w)),...alts(rom(s.w))];
    let ok=false,note='';for(const c of cands){if(normX(c)===normX(v)){ok=true;if(!L().r&&c.toLowerCase().replace(/[^\p{L}\p{N}]/gu,'')!==v.toLowerCase().replace(/[^\p{L}\p{N}]/gu,''))note='Chú ý dấu: '+c;break}}
    if(!ok)for(const c of cands){const n=normX(c);if(n.length>=5&&lev(n,normX(v))<=1){ok=true;note='Gần đúng! Viết chuẩn là: '+c;break}}
    const full=esc(tw(s.w))+(rom(s.w)?' ('+esc(rom(s.w))+')':'')+' = '+esc(s.w.f[0]);
    answer(ok,full,note?esc(note):(s.t==='dict'?full:''));say(tw(s.w));return}
  if(s.t==='order'){const got=LS.o.ans.map(b=>b.t).join('|'),want=toks(s.s).join('|'),ok=got===want;
    document.querySelectorAll('.tk').forEach(b=>b.disabled=true);answer(ok,esc(stext(s.s)),ok&&srom(s.s)?esc(srom(s.s)):'');say(stext(s.s))}
}
function tally(k,ok){const g=LS.bySk[k]=LS.bySk[k]||[0,0];g[1]++;if(ok)g[0]++;const T=(S.skill[S.lang]=S.skill[S.lang]||{}),h=T[k]=T[k]||[0,0];h[1]++;if(ok)h[0]++;save('skill',S.skill)}
function answer(ok,correct,extra){
  const s=LS.steps[LS.i];LS.ans=ok;
  if(!s.counted){s.counted=1;LS.total++;if(ok)LS.right++;if(SK[s.t])tally(SK[s.t],ok)}
  if(!ok&&!s.retry&&!LS.retried.has(s)){LS.retried.add(s);LS.steps.push({...s,counted:1,opts:null,retry:1})}
  $('lf').className='lf '+(ok?'ok':'bad');beep(ok);
  $('fb').innerHTML=ok?['Tuyệt vời!','Chính xác!','Giỏi quá!','Đúng rồi!'][Math.floor(Math.random()*4)]+(extra?`<small>${extra}</small>`:''):`Chưa đúng<small>Đáp án: ${correct}</small>`;
  setBtn(ok?'Tiếp tục':'Đã hiểu',true);
}
/* Micro */
let REC=null;
function micOK(){return !S.noMic&&!!(window.SpeechRecognition||window.webkitSpeechRecognition)}
function stopMic(){try{REC&&REC.abort()}catch(e){}REC=null}
function startMic(){
  const s=LS.steps[LS.i],target=s.w?tw(s.w):stext(s.s),rm=s.w?rom(s.w):srom(s.s),st=$('mics'),mb=$('micb');
  try{speechSynthesis.cancel()}catch(e){}
  try{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;REC=new SR();REC.lang=L().tts;REC.interimResults=false;REC.maxAlternatives=5;
    REC.onresult=e=>{const al=[...e.results[0]].map(a=>a.transcript);let best=0,bt=al[0]||'';
      for(const a of al)for(const c of [...alts(target),...alts(rm)]){const v=sim(a,c);if(v>best){best=v;bt=a}}
      REC=null;mb&&mb.classList.remove('on');
      const ok=best>=.6;answer(ok,esc(target),'Bạn nói: “'+esc(bt)+'” · khớp '+Math.round(best*100)+'%');
      if(!ok)$('fb').innerHTML+=`<small>App nghe được: “${esc(bt)}”</small>`};
    REC.onerror=e=>{mb&&mb.classList.remove('on');REC=null;
      if(e.error==='not-allowed'||e.error==='service-not-allowed'||e.error==='audio-capture'){S.noMic=true;toast('Không dùng được micro, chuyển sang tự chấm');renderStep()}
      else if(st)st.textContent='Chưa nghe rõ, bấm micro và nói lại nhé'};
    REC.onend=()=>{mb&&mb.classList.remove('on');if(REC&&st)st.textContent='Bấm micro rồi nói'};
    REC.start();mb&&mb.classList.add('on');if(st)st.textContent='Đang nghe… hãy nói';
  }catch(e){S.noMic=true;renderStep()}
}
function next(){
  LS.i++;if(LS.i<LS.steps.length){renderStep();return}
  const acc=LS.total?Math.round(LS.right/LS.total*100):100,replay=!LS.review&&P().done.includes(LS.day);
  const xp=LS.review?LS.right*2:replay?5:10+(acc===100?5:0);S.xp+=xp;save('xp',S.xp);
  if(!LS.review){if(!replay){P().done.push(LS.day);save('prog',S.prog)}
    if(S.daily.date!==today())S.daily={date:today(),n:0};S.daily.n++;save('daily',S.daily);
    const d=new Date();d.setDate(d.getDate()-1);if(S.streak.last!==today()){S.streak.n=S.streak.last===d.toDateString()?S.streak.n+1:1;S.streak.last=today();save('streak',S.streak)}}
  $('lbar').style.width='100%';$('lf').className='lf';$('fb').innerHTML='';
  const N=CUR().nodes.length,nextDay=!LS.review&&LS.day+1<N?LS.day+2:0;
  const sk=Object.keys(SKN).filter(k=>LS.bySk[k]).map(k=>{const [r,t]=LS.bySk[k],p=Math.round(r/t*100);return `<div class="skr"><span class="sk sk-${k}">${SKN[k]}</span><div class="bar"><i style="width:${p}%"></i></div><b>${p}%</b></div>`}).join('');
  $('lb').innerHTML=`<div class="done-screen"><div class="seal"><div>${LS.review?'LUYỆN TẬP':'NGÀY '+(LS.day+1)}<small>hoàn thành</small></div></div>
    <div class="kind" style="margin:0">${acc>=90?'Xuất sắc!':acc>=70?'Làm tốt lắm!':'Cố lên, lần sau sẽ tốt hơn!'}</div>
    <div class="res"><div><b>+${xp}</b><span>XP</span></div><div><b>${acc}%</b><span>chính xác</span></div><div><b>${streakAlive()?S.streak.n:0}</b><span>ngày liên tiếp</span></div></div>
    <div style="text-align:start">${sk}</div>
    ${nextDay&&!replay?`<p style="color:var(--mute)">Đã mở khoá Ngày ${nextDay}.</p>`:''}</div>`;
  setBtn(LS.review?'Về luyện tập':'Về lộ trình',true,'quit');beep(true);
}
/* Sao lưu */
function doExport(){const o={};KEYS.forEach(k=>o[k]=S[k]);const code='HCNN1:'+btoa(unescape(encodeURIComponent(JSON.stringify(o))));const t=$('bkt');t.value=code;t.select();
  try{navigator.clipboard.writeText(code).then(()=>toast('Đã chép mã sao lưu'),()=>toast('Hãy chép mã trong ô bên dưới'))}catch(e){toast('Hãy chép mã trong ô bên dưới')}}
function doImport(){const v=($('bkt').value||'').trim();try{if(!v.startsWith('HCNN1:'))throw 0;const o=JSON.parse(decodeURIComponent(escape(atob(v.slice(6)))));
  KEYS.forEach(k=>{if(o[k]!==undefined){S[k]=o[k];save(k,o[k])}});toast('Đã khôi phục tiến độ');render()}catch(e){toast('Mã sao lưu không hợp lệ')}}
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-lang],[data-tab],[data-day],[data-goal],[data-act],[data-pick],[data-spick],[data-say],[data-ml],[data-mr],[data-ob],[data-oa],[data-skill]');if(!t)return;
  const ds=t.dataset;
  if(ds.lang){S.lang=ds.lang;save('lang',S.lang);S.scrolled=false;render();return}
  if(ds.tab){S.tab=ds.tab;S.scrolled=false;render();try{scrollTo(0,0)}catch(e){}return}
  if(ds.goal){S.goal=+ds.goal;save('goal',S.goal);render();return}
  if(ds.say){say(ds.say);return}
  if(ds.skill){if(!learned().length){toast('Hoàn thành Ngày 1 trước nhé');return}start(-1,ds.skill);return}
  if(ds.day!==undefined){const d=+ds.day,cur=curNode();if(d>cur){toast('Hoàn thành Ngày '+(cur+1)+' trước để mở khoá');return}start(d);return}
  if(ds.pick!==undefined){if(LS.ans!==null)return;const s=LS.steps[LS.i],o=s.opts[+ds.pick],ok=o.key===s.w.key;
    t.classList.add(ok?'right':'wrong');document.querySelectorAll('.ch').forEach((b,i)=>{b.disabled=true;if(s.opts[i].key===s.w.key)b.classList.add('right')});
    answer(ok,esc(tw(s.w)+(rom(s.w)?' ('+rom(s.w)+')':'')+' = '+s.w.f[0]));if(s.t!=='mc')say(tw(s.w));return}
  if(ds.spick!==undefined){if(LS.ans!==null)return;const s=LS.steps[LS.i],ok=s.opts[+ds.spick]===s.s;
    t.classList.add(ok?'right':'wrong');document.querySelectorAll('.ch').forEach((b,i)=>{b.disabled=true;if(s.opts[i]===s.s)b.classList.add('right')});
    answer(ok,esc(s.s.vi),s.t==='listenS'?esc(stext(s.s)):'');return}
  if(ds.ob!==undefined){const b=LS.o.bank.find(x=>x.i===+ds.ob);b.used=true;LS.o.ans.push(b);say(b.t);drawOrder();return}
  if(ds.oa!==undefined){if(LS.ans!==null)return;const b=LS.o.ans.splice(+ds.oa,1)[0];b.used=false;drawOrder();return}
  if(ds.ml){const m=LS.m;document.querySelectorAll('[data-ml]').forEach(b=>b.classList.remove('sel','bad'));t.classList.add('sel');m.sel=ds.ml;say(tw(CUR().ws.find(w=>w.key===ds.ml)));return}
  if(ds.mr){const m=LS.m;if(!m.sel){toast('Chọn một từ bên trái trước');return}
    const l=document.querySelector(`[data-ml="${m.sel}"]`);
    if(ds.mr===m.sel){l.classList.remove('sel');l.classList.add('ok');t.classList.add('ok');m.sel=null;m.done++;beep(true);
      if(m.done===m.L.length){const s=LS.steps[LS.i];if(!s.counted){s.counted=1;LS.total++;if(!m.err)LS.right++;tally('doc',!m.err)}
        LS.ans=true;$('lf').className='lf ok';$('fb').innerHTML=m.err?'Hoàn thành ghép cặp!':'Hoàn hảo, không sai cặp nào!';setBtn('Tiếp tục',true)}}
    else{m.err++;beep(false);t.classList.add('bad');l.classList.add('bad');setTimeout(()=>t.classList.remove('bad'),500)}return}
  const a=ds.act;
  if(a==='export'){doExport();return}
  if(a==='import'){doImport();return}
  if(a==='install'){installApp();return}
  if(a==='dismiss'){$('ios').remove();save('iosd',1);return}
  if(!LS&&a!=='review')return;
  if(a==='speak'){sayW(LS.steps[LS.i]);return}
  if(a==='showrom'){$('srom').hidden=false;t.remove();return}
  if(a==='mic'){if(LS.ans!==null)return;if(REC){stopMic();t.classList.remove('on');return}startMic();return}
  if(a==='selfok'||a==='selfno'){if(LS.ans!==null)return;const s=LS.steps[LS.i];answer(a==='selfok',esc(s.w?tw(s.w):stext(s.s)),'');document.querySelectorAll('.btn2').forEach(b=>b.disabled=true);return}
  if(a==='skipspeak'){stopMic();LS.steps=LS.steps.filter((x,i)=>i<=LS.i||SK[x.t]!=='noi');toast('Đã bỏ qua phần nói trong lượt này');LS.ans=true;next();return}
  if(a==='quit'){const rv=LS&&LS.review;quit();if(rv){S.tab='review';render()}return}
  if(a==='check'){check();return}
  if(a==='cont'){if(!t.disabled)next();return}
  if(a==='review')start(-1,'mix');
});
document.addEventListener('change',e=>{const k=e.target.dataset.opt;if(k){S.opt[k]=e.target.checked;save('opt',S.opt)}});
document.addEventListener('keydown',e=>{
  if(!LS||e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  if(/^[1-4]$/.test(e.key))document.querySelector(`[data-pick="${+e.key-1}"],[data-spick="${+e.key-1}"]`)?.click();
  else if(e.key==='Enter'&&!$('lbtn').disabled){e.preventDefault();$('lbtn').click()}
  else if(e.key==='Escape')quit();
});
/* Cài app (PWA) */
let deferred=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;const b=$('instb');if(b)b.hidden=false});
function installApp(){if(!deferred)return;deferred.prompt();deferred.userChoice.finally(()=>{deferred=null;$('instb').hidden=true})}
try{
  const standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone;
  const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
  if(ios&&!standalone&&!load('iosd',0)&&location.protocol==='https:'&&!/claude/.test(location.hostname)){
    document.body.insertAdjacentHTML('beforeend','<div class="ios" id="ios"><span>Cài app: bấm nút Chia sẻ của Safari rồi chọn “Thêm vào MH chính”.</span><button data-act="dismiss" aria-label="Đóng">×</button></div>')}
  if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('sw.js').catch(()=>{});
}catch(e){}
try{speechSynthesis.getVoices();speechSynthesis.onvoiceschanged=()=>{}}catch(e){}
render();
}
