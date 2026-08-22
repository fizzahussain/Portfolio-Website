(() => {
  const deployments = {
    'MoviesData Manager': 'https://movies-data-manager.vercel.app/',
    'UNO 3-Player AI': 'https://uno-3-player-a-ivs-human.vercel.app/',
    'Islamabad House Price Prediction': 'https://islamabad-house-price-prediction.vercel.app/',
    'PUBG Player Performance & Behavioral Analysis': 'https://pubg-player-performance-behavioral.vercel.app/',
    'Personal Finance Management System': 'https://personal-finance-management-system-lyart.vercel.app/'
  };
  const style = document.createElement('style');
  style.textContent = `.quest-status{display:inline-block!important;font-family:'VT323',monospace!important;font-size:.85rem!important;letter-spacing:.06em!important;margin-left:auto!important;padding:2px 6px!important;border:1px solid currentColor!important}.quest-status.is-live{color:#8cff00!important}.quest-status.is-showcase{color:#777!important}.deployment-status{display:flex;flex-direction:column;gap:10px;margin:18px 0 4px;padding:12px;border:1px dashed #555;background:rgba(0,0,0,.05)}.deployment-live,.deployment-showcase{font-family:'Press Start 2P',monospace;font-size:.62rem;letter-spacing:.04em}.deployment-live{color:#55ff00}.deployment-showcase{color:#777}.deployment-status small{font-family:'VT323',monospace;font-size:1rem;line-height:1.1;color:#666}.deployment-status .pixel-cta{width:max-content!important}.save-live-link{display:inline-flex!important;margin-top:10px!important}`;
  document.head.appendChild(style);
  function refresh(){
    document.querySelectorAll('.quest-item').forEach(item=>{const name=item.dataset.name;let status=item.querySelector('.quest-status');if(!status){status=document.createElement('small');item.appendChild(status)}status.className=`quest-status ${deployments[name]?'is-live':'is-showcase'}`;status.textContent=deployments[name]?'LIVE':'SHOWCASE'});
    document.querySelectorAll('.save-slot').forEach(slot=>{const title=slot.querySelector('h3');if(!title)return;const name=title.textContent.trim();const existing=slot.querySelector('.save-live-link');if(existing)existing.remove();if(deployments[name]){const link=document.createElement('a');link.className='save-live-link pixel-cta lime';link.href=deployments[name];link.target='_blank';link.rel='noreferrer';link.textContent='OPEN LIVE PROJECT ↗';slot.appendChild(link)}});
    const preview=document.querySelector('#questPreview');if(!preview)return;const title=preview.querySelector('h3'),actions=preview.querySelector('.preview-actions');if(!title||!actions)return;const old=preview.querySelector('.deployment-status');if(old)old.remove();const name=title.textContent.trim(),box=document.createElement('div');box.className='deployment-status';if(deployments[name])box.innerHTML=`<span class="deployment-live">● LIVE DEPLOYMENT</span><a class="pixel-cta lime" href="${deployments[name]}" target="_blank" rel="noreferrer">OPEN LIVE PROJECT ↗</a>`;else box.innerHTML=`<span class="deployment-showcase">◆ PROJECT SHOWCASE / UI PREVIEW</span><small>This project is presented as a project showcase. It does not currently have a live web deployment.</small>`;actions.parentNode.insertBefore(box,actions);
  }
  const list=document.querySelector('#questList'),preview=document.querySelector('#questPreview');const observer=new MutationObserver(()=>setTimeout(refresh,0));if(list)observer.observe(list,{childList:true,subtree:true});if(preview)observer.observe(preview,{childList:true,subtree:true});setTimeout(refresh,250);
})();
