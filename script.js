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

if (musicToggle) {
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
}

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
  document.body.style.setProperty('--scroll', scrollY + 'px');
  const hero = document.getElementById('hero');
  if (hero) {
    hero.style.setProperty('--scroll', scrollY);
  }
  document.querySelectorAll('.parallax-gallery').forEach(el => {
    el.style.setProperty('--scroll', scrollY);
  });
});

// 🫧 Whisper Particles
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

// 🖼️ Zoomable Images
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

   overlay.addEventListener('click', () => {
  overlay.classList.add('zoom-out');
  overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
});

document.addEventListener('keydown', function escListener(e) {
  if (e.key === "Escape") {
    overlay.classList.add('zoom-out');
    overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
    document.removeEventListener('keydown', escListener);
  }
});
  });
});

// ✨ Cursor Glow
const glow = document.createElement('div');
glow.id = 'cursor-glow';
document.body.appendChild(glow);

document.addEventListener('mousemove', e => {
  glow.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});

// ✨ Intersection Observer for fade-in-up
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// 🖼️ Zoomable click effect (single zoom at a time)
document.addEventListener("DOMContentLoaded", () => {
  const zoomables = document.querySelectorAll('.zoomable');
  zoomables.forEach(img => {
    img.addEventListener('click', () => {
      zoomables.forEach(other => {
        if (other !== img) other.classList.remove('clicked');
      });
      img.classList.add('clicked');
      setTimeout(() => {
        img.classList.remove('clicked');
      }, 5000);
    });
  });
});
