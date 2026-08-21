const projects = [
  {
    id: 'rag', code: 'QUEST 01', icon: '🧠', title: 'RAG Document Assistant', category: ['data','fullstack'], featured: true,
    status: 'FLAGSHIP / AI SYSTEMS',
    summary: 'Local-first document intelligence across ingestion, OCR, speech-to-text, embeddings, vector retrieval, grounded generation, citations, memory, evaluation and containerized services.',
    proof: 'I can engineer the complete AI path around the model — not just wire an LLM to a chat box.',
    tags: ['Python','FastAPI','Ollama','pgvector','HNSW','OCR','Whisper','Docker'],
    details: ['Multi-format document ingestion','Selective Tesseract OCR fallback','faster-whisper voice input with VAD','Context-aware chunking and embeddings','PostgreSQL + pgvector HNSW retrieval','Grounded answers with citations and memory','Multi-user isolation, tests and evaluation'],
    repo: 'https://github.com/fizzahussain/Rag-Document-Assistant'
  },
  {
    id: 'house', code: 'QUEST 02', icon: '🏠', title: 'Islamabad House Price Prediction', category: ['data'], featured: true, isNew: true,
    status: 'NEW / DATA SCIENCE',
    summary: 'A new Data Science project focused on predicting residential property prices in Islamabad from housing data.',
    proof: 'This moves my portfolio further into applied predictive modeling and real-world tabular data.',
    tags: ['Data Science','Machine Learning','Housing Data','Prediction'],
    details: ['Applied house-price prediction problem','Real-estate data centered on Islamabad','Modeling-focused Data Science work','Public repository for reproducible project work'],
    repo: 'https://github.com/fizzahussain/Islamabad-House-Price-Prediction'
  },
  {
    id: 'pubg', code: 'QUEST 03', icon: '🎯', title: 'PUBG Player Performance & Behavioral Analysis', category: ['data'], featured: true, isNew: true,
    status: 'NEW / DATA ANALYSIS',
    summary: 'A new analytics project exploring PUBG player performance and behavioral patterns through gameplay data.',
    proof: 'It shows my Data Science direction through behavioral analysis rather than another generic business dataset.',
    tags: ['Data Analysis','Behavioral Analysis','Gaming Data','Performance'],
    details: ['Player-performance analysis','Behavioral pattern exploration','Gameplay data as an analytical domain','Public repository for the complete analysis'],
    repo: 'https://github.com/fizzahussain/PUBG-Player-Performance-Behavioral-Analysis'
  },
  {
    id: 'revival', code: 'QUEST 04', icon: '🔎', title: 'Revival Lab', category: ['data'],
    status: 'FORENSIC RAG / RESEARCH',
    summary: 'A research-oriented RAG tool for retrieving forgotten solutions from a curated evidence archive and evaluating them against modern constraints.',
    proof: 'I explored retrieval as a research and evidence-navigation problem, including local fallback behavior.',
    tags: ['RAG','ChromaDB','LangChain','OpenAI','Gradio'],
    details: ['Curated knowledge archive','Semantic retrieval with ChromaDB','Evidence-oriented responses','Local retrieval fallback mode'],
    repo: 'https://github.com/fizzahussain/Revival-Lab'
  },
  {
    id: 'moodmeal', code: 'QUEST 05', icon: '🍜', title: 'MoodMeal', category: ['data','fullstack'],
    status: 'AI PRODUCT / FULL STACK',
    summary: 'Smart meal planning with pantry tracking, personalized recipe recommendations, expense analytics, expiry awareness and a Gemini-powered cooking assistant.',
    proof: 'I can place AI inside a real user product with data, persistence, workflows and deployment concerns.',
    tags: ['React','Node.js','Express','MySQL','Gemini API'],
    details: ['Pantry-aware meal workflows','Recipe recommendation features','Food expense analytics','Expiry awareness','Gemini-powered assistant'],
    repo: 'https://github.com/fizzahussain/MoodMeal-'
  },
  {
    id: 'movies', code: 'QUEST 06', icon: '🎬', title: 'MoviesData Manager', category: ['data','algorithms'],
    status: 'DSA / RECOMMENDATION',
    summary: 'C++ movie-data system using AVL trees, hash tables, graph relationships, BFS and custom recommendation logic over a real dataset.',
    proof: 'I can turn data structures and graph algorithms into a working data product.',
    tags: ['C++','AVL','Hash Tables','Graphs','BFS'],
    details: ['AVL-backed movie storage','Hash indexing','Actor/movie graph modeling','Breadth-first search','Recommendation logic'],
    repo: 'https://github.com/fizzahussain/MoviesData-MANAGER'
  },
  {
    id: 'finance', code: 'QUEST 07', icon: '📊', title: 'Personal Finance Management System', category: ['data','fullstack'],
    status: 'ANALYTICS / FULL STACK',
    summary: 'Multi-interface personal-finance analytics with transactions, budgets, reporting, exports, authentication, caching and flexible storage.',
    proof: 'I can design analytical workflows across API, dashboard, persistence and reporting layers.',
    tags: ['Python','FastAPI','Streamlit','SQLite','Analytics'],
    details: ['Transaction tracking','Category budgets','Reporting and exports','Multi-user isolation','Caching and logging'],
    repo: 'https://github.com/fizzahussain/Personal-Finance-Management-System'
  },
  {
    id: 'uno', code: 'QUEST 08', icon: '🃏', title: 'UNO 3-Player AI', category: ['data','algorithms'],
    status: 'SEARCH AI / EXPERIMENTS',
    summary: 'Three-player UNO simulation comparing Minimax with alpha-beta pruning against Expectimax with explicit chance nodes.',
    proof: 'I understand adversarial search, probabilistic decision-making and experimental strategy comparison.',
    tags: ['Python','Minimax','Alpha-Beta','Expectimax'],
    details: ['Defensive Minimax agent','Alpha-beta pruning','Chance-aware Expectimax','Human-vs-AI mode','Automated comparison runs'],
    repo: 'https://github.com/fizzahussain/UNO-3Player-AIvsHuman'
  },
  {
    id: 'rideflow', code: 'QUEST 09', icon: '🚕', title: 'RideFlow', category: ['fullstack','algorithms'],
    status: 'DBMS / BACKEND',
    summary: 'Ride-hailing platform with Rider, Driver and Admin workflows, verification, wallets, payments, commissions, complaints, ratings and analytics.',
    proof: 'I understand database-first application design and SQL beyond CRUD.',
    tags: ['Node.js','Express','EJS','MySQL','Triggers','Procedures'],
    details: ['Role-based workflows','Driver and vehicle verification','Wallet and payment flows','Earnings and commissions','Views, procedures, triggers and events'],
    repo: 'https://github.com/fizzahussain/RideFlow'
  },
  {
    id: 'ipc', code: 'QUEST 10', icon: '⚙️', title: 'Parallel CSV Data Processing Pipeline', category: ['systems','algorithms'],
    status: 'OPERATING SYSTEMS / CONCURRENCY',
    summary: 'Concurrent C++ clickstream analytics using processes, pthreads, FIFOs, shared memory, semaphores, mutexes and signals.',
    proof: 'I can reason about process boundaries, synchronization, IPC and lifecycle management beyond frameworks.',
    tags: ['C++','POSIX','pthreads','FIFO','Shared Memory'],
    details: ['Multi-process architecture','Named FIFO communication','Worker thread pool','Bounded producer-consumer queue','POSIX shared memory and semaphores'],
    repo: 'https://github.com/fizzahussain/Parallel-CSV-Data-Processing-Pipeline'
  },
  {
    id: 'rushcpp', code: 'QUEST 11', icon: '🚘', title: 'Rush Hour — C++', category: ['systems','algorithms'],
    status: 'OOP / GRAPHICS',
    summary: 'Graphical driving game with Taxi and Delivery roles, dynamic traffic, fuel, DFS reachability, progression and persistent leaderboards.',
    proof: 'I can design stateful OOP systems, event loops and graph-based game logic in C++.',
    tags: ['C++','OpenGL','SDL2','OOP','DFS'],
    details: ['Taxi and Delivery roles','Dynamic traffic and difficulty','DFS reachability','Fuel and scoring','Persistent leaderboard'],
    repo: 'https://github.com/fizzahussain/RushHour-game'
  },
  {
    id: 'rushasm', code: 'QUEST 12', icon: '💿', title: 'Rush Hour — x86 Assembly', category: ['systems','lowlevel'],
    status: 'LOW LEVEL / ASSEMBLY',
    summary: 'Complete console taxi game written in x86 Assembly with MASM and Irvine32, including traffic, fuel, passengers, persistence and audio.',
    proof: 'I’m comfortable reasoning below high-level abstractions about procedures, memory, registers, I/O and system APIs.',
    tags: ['x86 Assembly','MASM','Irvine32','WinMM'],
    details: ['Multiple game modes','Traffic and passenger logic','Fuel and bonus mechanics','Save/load','Persistent leaderboard'],
    repo: 'https://github.com/fizzahussain/RUSHHOUR_Assembly'
  },
  {
    id: 'word', code: 'QUEST 13', icon: '🔤', title: 'Word Shooter', category: ['systems','algorithms'],
    status: 'C++ / OPENGL GAME',
    summary: 'Timed word game combining projectile mechanics with dictionary-based word detection, collision handling, scoring and search.',
    proof: 'I can combine graphics, input, game state and algorithmic lookup in C++.',
    tags: ['C++','OpenGL','FreeGLUT','SDL2','Binary Search'],
    details: ['2D OpenGL gameplay','Projectile and collision mechanics','Dictionary-backed word detection','Timed scoring loop'],
    repo: 'https://github.com/fizzahussain/Wordshooter-game'
  },
  {
    id: 'cam', code: 'QUEST 14', icon: '📷', title: 'CamCorder Website', category: ['fullstack'],
    status: 'FRONTEND / UI',
    summary: 'Multi-page retro camera e-commerce interface with catalogues, account forms, cart and checkout UI, FAQs and media-rich presentation.',
    proof: 'I care about interface structure, visual communication and presentation as much as implementation.',
    tags: ['HTML','CSS','Bootstrap','Responsive UI'],
    details: ['Multi-page catalogue','Responsive layouts','Cart and checkout interfaces','Account forms','Media-rich product presentation'],
    repo: 'https://github.com/fizzahussain/CamCorder_website'
  }
];

const art = [
  {src:'media/art/rabbit-study.jpeg',title:'Rabbit study',meta:'Acrylic mini canvas',note:'A tiny observational piece from the studio table.'},
  {src:'media/art/birds-blossoms.jpeg',title:'Birds among blossoms',meta:'Painting · 2022',note:'A softer, decorative study built around branches, birds and bright blossoms.'},
  {src:'media/art/whirling-red-blue.jpeg',title:'Whirling figures',meta:'Painting · 2021',note:'Movement, contrast and loose atmospheric color.'},
  {src:'media/art/blue-figure.jpeg',title:'Blue figure',meta:'Mixed-media painting',note:'A silhouette study built from blue, black and sprayed texture.'},
  {src:'media/art/horse-portrait.jpeg',title:'Horse portrait',meta:'Acrylic painting',note:'A graphic portrait with warm yellow, black movement lines and a cool blue jacket.'},
  {src:'media/art/desert-caravan.jpeg',title:'Desert caravan',meta:'Painting',note:'A quiet desert composition with metallic camel details and layered sand tones.'},
  {src:'media/art/floral-watercolor.jpeg',title:'Floral watercolor',meta:'Watercolor',note:'Loose flowers, transparent washes and color bleeding doing most of the work.'},
  {src:'media/art/dervish-study.jpeg',title:'Dervish study',meta:'Painting · 2022',note:'A cool-toned figure study with sweeping white movement.'},
  {src:'media/art/calligraphy-branches.jpeg',title:'Calligraphy & branches',meta:'Painting · 2022',note:'Warm branches and calligraphic form sharing the same canvas.'},
  {src:'media/art/mini-landscape.jpeg',title:'Tiny landscape',meta:'Mini canvas · 2026',note:'A very small landscape painted straight from the palette table.'},
  {src:'media/art/studio-wall.jpeg',title:'Studio wall',meta:'Personal archive · 2026',note:'The paintings in context — the wall, the little cow, and the mess around making things.'},
  {src:'media/art/late-night-palette.jpeg',title:'2:02 AM',meta:'Studio process · 2026',note:'Palette, tubes, brushes and the kind of hour when another small painting somehow starts.'},
  {src:'media/art/clay-candle-holder.jpeg',title:'Clay candle holder',meta:'Pottery / hand-built clay · 2026',note:'A small sculpted candle holder photographed both lit and unlit.'}
];

const aiStages = {
  ingest:{code:'INGEST_01',title:'Messy inputs are where the real system starts.',text:'Documents, scanned pages, voice and structured files — the first problem is getting useful information into a form the rest of the system can trust.',tools:['PDF','DOCX','TXT','CSV','HTML','JSON','Voice'],log:'[OK] input channels mounted\n[OK] metadata preserved\n[WAIT] extraction stage'},
  understand:{code:'PARSE_02',title:'Extraction quality decides what the model ever gets to know.',text:'Native parsing comes first. OCR and speech-to-text become fallbacks or alternate input paths when the source demands them.',tools:['PyMuPDF','Tesseract OCR','faster-whisper','VAD','CPU / int8'],log:'[OK] native text checked\n[OK] OCR fallback armed\n[OK] voice channel ready'},
  represent:{code:'EMBED_03',title:'Chunking is not a clerical detail.',text:'Context boundaries, overlap, metadata and embeddings shape the retrieval space. Bad representations make fluent models look strangely uninformed.',tools:['Chunking','Overlap','Metadata','nomic-embed-text','768-d embeddings'],log:'[OK] context windows built\n[OK] embeddings generated\n[OK] metadata attached'},
  retrieve:{code:'SEARCH_04',title:'Fast retrieval is where the system earns its memory.',text:'Vector persistence, filters and approximate-nearest-neighbor search turn representations into evidence that can be found again at query time.',tools:['PostgreSQL','pgvector','HNSW','Cosine Similarity','Top-k'],log:'[OK] query embedded\n[OK] HNSW search complete\n[OK] top evidence ranked'},
  ground:{code:'GROUND_05',title:'The answer should have somewhere to point.',text:'Retrieved evidence becomes explicit context. Citations and thresholds make the response inspectable instead of merely confident-sounding.',tools:['Grounding','Citations','Thresholds','Document Filters','User Isolation'],log:'[OK] evidence packaged\n[OK] source refs attached\n[OK] user boundary enforced'},
  reason:{code:'REASON_06',title:'Only now do I ask the model to reason.',text:'Generation is the final layer, not the architecture. Local inference, streaming and conversation memory make it usable without hiding the retrieval path.',tools:['Ollama','llama3.2','Streaming','Conversation Memory','Evaluation'],log:'[OK] context delivered\n[OK] stream opened\n[OK] answer grounded'}
};

const profileTabs = {
  profile:`<p class="profile-bigline">I make things with both logic and instinct.</p><p class="profile-paragraph">Painting, pottery, sport, debate and engineering pull on the same instincts for me: observe closely, try something, break it, revise it, and care about the person on the other side of the result.</p><p class="profile-paragraph">My main technical direction is AI / Data Science. The software, systems and creative work around it are not distractions — they are the reason I can think about an intelligent product as a whole system.</p>`,
  academics:`<div class="data-table"><div class="data-row"><span>PROGRAM</span><strong>BS Data Science</strong></div><div class="data-row"><span>UNIVERSITY</span><strong>FAST-NUCES Islamabad</strong></div><div class="data-row"><span>GRADUATION</span><strong>Expected 2028</strong></div><div class="data-row"><span>PROGRESS</span><strong>4 semesters · 74 credit hours</strong></div><div class="data-row"><span>RECOGNITION</span><strong>Dean’s Honor List — Spring 2025 & Spring 2026</strong></div><div class="data-row"><span>CORE STUDY</span><strong>DSA · OOP · AI · Data Science · DBMS · Operating Systems · Probability & Statistics · Software Engineering</strong></div></div>`,
  hobbies:`<div class="sidequest-grid">${[['🎨','Painting'],['🏺','Pottery'],['🏀','Basketball'],['🏸','Badminton'],['🐎','Horse Riding'],['🏊','Swimming'],['🎙️','Debating'],['🧁','Baking']].map(([i,n])=>`<div class="sidequest"><b>${i}</b><span>${n}</span></div>`).join('')}</div><p class="profile-paragraph">I like hobbies that make me use a different kind of attention — movement, timing, craft, argument, color, patience.</p>`,
  leadership:`<div class="lead-list"><div class="lead-item"><strong>FAST-NUCES</strong><span>Data Science Society projects and marketing leadership, Entrepreneurship & Startup Society, Community Service Society.</span></div><div class="lead-item"><strong>NasCon</strong><span>Head — Data Detective · Officer — Edathon.</span></div><div class="lead-item"><strong>IEEE</strong><span>IEEE member · Computer Society · Islamabad chapter involvement.</span></div><div class="lead-item"><strong>Women in Computing</strong><span>Member at FAST-NUCES.</span></div><div class="lead-item"><strong>Previous leadership</strong><span>LGS Islamabad: Business & Economics Society, MUN, sports and student leadership.</span></div></div>`
};

const career = [
  ['2026','Technical / Regulatory Affairs Intern','Jazz Pakistan / Jazz World'],
  ['2026','Data Science & AI Intern','Beta Codes Pakistan'],
  ['2026—Present','Founder & Lead Tutor','MindCraft Tuition'],
  ['2025—Present','STEM Tutor','My Tutor Source'],
  ['2025','Web Development Trainee','MicroMerger'],
  ['2025','Data Analytics Intern','Sahl Pakistan'],
  ['2025','Lead Graphics Designer','Nerdy Labs'],
  ['2025','Tech & Creatives Intern','Unmute Pakistan'],
  ['2025','Introduction to Technology Apprenticeship Simulation','Accenture UK']
];

let sfx = false;
let artIndex = 0;

function beep(freq=540,duration=.045){
  if(!sfx) return;
  try{
    const ctx=new (window.AudioContext||window.webkitAudioContext)();
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.type='square';o.frequency.value=freq;g.gain.value=.025;o.connect(g);g.connect(ctx.destination);o.start();
    setTimeout(()=>{o.stop();ctx.close()},duration*1000);
  }catch(e){}
}

function toast(text){
  const el=document.getElementById('toast');el.querySelector('span').textContent=text;el.classList.add('show');beep(760,.08);setTimeout(()=>el.classList.remove('show'),2100);
}

function start(){
  document.getElementById('boot').classList.add('is-gone');
  document.getElementById('app').classList.remove('is-locked');
  document.body.style.overflow='';
  toast('Portfolio loaded');
}
document.getElementById('startGame').addEventListener('click',start);
document.getElementById('skipBoot').addEventListener('click',start);
if(new URLSearchParams(location.search).get('autostart')==='1'){setTimeout(start,60);}
window.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!document.getElementById('boot').classList.contains('is-gone')) start();});

function updateClock(){document.getElementById('clock').textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});}updateClock();setInterval(updateClock,30000);

document.getElementById('soundToggle').addEventListener('click',e=>{sfx=!sfx;e.currentTarget.textContent=`SFX: ${sfx?'ON':'OFF'}`;beep(620,.06);toast(sfx?'Tiny square-wave beeps enabled':'Sound disabled');});
document.getElementById('modeToggle').addEventListener('click',e=>{document.body.classList.toggle('work-mode');const work=document.body.classList.contains('work-mode');e.currentTarget.textContent=`MODE: ${work?'WORK':'PLAY'}`;toast(work?'Focus mode':'Play mode');});

document.querySelectorAll('[data-jump]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector(btn.dataset.jump)?.scrollIntoView({behavior:'smooth'});document.getElementById('startMenu').hidden=true;beep();}));

document.querySelector('[data-open="startMenu"]').addEventListener('click',()=>{const m=document.getElementById('startMenu');m.hidden=!m.hidden;beep();});

document.querySelectorAll('.ai-node').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.ai-node').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const s=aiStages[btn.dataset.ai];
  document.getElementById('aiStageCode').textContent=s.code;document.getElementById('aiStageTitle').textContent=s.title;document.getElementById('aiStageText').textContent=s.text;document.getElementById('aiStageTools').innerHTML=s.tools.map(t=>`<span>${t}</span>`).join('');document.getElementById('aiLog').textContent=s.log;beep(460+Math.random()*120,.045);
}));
document.querySelector('.ai-node').click();

function renderProjects(){
  document.getElementById('questGrid').innerHTML=projects.map((p,i)=>`<article class="quest-card ${p.featured?'featured':''} ${p.isNew?'new':''}" data-cat="${p.category.join(' ')}" data-id="${p.id}">
    <div class="quest-head"><span>${p.status}</span><b>${p.isNew?'NEW!':p.code}</b></div>
    <div class="quest-body"><div class="quest-icon">${p.icon}</div><div class="quest-copy"><h3>${p.title}</h3><p>${p.summary}</p></div><div class="quest-proof"><span>WHY THIS QUEST MATTERS</span><strong>${p.proof}</strong></div></div>
    <div class="quest-footer"><span class="quest-tags">${p.tags.slice(0,4).join(' · ')}</span><button class="quest-open" data-project="${p.id}">OPEN →</button></div>
  </article>`).join('');
  document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.project)));
}
renderProjects();

document.querySelectorAll('.quest-filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.quest-filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;
  document.querySelectorAll('.quest-card').forEach(card=>card.classList.toggle('is-hidden',f!=='all'&&!card.dataset.cat.split(' ').includes(f)));beep();
}));

function openProject(id){
  const p=projects.find(x=>x.id===id);if(!p)return;
  document.getElementById('modalTitle').textContent=p.title;document.getElementById('modalSummary').textContent=p.summary;document.getElementById('modalProof').textContent=p.proof;document.getElementById('modalIcon').textContent=p.icon;document.getElementById('modalCode').textContent=p.code;document.getElementById('modalBar').textContent=`${p.title.toUpperCase()} — PROPERTIES`;document.getElementById('modalDetails').innerHTML=p.details.map(d=>`<span>${d}</span>`).join('');document.getElementById('modalTags').innerHTML=p.tags.map(t=>`<span>${t}</span>`).join('');document.getElementById('modalRepo').href=p.repo;document.getElementById('projectModal').hidden=false;document.body.style.overflow='hidden';beep(700,.06);
}
function closeProject(){document.getElementById('projectModal').hidden=true;document.body.style.overflow='';}
document.getElementById('closeProject').addEventListener('click',closeProject);document.getElementById('projectModal').addEventListener('click',e=>{if(e.target.id==='projectModal')closeProject()});

function renderTab(name){document.getElementById('profilePanel').innerHTML=profileTabs[name];}
renderTab('profile');document.querySelectorAll('.profile-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.profile-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderTab(btn.dataset.tab);beep();}));

function renderArt(){
  document.getElementById('artThumbs').innerHTML=art.map((a,i)=>`<button class="art-thumb ${i===artIndex?'active':''}" data-art="${i}"><img src="${a.src}" alt="${a.title}"><strong>${String(i+1).padStart(2,'0')}_${a.title.replace(/\s+/g,'_').toLowerCase()}</strong></button>`).join('');
  const a=art[artIndex];document.getElementById('artPreviewImg').src=a.src;document.getElementById('artPreviewImg').alt=a.title;document.getElementById('artPreviewTitle').textContent=a.title;document.getElementById('artPreviewMeta').textContent=a.meta;document.getElementById('artPreviewNote').textContent=a.note;document.getElementById('artCounter').textContent=`${String(artIndex+1).padStart(2,'0')} / ${String(art.length).padStart(2,'0')}`;
  document.querySelectorAll('[data-art]').forEach(b=>b.addEventListener('click',()=>{artIndex=Number(b.dataset.art);renderArt();beep(520,.04);}));
}
renderArt();document.getElementById('prevArt').addEventListener('click',()=>{artIndex=(artIndex-1+art.length)%art.length;renderArt();});document.getElementById('nextArt').addEventListener('click',()=>{artIndex=(artIndex+1)%art.length;renderArt();});

document.getElementById('careerLog').innerHTML=career.map(([y,r,o],i)=>`<div class="career-line"><span>[${String(i+1).padStart(2,'0')}] ${y}</span><div><strong>${r}</strong><small>${o}</small></div></div>`).join('');

// Give the page a few game-like discoveries without getting in the way.
const discovered=new Set();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const id=entry.target.id;if(id&&!discovered.has(id)){discovered.add(id);if(id==='ai')toast('AI Lab discovered');if(id==='projects')toast('Quest log unlocked');if(id==='about')toast('Creative archive found');}}}),{threshold:.35});
document.querySelectorAll('section[id]').forEach(s=>observer.observe(s));

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProject();document.getElementById('startMenu').hidden=true;}if(e.key.toLowerCase()==='a'&&e.altKey){document.querySelector('#about').scrollIntoView({behavior:'smooth'});toast('Secret shortcut: ALT + A');}});

// Live GitHub count without making the page depend on the API.
fetch('https://api.github.com/users/fizzahussain').then(r=>r.ok?r.json():null).then(data=>{if(!data)return;document.querySelector('.end-small').textContent=`FIZZA HUSSAIN // ${data.public_repos} PUBLIC REPOS // 2026 // BUILT BY HAND, NOT FROM A TEMPLATE`;}).catch(()=>{});
