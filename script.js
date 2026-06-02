// ═══════════════════════════════════════
//  GAME DATA
// ═══════════════════════════════════════
const CHAPTERS = [
  {
    id: 0, name: "Simple Present", icon: "📖",
    location: "The Village of Verbs",
    enemy: { name: "Tense Goblin", avatar: "tengu.png", hp: 3, maxHp: 3 },
    narration: "A mischievous Tense Goblin blocks the village gate. It speaks in riddles of grammar — answer correctly to drive it away!",
    color: "#3498db", isBoss: false,
  },
  {
    id: 1, name: "Simple Past", icon: "⏳",
    location: "The Ruins of Yesterday",
    enemy: { name: "Past Phantom", avatar: "phantom.png", hp: 3, maxHp: 3 },
    narration: "Echoes of the past haunt these ruins. A phantom of forgotten deeds demands you prove your mastery of what once was.",
    color: "#8e44ad", isBoss: false,
  },
  {
    id: 2, name: "Simple Future", icon: "🔮",
    location: "The Oracle's Tower",
    enemy: { name: "Prophet Wraith", avatar: "wraith.png", hp: 3, maxHp: 3 },
    narration: "High in the tower, the Prophet Wraith guards visions of the future. Only those who speak of tomorrow correctly may pass.",
    color: "#27ae60", isBoss: false,
  },
  {
    id: 3, name: "Present Continuous", icon: "🌀",
    location: "The Spinning Vortex",
    enemy: { name: "Continuance Demon", avatar: "vortex.png", hp: 3, maxHp: 3 },
    narration: "An ongoing storm rages. The Continuance Demon thrives on actions happening right now — prove you understand the present moment!",
    color: "#e67e22", isBoss: false,
  },
  {
    id: 4, name: "Boss Battle", icon: "👑",
    location: "The Dragon's Keep",
    enemy: { name: "Grammar Dragon", avatar: "dragon.png", hp: 5, maxHp: 5 },
    narration: "⚠️ BOSS BATTLE! The great Grammar Dragon has terrorized these lands for ages. All tenses converge here. Only a true Grammar Master can prevail!",
    color: "#c0392b", isBoss: true,
  },
];
 
const QUESTIONS = {
  0: [ // Simple Present
    {
      type: "mc", tense: "Simple Present",
      q: "She always ___ to school by bus.",
      options: ["go", "goes", "went", "going"],
      answer: 1,
      exp: "'She' (3rd person singular) requires adding -s to the verb: 'goes'. Simple present is used for habits and routines."
    },
    {
      type: "mc", tense: "Simple Present",
      q: "The sun ___ in the east every morning.",
      options: ["rise", "rises", "rose", "rising"],
      answer: 1,
      exp: "We use simple present for facts/general truths. 'The sun' = singular, so 'rises' is correct."
    },
    {
      type: "fill", tense: "Simple Present",
      q: "They ___ (play) football every Saturday.",
      answer: "play",
      exp: "'They' is plural, so no -s is added. 'Play' is the correct simple present form."
    },
    {
      type: "arrange", tense: "Simple Present",
      q: "Arrange into a correct Simple Present sentence:",
      words: ["every", "She", "morning", "exercises"],
      answer: "She exercises every morning",
      exp: "Subject (She) + Verb+s (exercises) + time expression (every morning)."
    },
    {
      type: "mc", tense: "Simple Present",
      q: "He ___ not like vegetables.",
      options: ["do", "does", "did", "doing"],
      answer: 1,
      exp: "Negative simple present with 3rd person singular (he/she/it) uses 'does not'. So: 'He does not like...'"
    },
  ],
  1: [ // Simple Past
    {
      type: "mc", tense: "Simple Past",
      q: "Yesterday, I ___ to the market alone.",
      options: ["go", "goes", "went", "going"],
      answer: 2,
      exp: "'Went' is the irregular past form of 'go'. Simple past is used for completed actions in the past."
    },
    {
      type: "fill", tense: "Simple Past",
      q: "She ___ (finish) her homework last night.",
      answer: "finished",
      exp: "Regular verbs in simple past: add -ed. 'Finish' → 'finished'. The time marker 'last night' confirms past tense."
    },
    {
      type: "mc", tense: "Simple Past",
      q: "They ___ a great movie last weekend.",
      options: ["watch", "watches", "watched", "watching"],
      answer: 2,
      exp: "'Watched' is the simple past form of 'watch'. Regular verb: add -ed."
    },
    {
      type: "arrange", tense: "Simple Past",
      q: "Arrange into a correct Simple Past sentence:",
      words: ["the", "book", "yesterday", "He", "read"],
      answer: "He read the book yesterday",
      exp: "Subject + V2 (read — irregular: read/read/read) + object + time."
    },
    {
      type: "mc", tense: "Simple Past",
      q: "She ___ not come to the party last night.",
      options: ["do", "does", "did", "was"],
      answer: 2,
      exp: "Negative simple past uses 'did not' (didn't) for all subjects. 'She did not come...'"
    },
  ],
  2: [ // Simple Future
    {
      type: "mc", tense: "Simple Future",
      q: "I ___ visit my grandmother tomorrow.",
      options: ["will", "would", "shall", "All are correct"],
      answer: 3,
      exp: "'Will', 'shall' (formal), and 'would' (conditional) can all express future. In simple future with 'tomorrow', all three are acceptable, but 'will' is most common."
    },
    {
      type: "fill", tense: "Simple Future",
      q: "They ___ (travel) to Japan next year.",
      answer: "will travel",
      exp: "Simple future: will + base verb. 'They will travel' — no conjugation of the main verb after 'will'."
    },
    {
      type: "mc", tense: "Simple Future",
      q: "She ___ be here at 9 AM sharp.",
      options: ["will", "is", "was", "has"],
      answer: 0,
      exp: "'Will be' is the simple future of 'be'. Used for predictions or plans about the future."
    },
    {
      type: "arrange", tense: "Simple Future",
      q: "Arrange into a correct Simple Future sentence:",
      words: ["will", "next", "He", "graduate", "year"],
      answer: "He will graduate next year",
      exp: "Subject + will + base verb + time expression. 'Will' never changes form."
    },
    {
      type: "mc", tense: "Simple Future",
      q: "We ___ not attend the meeting tomorrow.",
      options: ["will", "do", "did", "are"],
      answer: 0,
      exp: "Negative future: will not (won't) + base verb. 'We will not attend...' or 'We won't attend...'"
    },
  ],
  3: [ // Present Continuous
    {
      type: "mc", tense: "Present Continuous",
      q: "Look! The children ___ in the garden right now.",
      options: ["play", "plays", "played", "are playing"],
      answer: 3,
      exp: "'Are playing' is present continuous: be + verb-ing. 'Right now' is a signal for this tense."
    },
    {
      type: "fill", tense: "Present Continuous",
      q: "She ___ (read) a novel at the moment.",
      answer: "is reading",
      exp: "'She' + is + verb-ing = 'is reading'. 'At the moment' signals an ongoing action."
    },
    {
      type: "mc", tense: "Present Continuous",
      q: "He ___ his teeth right now.",
      options: ["brush", "brushes", "is brushing", "was brushing"],
      answer: 2,
      exp: "'Is brushing' = present continuous. He (singular) + is + verb+ing."
    },
    {
      type: "arrange", tense: "Present Continuous",
      q: "Arrange into a correct Present Continuous sentence:",
      words: ["is", "She", "letter", "writing", "a"],
      answer: "She is writing a letter",
      exp: "Subject + is/am/are + verb+ing + object. Present continuous shows ongoing action."
    },
    {
      type: "mc", tense: "Present Continuous",
      q: "They ___ not sleeping. They are studying.",
      options: ["is", "are", "was", "were"],
      answer: 1,
      exp: "Negative present continuous with 'they' = 'are not'. 'They are not sleeping...'"
    },
  ],
  4: [ // BOSS — mix of all
    {
      type: "mc", tense: "Mixed",
      q: "Every morning, she ___ coffee before work.",
      options: ["drink", "drinks", "drank", "is drinking"],
      answer: 1,
      exp: "Habit/routine = Simple Present. 3rd person singular → 'drinks'."
    },
    {
      type: "mc", tense: "Mixed",
      q: "Look at her! She ___ so fast right now.",
      options: ["runs", "ran", "will run", "is running"],
      answer: 3,
      exp: "'Right now' = Present Continuous. 'is running' shows an ongoing action."
    },
    {
      type: "fill", tense: "Mixed",
      q: "We ___ (visit) Paris last summer and it was amazing.",
      answer: "visited",
      exp: "'Last summer' = completed past event → Simple Past. 'visit' + ed = 'visited'."
    },
    {
      type: "mc", tense: "Mixed",
      q: "I promise I ___ help you with your project tomorrow.",
      options: ["will", "would", "am", "was"],
      answer: 0,
      exp: "Promise about future = 'will'. Simple Future: I will help you."
    },
    {
      type: "arrange", tense: "Mixed",
      q: "FINAL BLOW — arrange this correctly:",
      words: ["She", "studying", "tomorrow", "will", "be"],
      answer: "She will be studying tomorrow",
      exp: "Future continuous: will + be + verb+ing. Shows an ongoing action in the future."
    },
  ],
};
 
// ═══════════════════════════════════════
//  GAME STATE
// ═══════════════════════════════════════
let state = {};
 
function initState() {
  state = {
    hp: 100, maxHp: 100,
    xp: 0, xpToLevel: 100,
    level: 1,
    score: 0,
    streak: 0, maxStreak: 0,
    hints: 3,
    currentChapter: 0,
    currentQ: 0,
    answers: [], // track per chapter
    totalCorrect: 0,
    enemyHp: 0, enemyMaxHp: 0,
    arrangeSelected: [],
    answered: false,
    correctCount: 0, wrongCount: 0,
    classes: ["Apprentice Grammarian","Word Warrior","Syntax Sorcerer","Grammar Knight","Tense Titan","Lexicon Lord","Master Grammarian"],
  };
}
 
// ═══════════════════════════════════════
//  PARTICLES
// ═══════════════════════════════════════
function initParticles() {
  const c = document.getElementById('particles');
  for (let i = 0; i < 25; i++) {
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = Math.random() * 100 + '%';
    s.style.bottom = Math.random() * 20 + '%';
    s.style.animationDuration = (3 + Math.random() * 5) + 's';
    s.style.animationDelay = (Math.random() * 5) + 's';
    s.style.opacity = Math.random() * 0.5;
    c.appendChild(s);
  }
}
 
// ═══════════════════════════════════════
//  SCREENS
// ═══════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
 
// ═══════════════════════════════════════
//  START / RESTART
// ═══════════════════════════════════════
function startGame() {
  initState();
  buildChapterList();
  showScreen('game-screen');
  loadChapter(0);
}
 
function restartGame() {
  initState();
  buildChapterList();
  showScreen('game-screen');
  loadChapter(0);
}
 
// ═══════════════════════════════════════
//  CHAPTER
// ═══════════════════════════════════════
function buildChapterList() {
  const el = document.getElementById('chapter-list');
  el.innerHTML = CHAPTERS.map((ch, i) => `
    <div class="chapter-item ${i === 0 ? 'current' : 'locked'}" id="ch-item-${i}">
      <span class="chapter-icon">${ch.icon}</span>
      <span>Ch.${i+1} — ${ch.name}</span>
    </div>
  `).join('');
}
 
function updateChapterList() {
  CHAPTERS.forEach((ch, i) => {
    const el = document.getElementById('ch-item-' + i);
    if (!el) return;
    el.className = 'chapter-item';
    if (i < state.currentChapter) el.classList.add('done');
    else if (i === state.currentChapter) el.classList.add('current');
    else el.classList.add('locked');
  });
}
 
function loadChapter(chIdx) {
  state.currentChapter = chIdx;
  state.currentQ = 0;
  state.answers = [];
  const ch = CHAPTERS[chIdx];
  state.enemyHp = ch.enemy.hp;
  state.enemyMaxHp = ch.enemy.maxHp;
  updateChapterList();
 
  // Build progress dots for this chapter
  const qs = QUESTIONS[chIdx];
  const dotsEl = document.getElementById('prog-dots');
  dotsEl.innerHTML = qs.map((_, i) => `<div class="prog-dot" id="dot-${i}"></div>`).join('');
  document.getElementById('dot-0').classList.add('current');
 
  renderQuestion();
}
 
// ═══════════════════════════════════════
//  RENDER QUESTION
// ═══════════════════════════════════════
function renderQuestion() {
  state.answered = false;
  state.arrangeSelected = [];
  const ch = CHAPTERS[state.currentChapter];
  const qs = QUESTIONS[state.currentChapter];
  const q = qs[state.currentQ];
  const mc = document.getElementById('main-content');
 
  const enemyHpPct = (state.enemyHp / state.enemyMaxHp * 100) + '%';
 
  let questionHTML = '';
  if (q.type === 'mc') {
    questionHTML = `
      <div class="q-text">${q.q.replace('___', '<span class="q-blank">___</span>')}</div>
      <div class="options-grid">
        ${q.options.map((opt, i) => `
          <button class="option-btn" id="opt-${i}" onclick="submitMC(${i})">
            <span class="opt-key">${['A','B','C','D'][i]}</span> ${opt}
          </button>`).join('')}
      </div>`;
  } else if (q.type === 'fill') {
    questionHTML = `
      <div class="q-text">${q.q.replace('___', '<span class="q-blank">___</span>')}</div>
      <div class="fill-input-wrap">
        <input type="text" class="fill-input" id="fill-inp" placeholder="Type your answer…" onkeydown="if(event.key==='Enter')submitFill()">
        <button class="btn" onclick="submitFill()">Submit ⚔</button>
      </div>`;
  } else if (q.type === 'arrange') {
    const shuffled = [...q.words].sort(() => Math.random() - 0.5);
    questionHTML = `
      <div class="q-text">${q.q}</div>
      <div class="arrange-area">
        <div style="font-size:0.75rem; color:var(--text3); margin-bottom:0.3rem;">Your answer:</div>
        <div class="arrange-answer" id="arrange-ans"></div>
        <div style="font-size:0.75rem; color:var(--text3); margin:0.5rem 0 0.3rem;">Available words:</div>
        <div class="arrange-words" id="arrange-words">
          ${shuffled.map((w,i) => `<div class="word-tile" id="tile-${i}" onclick="selectWord(${i},'${w}')">${w}</div>`).join('')}
        </div>
        <div style="display:flex; gap:0.6rem; margin-top:0.5rem;">
          <button class="btn" onclick="submitArrange()">Submit ⚔</button>
          <button class="btn" onclick="clearArrange()" style="font-size:0.8rem;">Clear ↺</button>
        </div>
      </div>`;
  }
 
  const bossExtra = ch.isBoss ? `
    <div class="boss-banner">
      <div class="boss-title">⚠ BOSS BATTLE ⚠</div>
      <div class="boss-name">${ch.enemy.name}</div>
    </div>` : '';
 
  mc.innerHTML = `
    ${bossExtra}
    <div class="scene-box">
      <div class="scene-location">📍 ${ch.location}</div>
      <div class="scene-enemy">
        <div class="enemy-avatar">
    <img src="assets/${ch.enemy.avatar}" alt="${ch.enemy.name}">
</div>
        <div class="enemy-info">
          <div class="enemy-name">${ch.enemy.name}</div>
          <div style="font-size:0.75rem; color:var(--text3);">Enemy HP: ${state.enemyHp}/${state.enemyMaxHp}</div>
          <div class="enemy-hp-bar"><div class="enemy-hp-fill" id="enemy-hp-bar" style="width:${enemyHpPct}"></div></div>
        </div>
      </div>
      <div class="scene-narration">${ch.narration}</div>
    </div>
 
    <div class="question-box">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <span class="q-type-badge">${q.tense} · Q${state.currentQ+1}/${qs.length} · ${q.type === 'mc' ? 'Multiple Choice' : q.type === 'fill' ? 'Fill in the Blank' : 'Arrange Words'}</span>
        <span class="hint-token" onclick="useHint()">💡 Use Hint (${state.hints})</span>
      </div>
      ${questionHTML}
    </div>
 
    <div class="feedback-box" id="feedback-box">
      <div class="feedback-title" id="fb-title"></div>
      <div class="feedback-exp" id="fb-exp"></div>
      <div style="margin-top:0.8rem;" id="fb-btn"></div>
    </div>
  `;
 
  if (q.type === 'fill') {
    setTimeout(() => document.getElementById('fill-inp')?.focus(), 100);
  }
}
 
// ═══════════════════════════════════════
//  SUBMIT ANSWERS
// ═══════════════════════════════════════
function submitMC(idx) {
  if (state.answered) return;
  const q = QUESTIONS[state.currentChapter][state.currentQ];
  const correct = idx === q.answer;
  document.querySelectorAll('.option-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add('correct');
    else if (i === idx && !correct) b.classList.add('wrong');
  });
  processAnswer(correct, q.exp);
}
 
function submitFill() {
  if (state.answered) return;
  const q = QUESTIONS[state.currentChapter][state.currentQ];
  const inp = document.getElementById('fill-inp');
  if (!inp) return;
  const val = inp.value.trim().toLowerCase();
  const correct = val === q.answer.toLowerCase();
  inp.disabled = true;
  inp.classList.add(correct ? 'correct' : 'wrong');
  if (!correct) inp.value = inp.value + ' → ' + q.answer;
  processAnswer(correct, q.exp);
}
 
function selectWord(idx, word) {
  if (state.answered) return;
  const tile = document.getElementById('tile-' + idx);
  if (tile.classList.contains('used')) {
    // remove from answer
    const i = state.arrangeSelected.findIndex(s => s.idx === idx);
    if (i !== -1) state.arrangeSelected.splice(i, 1);
    tile.classList.remove('used', 'placed');
  } else {
    state.arrangeSelected.push({ idx, word });
    tile.classList.add('used');
  }
  updateArrangeDisplay();
}
 
function updateArrangeDisplay() {
  const ans = document.getElementById('arrange-ans');
  if (!ans) return;
  ans.innerHTML = state.arrangeSelected.length
    ? state.arrangeSelected.map((s, i) => `<div class="word-tile placed" onclick="removeArrangeWord(${i})">${s.word}</div>`).join('')
    : '<span style="color:var(--text3); font-size:0.85rem; font-style:italic;">Click words below to build your sentence…</span>';
}
 
function removeArrangeWord(pos) {
  if (state.answered) return;
  const removed = state.arrangeSelected.splice(pos, 1)[0];
  document.getElementById('tile-' + removed.idx)?.classList.remove('used', 'placed');
  updateArrangeDisplay();
}
 
function clearArrange() {
  if (state.answered) return;
  state.arrangeSelected = [];
  document.querySelectorAll('.word-tile').forEach(t => t.classList.remove('used', 'placed'));
  updateArrangeDisplay();
}
 
function submitArrange() {
  if (state.answered) return;
  const q = QUESTIONS[state.currentChapter][state.currentQ];
  const sentence = state.arrangeSelected.map(s => s.word).join(' ');
  const correct = sentence.toLowerCase() === q.answer.toLowerCase();
  document.querySelectorAll('.word-tile').forEach(t => t.classList.add(correct ? 'correct' : 'wrong'));
  const ans = document.getElementById('arrange-ans');
  if (ans && !correct) {
    ans.innerHTML += `<div style="margin-top:0.5rem; font-size:0.8rem; color:var(--green2);">✓ Correct: ${q.answer}</div>`;
  }
  processAnswer(correct, q.exp);
}
 
// ═══════════════════════════════════════
//  PROCESS ANSWER RESULT
// ═══════════════════════════════════════
function processAnswer(correct, explanation) {
  state.answered = true;
  const ch = CHAPTERS[state.currentChapter];
 
  if (correct) {
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    state.totalCorrect++;
    state.correctCount++;
 
    const xpGain = ch.isBoss ? 30 : 20;
    const scoreGain = ch.isBoss ? 150 : 100 + (state.streak > 2 ? 50 * (state.streak - 1) : 0);
    state.score += scoreGain;
    state.xp += xpGain;
    state.enemyHp = Math.max(0, state.enemyHp - 1);
 
    showEffect('+' + xpGain + ' XP', 'xp');
    setTimeout(() => showEffect('-1 Enemy HP', 'dmg'), 400);
 
    showFeedback(true, explanation, scoreGain);
    updateEnemyBar();
    checkLevelUp();
  } else {
    state.streak = 0;
    state.wrongCount++;
    const dmg = ch.isBoss ? 20 : 15;
    state.hp = Math.max(0, state.hp - dmg);
    showEffect('-' + dmg + ' HP', 'dmg');
    showFeedback(false, explanation, 0);
  }
 
  updateHUD();
  updateSidebar();
  updateDot(state.currentQ, correct);
}
 
function updateEnemyBar() {
  const bar = document.getElementById('enemy-hp-bar');
  if (bar) bar.style.width = (state.enemyHp / state.enemyMaxHp * 100) + '%';
}
 
// ═══════════════════════════════════════
//  SHOW FEEDBACK
// ═══════════════════════════════════════
function showFeedback(correct, exp, points) {
  const fb = document.getElementById('feedback-box');
  const title = document.getElementById('fb-title');
  const expEl = document.getElementById('fb-exp');
  const btnEl = document.getElementById('fb-btn');
  if (!fb) return;
 
  fb.classList.add('show', correct ? 'correct-fb' : 'wrong-fb');
  title.className = 'feedback-title ' + (correct ? 'c' : 'w');
  title.textContent = correct
    ? `⚔ CRITICAL HIT! +${points} points${state.streak > 1 ? ' · 🔥 ' + state.streak + 'x Streak!' : ''}`
    : '💔 Enemy strikes back! -15 HP';
  expEl.innerHTML = `<strong>Explanation:</strong> ${exp}`;
 
  const qs = QUESTIONS[state.currentChapter];
  const isLastQ = state.currentQ >= qs.length - 1;
  const enemyDefeated = state.enemyHp <= 0;
  const playerDead = state.hp <= 0;
 
  if (playerDead) {
    btnEl.innerHTML = `<button class="btn danger" onclick="endGame(false)">💀 You Have Fallen…</button>`;
  } else if (enemyDefeated) {
    btnEl.innerHTML = `<button class="btn success" onclick="nextChapter()">⚡ Enemy Defeated! Next Chapter →</button>`;
  } else if (isLastQ) {
    btnEl.innerHTML = `<button class="btn" onclick="nextChapter()">Next Chapter →</button>`;
  } else {
    btnEl.innerHTML = `<button class="btn" onclick="nextQuestion()">Next Question →</button>`;
  }
}
 
// ═══════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════
function nextQuestion() {
  state.currentQ++;
  renderQuestion();
}
 
function nextChapter() {
  const nextIdx = state.currentChapter + 1;
  if (nextIdx >= CHAPTERS.length) {
    endGame(true);
  } else {
    showNotif('⚔️ Chapter ' + (nextIdx + 1) + ' unlocked: ' + CHAPTERS[nextIdx].name);
    loadChapter(nextIdx);
  }
}
 
// ═══════════════════════════════════════
//  END GAME
// ═══════════════════════════════════════
function endGame(victory) {
  showScreen('result-screen');
  const box = document.getElementById('result-box');
  box.className = 'result-box ' + (victory ? 'victory' : 'defeat');
  document.getElementById('res-icon').textContent = victory ? '🏆' : '💀';
  document.getElementById('res-title').textContent = victory ? 'Victory!' : 'Defeated';
  document.getElementById('res-msg').textContent = victory
    ? 'You have mastered the four tenses and slain the Grammar Dragon! A true Tense Master!'
    : 'The Grammar Dragon proved too powerful. Train harder and return, brave scholar.';
  document.getElementById('res-score').textContent = state.score;
  document.getElementById('res-lvl').textContent = state.level;
  document.getElementById('res-correct').textContent = state.totalCorrect;
  document.getElementById('res-streak').textContent = state.maxStreak;
}
 
// ═══════════════════════════════════════
//  HUD & SIDEBAR
// ═══════════════════════════════════════
function updateHUD() {
  document.getElementById('hud-hp-txt').textContent = state.hp + '/' + state.maxHp;
  document.getElementById('hud-hp').style.width = (state.hp / state.maxHp * 100) + '%';
  document.getElementById('hud-xp-txt').textContent = state.xp + '/' + state.xpToLevel;
  document.getElementById('hud-xp').style.width = Math.min(100, state.xp / state.xpToLevel * 100) + '%';
  document.getElementById('hud-lvl').textContent = state.level;
  document.getElementById('hud-score').textContent = state.score;
}
 
function updateSidebar() {
  document.getElementById('sb-hp').textContent = state.hp + ' / ' + state.maxHp;
  document.getElementById('sb-lvl').textContent = state.level;
  document.getElementById('sb-xp').textContent = state.xp + ' / ' + state.xpToLevel;
  document.getElementById('sb-score').textContent = state.score;
  document.getElementById('sb-streak').textContent = state.streak;
  document.getElementById('sb-hints').textContent = state.hints;
  document.getElementById('hint-count').textContent = '×' + state.hints;
  const cls = state.classes[Math.min(state.level - 1, state.classes.length - 1)];
  document.getElementById('sb-class').textContent = cls;
}
 
function updateDot(idx, correct) {
  const dot = document.getElementById('dot-' + idx);
  if (dot) {
    dot.classList.remove('current');
    dot.classList.add(correct ? 'done' : 'wrong-dot');
  }
  const next = document.getElementById('dot-' + (idx + 1));
  if (next) next.classList.add('current');
}
 
// ═══════════════════════════════════════
//  LEVEL UP
// ═══════════════════════════════════════
function checkLevelUp() {
  if (state.xp >= state.xpToLevel) {
    state.xp -= state.xpToLevel;
    state.level++;
    state.xpToLevel = Math.floor(state.xpToLevel * 1.3);
    state.maxHp += 20;
    state.hp = Math.min(state.hp + 30, state.maxHp);
    showNotif('🌟 LEVEL UP! You are now Level ' + state.level + '!');
    showEffect('LEVEL UP!', 'heal');
    const cls = state.classes[Math.min(state.level - 1, state.classes.length - 1)];
    document.getElementById('sb-name').textContent = cls;
  }
}
 
// ═══════════════════════════════════════
//  HINT
// ═══════════════════════════════════════
function useHint() {
  if (state.hints <= 0) { showNotif('❌ No hints remaining!'); return; }
  if (state.answered) { showNotif('⚠️ Already answered!'); return; }
  const q = QUESTIONS[state.currentChapter][state.currentQ];
  state.hints--;
  updateSidebar();
  let hint = '';
  if (q.type === 'mc') {
    hint = 'Hint: The correct answer starts with "' + q.options[q.answer][0] + '"';
  } else if (q.type === 'fill') {
    hint = 'Hint: The answer has ' + q.answer.length + ' characters: ' + q.answer[0] + '_'.repeat(q.answer.length - 1);
  } else {
    hint = 'Hint: The sentence starts with "' + q.answer.split(' ')[0] + '"';
  }
  showModal('💡 Hint Scroll Used', hint);
}
 
// ═══════════════════════════════════════
//  EFFECTS & NOTIFICATIONS
// ═══════════════════════════════════════
function showEffect(text, type) {
  const el = document.createElement('div');
  el.className = 'combat-effect ' + type;
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}
 
function showNotif(msg) {
  const el = document.createElement('div');
  el.className = 'notif';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}
 
function showModal(title, text) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-title">${title}</div>
      <div class="modal-text">${text}</div>
      <div class="modal-btns">
        <button class="btn" onclick="this.closest('.modal-overlay').remove()">Got it ✓</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
}
 
// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
initParticles();

// ═══════════════════════════════════════
//  SOUNDTRACK
// ═══════════════════════════════════════
const menuMusic = document.getElementById("menuMusic");
const gameMusic = document.getElementById("gameMusic");

const beginBtn = document.getElementById("beginQuest");

// volume awal
menuMusic.volume = 0.7;
gameMusic.volume = 0;

// autoplay menu setelah user klik pertama
document.body.addEventListener("click", () => {

    if (menuMusic.paused) {
        menuMusic.play();
    }

}, { once: true });


// =========================
// FADE OUT
// =========================
function fadeOut(audio, speed = 0.05) {

    let fade = setInterval(() => {

        if (audio.volume > speed) {

            audio.volume -= speed;

        } else {

            clearInterval(fade);

            audio.pause();
            audio.currentTime = 0;

        }

    }, 100);

}


// =========================
// FADE IN
// =========================
function fadeIn(audio, targetVolume = 0.7, speed = 0.04) {

    audio.volume = 0;

    audio.play();

    let fade = setInterval(() => {

        if (audio.volume < targetVolume) {

            audio.volume += speed;

        } else {

            audio.volume = targetVolume;

            clearInterval(fade);

        }

    }, 100);

}


// =========================
// BUTTON BEGIN QUEST
// =========================
beginBtn.addEventListener("click", () => {

    // fade out menu music
    fadeOut(menuMusic);

    // tunggu fade selesai
    setTimeout(() => {

        // fade in game music
        fadeIn(gameMusic, 0.);

    }, 1500);

});