
/* Base setup */
body {
  background-color: #000;
  color: #fff;
  font-family: 'Playfair Display', serif;
}

/* Hide default scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Social Buttons */
.social-btn {
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  font-weight: 500;
  text-decoration: none;
}
.social-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}

/* Starlight Box & Gallery Cards */
#starlight .rounded-xl,
#gallery .rounded-xl {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
}
#starlight .rounded-xl:hover,
#gallery .rounded-xl:hover {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

/* Whisper Panel Text */
#whisper-text p {
  opacity: 0.85;
  margin-bottom: 1rem;
  font-style: italic;
  transition: opacity 0.3s ease;
}
#whisper-text p:hover {
  opacity: 1;
}

/* Button hover effect */
a[href^="#"] {
  transition: all 0.3s ease;
}
a[href^="#"]:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.15);
}

/* Hero Title Animation Placeholder (we’ll animate this later) */
#hero h1 {
  letter-spacing: 0.02em;
}

/* Responsive Tweaks */
@media (max-width: 768px) {
  #starlight .grid {
    grid-template-columns: 1fr !important;
  }
  .social-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  #gallery .min-w-\[300px\] {
    min-width: 250px;
  }
}
#fireflies {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1;
}
.firefly {
  position: absolute;
  background: white;
  border-radius: 50%;
  width: 2px; height: 2px;
  animation: fly 10s linear infinite;
  opacity: 0.5;
}

@keyframes fly {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-50px) translateX(30px);
    opacity: 1;
  }
  100% {
    transform: translateY(100px) translateX(-30px);
    opacity: 0.1;
  }
}

/* 🫧 Whisper Fade-in */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.4s forwards;
}
.fade-in.delay-1 { animation-delay: 0.8s; }
.fade-in.delay-2 { animation-delay: 1.6s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ✨ Shimmer on hover */
#starlight .rounded-xl:hover,
#gallery .rounded-xl:hover {
  background-image: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
  background-size: 400%;
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

/* 🌠 Parallax Hero */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 110vw;
  height: 110vh;
  background: url('assets/hero-bg.jpg') no-repeat center center / cover;
  z-index: -10;
  filter: blur(8px);
  transition: transform 0.2s ease-out;
  will-change: transform;
  pointer-events: none;
}

:root {
  --scroll: 0px;
}


.rounded-xl {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.rounded-xl {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 0 16px rgba(255, 255, 255, 0.05);
}
.rounded-xl:hover {
  box-shadow: 0 0 28px rgba(255, 255, 255, 0.1);
  transform: translateY(-4px) scale(1.02);
}
section {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(6px);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
}
* {
  scroll-behavior: smooth;
}
#music-toggle {
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
#music-toggle {
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.7rem 1.2rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
}

#music-toggle:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}
  #zoom-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: zoom-out;
  z-index: 9999;
  animation: fadeIn 0.3s ease forwards;
}

#zoomed-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(255,255,255,0.3);
  transform: scale(0.8);
  animation: zoomIn 0.3s forwards;
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes zoomIn {
  from {transform: scale(0.8);}
  to {transform: scale(1);}
}
body {
  cursor: url('assets/cursor.png'), auto;
}

a, .btn, button, .clickable {
  cursor: url('assets/cursor-hover.png'), pointer;
}
#starfield {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: transparent;
  overflow: hidden;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle 2s infinite ease-in-out;
  opacity: 0.8;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(0.5); }
}
#starfield {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: transparent;
  overflow: hidden;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle 2s infinite ease-in-out;
  opacity: 0.8;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(0.5); }
}
body, .main-content, .fog-overlay, .background-fade {
  transition: all 0.3s ease-in-out;
}
.nilou-whisper {
  margin-top: 60px;
  text-align: center;
  font-size: 1.1rem;
  font-style: italic;
  color: #f0f8ff;
  font-family: 'Segoe UI', 'Papyrus', sans-serif;
  opacity: 0;
  animation: fadeInWhispers 1.5s ease-in-out 1.5s forwards;
  backdrop-filter: blur(0.1px);
  padding: 1.5rem;
  border-radius: 16px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(167, 167, 167, 0.389);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1), 0 0 5px rgba(173, 216, 230, 0.2);
  border: 1px solid rgba(105, 158, 255, 0.532);
}
.zoom-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.zoom-overlay img {
  max-width: 90%;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
}

.zoom-overlay .caption {
  color: #fff;
  font-size: 1.1rem;
  margin-top: 15px;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  max-width: 80%;
  line-height: 1.4;
  animation: fadeIn 0.6s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}


.whisper-line {
  opacity: 0;
  transform: translateY(10px);
  animation: whisperLineFade 1.5s ease forwards;
}

.whisper-line:nth-child(1) {
  animation-delay: 2.5s;
}

.whisper-line:nth-child(2) {
  animation-delay: 4s;
}

.whisper-line:nth-child(3) {
  animation-delay: 5.5s;
}

@keyframes fadeInWhispers {
  to {
    opacity: 1;
  }
}

@keyframes whisperLineFade {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
#whisperParticles {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 30vh;
  pointer-events: none;
  z-index: 2;
} 
button,
.social-btn {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

button:hover,
.social-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 200, 255, 0.4);
  background: rgba(255, 255, 255, 0.15);
}

button::after,
.social-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  transition: width 0.4s ease, height 0.4s ease;
}

button:active::after,
.social-btn:active::after {
  width: 200px;
  height: 200px;
  transition: 0s;
}

.social-btn {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
}

#themeBtn,
#toggleMusic {
  font-weight: bold;
}
.parallax-gallery {
  transform: translateY(calc(var(--scroll) * 0.1px));
  transition: transform 0.1s ease-out;
}
#cursor-glow {
  position: fixed;
  top: 0; left: 0;
  width: 40px; height: 40px;
  background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 80%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transition: transform 0.1s linear;
}
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.show {
  opacity: 1;
  transform: translateY(0);
}
 

.aadi-center-message h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.aadi-center-message p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.nilou-quote {
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  font-size: 0.95rem;
  font-style: italic;
  opacity: 0.7;
  color: #d0e0ff;
}
.from-aadi-message {
   margin: 0rem 0; /* Gives space above and below */
  padding: 2.5rem 2.5rem;
  background: rgba(59, 59, 59, 0.567);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  text-align: center;
  color: #e6f0ff;
  font-style: italic;
  font-size: 1.1rem;
  line-height: 2;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
}

.whisper-line {
  margin-bottom: 1rem;
}
.from-aadi-message {
  /* existing styles... */
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(173, 216, 230, 0.2), 0 0 40px rgba(173, 216, 230, 0.1) inset;
}

.our-gallery,
.the-floating-gallery {
  margin-top: 3rem; /* Add this if needed */
}
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.zoomable.clicked {
  transform: scale(2.5);
  position: relative;
  z-index: 50;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.15);
  transition: transform 0.4s ease-in-out;
}

=======
// ✨ Text Animation on Scroll
function handleScrollFade() {
  const trigger = window.innerHeight * 0.85;
  document.querySelectorAll('.fade-in-up').forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('show');
    }
  });
}
window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);

// 🎧 Music Toggle
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
let isPlaying = false;

function fadeIn(audio, duration = 1000) {
  audio.volume = 0;
  audio.play().catch(e => console.warn("Autoplay blocked:", e));
  let vol = 0;
  const step = 50;
  const interval = setInterval(() => {
    vol += step / duration;
    if (vol >= 1) {
      audio.volume = 1;
      clearInterval(interval);
    } else {
      audio.volume = vol;
    }
  }, step);
}

function fadeOut(audio, duration = 1000) {
  let vol = audio.volume;
  const step = 50;
  const interval = setInterval(() => {
    vol -= step / duration;
    if (vol <= 0) {
      audio.volume = 0;
      audio.pause();
      clearInterval(interval);
    } else {
      audio.volume = vol;
    }
  }, step);
}

musicToggle.addEventListener('click', () => {
  if (!music) {
    console.error("Audio element not found!");
    return;
  }

  if (isPlaying) {
    fadeOut(music);
    musicToggle.textContent = '♫ Music: Off';
  } else {
    fadeIn(music);
    musicToggle.textContent = '♫ Music: On';
  }
  isPlaying = !isPlaying;
});

// 🎬 Page Load Effects
window.addEventListener('load', () => {
  // Hide loading screen
  document.getElementById('loading-screen')?.classList.add('hidden');

  // Background video fade-in
  const video = document.getElementById('bg-video');
  const bgImage = document.getElementById('bg-image');
  setTimeout(() => {
    video?.classList.add('opacity-100');
    bgImage?.classList.add('opacity-0');
    video?.play().catch(e => console.warn("Video autoplay failed:", e));
  }, 500);

  // Remove page transition overlay
  const transition = document.getElementById('page-transition');
  if (transition) {
    transition.style.opacity = '0';
    setTimeout(() => transition.remove(), 1000);
  }

  // Whisper panel fade-in
  const whisper = document.getElementById('nilou-whisper');
  setTimeout(() => whisper?.classList.add('opacity-100'), 3000);
});

// 🌌 Firefly Generator
const fireflyContainer = document.getElementById('fireflies');
if (fireflyContainer) {
  for (let i = 0; i < 40; i++) {
    const dot = document.createElement('div');
    dot.className = 'firefly';
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.animationDuration = `${8 + Math.random() * 4}s`;
    dot.style.width = dot.style.height = `${1 + Math.random() * 2}px`;
    fireflyContainer.appendChild(dot);
  }
}

// 🌠 Parallax on Scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.body.style.setProperty('--scroll', scrollY + 'px');

  const hero = document.getElementById('hero');
  if (hero) {
    hero.style.setProperty('--scroll', scrollY);
  }
});
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.scrollY + 'px');
});
  const canvas = document.getElementById('whisperParticles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.3;

let particles = [];

for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    opacity: Math.random(),
    speedY: Math.random() * 0.5 + 0.2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.fill();
    p.y -= p.speedY;
    if (p.y < 0) p.y = canvas.height;
  }
  requestAnimationFrame(draw);
}

draw();
document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';

    const zoomedImg = document.createElement('img');
    zoomedImg.src = img.src;

    const captionText = img.getAttribute('data-caption');
    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = captionText || '';

    overlay.appendChild(zoomedImg);
    overlay.appendChild(caption);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => overlay.remove());

    document.addEventListener('keydown', function escListener(e) {
      if (e.key === "Escape") {
        overlay.remove();
        document.removeEventListener('keydown', escListener);
      }
    });
  });
});
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  document.querySelectorAll('.parallax-gallery').forEach(el => {
    el.style.setProperty('--scroll', scroll);
  });
});
  const glow = document.createElement('div');
glow.id = 'cursor-glow';
document.body.appendChild(glow);

document.addEventListener('mousemove', e => {
  glow.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  document.addEventListener("DOMContentLoaded", () => {
  const zoomables = document.querySelectorAll('.zoomable');

  zoomables.forEach(img => {
    img.addEventListener('click', () => {
      // Only zoom one image at a time
      zoomables.forEach(other => {
        if (other !== img) other.classList.remove('clicked');
      });

      img.classList.add('clicked');

      // Revert after 5 seconds
      setTimeout(() => {
        img.classList.remove('clicked');
      }, 5000);
    });
  });
}); 
