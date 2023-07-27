const visualsButton = document.querySelector('.open-btn');
const visuals = document.querySelector('.screen');
const visualsBanner = document.querySelector('.bannerv');

visualsButton.addEventListener('click', () => {
    if (visuals.style.display === 'none' || visualsBanner.style.display === 'none') {
        visuals.style.display = 'block';
        visualsBanner.style.display = 'flex';
        visualsButton.innerHTML = 'Close';
    }
    else {
        visuals.style.display = 'none';
        visualsBanner.style.display = 'none';
        visualsButton.innerHTML = 'Click to view visual projects';
    }
});
