/* ============================================================
   结果文案
   ============================================================ */
var RESULTS = {
  dom:{
    letter:'DOM', name:'暗室的指挥官', en:'THE ARCHITECT · DOM',
    quote:'我不急着让你听话。我只要你在我看着的时候，慢慢忘了怎么反抗。',
    quoteNote:'— 掌控型 · 你的准许就是命令 —',
    traits:[
      '默认自己定方向，也真的会为后面每一步负责',
      '对"讲清楚"有洁癖：规则、界限、后果，都要说到能执行',
      '危机里反而冷静，越是混乱越能看见结构',
      '不轻易把权力借出去，但一旦借了，会先确认对方接得住'
    ],
    reason:'你在多数情境里把"定方向、划界限、承担结果"选成了默认项。真正让你上瘾的不是控制本身，而是<b>对方在你面前一点点松开</b>的那个过程——你享受的是准许，不是命令。你偏向把权力当作责任的另一种写法：能让人放心交出来的，才配拿着。',
    strength:'你能给别人一种很稀缺的东西：<b>确定性</b>。在所有人都含糊的时候，你能把话说到可执行的程度；更难得的是，你能让人在你面前卸下防备，而不是竖起防线。',
    egg:'你手机里有一个只有自己看得懂的清单，里面存着"万一出事怎么办"的预案——从未派上用场，你还是每年更新一次。另外还有一条从没发出去的消息，开头两个字是「过来」。'
  },
  sad:{
    letter:'S', name:'张力的编织者', en:'THE WEAVER · S',
    quote:'我不破坏你。我只是想看看，你被我看着的时候，会露出哪一种表情。',
    quoteNote:'— 施与型 · 你的反应就是我的回礼 —',
    traits:[
      '对空气的变化极敏感，气氛一散你就想动手',
      '享受"对方撑不住却还没喊停"的那一秒，那是你确认连接的时刻',
      '玩笑、挑逗、试探，都是你量距离的尺',
      '不喜欢真伤害，但喜欢真反应'
    ],
    reason:'你在题目里反复选择"把气氛再往前推一点""看看他会怎么反应"。这指向的是<b>施与倾向</b>：你的快感来自反馈——一次呼吸变浅、一句没说完的话，比任何表白都实在。你更像导演，不是狱卒；你要的不是他疼，是他诚实。',
    strength:'你是把人从"礼貌的僵局"里拽出来的那种人。<b>你能让平淡的场合迅速有了温度</b>，也能先一步打破假客气。这种张力，是很多亲密关系最缺的燃料。',
    egg:'你大概试过用一句话让整个房间安静两秒，然后若无其事地继续喝水——那一小口水，是你给自己颁的奖。'
  },
  sub:{
    letter:'SUB', name:'交出钥匙的人', en:'THE DEVOTED · SUB',
    quote:'你把方向盘拿走的时候，我才敢把眼睛闭上。',
    quoteNote:'— 交付型 · 被接管才是休息 —',
    traits:[
      '愿意让渡决定权，但前提是对方真的接得住',
      '被明确安排的时候，反而更放松、更能专注',
      '对"被认可"敏感，一句"做得对"能撑你很久',
      '善于读空气，常比对方更早察觉他需要什么'
    ],
    reason:'你在很多题上选了"你定，我都行""希望有人给我指令"。这不是没主见，而是<b>你愿意用控制权换取确定感</b>：方向由可信的人给出，你就能把全部力气放在"做好"上。你要的不是被支配，是被一个靠谱的人接管——然后可以什么都不用想。',
    strength:'你有一种罕见的能力：<b>让另一个人感到自己被需要、被托住</b>。你给出去的不是顺从，是把自己的安全感押在对方身上——这会让人不敢轻慢你。',
    egg:'你其实有一套自己的评估系统：一次点菜、一次迟到、一次他接电话的语气，你已经在心里打完分了，而且从不说破。'
  },
  mas:{
    letter:'M', name:'承重的人', en:'THE ENDURER · M',
    quote:'别急着停。我想知道自己能到哪一步——也想看看，你会不会拦我。',
    quoteNote:'— 承重型 · 撑住的那一刻最清醒 —',
    traits:[
      '忍耐阈值高，而且享受那个"还能再一点"的过程',
      '不太喊停，更多时候是怕扫兴，也怕被看轻',
      '对强度和真实感有需求，太平顺反而让你空',
      '习惯把情绪自己消化，很少现场崩'
    ],
    reason:'你的选择集中在"还能继续""越紧越清醒""累到虚脱但满足"。这指向<b>承重倾向</b>：你需要通过承担强度来获得存在感与边界感——痛、累、紧张，对你不是损耗，是坐标。你未必喜欢被伤害，但你需要被"确认"：有人看着你，知道你撑到哪了。',
    strength:'你的耐受是真实资源：<b>你能在长期压力里保持运转，而多数人早就退场</b>。这种韧性在创业、创作、长期照护里几乎不可替代。',
    egg:'你有一种奇怪的骄傲：受伤之后先不看医生，先观察它自己怎么好——还会为"恢复得比想象中快"偷偷高兴。'
  },
  sw:{
    letter:'SWITCH', name:'双面持钥人', en:'THE SWITCH · BOTH SIDES',
    quote:'我不是站在哪一边。我是那个看你想往哪边走的人。',
    quoteNote:'— 双重型 · 位置由对面决定 —',
    traits:[
      '同一个房间里能立刻换位：他退，你上；他稳住，你交出去',
      '对"谁该主导"没有执念，你在意的是此刻谁更合适',
      '换位几乎不需要过渡，像拨一个开关',
      '常被误读成"没立场"，其实你只是不肯把自己锁死'
    ],
    reason:'你的 Dom 与 Sub 几乎等高，两边都在线。这不是摇摆不定，而是<b>你身上装着两套操作系统</b>：对方的反应就是切换键。你需要掌控时是真的在承担，你交付时也是真的在松开——两种都不是表演。真正让你上头的，是"今天由谁来"的问题被临时定下来的那一刻。',
    strength:'你是关系里的适配器：<b>能接住不一样的人，也不必为了谁把自己削成一个形状</b>。这份弹性让你很难被磨损，也让你成为别人愿意讲真话的那种对象。',
    egg:'你换位置的速度比对方察觉的还快。他刚以为自己掌握了主动权，你已经悄悄把方向盘递过去了——而他到最后都没发现。'
  }
};

/* ============================================================
   状态与工具
   ============================================================ */
/* 属性关键词（分享卡用） */
var KW = {
  dom:['秩序','责任','边界'],
  sad:['张力','反应','分寸'],
  sub:['信任','交付','读懂'],
  mas:['耐受','坐标','沉默'],
  sw:['双向','适位','不锁死']
};
var state = { idx:0, answers:[], lock:false };
var CATS = ['日常习惯','处事方式','社交模式','亲密与边界','情绪与偏好'];
/* 各维度在全部选项中可获得的总权重：用于校正题目数量/权重分配差异 */
var WSUM = {dom:0, sad:0, sub:0, mas:0};
(function computeWeight(){
  QUESTIONS.forEach(function(item){
    item.o.forEach(function(opt){
      DIMS.forEach(function(d){ WSUM[d] += (opt.w[d] || 0); });
    });
  });
})();

/* 选项顺序固定随机化：避免"总选 A 就指向同一属性"的位置偏差 */
var ORDER = (function(){
  var seed = 20261125;
  function rand(){ seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; }
  return QUESTIONS.map(function(q){
    var arr = q.o.map(function(_, k){ return k; });
    for(var i = arr.length - 1; i > 0; i--){
      var j = Math.floor(rand() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  });
})();

function $(id){ return document.getElementById(id); }
function clamp(n,a,b){ return Math.max(a, Math.min(b,n)); }
function showView(name){
  ['intro','quiz','result'].forEach(function(v){
    $('view-'+v).classList.toggle('active', v===name);
  });
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ============================================================
   答题流程
   ============================================================ */
function startQuiz(){
  state.idx = 0;
  state.answers = new Array(QUESTIONS.length).fill(null);
  $('counter').style.visibility = 'visible';
  $('track').style.visibility = 'visible';
  showView('quiz');
  renderQuestion();
}

function renderQuestion(){
  var i = state.idx;
  var item = QUESTIONS[i];
  $('qNow').textContent = String(i+1);
  $('fill').style.width = ((i / QUESTIONS.length) * 100) + '%';
  $('qIndex').textContent = 'QUESTION ' + String(i+1).padStart(2,'0');
  $('qCat').textContent = CATS[Math.min(CATS.length-1, Math.floor(i/10))];
  $('backBtn').disabled = (i === 0);

  var html = '<p class="q-text"><span class="mark">/</span>' + item.q + '</p><div class="opts">';
  var order = ORDER[i];
  order.forEach(function(k, pos){
    var opt = item.o[k];
    var picked = state.answers[i] === k ? ' picked' : '';
    html += '<button class="opt'+picked+'" data-k="'+k+'">'
         +   '<span class="tag">'+ 'ABCD'[pos] +'</span>'
         +   '<span>'+ opt.t +'</span>'
         + '</button>';
  });
  html += '</div>';

  var body = $('qBody');
  body.innerHTML = html;
  body.classList.remove('view-fade');
  void body.offsetWidth;
  body.classList.add('view-fade');

  Array.prototype.forEach.call(body.querySelectorAll('.opt'), function(btn){
    btn.addEventListener('click', function(){ choose(parseInt(btn.dataset.k,10)); });
  });
  state.lock = false;
}

function choose(k){
  if(state.lock) return;
  state.lock = true;
  var i = state.idx;
  state.answers[i] = k;

  var opts = $('qBody').querySelectorAll('.opt');
  Array.prototype.forEach.call(opts, function(b){
    b.classList.toggle('picked', parseInt(b.dataset.k,10) === k);
  });

  setTimeout(function(){
    if(i+1 < QUESTIONS.length){
      state.idx = i+1;
      renderQuestion();
    } else {
      $('fill').style.width = '100%';
      setTimeout(computeResult, 260);
    }
  }, 300);
}

function goBack(){
  if(state.lock) return;
  if(state.idx > 0){ state.lock = true; state.idx--; renderQuestion(); }
}

/* ============================================================
   评分
   ============================================================ */
function computeResult(){
  var raw = {dom:0, sad:0, sub:0, mas:0};
  state.answers.forEach(function(k, i){
    if(k === null) return;
    var w = QUESTIONS[i].o[k].w || {};
    DIMS.forEach(function(d){ raw[d] += (w[d] || 0); });
  });

  // 各维度先按可获得的总权重归一，再折算成合计 100% 的构成比
  var norm = {}, sumNorm = 0;
  DIMS.forEach(function(d){
    norm[d] = WSUM[d] > 0 ? raw[d] / WSUM[d] : 0;
    sumNorm += norm[d];
  });
  var pct = {};
  DIMS.forEach(function(d){
    pct[d] = sumNorm > 0 ? (norm[d] / sumNorm) * 100 : 0;
  });

  var sorted = DIMS.slice().sort(function(a,b){ return pct[b] - pct[a]; });
  var top = sorted[0];

  // 唯一双属性：Dom 与 Sub 双高且贴近 → Switch；其余只取最高单一维度
  var isSwitch = pct.dom >= SW_CFG.min
              && pct.sub >= SW_CFG.min
              && Math.abs(pct.dom - pct.sub) <= SW_CFG.gap
              && (pct.dom + pct.sub) >= SW_CFG.sum;

  state.pct = pct;
  state.type = isSwitch ? 'sw' : top;
  renderResult(state.type);
}

/* ============================================================
   结果渲染
   ============================================================ */
function renderResult(top){
  var r = RESULTS[top];
  showView('result');

  $('counter').style.visibility = 'hidden';
  $('track').style.visibility = 'hidden';

  $('resBadge').textContent = 'RESULT · ' + (top === 'sw' ? '双重属性 · SWITCH' : DIM_FULL[top].toUpperCase());
  $('resLetter').textContent = r.letter;
  var L = r.letter.length;
  $('resLetter').style.fontSize = L >= 5 ? '21px' : (L > 1 ? '30px' : '44px');
  $('resLetter').style.letterSpacing = L >= 5 ? '.05em' : (L > 1 ? '.08em' : '.06em');
  $('resName').textContent = r.name;
  $('resEn').textContent = r.en;
  $('resQuote').innerHTML = r.quote + '<span>' + r.quoteNote + '</span>';

  var traits = '';
  r.traits.forEach(function(t){ traits += '<li>' + t + '</li>'; });
  $('resTraits').innerHTML = traits;
  $('resSwitches').innerHTML = (r.switches || []).map(function(t){ return '<li>' + t + '</li>'; }).join('');
  $('resReason').innerHTML = r.reason;
  $('resStrength').innerHTML = r.strength;
  $('resEgg').innerHTML = r.egg;

  // 四维光谱
  var bars = '', scBars = '';
  DIMS.slice().sort(function(a,b){ return state.pct[b]-state.pct[a]; }).forEach(function(d){
    var v = Math.round(state.pct[d]);
    var isTop = (top === 'sw') ? (d === 'dom' || d === 'sub') : (d === top);
    var cls = isTop ? ' bar-row top' : ' bar-row';
    bars += '<div class="'+cls.trim()+'"><div class="k">'+DIM_LABEL[d]+'</div>'
         +  '<div class="bar-track"><div class="bar-fill" data-w="'+v+'" style="background:linear-gradient(90deg,'+DIM_COLOR[d]+'44,'+DIM_COLOR[d]+')"></div></div>'
         +  '<div class="v">'+v+'%</div></div>';
    scBars += '<div class="'+cls.trim()+'" style="grid-template-columns:36px 1fr 34px;gap:8px"><div class="k" style="font-size:10px">'+DIM_LABEL[d]+'</div>'
           +  '<div class="bar-track" style="height:4px"><div class="bar-fill" data-w="'+v+'" style="background:'+DIM_COLOR[d]+'"></div></div>'
           +  '<div class="v" style="font-size:9.5px">'+v+'%</div></div>';
  });
  $('bars').innerHTML = bars;
  $('scBars').innerHTML = scBars;

  // 单一属性制：不做副属性标注；只有 Switch 给一句解释
  var box = '';
  if(top === 'sw'){
    var dd = Math.round(state.pct.dom), ss = Math.round(state.pct.sub);
    box = '<div class="mix"><span>双重属性 SWITCH</span><p>'
        + 'Dom ' + dd + '% 与 Sub ' + ss + '% 几乎等高——你不是摇摆，是两端都能站；位置由对面和场合决定。</p></div>';
  }
  $('mixBox').innerHTML = box;

  // 分享卡
  $('scName').textContent = r.name;
  $('scLine').textContent = r.quote;

  // 进度条动画
  setTimeout(function(){
    Array.prototype.forEach.call(document.querySelectorAll('.bar-fill'), function(el){
      el.style.width = el.dataset.w + '%';
    });
  }, 120);

  state.result = {
    top: top === 'sw' ? 'Switch' : DIM_LABEL[top],
    dim: top,
    name: r.name, en: r.en, quote: r.quote, letter: r.letter,
    pct: {dom:Math.round(state.pct.dom), sad:Math.round(state.pct.sad), sub:Math.round(state.pct.sub), mas:Math.round(state.pct.mas)}
  };
}

/* ============================================================
   分享 / 重测
   ============================================================ */
function copyShare(){
  var s = state.result;
  if(!s) return;
  var txt = '我的关系属性测试结果：' + s.name + '（' + s.en + '）\n'
          + '「' + s.quote + '」\n'
          + 'Dom ' + s.pct.dom + '% · S ' + s.pct.sad + '% · Sub ' + s.pct.sub + '% · M ' + s.pct.mas + '%\n'
          + '—— 50 题生活化取向测试，仅供自我观察。';
  var done = function(){ toast('文案已复制，去粘贴吧'); };
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(txt).then(done).catch(function(){ legacyCopy(txt, done); });
  } else { legacyCopy(txt, done); }
}
function legacyCopy(txt, cb){
  var ta = document.createElement('textarea');
  ta.value = txt; ta.style.position='fixed'; ta.style.opacity='0';
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); cb(); }catch(e){ toast('复制失败，可截图保存'); }
  document.body.removeChild(ta);
}
function toast(msg){
  var t = $('toast'); t.textContent = msg; t.classList.add('on');
  clearTimeout(t._tid);
  t._tid = setTimeout(function(){ t.classList.remove('on'); }, 2000);
}

/* ============================================================
   分享海报
   ============================================================ */
function openPoster(){
  var s = state.result;
  if(!s) return;
  $('pLetter').textContent = s.letter;
  $('pLetter').style.fontSize = s.letter.length > 1 ? '38px' : '56px';
  $('pName').textContent = s.name;
  $('pEn').textContent = s.en;
  $('pQuote').textContent = s.quote;

  var rows = '';
  DIMS.slice().sort(function(a,b){ return s.pct[b] - s.pct[a]; }).forEach(function(d){
    var v = s.pct[d];
    rows += '<div class="p-bar"><div class="k">' + DIM_LABEL[d] + '</div>'
         +  '<div class="t"><div class="f" style="width:' + v + '%;background:' + DIM_COLOR[d] + '"></div></div>'
         +  '<div class="v">' + v + '%</div></div>';
  });
  $('pTag').textContent = '你的属性 · ' + s.top;
  $('pBars').innerHTML = rows;

  var kws = KW[s.dim] || [];
  $('pKw').innerHTML = kws.map(function(k){ return '<span>' + k + '</span>'; }).join('');

  $('posterMask').classList.add('on');
  $('posterTip').style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function closePoster(){
  $('posterMask').classList.remove('on');
  $('posterTip').style.display = 'none';
  document.body.style.overflow = '';
}

/* ============================================================
   绑定
   ============================================================ */
$('adultOk').addEventListener('change', function(){
  $('startBtn').disabled = !this.checked;
});
$('startBtn').addEventListener('click', function(){
  if($('startBtn').disabled) return;
  startQuiz();
});
$('backBtn').addEventListener('click', goBack);
$('againBtn').addEventListener('click', startQuiz);
$('copyBtn').addEventListener('click', copyShare);
$('posterBtn').addEventListener('click', openPoster);
$('posterClose').addEventListener('click', closePoster);
$('posterMask').addEventListener('click', function(e){
  if(e.target === $('posterMask')) closePoster();
});
$('homeBtn').addEventListener('click', function(){ showView('intro'); });

document.addEventListener('keydown', function(e){
  if(!$('view-quiz').classList.contains('active')) return;
  if(['1','2','3','4'].indexOf(e.key) >= 0){
    var pos = parseInt(e.key,10)-1;
    var order = ORDER[state.idx];
    if(pos < order.length) choose(order[pos]);
  } else if(e.key === 'ArrowLeft'){ goBack(); }
});
