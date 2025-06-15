// 🌟 Scroll Fade Animation
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

// 🎧 Music Toggle + Visualizer
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicLabel = document.getElementById('music-label');
const visualizer = document.getElementById('music-visualizer');

let isPlaying = false;
let audioCtx, analyser, source, animationId;
ctx.strokeStyle = 'rgba(0,200,255,0.9)';
ctx.lineWidth = 2;
ctx.shadowColor = '#00c8ff';
ctx.shadowBlur = 8;
ctx.beginPath();
ctx.moveTo(x, yStart);
ctx.lineTo(x, yEnd);
ctx.stroke();
function startVisualizer() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    source = audioCtx.createMediaElementSource(music);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
  }
  visualizer.style.display = 'inline-block';

  function draw() {
    const ctx = visualizer.getContext('2d');
    ctx.clearRect(0, 0, visualizer.width, visualizer.height);
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);

    const barWidth = 4;
    for (let i = 0; i < 8; i++) {
      const value = data[i] / 255;
      const barHeight = value * visualizer.height;
      ctx.fillStyle = `rgba(0,200,255,0.8)`;
      ctx.fillRect(i * barWidth + 2, visualizer.height - barHeight, barWidth - 1, barHeight);
    }
    animationId = requestAnimationFrame(draw);
  }
  draw();
}

function stopVisualizer() {
  visualizer.style.display = 'none';
  if (animationId) cancelAnimationFrame(animationId);
  const ctx = visualizer.getContext('2d');
  ctx.clearRect(0, 0, visualizer.width, visualizer.height);
}

musicToggle.addEventListener('click', () => {
  if (!music) return;
  if (!isPlaying) {
    music.play();
    startVisualizer();
    musicLabel.textContent = '♫ Music: On';
  } else {
    music.pause();
    stopVisualizer();
    musicLabel.textContent = '♫ Music: Off';
  }
  isPlaying = !isPlaying;
});

music.addEventListener('pause', stopVisualizer);
music.addEventListener('ended', stopVisualizer);

// 🎬 Page Load Effects
window.addEventListener('load', () => {
  document.getElementById('loading-screen')?.classList.add('hidden');

  const video = document.getElementById('bg-video');
  const bgImage = document.getElementById('bg-image');
  setTimeout(() => {
    video?.classList.add('opacity-100');
    bgImage?.classList.add('opacity-0');
    video?.play().catch(e => console.warn("Video autoplay failed:", e));
  }, 500);

  const transition = document.getElementById('page-transition');
  if (transition) {
    transition.style.opacity = '0';
    setTimeout(() => transition.remove(), 1000);
  }

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
  document.body.style.setProperty('--scroll', `${scrollY}px`);
  document.querySelectorAll('.parallax-gallery, #hero').forEach(el => {
    el.style.setProperty('--scroll', scrollY);
  });
});

// 🧚 Whisper Particle Canvas
const canvas = document.getElementById('whisperParticles');
if (canvas) {
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
}

// 🔍 Image Zoom Overlay
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

// 💫 Cursor Glow
const glow = document.createElement('div');
glow.id = 'cursor-glow';
document.body.appendChild(glow);

document.addEventListener('mousemove', e => {
  glow.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});

// 👀 Intersection Observer for Scroll Reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
