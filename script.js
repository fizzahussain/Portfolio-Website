const $=(s,p=document)=>p.querySelector(s);const $$=(s,p=document)=>[...p.querySelectorAll(s)];
const site=$('#site'),title=$('#titleScreen');let avatarMode='glasses',sound=false,lastY=window.scrollY,walkTimer;
const avatarSrc={glasses:'media/ui/fizza-glasses.jpg',casual:'media/ui/fizza-no-glasses.jpg'};
$$('.player-card').forEach(card=>card.addEventListener('click',()=>{$$('.player-card').forEach(c=>{c.classList.remove('active');c.setAttribute('aria-pressed','false')});card.classList.add('active');card.setAttribute('aria-pressed','true');avatarMode=card.dataset.avatar;const footerAvatar=document.querySelector('.player-portrait');if(footerAvatar)footerAvatar.src=avatarSrc[avatarMode];tone(660,.04)}));
function enter(mode='story'){title.style.display='none';site.classList.remove('locked');document.body.dataset.mode=mode;$('#guideAvatar').src=avatarSrc[avatarMode];setTimeout(()=>$('#about').scrollIntoView({behavior:'smooth'}),120);achievement(mode==='quick'?'QUICK EXPLORE READY':'STORY MODE STARTED')}
$('#newGame').onclick=()=>enter('story');$('#quickExplore').onclick=()=>{enter('quick');setTimeout(openMap,240)};
function tone(freq=520,dur=.05){if(!sound)return;const A=window.AudioContext||window.webkitAudioContext;const a=new A(),o=a.createOscillator(),g=a.createGain();o.type='square';o.frequency.value=freq;g.gain.value=.025;o.connect(g);g.connect(a.destination);o.start();o.stop(a.currentTime+dur)}
$('#soundButton').onclick=()=>{sound=!sound;$('#soundButton').textContent=`SFX ${sound?'ON':'OFF'}`;achievement(sound?'SFX ENABLED':'SFX MUTED');tone(740,.07)};
document.addEventListener('click',e=>{if(e.target.closest('button,a,.art-frame,.project-row'))tone(530,.035)});
function tick(){$('#clock').textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}tick();setInterval(tick,30000);
function openMap(){$('#mapPanel').classList.remove('hidden');tone(430,.05)}$('#mapButton').onclick=openMap;$('#closeMap').onclick=()=>$('#mapPanel').classList.add('hidden');$$('.map-grid a').forEach(a=>a.onclick=()=>$('#mapPanel').classList.add('hidden'));
let achTimer;function achievement(text){clearTimeout(achTimer);$('#achievementText').textContent=text;$('#achievement').classList.remove('hidden');achTimer=setTimeout(()=>$('#achievement').classList.add('hidden'),2200)}
const aiSteps=[
['INGEST_01','Messy inputs are where the real system starts.','Documents, scanned pages, voice, and structured files first need to become trustworthy machine-readable inputs.',['PyMuPDF','DOCX','CSV','HTML','JSON'],'[OK] file channels mounted\n[OK] metadata preserved\n[WAIT] understand'],
['UNDERSTAND_02','Extraction quality changes everything downstream.','Native parsing first. OCR or speech-to-text when the source demands it. A polished answer cannot rescue bad extraction.',['Tesseract OCR','faster-whisper','VAD','CPU / int8'],'[OK] OCR fallback armed\n[OK] STT model cached\n[WAIT] represent'],
['REPRESENT_03','Context has to survive the chunk boundary.','Chunking, overlap, metadata, and embeddings decide what meaning remains retrievable after a document is split.',['Chunking','Overlap','nomic-embed-text','Metadata'],'[OK] chunks emitted\n[OK] vectors embedded\n[WAIT] retrieve'],
['RETRIEVE_04','Find the right evidence fast.','Vector storage and approximate nearest-neighbor search turn embeddings into usable retrieval.',['PostgreSQL','pgvector','HNSW','Cosine Similarity'],'[OK] pgvector connected\n[OK] HNSW index online\n[OK] cosine search ready'],
['GROUND_05','Make the answer earn its confidence.','Retrieved evidence becomes explicit context so generation can stay inspectable, filtered, and citation-backed.',['Top-k','Thresholds','Grounding','Citations'],'[OK] context assembled\n[OK] citations attached\n[WAIT] reason'],
['REASON_06','The LLM is the last layer, not the whole product.','Local generation with Ollama turns grounded context into an answer while the surrounding system handles memory, streaming, and user experience.',['Ollama','llama3.2','Memory','SSE Streaming'],'[OK] grounded prompt ready\n[OK] stream open\n[DONE] answer delivered']
];
$$('#aiPipeline button').forEach(btn=>btn.onclick=()=>{const i=+btn.dataset.step,$s=$$('#aiPipeline button');$s.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const d=aiSteps[i];$('#aiCounter').textContent=`0${i+1} / 06`;$('#aiCode').textContent=d[0];$('#aiTitle').textContent=d[1];$('#aiText').textContent=d[2];$('#aiTools').innerHTML=d[3].map(x=>`<span>${x}</span>`).join('');$('#aiLog').textContent=d[4];tone(620,.04)});$$('#aiPipeline button')[3].click();
const projects=[
{icon:'◈',name:'GSME FAQ RAG — Parsing & Chunking',cats:['data','fullstack'],badge:'INDUSTRY FEATURED',tag:'INDUSTRY RAG / DOCUMENT ENGINEERING',desc:'A document-preparation pipeline for GSME FAQ and technical material. It converts DOCX, PDF and image sources into reviewable Markdown, detects FAQ structures, creates semantic evidence chunks, and handles schedule CSVs through typed records for exact filters.',proof:'Built around a real industrial information workflow, with explicit review flags for OCR and uncertain visual evidence. This repository focuses on parsing and chunk preparation, not embeddings or answer generation.',stack:['Python','FastAPI','PyMuPDF','Tesseract OCR','Document Parsing','Chunking','CSV'],url:'https://github.com/fizzahussain/FAQs-RAG-GSME'},
{icon:'▣',name:'RAG Document Assistant',cats:['data','fullstack'],badge:'FLAGSHIP AI SYSTEM',tag:'AI SYSTEMS / FLAGSHIP',desc:'Local-first document intelligence across ingestion, OCR, STT, embeddings, vector retrieval, grounded generation, citations, memory, authentication, streaming, and Dockerized services.',proof:'This is where I learned to treat AI as a system, not a model call.',stack:['Python','FastAPI','Ollama','pgvector','HNSW','Tesseract','faster-whisper','Docker'],url:'https://github.com/fizzahussain/Document-Assistant',demo:'rag'},
{icon:'▥',name:'Near-Real-Time & Periodic Retail Data Warehouse',cats:['data','fullstack'],badge:'DATA ENGINEERING FEATURED',tag:'DATA ENGINEERING / WAREHOUSING',desc:'A concurrent near-real-time and periodic retail data warehouse built around 541,909 raw retail rows and 397,884 retained transactions. Includes bounded ingestion, MESHJOIN, recovery/replay, reconciliation tests and analytical SQL queries.',proof:'Combines concurrent data processing, warehouse design, ETL reliability and analytical querying in one end-to-end engineering project.',stack:['Python','MySQL','MESHJOIN','ETL','Multithreading','OLAP','SQL'],url:'https://github.com/fizzahussain/Near-Real-Time-and-Periodic-Data-Warehouse-for-a-Retail-Chain'},
{icon:'⌁',name:'Machine Unlearning in Large Language Models',cats:['data','research'],badge:'RESEARCH',tag:'RESEARCH / LLM EVALUATION',desc:'A research project studying how to distinguish genuine forgetting from reversible suppression in LLMs. Evaluates 24 released Llama-3.2-1B-Instruct unlearning checkpoints on TOFU across relearning, quantization, paraphrasing and mixed-prompt conditions.',proof:'Compares residual knowledge and control-adjusted recovery, and investigates whether pre-attack metrics predict post-attack recovery. The work evaluates existing checkpoints; it does not claim to have trained the unlearning models.',stack:['LLMs','Llama 3.2 1B','TOFU','LoRA','Python','Evaluation','Spearman','AUROC'],url:'https://github.com/fizzahussain/LLM-Unlearning-Research'},


{icon:'⌂',name:'Islamabad House Price Prediction',cats:['data'],tag:'MACHINE LEARNING / REGRESSION',desc:'A Data Science project focused on residential property data and house-price prediction in Islamabad.',proof:'A step deeper into supervised learning, model evaluation, and turning features into defensible predictions.',stack:['Python','Machine Learning','Regression','EDA'],url:'https://github.com/fizzahussain/Islamabad-House-Price-Prediction',live:'https://islamabad-house-price-prediction.vercel.app/'},
{icon:'◎',name:'PUBG Player Performance & Behavioral Analysis',cats:['data'],tag:'DATA ANALYSIS / BEHAVIOR',desc:'A Data Science project exploring player performance and behavioral patterns in PUBG data.',proof:'It pushed me to frame noisy behavior as an analysis problem and communicate patterns with evidence.',stack:['Python','Data Analysis','Visualization','Behavioral Analysis'],url:'https://github.com/fizzahussain/PUBG-Player-Performance-Behavioral-Analysis',live:'https://pubg-player-performance-behavioral.vercel.app/'},
{icon:'⌕',name:'Revival Lab',cats:['data'],tag:'FORENSIC RAG / RESEARCH',desc:'Retrieval over a curated archive of forgotten solutions, with evidence-oriented investigation and fallback search.',proof:'A different way to think about retrieval: not just relevance, but evidence navigation and research.',stack:['Python','RAG','ChromaDB','LangChain','OpenAI','Gradio'],url:'https://github.com/fizzahussain/Revival-Lab'},
{icon:'🍽',name:'MoodMeal',cats:['data','fullstack'],tag:'AI PRODUCT / FULL STACK',desc:'Smart meal planning with pantry tracking, recommendations, expense analytics, expiry awareness, and a Gemini-powered assistant.',proof:'AI becomes more interesting when it has to live inside a product with users, data, and trade-offs.',stack:['React','Node.js','Express','MySQL','Gemini API'],url:'https://github.com/fizzahussain/MoodMeal'},
{icon:'🎬',name:'MoviesData Manager',cats:['data','algorithms'],tag:'DSA / RECOMMENDATION',desc:'C++ movie data system using AVL trees, hash tables, graph relationships, BFS, and recommendation logic.',proof:'A project where classic data structures stopped being textbook diagrams and became product behavior.',stack:['C++','AVL Trees','Hash Tables','Graphs','BFS'],url:'https://github.com/fizzahussain/MoviesData-MANAGER',live:'https://movies-data-manager.vercel.app/'},
{icon:'🚕',name:'RideFlow',cats:['fullstack','algorithms'],tag:'DBMS / BACKEND',desc:'Ride-hailing system with Rider, Driver, and Admin workflows, verification, wallets, commissions, complaints, ratings, and analytics.',proof:'Database-first application design taught me to think beyond CRUD and into integrity, workflows, and SQL behavior.',stack:['Node.js','Express','EJS','MySQL','Stored Procedures','Triggers'],url:'https://github.com/fizzahussain/RideFlow'},
{icon:'$',name:'Personal Finance Management System',cats:['data','fullstack'],tag:'ANALYTICS / FULL STACK',desc:'Personal-finance analytics across transactions, budgets, reporting, authentication, caching, and multiple interfaces.',proof:'A full analytical workflow from persistence to API to dashboard to reporting.',stack:['Python','FastAPI','Streamlit','SQLite','Analytics'],url:'https://github.com/fizzahussain/Personal-Finance-Management-System',demo:'finance',live:'https://personal-finance-management-system-lyart.vercel.app/'},
{icon:'♠',name:'UNO 3-Player AI',cats:['data','algorithms'],tag:'SEARCH AI / EXPERIMENTS',desc:'Three-player UNO simulation comparing Minimax, alpha-beta pruning, and Expectimax with explicit chance nodes.',proof:'A compact playground for adversarial search, uncertainty, and comparing decision strategies.',stack:['Python','Minimax','Alpha-Beta','Expectimax'],url:'https://github.com/fizzahussain/UNO-3Player-AIvsHuman',live:'https://uno-3-player-a-ivs-human.vercel.app/'},
{icon:'⇄',name:'Parallel CSV Data Processing Pipeline',cats:['systems','algorithms'],tag:'OPERATING SYSTEMS / CONCURRENCY',desc:'Concurrent C++ analytics using processes, pthreads, FIFOs, shared memory, semaphores, mutexes, and signals.',proof:'The project that forced me to reason about process boundaries, synchronization, IPC, and clean shutdown.',stack:['C++','POSIX','pthreads','FIFO','Shared Memory','Semaphores'],url:'https://github.com/fizzahussain/Parallel-CSV-Data-Processing-Pipeline'},
{icon:'🚖',name:'Rush Hour // C++',cats:['systems','algorithms'],tag:'OOP / GRAPHICS / GAME SYSTEMS',desc:'Graphical driving game with Taxi and Delivery roles, dynamic traffic, fuel, DFS reachability, and leaderboards.',proof:'Stateful OOP design, event loops, game logic, persistence, and graph traversal in one C++ build.',stack:['C++','OpenGL','SDL2','OOP','DFS'],url:'https://github.com/fizzahussain/RushHour-game'},
{icon:'ASM',name:'Rush Hour // x86 Assembly',cats:['lowlevel','systems'],tag:'LOW LEVEL / ASSEMBLY',desc:'Console taxi game in x86 Assembly with traffic, passengers, fuel, persistence, leaderboard, and audio.',proof:'A reminder that abstractions make more sense when you have spent time below them.',stack:['x86 Assembly','MASM','Irvine32','WinMM'],url:'https://github.com/fizzahussain/RUSHHOUR_Assembly'},
{icon:'W',name:'Word Shooter',cats:['systems','algorithms'],tag:'C++ / OPENGL',desc:'Timed word game combining projectile mechanics, collision handling, dictionary-based word detection, and search.',proof:'Graphics, input, game state, and algorithmic lookup working together in C++.',stack:['C++','OpenGL','FreeGLUT','SDL2','Binary Search'],url:'https://github.com/fizzahussain/Wordshooter-game'},
{icon:'▤',name:'CamCorder Website',cats:['ui','fullstack'],tag:'UI / FRONTEND',desc:'Multi-page retro camera e-commerce interface with catalogues, forms, cart and checkout UI, and media-rich presentation.',proof:'Visual hierarchy and interface structure matter to me just as much as the logic behind them.',stack:['HTML','CSS','Bootstrap','Responsive UI'],url:'https://github.com/fizzahussain/CamCorder_website'},


];
let activeProject=projects[0],projectFilter='all',projectQuery='';
function filteredProjects(){const q=projectQuery.toLowerCase().trim();return projects.filter(p=>(projectFilter==='all'||p.cats.includes(projectFilter))&&(!q||`${p.name} ${p.tag} ${p.stack.join(' ')}`.toLowerCase().includes(q)))}
function renderProjects(){const list=filteredProjects();if(!list.includes(activeProject))activeProject=list[0]||projects[0];$('#projectCount').textContent=`${list.length} / ${projects.length}`;$('#projectList').innerHTML=list.length?list.map(p=>`<button class="project-row ${p===activeProject?'active':''}" data-name="${p.name}"><span class="folder-glyph" aria-hidden="true">📁</span><div><b>${p.name}</b><small>${p.tag}</small></div>${p.badge ? '<em class="project-badge">'+p.badge+'</em>' : '<span>OPEN</span>'}</button>`).join(''):'<div style="padding:28px;font-family:VT323;font-size:22px">No quests match that search.</div>';$$('.project-row').forEach(b=>b.onclick=()=>{activeProject=projects.find(p=>p.name===b.dataset.name)||projects[0];renderProjects()});renderProjectPreview(activeProject)}
function renderProjectPreview(p){const disclaimer=p.live?`<div class="live-box"><b>LIVE DEMO NOTE</b><p>Live demos are adapted web versions created for demonstration and deployment purposes and may differ from the original project implementation.</p></div>`:'';$('#projectPreview').innerHTML=`${p.badge ? '<span class="project-badge preview-badge">'+p.badge+'</span>' : ''}<span class="preview-tag">${p.tag}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="proof-box"><span>WHY THIS ONE MATTERS</span><b>${p.proof}</b></div><div class="chip-row">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div><div class="preview-actions">${p.demo?`<button class="demo-open" data-demo="${p.demo}">▶ WATCH DEMO</button>`:''}${p.live?`<a class="live" href="${p.live}" target="_blank" rel="noreferrer">LIVE DEMO ↗</a>`:''}<a class="readme" href="${p.url}" target="_blank" rel="noreferrer">READ GITHUB README ↗</a></div>${disclaimer}<div class="readme-box"><b>FOR THE FULL PROJECT</b><p>Open the GitHub README for architecture, implementation notes, methodology, algorithms, setup, limitations, and deeper project context.</p></div>`;$$('.demo-open').forEach(b=>b.onclick=()=>openDemo(b.dataset.demo))}
$$('#projectFilters button').forEach(b=>b.onclick=()=>{$$('#projectFilters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');projectFilter=b.dataset.filter;renderProjects()});$('#projectSearch').oninput=e=>{projectQuery=e.target.value;renderProjects()};renderProjects();
const career={
'2024':[['Data Analytics Intern','Sahl Pakistan','DATA']],
'2025':[['STEM Tutor','My Tutor Source · 2025 to Present','TEACHING'],['Web Development Trainee','MicroMerger','SOFTWARE'],['Lead Graphics Designer','Nerdy Labs','DESIGN'],['Tech & Creatives Intern','Unmute Pakistan','TECH / CREATIVE'],['Introduction to Technology Apprenticeship Simulation','Accenture UK','TECHNOLOGY']],
'2026':[
['Data Science & AI Engineering Intern','GSME · Sep 2026 to Present · Semiconductor FAQ and tapeout knowledge processing; OCR, evidence-aware chunking, structured schedule CSV filters, Python APIs, validation checks, and Power BI manufacturing dashboards','AI / DATA + BI'],
['Data Analytics Intern — Technical Interconnect','JazzWorld · Aug 2026 · Historical interconnect data consolidation, data quality review, and analytics dashboards for engineering reporting','DATA ANALYTICS'],
['Data Science & AI Intern','BetaCodes · Jul to Sep 2026 · Python/FastAPI applications, RAG, PostgreSQL/pgvector, Docker, and structured QA across 19 file formats','AI / DATA'],
['Teaching Assistant — Computer Organization & Assembly Language','FAST-NUCES · Sep 2026 to Present · Supporting a 50-student cohort with x86 assembly debugging, assignment and quiz evaluation, and low-level computing concepts','TEACHING'],
['Lab Demonstrator — Introduction to Data Science & Hardware Labs','FAST-NUCES · Undergraduate lab support and practical demonstrations','TEACHING / LABS'],
['Founder & Lead Tutor','MindCraft Tuition · 2026 to Present','TEACHING / LEADERSHIP']
]
}
$('#careerTimeline').innerHTML=Object.entries(career).map(([year,items])=>`<section class="career-year-block"><h3>${year}</h3>${items.map(x=>{const parts=x[1].split(' · ');const company=parts.shift();const details=parts.join(' · ');return `<div class="career-entry"><div class="career-copy"><b class="career-company">${company}</b><strong class="career-role">${x[0]}</strong>${details?`<span class="career-details">${details}</span>`:''}</div><small>${x[2]}</small></div>`}).join('')}</section>`).join('');
const societies=[
['IEEE Computer Society & Women in Computing',['General Secretary','IEEE Student Member · IEEE Computer Society']],
['FAST Data Science Society',['Vice Head of Projects']],
['FESS — FAST Entrepreneurship & Startup Society',['Lead, Marketing & Content Creation','Secretary, Marketing & Content Creation']],
['FCSS — FAST Community Service Society',['Head of Marketing','Secretary, Sponsorships']],
['NaSCon',['Head of Computing Events — Data Detective','Ideathon Officer']],
['FAST Student Leadership & Events',['Led Data Detective, an EDA and data-cleaning competition','Programming Fundamentals workshop facilitator']]
]
$('#societyGrid').innerHTML=societies.map((s,i)=>`<article class="society-card"><span>NODE ${String(i+1).padStart(2,'0')}</span><h3>${s[0]}</h3><ul>${s[1].map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');
const art=[
['Calligraphy & flowers','acrylic / calligraphy','The floral calligraphy canvas you sent.','calligraphy-flowers'],['Deer mini canvas','mini canvas','A small deer study from the mini-canvas set.','deer-mini'],['Rabbit study','mini canvas','Small format, lots of attention.','rabbit-study'],['Floral watercolor','watercolor','Loose color and movement instead of perfect edges.','floral-watercolor'],['Birds among blossoms','painting','A bright older piece with birds and red blossoms.','birds-blossoms'],['Horse portrait','acrylic','A horse portrait study.','horse-portrait'],['Dervish study','painting','Movement, fabric, and atmosphere.','dervish-study'],['Blue figure','mixed media','A darker figure study built around silhouette and blue.','blue-figure'],['Desert caravan','painting','A warm desert scene with camels and metallic detail.','desert-caravan'],['Whirling red / blue','painting','An abstract motion study.','whirling-red-blue'],['Tiny landscape','mini canvas','A small landscape painted in miniature.','mini-landscape'],['Clay candle holder','pottery','A hand-built clay candle holder.','clay-candle-holder'],['Cow figure','clay','A small cow figure from the clay side quests.','desk-cow'],['Retirement cage bake','baking','An edible retirement piece. Definitely baking, not pottery.','retirement-cage-bake'],['2:02 AM studio','studio','Palette, paint tubes, and proof that the art side quest sometimes runs very late.','late-night-palette']
];let artIndex=0;
function renderArt(){const wall=$('#artWall');wall.innerHTML=art.map((a,i)=>`<button class="art-frame ${i===artIndex?'active':''}" data-i="${i}" style="--tilt:${(i%5-2)*.7}deg"><img src="media/crops/${a[3]}-sq.webp" alt="${a[0]}"><span>${a[0]}</span></button>`).join('');$$('.art-frame').forEach(b=>b.onclick=()=>{artIndex=+b.dataset.i;renderArt()});const a=art[artIndex];$('#artMain').src=`media/crops/${a[3]}-portrait.webp`;$('#artMain').alt=a[0];$('#artCounter').textContent=`${String(artIndex+1).padStart(2,'0')} / ${String(art.length).padStart(2,'0')}`;$('#artType').textContent=a[1];$('#artTitle').textContent=a[0];$('#artNote').textContent=a[2]}
$('#artPrev').onclick=()=>{artIndex=(artIndex-1+art.length)%art.length;renderArt()};$('#artNext').onclick=()=>{artIndex=(artIndex+1)%art.length;renderArt()};renderArt();
const demos={rag:{title:'RAG Document Assistant',file:'media/demos/rag-document-assistant-demo.mp4',poster:'media/demos/rag-poster.jpg',meta:'AI SYSTEMS · 05:50'},finance:{title:'Personal Finance Management System',file:'media/demos/personal-finance-demo.mp4',poster:'media/demos/finance-poster.jpg',meta:'ANALYTICS · 03:20'}};
function openDemo(key){const d=demos[key];if(!d)return;$('#demoTitle').textContent=`MEDIA_PLAYER.EXE // ${d.title}`;$('#demoMeta').textContent=d.meta;const v=$('#demoVideo');v.src=d.file;v.poster=d.poster;v.load();$('#demoOverlay').classList.remove('hidden');$('#demoOverlay').setAttribute('aria-hidden','false');achievement(`${d.title.toUpperCase()} LOADED`)}function closeDemo(){const v=$('#demoVideo');v.pause();v.removeAttribute('src');v.load();$('#demoOverlay').classList.add('hidden');$('#demoOverlay').setAttribute('aria-hidden','true')}$('#demoClose').onclick=closeDemo;$('#demoOverlay').onclick=e=>{if(e.target===e.currentTarget)closeDemo()};$$('.demo-open').forEach(b=>b.onclick=()=>openDemo(b.dataset.demo));
const levels=$$('.level');let seen=new Set();const levelObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const level=entry.target;const idx=levels.indexOf(level);$('#progressFill').style.width=`${((idx+1)/levels.length)*100}%`;$$('.hud-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${level.id}`));const guideMode=level.dataset.avatar||avatarMode;$('#guideAvatar').src=avatarSrc[guideMode];$('#guideLevel').textContent=`LEVEL ${level.dataset.level}`;$('#guideText').textContent=level.dataset.guide||'';if(!seen.has(level.id)){if(seen.size)achievement(`${level.id.toUpperCase()} DISCOVERED`);seen.add(level.id)}}),{threshold:.42});levels.forEach(l=>levelObserver.observe(l));
window.addEventListener('scroll',()=>{const y=window.scrollY;if(Math.abs(y-lastY)>3){$('#guide').classList.add('walking');clearTimeout(walkTimer);walkTimer=setTimeout(()=>$('#guide').classList.remove('walking'),140)}lastY=y},{passive:true});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!$('#demoOverlay').classList.contains('hidden'))closeDemo();else if(!$('#mapPanel').classList.contains('hidden'))$('#mapPanel').classList.add('hidden')}if(e.key.toLowerCase()==='m')openMap();if(e.key.toLowerCase()==='p')$('#projects').scrollIntoView({behavior:'smooth'});if(e.key.toLowerCase()==='a')$('#art').scrollIntoView({behavior:'smooth'})});


// Footer scene, project folders, and the contact companion.
const flipButton = $('#footerFlip');
if (flipButton) flipButton.addEventListener('click', () => {
  const card = $('#footerSignCard');
  const flipped = card.classList.toggle('flipped');
  card.innerHTML = flipped
    ? '<span>BACK OF THE POSTCARD</span><b>See you in the next build.<br>Until then, stay curious.</b><small>END OF LEVEL · NOT THE END</small>'
    : '<span>POSTCARD FROM FIZZA</span><b>Stay curious.<br>Make something kind.</b><small>ISLAMABAD · EARTH · INTERNET</small>';
  flipButton.setAttribute('aria-pressed', String(flipped));
  flipButton.textContent = flipped ? '↻ FLIP IT BACK' : '↻ FLIP THE SIGN';
  tone(flipped ? 720 : 520, .05);
});
const chatToggle = $('#chatToggle');
const chatPanel = $('#chatPanel');
function toggleChat(open) {
  if (!chatPanel || !chatToggle) return;
  chatPanel.classList.toggle('hidden', !open);
  chatToggle.setAttribute('aria-expanded', String(open));
  if (open) $('#chatInput').focus();
}
if (chatToggle) chatToggle.addEventListener('click', () => toggleChat(chatPanel.classList.contains('hidden')));
if ($('#chatClose')) $('#chatClose').addEventListener('click', () => toggleChat(false));
function addChatMessage(message, kind='bot-message') {
  const node = document.createElement('p');
  node.className = kind;
  node.textContent = message;
  $('#chatMessages').appendChild(node);
  $('#chatMessages').scrollTop = $('#chatMessages').scrollHeight;
}
const chatReplies = {
  projects: 'The project folders cover AI and RAG systems, data engineering, research, full-stack builds, algorithms, and low-level systems. Open the Project Index to browse them.',
  work: 'I am a Data Science & AI intern working on document intelligence and FAQ retrieval, and I also enjoy building backend systems, exploring LLM evaluation, and working with analytics.',
  contact: 'You can reach me at fizzashah0300@gmail.com, or through LinkedIn. If you write a note here, I will prepare it in your email app.'
};
$$('[data-chat]').forEach(button => button.addEventListener('click', () => {
  addChatMessage(button.textContent, 'visitor-message');
  addChatMessage(chatReplies[button.dataset.chat]);
}));
if ($('#chatForm')) $('#chatForm').addEventListener('submit', event => {
  event.preventDefault();
  const message = $('#chatInput').value.trim();
  if (!message) return;
  const subject = 'A message from your portfolio';
  const body = message + '\n\nSent from the portfolio contact companion.';
  window.location.href = 'mailto:fizzashah0300@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  addChatMessage('Your email draft is ready. Thanks for reaching out!', 'bot-message');
  $('#chatInput').value = '';
});
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && chatPanel && !chatPanel.classList.contains('hidden')) toggleChat(false);
});


/* Footer player always matches the home-screen avatar selection. */
const footerPlayerPortrait = $('.player-portrait');
if (footerPlayerPortrait) footerPlayerPortrait.src = avatarSrc[avatarMode];
