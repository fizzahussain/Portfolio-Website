(() => {
  const deployments = {
    'MoviesData Manager': 'https://movies-data-manager.vercel.app/',
    'UNO 3-Player AI': 'https://uno-3-player-a-ivs-human.vercel.app/',
    'Islamabad House Price Prediction': 'https://islamabad-house-price-prediction.vercel.app/',
    'PUBG Player Performance & Behavioral Analysis': 'https://pubg-player-performance-behavioral.vercel.app/',
    'Personal Finance Management System': 'https://personal-finance-management-system-lyart.vercel.app/'
  };
  const style = document.createElement('style');
  style.textContent = `.quest-status{display:inline-block!important;font-family:'VT323',monospace!important;font-size:.85rem!important;letter-spacing:.06em!important;margin-left:auto!important;padding:2px 6px!important;border:1px solid currentColor!important}.quest-status.is-live{color:#8cff00!important}.quest-status.is-showcase{color:#777!important}.deployment-status{display:flex;flex-direction:column;gap:10px;margin:18px 0 4px;padding:12px;border:1px dashed #555;background:rgba(0,0,0,.05)}.deployment-live,.deployment-showcase{font-family:'Press Start 2P',monospace;font-size:.62rem;letter-spacing:.04em}.deployment-live{color:#55ff00}.deployment-showcase{color:#777}.deployment-status small{font-family:'VT323',monospace;font-size:1rem;line-height:1.1;color:#666}.deployment-status .pixel-cta{width:max-content!important}.save-live-link{display:inline-flex!important;margin-top:10px!important}
.boot-screen{background:#050505!important}.boot-screen:before{display:none!important}.boot-avatar-card{display:none!important}
.boot-scene.art-card img,.coding-sprite img,.avatar-boot-card img{content:url('media/ui/fizza-avatar.png')!important;object-fit:contain!important;image-rendering:pixelated!important}.player-avatar img{image-rendering:pixelated!important}
`;
  document.head.appendChild(style);

  function refresh(){
    document.querySelectorAll('.quest-item').forEach(item=>{const name=item.dataset.name;let status=item.querySelector('.quest-status');if(!status){status=document.createElement('small');item.appendChild(status)}status.className=`quest-status ${deployments[name]?'is-live':'is-showcase'}`;status.textContent=deployments[name]?'LIVE':'SHOWCASE'});
    document.querySelectorAll('.save-slot').forEach(slot=>{const title=slot.querySelector('h3');if(!title)return;const name=title.textContent.trim();const existing=slot.querySelector('.save-live-link');if(existing)existing.remove();if(deployments[name]){const link=document.createElement('a');link.className='save-live-link pixel-cta lime';link.href=deployments[name];link.target='_blank';link.rel='noreferrer';link.textContent='OPEN LIVE PROJECT ↗';slot.appendChild(link)}});
    const preview=document.querySelector('#questPreview');if(!preview)return;const title=preview.querySelector('h3'),actions=preview.querySelector('.preview-actions');if(!title||!actions)return;const old=preview.querySelector('.deployment-status');if(old)old.remove();const name=title.textContent.trim(),box=document.createElement('div');box.className='deployment-status';if(deployments[name])box.innerHTML=`<span class="deployment-live">● LIVE DEPLOYMENT</span><a class="pixel-cta lime" href="${deployments[name]}" target="_blank" rel="noreferrer">OPEN LIVE PROJECT ↗</a>`;else box.innerHTML=`<span class="deployment-showcase">◆ PROJECT SHOWCASE / UI PREVIEW</span><small>This project is presented as a project showcase. It does not currently have a live web deployment.</small>`;actions.parentNode.insertBefore(box,actions);
  }

  function refinePortfolio(){
    document.querySelectorAll('img').forEach(img=>{
      const src=img.getAttribute('src')||'';
      if(src.includes('fizza-coding-avatar') || src.includes('fizza-avatar-v11-raw') || src.includes('fizza-avatar-v12') || src.includes('night-seated-square')) img.src='media/ui/fizza-avatar.png';
    });

    const careerLog=document.querySelector('#careerLog');
    if(careerLog){
      const career=[
        ['2026','Data Analytics Intern — Technical Interconnect & CRA','Jazz Pakistan / JazzWorld','DATA / REGULATORY'],
        ['2026','Data Science Intern','Beta Codes Pakistan','AI / DATA'],
        ['2026 to Present','Founder & Lead Tutor','MindCraft Tuition','TEACHING / LEADERSHIP'],
        ['2025 to Present','STEM Tutor','My Tutor Source','TEACHING'],
        ['2025','Web Development Trainee','MicroMerger','SOFTWARE'],
        ['2025','Lead Graphics Designer','Nerdy Labs','DESIGN'],
        ['2025','Tech & Creatives Intern','Unmute Pakistan','TECH / CREATIVE'],
        ['2025','Introduction to Technology Apprenticeship Simulation','Accenture UK','TECHNOLOGY'],
        ['2024','Data Analytics Intern','Sahl Pakistan','DATA']
      ];
      careerLog.innerHTML=career.map(x=>`<div class="career-entry"><span class="career-year">${x[0]}</span><div class="career-role"><b>${x[1]}</b><small>${x[2]}</small></div><span class="career-track">${x[3]}</span></div>`).join('');
    }

    const leadership=document.querySelector('.leadership-list');
    if(leadership){
      const entries=[
        ['01','FCSS — FAST Community Service Society','Secretary, Marketing & Content Creation; community initiatives and student outreach.','LEADERSHIP + COMMUNITY'],
        ['02','FESS — FAST Entrepreneurial Startup Society','Member; entrepreneurship, startup and student-community initiatives.','ENTREPRENEURSHIP'],
        ['03','Campus Ambassadorships','Campus ambassador roles representing student, community and professional initiatives.','AMBASSADORSHIPS'],
        ['04','FAST Data Science Society','Projects, marketing, content creation, and society initiatives.','TECH + COMMUNITY'],
        ['05','NasCon','Head, Data Detective · Officer, Edathon.','EVENT LEADERSHIP'],
        ['06','IEEE','IEEE member · IEEE Computer Society · IEEE Islamabad Chapter.','PROFESSIONAL COMMUNITY'],
        ['07','Women in Computing','Member at FAST-NUCES.','COMMUNITY'],
        ['08','Earlier Leadership','Business & Economics Society, MUN, sports events, student council, and related student initiatives.','FOUNDATIONS']
      ];
      leadership.innerHTML=entries.map(([id,title,desc,track])=>`<article><span class="leadership-id">${id}</span><div><b>${title}</b><p>${desc}</p></div><small>${track}</small></article>`).join('');
      const header=leadership.closest('.leadership-console')?.querySelector('.window-bar span:last-child');
      if(header)header.textContent='08 FILES';
    }
    refresh();
  }

  const list=document.querySelector('#questList'),preview=document.querySelector('#questPreview');
  const observer=new MutationObserver(()=>setTimeout(refresh,0));
  if(list)observer.observe(list,{childList:true,subtree:true});
  if(preview)observer.observe(preview,{childList:true,subtree:true});
  setTimeout(refresh,250);
  setTimeout(refinePortfolio,50);
})();
