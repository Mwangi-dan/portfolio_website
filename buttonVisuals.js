const visualsButton = document.querySelector('.btn .open-btn');
const visuals = document.querySelector('.screen');
const visualsBanner = document.querySelector('.bannerv');

let isVisualsOpen = false;

visualsButton.addEventListener('click', () => {
  isVisualsOpen = !isVisualsOpen; // Toggle the state on each click

  visuals.style.display = isVisualsOpen ? 'block' : 'none';
  visualsBanner.style.display = isVisualsOpen ? 'flex' : 'none';
  visualsButton.innerHTML = isVisualsOpen ? 'Collapse' : 'Open Gallery';
});