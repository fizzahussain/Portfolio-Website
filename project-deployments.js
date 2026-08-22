/* Project deployment links / showcase labels */
(function () {
  const deployments = {
    'MoviesData Manager': 'https://movies-data-manager.vercel.app/',
    'UNO 3-Player AI': 'https://uno-3-player-a-ivs-human.vercel.app/',
    'Islamabad House Price Prediction': 'https://islamabad-house-price-prediction.vercel.app/',
    'PUBG Player Performance & Behavioral Analysis': 'https://pubg-player-performance-behavioral.vercel.app/',
    'Personal Finance Management System': 'https://personal-finance-management-system-lyart.vercel.app/'
  };

  const liveNames = new Set(Object.keys(deployments));

  function addDeploymentUI() {
    const preview = document.querySelector('#questPreview');
    if (!preview || !window.projects) return;

    const project = window.activeProject;
    if (!project) return;

    const existing = preview.querySelector('.deployment-status');
    if (existing) existing.remove();

    const actions = preview.querySelector('.preview-actions');
    if (!actions) return;

    const status = document.createElement('div');
    status.className = 'deployment-status';

    if (liveNames.has(project.name)) {
      status.innerHTML = `
        <span class="deployment-live">● LIVE DEPLOYMENT</span>
        <a class="pixel-cta lime" href="${deployments[project.name]}" target="_blank" rel="noreferrer">OPEN LIVE PROJECT ↗</a>
      `;
    } else {
      status.innerHTML = `
        <span class="deployment-showcase">◆ SHOWCASE / UI PREVIEW</span>
        <small>This project is presented here as a project showcase. No live web deployment is currently available.</small>
      `;
    }

    actions.prepend(status);
  }

  function markQuestItems() {
    document.querySelectorAll('.quest-item').forEach(item => {
      const name = item.dataset.name;
      const old = item.querySelector('.quest-status');
      if (old) old.remove();

      const status = document.createElement('small');
      status.className = 'quest-status ' + (liveNames.has(name) ? 'is-live' : 'is-showcase');
      status.textContent = liveNames.has(name) ? 'LIVE' : 'SHOWCASE';
      item.appendChild(status);
    });
  }

  function refresh() {
    markQuestItems();
    addDeploymentUI();
  }

  const observer = new MutationObserver(refresh);
  const target = document.querySelector('#questList');
  if (target) observer.observe(target, { childList: true, subtree: true });

  document.addEventListener('click', () => setTimeout(refresh, 0));
  setTimeout(refresh, 300);
})();
