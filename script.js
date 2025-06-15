// Lock scroll initially
document.body.classList.add('lock-scroll');

const overlay = document.getElementById('intro-overlay');
const main = document.getElementById('main-content');
const enterBtn = document.getElementById('enter-btn');
const homeBtn = document.getElementById('home-btn');
const musicBtn = document.getElementById('music-btn');
const musicStatus = document.getElementById('music-status');
const musicIcon = document.getElementById('music-icon');

// Fade in main content, fade out overlay
enterBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
  setTimeout(() => {
    overlay.style.display = 'none';
    main.style.display = 'block';
    setTimeout(() => main.classList.remove('hidden'), 10);
    document.body.classList.remove('lock-scroll');
  }, 700);
});

// Home button to go back to intro overlay
homeBtn.addEventListener('click', () => {
  main.classList.add('hidden');
  setTimeout(() => {
    main.style.display = 'none';
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.remove('hidden'), 10);
    document.body.classList.add('lock-scroll');
  }, 700);
});

// Example: Toggle music button
let musicPlaying = false;
musicBtn.addEventListener('click', () => {
  musicPlaying = !musicPlaying;
  musicStatus.textContent = musicPlaying ? 'On' : 'Off';
  musicIcon.textContent = musicPlaying ? '🔊' : '🎵';
  // Here you can add actual music play/pause logic if desired
});

// Optional: Prevent scroll on overlay
overlay.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
