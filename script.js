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

musicToggle?.addEventListener('click', () => {
  if (!music) return console.error("Audio element not found!");
  isPlaying ? fadeOut(music) : fadeIn(music);
  musicToggle.textContent = `♫ Music: ${isPlaying ? 'Off' : 'On'}`;
  isPlaying = !isPlaying;
});

// 🎬 Page Load Effects & Loading Screen
window.addEventListener('load', () => {
  // Hide loading screen with fade out
  const loading = document.getElementById('loading-screen');
  if (loading) {
    loading.classList.add('hidden');
    setTimeout(() => loading.remove(), 800); // Match your CSS transition
  }

  // Video and background image transition
  const video = document.getElementById('bg-video');
  const bgImage = document.getElementById('bg-image');
  setTimeout(() => {
    video?.classList.add('opacity-100');
    bgImage?.classList.add('opacity-0');
    video?.play().catch(e => console.warn("Video autoplay failed:", e));
  }, 500);

  // Page transition overlay
  const transition = document.getElementById('page-transition');
  if (transition) {
    transition.style.opacity = '0';
    setTimeout(() => transition.remove(), 1000);
  }

  // Whisper fade-in
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
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
 window.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingVideo = document.getElementById('loading-video');
  const firstText = document.getElementById('first-text');
  const secondText = document.getElementById('second-text');

  // Helper to show/hide texts in sequence
  function animateTexts(duration) {
    firstText.style.opacity = 1;
    setTimeout(() => {
      firstText.style.opacity = 0;
      setTimeout(() => {
        firstText.style.display = 'none';
        secondText.style.display = 'inline-block';
        secondText.style.opacity = 1;
      }, 700);
    }, Math.max(1200, duration * 0.5 * 1000)); // Show first text for half the video or at least 1.2s

    // Hide second text before the video ends
    setTimeout(() => {
      secondText.style.opacity = 0;
    }, duration * 1000 - 700);
  }

  if (loadingVideo && loadingScreen) {
    loadingVideo.addEventListener('loadedmetadata', () => {
      // Animate text sequence for the video duration
      animateTexts(loadingVideo.duration);

      // Remove loading screen when the video is done
      loadingVideo.addEventListener('ended', () => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => loadingScreen.remove(), 700);
      });

      // If your video is set to loop, auto-hide after one playthrough
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => loadingScreen.remove(), 700);
      }, loadingVideo.duration * 1000);
    });
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingVideo = document.getElementById('loading-video');
  const firstText = document.getElementById('first-text');
  const secondText = document.getElementById('second-text');
  const mainContent = document.getElementById('main-content');

  function animateTexts(duration) {
    firstText.style.opacity = 1;
    setTimeout(() => {
      firstText.style.opacity = 0;
      setTimeout(() => {
        firstText.style.display = 'none';
        secondText.style.display = 'inline-block';
        secondText.style.opacity = 1;
      }, 700);
    }, Math.max(1200, duration * 0.5 * 1000));
    setTimeout(() => {
      secondText.style.opacity = 0;
    }, duration * 1000 - 700);
  }

  if (loadingVideo && loadingScreen) {
    loadingVideo.addEventListener('loadedmetadata', () => {
      animateTexts(loadingVideo.duration);
    });
    loadingVideo.addEventListener('ended', () => {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.remove();
        if (mainContent) mainContent.style.display = '';
      }, 700);
    });
  }
});
