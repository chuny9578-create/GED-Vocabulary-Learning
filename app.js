// Add new objects here to grow this starter word bank toward 2,000 words.
const WORDS = [
  ['evidence','/ˈevɪdəns/','证据；依据','The author provides evidence to support her claim.','作者提供证据来支持她的观点。','RLA',1],
  ['claim','/kleɪm/','主张；声称','Which claim is best supported by the passage?','哪一项主张最得到文章支持？','RLA',1],
  ['analyze','/ˈænəlaɪz/','分析','Students must analyze the chart before answering.','学生必须在回答前分析图表。','RLA',1],
  ['infer','/ɪnˈfɜːr/','推断','What can the reader infer from the speaker’s words?','读者能从说话者的话中推断出什么？','RLA',2],
  ['relevant','/ˈreləvənt/','相关的；切题的','Choose details that are relevant to the main idea.','选择与中心思想相关的细节。','RLA',2],
  ['significant','/sɪɡˈnɪfɪkənt/','重要的；显著的','The law brought significant changes to voting rights.','这项法律给投票权带来了重大改变。','RLA',2],
  ['establish','/ɪˈstæblɪʃ/','建立；确立；证明','The data establish a clear connection between the two events.','数据证明了这两个事件之间存在明确联系。','RLA',2],
  ['contrast','/kənˈtræst/','对比；差异','The writer contrasts city life with country life.','作者将城市生活与乡村生活作对比。','RLA',1],
  ['perspective','/pərˈspektɪv/','观点；角度','The article presents the issue from a student’s perspective.','文章从学生的角度呈现这个问题。','RLA',2],
  ['conclude','/kənˈkluːd/','得出结论','From the evidence, we can conclude that the plan worked.','根据证据，我们可以得出该计划有效的结论。','RLA',1],
  ['summarize','/ˈsʌməraɪz/','总结；概述','Summarize the author’s main argument in one sentence.','用一句话总结作者的主要论点。','RLA',1],
  ['bias','/ˈbaɪəs/','偏见；倾向','The reader should look for bias in the news report.','读者应在新闻报道中寻找偏见。','RLA',3],
  ['illustrate','/ˈɪləstreɪt/','说明；阐明','This example illustrates why the policy was needed.','这个例子说明了为何需要这项政策。','RLA',2],
  ['consequence','/ˈkɑːnsɪkwens/','结果；后果','One consequence of the storm was a loss of electricity.','暴风雨的一个后果是停电。','RLA',2],
  ['interpret','/ɪnˈtɜːrprət/','解释；理解','Use the graph to interpret the change in population.','使用图表来解释人口变化。','RLA',2],
  ['organism','/ˈɔːrɡənɪzəm/','生物；有机体','Every organism needs energy to survive.','每个生物都需要能量来生存。','Science',1],
  ['cell','/sel/','细胞','The cell is the basic unit of life.','细胞是生命的基本单位。','Science',1],
  ['variable','/ˈveriəbəl/','变量；可变因素','In this experiment, temperature is the variable being tested.','在这个实验中，温度是正在测试的变量。','Science',2],
  ['observe','/əbˈzɜːrv/','观察','Scientists observe the plants every day.','科学家每天观察这些植物。','Science',1],
  ['hypothesis','/haɪˈpɑːθəsɪs/','假设','The students tested their hypothesis with an experiment.','学生用实验检验他们的假设。','Science',2],
  ['adapt','/əˈdæpt/','适应；调整','Some animals adapt to cold weather by growing thicker fur.','有些动物通过长出更厚的皮毛来适应寒冷天气。','Science',2],
  ['process','/ˈprɑːses/','过程；步骤','Photosynthesis is the process plants use to make food.','光合作用是植物制造食物的过程。','Science',1],
  ['environment','/ɪnˈvaɪrənmənt/','环境','Pollution can harm the environment.','污染会伤害环境。','Science',1],
  ['energy','/ˈenərdʒi/','能量','Food gives the body energy.','食物为身体提供能量。','Science',1],
  ['density','/ˈdensəti/','密度','Oil has a lower density than water, so it floats.','油的密度低于水，因此会浮在水面上。','Science',3],
  ['react','/riˈækt/','反应；起反应','When the two chemicals react, a gas is produced.','当这两种化学物质发生反应时，会产生气体。','Science',2],
  ['structure','/ˈstrʌktʃər/','结构；构造','The structure of a bird’s beak helps it find food.','鸟喙的结构帮助它寻找食物。','Science',2],
  ['evolve','/ɪˈvɑːlv/','进化；逐渐发展','Species evolve over many generations.','物种经过许多代进化。','Science',3],
  ['factor','/ˈfæktər/','因素','Rainfall is an important factor in plant growth.','降雨量是植物生长的重要因素。','Science',1],
  ['data','/ˈdeɪtə/','数据','The data show that the number of visitors increased.','数据显示游客数量增加了。','Science',1],
  ['democracy','/dɪˈmɑːkrəsi/','民主；民主制度','In a democracy, citizens can vote for their leaders.','在民主制度中，公民可以投票选举领导人。','Social Studies',1],
  ['citizen','/ˈsɪtɪzən/','公民','Every citizen has rights and responsibilities.','每一位公民都有权利和责任。','Social Studies',1],
  ['amendment','/əˈmendmənt/','修正案','The First Amendment protects freedom of speech.','美国宪法第一修正案保护言论自由。','Social Studies',2],
  ['economy','/ɪˈkɑːnəmi/','经济','A strong economy can create more jobs.','强劲的经济可以创造更多工作机会。','Social Studies',1],
  ['resource','/ˈriːsɔːrs/','资源','Water is a natural resource that communities need.','水是社区需要的自然资源。','Social Studies',1],
  ['prohibit','/proʊˈhɪbɪt/','禁止','The rule prohibits smoking inside the building.','该规定禁止在建筑物内吸烟。','Social Studies',3],
  ['legislation','/ˌledʒɪsˈleɪʃən/','立法；法律','The new legislation changed how schools receive funding.','新立法改变了学校获得资金的方式。','Social Studies',3],
  ['migrate','/ˈmaɪɡreɪt/','迁移；移居','Many families migrate to cities to find work.','许多家庭迁移到城市寻找工作。','Social Studies',2],
  ['conflict','/ˈkɑːnflɪkt/','冲突；矛盾','The conflict ended after both groups reached an agreement.','两个团体达成协议后，冲突结束了。','Social Studies',2],
  ['policy','/ˈpɑːləsi/','政策','The city created a policy to reduce traffic.','城市制定了一项减少交通的政策。','Social Studies',2],
  ['income','/ˈɪnkʌm/','收入','Her income increased after she received a promotion.','她升职后收入增加了。','Social Studies',1],
  ['labor','/ˈleɪbər/','劳动；劳工','Labor laws protect workers from unsafe conditions.','劳动法保护工人免受不安全工作条件的影响。','Social Studies',2],
  ['participate','/pɑːrˈtɪsəpeɪt/','参加；参与','People can participate in local government meetings.','人们可以参加地方政府会议。','Social Studies',2],
  ['impact','/ˈɪmpækt/','影响','The railroad had a major impact on trade.','铁路对贸易产生了重大影响。','Social Studies',1],
  ['authority','/əˈθɔːrəti/','权力；官方机构','The local authority is responsible for public safety.','地方当局负责公共安全。','Social Studies',2],
  ['equation','/ɪˈkweɪʒən/','方程；等式','Solve the equation to find the value of x.','解这个方程，求出 x 的值。','Math',1]
].map(([word,ipa,meaning,exampleEn,exampleZh,category,level], i) => ({id:i+1,word,ipa,meaning,exampleEn,exampleZh,category,level}));

// The full offline expansion is loaded before this file. Keeping it separate
// makes the starter core easy to edit while preserving a self-contained app.
if (Array.isArray(window.GED_FULL_VOCABULARY)) {
  const existing = new Set(WORDS.map(item => item.word.toLowerCase()));
  window.GED_FULL_VOCABULARY.forEach(item => {
    if (!existing.has(item.word.toLowerCase())) {
      WORDS.push({id: WORDS.length + 1, ...item});
      existing.add(item.word.toLowerCase());
    }
  });
}

// Carefully checked chunks for the first cards. The expanded word bank carries
// its own learner-friendly chunks in vocabulary-full.js.
const CORE_SYLLABLES = {
  evidence:'ev·i·dence', claim:'claim', analyze:'an·a·lyze', infer:'in·fer', relevant:'rel·e·vant', significant:'sig·nif·i·cant', establish:'es·tab·lish', contrast:'con·trast', perspective:'per·spec·tive', conclude:'con·clude', summarize:'sum·ma·rize', bias:'bi·as', illustrate:'il·lus·trate', consequence:'con·se·quence', interpret:'in·ter·pret', organism:'or·gan·ism', cell:'cell', variable:'var·i·a·ble', observe:'ob·serve', hypothesis:'hy·poth·e·sis', adapt:'a·dapt', process:'proc·ess', environment:'en·vi·ron·ment', energy:'en·er·gy', density:'den·si·ty', react:'re·act', structure:'struc·ture', evolve:'e·volve', factor:'fac·tor', data:'da·ta', democracy:'de·moc·ra·cy', citizen:'cit·i·zen', amendment:'a·mend·ment', economy:'e·con·o·my', resource:'re·source', prohibit:'pro·hib·it', legislation:'leg·is·la·tion', migrate:'mi·grate', conflict:'con·flict', policy:'pol·i·cy', income:'in·come', labor:'la·bor', participate:'par·tic·i·pate', impact:'im·pact', authority:'au·thor·i·ty', equation:'e·qua·tion'
};
function wordChunks(word){ return word.syllables || CORE_SYLLABLES[word.word.toLowerCase()] || word.word; }
function chunkLabel(word){ const chunks=wordChunks(word); return chunks===word.word ? (/\s/.test(word.word) ? '短语：逐词朗读' : '单音节词') : `拼读分块：${chunks}`; }

const SYNC_CONFIG = window.GED_SYNC_CONFIG || {};
const SYNC_TABLE = SYNC_CONFIG.table || 'ged_vocabulary_progress';

const STORAGE_KEY = 'ged-vocabulary-progress-v1';
const localDay = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const today = () => localDay();
const defaultState = () => ({goal:10, records:{}, studiedByDay:{}, newSubjectsByDay:{}, reviews:0, studyMode:'mixed', syncCode:'', updatedAt:0});
const load = () => { try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)); return {...defaultState(), ...(saved || {}), records:saved?.records || {}, studiedByDay:saved?.studiedByDay || {}, newSubjectsByDay:saved?.newSubjectsByDay || {}}; } catch { return defaultState(); } };
let state = load(), current = null, currentTask = 'flashcard', answerShown = false;
const $ = id => document.getElementById(id);
const persistLocal = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
const save = () => { state.updatedAt=Date.now(); persistLocal(); scheduleSync(); };
const learnedIds = () => Object.keys(state.records);
// Preserve old UTC totals as history. Only timestamped new-word events count
// toward the new local-day goal: old totals cannot be accurately re-dated.
const todayNew = () => Object.values(state.records).filter(r => r.firstLearnedAt && localDay(new Date(r.firstLearnedAt)) === today()).length;
const MINUTE = 60 * 1000, DAY = 24 * 60 * MINUTE;
// First-week intervals are anchored to the original learning session: 15 minutes,
// then Day 1, 3, 7, 14, 30 and 60. Later stages use active production.
const REVIEW_PLAN = [
  {label:'当天巩固', wait:15*MINUTE, task:'flashcard'},
  {label:'第 1 天复习', wait:DAY, task:'flashcard'},
  {label:'第 3 天 · 拼写', wait:2*DAY, task:'spelling'},
  {label:'第 7 天 · 例句填空', wait:4*DAY, task:'cloze'},
  {label:'第 14 天 · 拼写', wait:7*DAY, task:'spelling'},
  {label:'第 30 天 · 自己造句', wait:16*DAY, task:'sentence'},
  {label:'第 60 天 · 自己造句', wait:30*DAY, task:'sentence'}
];
const reviewStep = record => Math.min(REVIEW_PLAN.length-1, Math.max(0, Number.isInteger(record?.reviewStep) ? record.reviewStep : Math.max(0, (record?.knownStreak || 0)-1)));
const reviewAt = record => {
  if(Number.isFinite(record?.nextReviewAt)) return record.nextReviewAt;
  if(record?.nextReview){ const raw=String(record.nextReview), legacy = new Date(/^\d{4}-\d{2}-\d{2}$/.test(raw) ? `${raw}T00:00:00` : raw).getTime(); if(Number.isFinite(legacy)) return legacy; }
  return 0;
};
const dueWords = () => WORDS.filter(w => state.records[w.id] && reviewAt(state.records[w.id]) <= Date.now());
const MIXED_SEQUENCE = ['RLA','Math','RLA','Science','RLA','Math','RLA','Social Studies','RLA','Science'];
const modeLabel = () => ({mixed:'四科混合', RLA:'专攻 RLA', Math:'专攻 Math', Science:'专攻 Science', 'Social Studies':'专攻 Social Studies'})[state.studyMode] || '四科混合';
const activeMode = () => ['mixed','RLA','Math','Science','Social Studies'].includes(state.studyMode) ? state.studyMode : 'mixed';
let syncMessage = '', syncTimer, syncInFlight = null, syncAgain = false;

function syncReady(){ return Boolean(SYNC_CONFIG.supabaseUrl && SYNC_CONFIG.supabaseAnonKey); }
function normalizedSyncCode(code){ return code.toUpperCase().replace(/[^A-Z0-9]/g,'').replace(/^(.{3})(.*)$/,'$1-$2'); }
function makeSyncCode(){
  const bytes=new Uint8Array(16); crypto.getRandomValues(bytes);
  return 'GED-'+Array.from(bytes, byte=>byte.toString(16).padStart(2,'0')).join('').toUpperCase();
}
function syncHeaders(){
  const key=SYNC_CONFIG.supabaseAnonKey;
  const headers={apikey:key, 'Content-Type':'application/json', 'X-Sync-Key':state.syncCode};
  // Supabase's current sb_publishable_* keys are opaque API keys, not JWTs.
  // Legacy anon keys still require the older Bearer header for compatibility.
  if(!String(key).startsWith('sb_')) headers.Authorization=`Bearer ${key}`;
  return headers;
}
function syncEndpoint(){ return `${SYNC_CONFIG.supabaseUrl.replace(/\/$/,'')}/rest/v1/${encodeURIComponent(SYNC_TABLE)}`; }
function updateSyncUI(){
  const ready=syncReady(), connected=Boolean(state.syncCode);
  if(document.activeElement !== $('syncCode')) $('syncCode').value=state.syncCode || '';
  $('connectSync').disabled=!ready; $('syncNow').disabled=!ready || !connected;
  $('syncStatus').textContent=syncMessage || (ready ? (connected ? '等待同步' : '需要同步码') : '离线保存中');
  $('syncHelp').textContent=ready ? (connected ? '进度会在每次学习后自动同步；你也可以随时点击“立即同步”。' : '首次使用：在一台设备生成同步码，再在另一台设备输入同一串码。') : '尚未连接同步服务；学习记录仍安全保存在当前浏览器。';
}
function recordWinner(localRecord, remoteRecord){
  if(!localRecord) return remoteRecord; if(!remoteRecord) return localRecord;
  const localTime=Number(localRecord.updatedAt || 0), remoteTime=Number(remoteRecord.updatedAt || 0);
  if(localTime || remoteTime) {
    const winner = remoteTime > localTime ? remoteRecord : localRecord;
    const first = [localRecord.firstLearnedAt, remoteRecord.firstLearnedAt].filter(n => Number.isFinite(n) && n > 0);
    return {...winner, ...(first.length ? {firstLearnedAt:Math.min(...first)} : {})};
  }
  if((remoteRecord.knownCount || 0) !== (localRecord.knownCount || 0)) return (remoteRecord.knownCount || 0) > (localRecord.knownCount || 0) ? remoteRecord : localRecord;
  return String(remoteRecord.nextReview || '') > String(localRecord.nextReview || '') ? remoteRecord : localRecord;
}
function mergeProgress(local, remote){
  const merged={...defaultState(), ...remote, syncCode:local.syncCode, studyMode:local.studyMode, goal:local.goal};
  merged.records={};
  new Set([...Object.keys(remote.records || {}), ...Object.keys(local.records || {})]).forEach(id=>merged.records[id]=recordWinner(local.records?.[id],remote.records?.[id]));
  merged.studiedByDay={...remote.studiedByDay};
  Object.entries(local.studiedByDay || {}).forEach(([day,count])=>merged.studiedByDay[day]=Math.max(merged.studiedByDay[day] || 0,count));
  merged.newSubjectsByDay={...remote.newSubjectsByDay};
  Object.entries(local.newSubjectsByDay || {}).forEach(([day,items])=>{ if((items || []).length >= (merged.newSubjectsByDay[day] || []).length) merged.newSubjectsByDay[day]=items; });
  merged.reviews=Math.max(local.reviews || 0,remote.reviews || 0);
  merged.updatedAt=Math.max(local.updatedAt || 0,remote.updatedAt || 0);
  return merged;
}
function syncPayload(){ const {syncCode,...payload}=state; return payload; }
function scheduleSync(){
  if(!syncReady() || !state.syncCode) return;
  clearTimeout(syncTimer); syncTimer=setTimeout(pullProgress,900);
}
async function pullProgress(){
  if(!syncReady() || !state.syncCode) return;
  if(syncInFlight){ syncAgain=true; return syncInFlight; }
  const code=state.syncCode, headers=syncHeaders();
  syncInFlight=(async()=>{
  try{
    syncMessage='正在读取进度…'; updateSyncUI();
    const response=await fetch(`${syncEndpoint()}?sync_key=eq.${encodeURIComponent(code)}&select=payload`,{headers,cache:'no-store'});
    if(!response.ok) throw new Error(`读取失败 (${response.status})`);
    const rows=await response.json();
    if(state.syncCode!==code) return;
    if(rows[0]?.payload){ state=mergeProgress(state,rows[0].payload); persistLocal(); updateDashboard(); if(!current) showCard(null); }
    const result=await fetch(`${syncEndpoint()}?on_conflict=sync_key`,{method:'POST',headers:{...headers,Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify({sync_key:code,payload:syncPayload(),updated_at:new Date().toISOString()})});
    if(!result.ok) throw new Error(`同步失败 (${result.status})`);
    if(state.syncCode===code) syncMessage=`已同步 ${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}`;
  }catch(error){ syncMessage=`${error.message || '连接失败'}；进度已保存在本机，联网后重试。`; }
  finally { updateSyncUI(); }
  })();
  try { await syncInFlight; } finally { syncInFlight=null; if(syncAgain){syncAgain=false; scheduleSync();} }
}

function updateDashboard(){
  const learned = learnedIds().length, mastered = Object.values(state.records).filter(r=>r.knownCount>0).length, due = dueWords().length, done=todayNew();
  $('dailyGoal').value=state.goal; $('goalNumber').textContent=state.goal; $('goalText').textContent=`今天已学习 ${done} / ${state.goal} 个新词`;
  $('goalProgress').style.width=Math.min(100,done/state.goal*100)+'%'; $('dueCount').textContent=due; $('masteredCount').textContent=mastered;
  $('learnedStat').textContent=learned; $('totalWords').textContent=WORDS.length; $('masteryRate').textContent=learned ? Math.round(mastered/learned*100)+'%' : '0%'; $('reviewStat').textContent=state.reviews||0;
  $('wordBankCount').textContent=`当前词库 ${WORDS.length} 个词（可继续扩充）`;
  $('studyMode').value=activeMode();
  $('modeDescription').textContent=activeMode()==='mixed' ? '默认四科混合：每 10 个新词为 RLA 5、Math 2、Science 2、Social Studies 1。' : `${modeLabel()}：新增词只从该科推送；所有科目的到期复习仍会优先显示。`;
  updateSyncUI();
  const cats=['RLA','Math','Science','Social Studies'];
  $('categoryProgress').innerHTML=cats.map(c=>{const total=WORDS.filter(w=>w.category===c).length, count=WORDS.filter(w=>w.category===c&&state.records[w.id]).length; return `<div class="category-line"><span>${c}</span><div class="progress-track"><div class="progress-fill" style="width:${count/total*100}%"></div></div><em>${count}/${total}</em></div>`}).join('');
}
function chooseNewWord(){
  const mode=activeMode(), sequence=mode==='mixed' ? MIXED_SEQUENCE : [mode];
  const position=todayNew();
  for(let offset=0; offset<sequence.length; offset++){
    const category=sequence[(position+offset)%sequence.length];
    const candidate=WORDS.filter(w=>w.category===category&&!state.records[w.id]).sort((a,b)=>a.level-b.level||a.id-b.id)[0];
    if(candidate) return candidate;
  }
  return WORDS.filter(w=>!state.records[w.id]).sort((a,b)=>a.level-b.level||a.id-b.id)[0] || null;
}
function chooseNext(){
  const due=dueWords(); if(due.length) return due.sort((a,b)=>reviewAt(state.records[a.id])-reviewAt(state.records[b.id]))[0];
  if(todayNew()>=state.goal) return null;
  return chooseNewWord();
}
function escapeRegExp(value){ return value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }
function simpleEnglish(value){ return value.toLowerCase().replace(/[^a-z0-9]+/g,''); }
function clozeSentence(word){
  const blanked=word.exampleEn.replace(new RegExp(`\\b${escapeRegExp(word.word)}\\b`,'i'),'______');
  return blanked===word.exampleEn ? `根据中文提示填入英文单词：${word.meaning}` : blanked;
}
function clearPractice(){
  $('practice').classList.add('hidden'); $('practiceInput').value=''; $('practiceInput').rows=2;
  $('practiceFeedback').textContent=''; $('practiceFeedback').className='practice-feedback';
}
function configurePractice(word, task, plan){
  clearPractice();
  if(task==='flashcard') return;
  $('practice').classList.remove('hidden');
  $('practiceLabel').textContent=task==='spelling' ? `SPELLING · ${plan.label}` : task==='cloze' ? `CONTEXT · ${plan.label}` : `MAKE A SENTENCE · ${plan.label}`;
  $('practiceInputLabel').textContent=task==='sentence' ? '输入你的英文句子' : '输入英文单词';
  if(task==='spelling'){
    $('word').textContent='拼写练习'; $('syllables').textContent=plan.label; $('prompt').textContent='看中文提示，点击喇叭听发音后拼写英文单词。';
    $('practicePrompt').textContent=`中文提示：${word.meaning}`; $('practiceInput').placeholder='输入英文单词'; $('practiceInput').rows=1; $('speakButton').disabled=false;
  }else if(task==='cloze'){
    $('word').textContent='例句填空'; $('syllables').textContent=plan.label; $('prompt').textContent='请把正确的英文单词填入空格。';
    $('practicePrompt').textContent=clozeSentence(word); $('practiceInput').placeholder='输入英文单词'; $('practiceInput').rows=1; $('speakButton').disabled=true;
  }else{
    $('word').textContent=word.word; $('syllables').textContent=`${chunkLabel(word)} · ${plan.label}`; $('prompt').textContent='用这个词写一句简短英文句子；不自动判语法，但会保存你的练习。';
    $('practicePrompt').textContent=`提示：${word.meaning}。尽量写 5–15 个英文词。`; $('practiceInput').placeholder=`例如：I can use ${word.word} in a sentence.`; $('practiceInput').rows=3; $('speakButton').disabled=false;
  }
}
function showCard(word){
  current=word; currentTask='flashcard'; answerShown=false; clearPractice(); $('answer').classList.add('hidden'); $('ratingButtons').classList.add('hidden'); $('showAnswer').classList.remove('hidden'); $('startButton').classList.add('hidden');
  if(!word){
    const due=dueWords().length, complete=todayNew()>=state.goal;
    $('word').textContent=due?'有词汇等待复习':complete?'今日新词目标已完成':'准备开始今天的学习';
    $('syllables').textContent='';
    const upcoming=Object.values(state.records).map(reviewAt).filter(t=>t>Date.now()).sort((a,b)=>a-b)[0];
    $('prompt').textContent=due?'点击下方按钮复习。':complete?'可以调高上方目标继续学新词。'+(upcoming?` 下次复习：${new Date(upcoming).toLocaleString()}`:''):'每日目标按本机当地日期计算。';
    $('cardTag').textContent='GED'; $('cardDifficulty').textContent='学习模式'; $('speakButton').disabled=true; $('showAnswer').classList.add('hidden'); $('startButton').classList.remove('hidden'); $('startButton').textContent=due?'开始复习':complete?'检查待复习词':'开始今天的学习'; $('sessionTitle').textContent=complete?'今日学习进度':'准备开始'; return;
  }
  const record=state.records[word.id], plan=record ? REVIEW_PLAN[reviewStep(record)] : null;
  currentTask=plan?.task || 'flashcard';
  $('word').textContent=word.word; $('syllables').textContent=chunkLabel(word); $('ipa').textContent=word.ipa; $('meaning').textContent=word.meaning; $('exampleEn').textContent=word.exampleEn; $('exampleZh').textContent=word.exampleZh; $('cardTag').textContent=word.category; $('cardDifficulty').textContent=plan?.label || 'Level '+word.level; $('speakButton').disabled=false;
  const isDue=Boolean(record) && reviewAt(record)<=Date.now(); $('sessionTitle').textContent=isDue?`复习：${plan.label}`:'学习新词'; $('prompt').textContent='先想一想它的意思，再显示答案。';
  configurePractice(word,currentTask,plan || REVIEW_PLAN[0]);
  if(currentTask!=='flashcard') $('showAnswer').classList.add('hidden');
}
function start(){ showCard(chooseNext()); }
function rate(rating){
  if(!current || !answerShown) return;
  const old=state.records[current.id], isNew=!old, oldStep=reviewStep(old); let nextStep=oldStep, wait=15*MINUTE, knownStreak=0;
  if(rating==='known'){ nextStep=old ? Math.min(REVIEW_PLAN.length-1,oldStep+1) : 0; wait=REVIEW_PLAN[nextStep].wait; knownStreak=(old?.knownStreak||0)+1; }
  if(rating==='unsure'){ nextStep=old ? oldStep : 0; wait=nextStep===0 ? 15*MINUTE : DAY; }
  if(rating==='forgot'){ nextStep=0; wait=10*MINUTE; }
  const nextReviewAt=Date.now()+wait, practiceSentence=currentTask==='sentence' ? $('practiceInput').value.trim() : old?.lastSentence;
  state.records[current.id]={...old,firstLearnedAt:isNew ? Date.now() : old.firstLearnedAt,nextReview:new Date(nextReviewAt).toISOString().slice(0,10),nextReviewAt,reviewStep:nextStep,knownCount:(old?.knownCount||0)+(rating==='known'?1:0),knownStreak,lastRating:rating,lastPractice:currentTask,lastSentence:practiceSentence || undefined,sentenceCount:(old?.sentenceCount||0)+(currentTask==='sentence' && practiceSentence ? 1 : 0),updatedAt:Date.now()};
  if(isNew){ state.studiedByDay[today()]=todayNew(); (state.newSubjectsByDay[today()] ||= []).push(current.category); } state.reviews=(state.reviews||0)+1; save(); updateDashboard(); showCard(chooseNext());
}
function reveal(){if(!current)return; answerShown=true; $('answer').classList.remove('hidden'); $('showAnswer').classList.add('hidden'); $('ratingButtons').classList.remove('hidden');}
function checkPractice(){
  if(!current || currentTask==='flashcard') return;
  const value=$('practiceInput').value.trim(), feedback=$('practiceFeedback'); feedback.className='practice-feedback';
  if(!value){ feedback.textContent='请先输入答案，或选择“显示参考答案”。'; feedback.classList.add('needs-work'); return; }
  if(currentTask==='sentence'){
    const enoughWords=value.split(/\s+/).filter(Boolean).length>=4, usesWord=simpleEnglish(value).includes(simpleEnglish(current.word));
    feedback.textContent=enoughWords && usesWord ? '✅ 已保存这句练习。请参考下方 GED 例句，再选择掌握度。' : `请尽量写至少 4 个英文词，并包含 “${current.word}”。`;
    feedback.classList.add(enoughWords && usesWord ? 'correct' : 'needs-work'); reveal(); return;
  }
  const correct=simpleEnglish(value)===simpleEnglish(current.word);
  feedback.textContent=correct ? (currentTask==='spelling' ? '✅ 拼写正确！请看例句，再选择掌握度。' : '✅ 填空正确！请看例句，再选择掌握度。') : `参考答案：${current.word}。请看一遍并选择最符合的掌握度。`;
  feedback.classList.add(correct ? 'correct' : 'needs-work'); reveal();
}
function renderWords(){const q=$('searchInput').value.trim().toLowerCase(), cat=$('categoryFilter').value, level=$('levelFilter').value; const list=WORDS.filter(w=>(!q||`${w.word} ${wordChunks(w)} ${w.meaning}`.toLowerCase().includes(q))&&(cat==='all'||w.category===cat)&&(level==='all'||w.level===+level)); $('wordList').innerHTML=list.length?list.map(w=>`<article class="word-row"><div><h3>${w.word}</h3><p class="syllables word-row-syllables">${chunkLabel(w)}</p><p class="ipa">${w.ipa}</p></div><div><p><b>${w.meaning}</b></p><p>${w.exampleEn}</p><p class="translation">${w.exampleZh}</p></div><div><span class="tag">${w.category}</span></div></article>`).join(''):'<p class="study-note">没有找到匹配的词。</p>'}
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab,.page').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$(btn.dataset.page).classList.add('active');if(btn.dataset.page==='words')renderWords();}));
$('startButton').addEventListener('click',start); $('showAnswer').addEventListener('click',reveal); $('checkPractice').addEventListener('click',checkPractice); $('skipPractice').addEventListener('click',reveal); document.querySelectorAll('[data-rating]').forEach(b=>b.addEventListener('click',()=>rate(b.dataset.rating)));
$('practiceInput').addEventListener('keydown',event=>{ if(event.key==='Enter' && !event.shiftKey && currentTask!=='sentence'){ event.preventDefault(); checkPractice(); } });
$('dailyGoal').addEventListener('input',e=>{state.goal=+e.target.value;save();updateDashboard();}); ['searchInput','categoryFilter','levelFilter'].forEach(id=>$(id).addEventListener(id==='searchInput'?'input':'change',renderWords));
$('studyMode').addEventListener('change',e=>{state.studyMode=e.target.value; save(); updateDashboard();});
$('createSyncCode').addEventListener('click',()=>{if(state.syncCode){syncMessage='已有同步码，请在另一台设备输入同一码。';updateSyncUI();return;}state.syncCode=makeSyncCode();save();updateSyncUI();pullProgress();});
$('connectSync').addEventListener('click',()=>{const code=normalizedSyncCode($('syncCode').value);if(code.replace('-','').length<16){syncMessage='请输入至少 16 位的同步码';updateSyncUI();return;}state.syncCode=code;save();updateDashboard();pullProgress();});
$('syncNow').addEventListener('click',pullProgress);
$('speakButton').addEventListener('click',()=>{if(current&&'speechSynthesis'in window){speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(current.word));}});
$('speakExampleButton').addEventListener('click',()=>{if(current&&'speechSynthesis'in window){speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(current.exampleEn));}});
$('resetProgress').addEventListener('click',()=>{if(confirm('确定清除这台设备上的所有学习记录吗？词库不会删除。')){const syncCode=state.syncCode;state={...defaultState(),syncCode};save();updateDashboard();current=null;showCard(null);}});
updateDashboard(); showCard(null); renderWords();
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
if(state.syncCode && syncReady()) pullProgress();
function refreshSession(){ updateDashboard(); if(!current) showCard(null); }
window.addEventListener('focus',()=>{refreshSession(); pullProgress();});
window.addEventListener('online',()=>pullProgress());
document.addEventListener('visibilitychange',()=>{if(!document.hidden){refreshSession(); pullProgress();}});
setInterval(()=>{if(!document.hidden){refreshSession();}},30000);
setInterval(()=>{if(!document.hidden && state.syncCode) pullProgress();},60000);
