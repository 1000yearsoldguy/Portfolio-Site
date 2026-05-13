// Copy email to clipboard
function copyEmail(el) {
  const email = el.dataset.email;
  const original = el.textContent;
  navigator.clipboard.writeText(email).then(() => {
    el.textContent = 'Copied!';
    el.classList.add('copied');
    setTimeout(() => { el.textContent = original; el.classList.remove('copied'); }, 2000);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = email; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    el.textContent = 'Copied!'; el.classList.add('copied');
    setTimeout(() => { el.textContent = original; el.classList.remove('copied'); }, 2000);
  });
}

// ── CONTACT ME ──
function triggerContact() {
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Wait for scroll to finish then blink
  setTimeout(() => {
    const emailBtn = document.querySelector('.email-copy-btn');
    const linkedinBtn = document.querySelector('.hero-links a[href*="linkedin"]');

    // Inject blink keyframe if not already there
    if (!document.getElementById('blinkStyle')) {
      const s = document.createElement('style');
      s.id = 'blinkStyle';
      s.textContent = `
          @keyframes contactBlink {
            0%,100% { opacity:1; transform:scale(1); box-shadow:none; }
            50% { opacity:0.25; transform:scale(1.06); box-shadow:0 0 18px rgba(0,200,240,0.6); }
          }
          .contact-blink {
            animation: contactBlink 0.55s ease-in-out 6;
          }
        `;
      document.head.appendChild(s);
    }

    [emailBtn, linkedinBtn].forEach(btn => {
      if (!btn) return;
      btn.classList.remove('contact-blink');
      void btn.offsetWidth; // reflow to restart animation
      btn.classList.add('contact-blink');
      btn.addEventListener('animationend', () => btn.classList.remove('contact-blink'), { once: true });
    });
  }, 900);
}

// ── THEME TOGGLE ──
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'light') {
    themeIcon.textContent = '🌙';
    themeLabel.textContent = 'Dark';
  } else {
    themeIcon.textContent = '☀️';
    themeLabel.textContent = 'Light';
  }
}

// ── HAMBURGER / DRAWER ──
const toggle = document.getElementById('navToggle');
const drawer = document.getElementById('navDrawer');
const backdrop = document.getElementById('navBackdrop');

function openDrawer() {
  toggle.classList.add('open');
  drawer.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  toggle.classList.remove('open');
  drawer.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

toggle.addEventListener('click', () => {
  drawer.classList.contains('open') ? closeDrawer() : openDrawer();
});

// Close on backdrop click
backdrop.addEventListener('click', closeDrawer);

// Close on drawer link click
document.querySelectorAll('.drawer-item').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDrawer();
});

// ── CURSOR GLOW ──
const cursor = document.createElement('div');
cursor.id = 'cursorGlow';
cursor.style.cssText = `
    position:fixed; width:320px; height:320px; border-radius:50%;
    background:radial-gradient(circle, rgba(0,200,240,0.06) 0%, transparent 70%);
    pointer-events:none; z-index:9999; transform:translate(-50%,-50%);
    transition:opacity 0.3s; opacity:0;
  `;
document.body.appendChild(cursor);
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursor.style.opacity = '1';
});
document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });

// ── SCROLL REVEAL ──
const revealCSS = document.createElement('style');
revealCSS.textContent = `
    .reveal { opacity:0; transform:translateY(32px); transition:opacity 0.65s ease, transform 0.65s ease; }
    .reveal.visible { opacity:1; transform:translateY(0); }
    .reveal-left { opacity:0; transform:translateX(-32px); transition:opacity 0.65s ease, transform 0.65s ease; }
    .reveal-left.visible { opacity:1; transform:translateX(0); }
    .reveal-right { opacity:0; transform:translateX(32px); transition:opacity 0.65s ease, transform 0.65s ease; }
    .reveal-right.visible { opacity:1; transform:translateX(0); }
    .reveal-scale { opacity:0; transform:scale(0.94); transition:opacity 0.55s ease, transform 0.55s ease; }
    .reveal-scale.visible { opacity:1; transform:scale(1); }

    /* Active nav link */
    .nav-links a.active { color: var(--accent) !important; border-bottom-color: var(--accent) !important; }

    /* Skill pill hover */
    .skill-pill {
      cursor: default;
      transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
    }
    .skill-pill:hover {
      background: var(--accent-dim) !important;
      color: var(--accent) !important;
      border-color: var(--accent) !important;
      transform: translateY(-2px);
    }

    /* Honor card lift - PREMIUM SMOOTH TRANSITION */
    .honor-card { 
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), 
                  box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1), 
                  border-color 0.4s ease,
                  background 0.4s ease; 
    }
    .honor-card:hover { 
      transform: translateY(-8px) scale(1.015); 
      box-shadow: 0 14px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(240, 192, 64, 0.12);
      border-color: var(--gold) !important;
      background: var(--surface2);
    }

    /* Exp item hover shadow */
    .exp-item { transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease, border-color 0.4s ease; }
    .exp-item:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--accent) !important; }

    /* Conf item hover */
    .conf-item { transition: all 0.3s ease; }
    .conf-item:hover { background: var(--surface2) !important; border-color: var(--accent) !important; transform: translateX(4px); }

    /* Cert badge hover */
    a.cert-badge { transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1); }
    a.cert-badge:hover { transform: translateY(-3px) scale(1.02); box-shadow: var(--shadow-sm); }


    /* Rec card lift */
    .rec-card { transition: border-color 0.3s, transform 0.25s, box-shadow 0.25s; }
    .rec-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: var(--accent) !important; }

    /* Stat number pop */
    .stat-num { transition: color 0.2s, transform 0.2s; cursor: default; }
    .stat-num:hover { transform: scale(1.1); }

    /* Back to top */
    #backToTop {
      position: fixed; bottom: 2rem; right: 2rem; z-index: 800;
      width: 42px; height: 42px; border-radius: 50%;
      background: var(--surface2); border: 1px solid var(--border-strong);
      color: var(--muted-light); font-size: 1rem; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transform: translateY(14px);
      transition: opacity 0.3s, transform 0.3s, background 0.2s, color 0.2s, border-color 0.2s;
      pointer-events: none; font-family: 'DM Mono', monospace;
      box-shadow: var(--shadow-sm);
    }
    #backToTop.visible { opacity: 1; transform: translateY(0); pointer-events: auto; }
    #backToTop:hover { background: var(--accent); color: var(--bg); border-color: var(--accent); box-shadow: 0 0 20px rgba(0,200,240,0.35); }

    /* Reading progress bar */
    #readProgress {
    position: fixed;
    top: 0; left: 0;
    height: 2px;
    z-index: 1001;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    width: 0%;
    transition: width 0.1s linear;
    box-shadow: 0 0 8px rgba(0, 200, 240, 0.5);
  }

    /* Reset delays once visible so hover is snappy */
    .visible { transition-delay: 0s !important; }

    /* Card tilt effect */
    .tiltable { transform-style: preserve-3d; }

    /* Stagger delays for honor cards (entrance only) */
    .honors-grid .honor-card:nth-child(1) { transition-delay: 0s; }
    .honors-grid .honor-card:nth-child(2) { transition-delay: 0.07s; }
    .honors-grid .honor-card:nth-child(3) { transition-delay: 0.14s; }
    .honors-grid .honor-card:nth-child(4) { transition-delay: 0.21s; }
    .honors-grid .honor-card:nth-child(5) { transition-delay: 0.28s; }
    .honors-grid .honor-card:nth-child(6) { transition-delay: 0.35s; }
    .honors-grid .honor-card:nth-child(7) { transition-delay: 0.42s; }
    .honors-grid .honor-card:nth-child(8) { transition-delay: 0.49s; }


    /* Lang card hover */
    .lang-card { transition: border-color 0.2s, box-shadow 0.2s; }
    .lang-card:hover { border-color: var(--accent) !important; box-shadow: var(--shadow-sm); }

    /* Network item hover */
    .network-item { transition: border-color 0.2s, box-shadow 0.2s; }
    .network-item:hover { border-color: var(--accent3) !important; box-shadow: var(--shadow-sm); }

    /* Edu item hover */
    .edu-item { transition: border-color 0.2s, box-shadow 0.2s; }
    .edu-item:hover { border-color: var(--accent) !important; box-shadow: var(--shadow-sm); }

    /* Skill category hover */
    .skill-category { transition: border-color 0.2s, box-shadow 0.2s; }
    .skill-category:hover { border-color: var(--accent2) !important; box-shadow: var(--shadow-sm); }
  `;
document.head.appendChild(revealCSS);
// ── READING PROGRESS BAR ──
const bar = document.createElement('div');
bar.id = 'readProgress';
bar.style.width = '0%';
document.body.prepend(bar);

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (docHeight <= 0) { bar.style.width = '0%'; return; }
  const pct = Math.min((scrollTop / docHeight) * 100, 100);
  bar.style.width = pct + '%';
}

// Reset to 0 on page load regardless of scroll restore
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  updateProgress();
});
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress, { passive: true });

// ── BACK TO TOP ──
const btt = document.createElement('button');
btt.id = 'backToTop';
btt.innerHTML = '↑';
btt.title = 'Back to top';
document.body.appendChild(btt);
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  btt.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ── SCROLL REVEAL OBSERVER ──
// Tag elements for reveal
document.querySelectorAll('.exp-item').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i * 0.1) + 's';
});
document.querySelectorAll('.honor-card').forEach((el, i) => {
  el.classList.add('reveal-scale');
  el.style.transitionDelay = (i * 0.07) + 's';
});
document.querySelectorAll('.project-card').forEach((el, i) => {
  el.classList.add('reveal', i % 2 === 0 ? 'reveal-left' : 'reveal-right');
  el.style.transitionDelay = (i * 0.12) + 's';
});
document.querySelectorAll('.cert-group').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i * 0.08) + 's';
});
document.querySelectorAll('.skill-category').forEach((el, i) => {
  el.classList.add('reveal-scale');
  el.style.transitionDelay = (i * 0.06) + 's';
});
document.querySelectorAll('.edu-item').forEach((el, i) => {
  el.classList.add('reveal-left');
  el.style.transitionDelay = (i * 0.1) + 's';
});
document.querySelectorAll('.conf-item').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i * 0.07) + 's';
});
document.querySelectorAll('.network-item').forEach((el, i) => {
  el.classList.add('reveal-left');
  el.style.transitionDelay = (i * 0.1) + 's';
});
document.querySelectorAll('.rec-card').forEach((el, i) => {
  el.classList.add('reveal-scale');
  el.style.transitionDelay = (i * 0.1) + 's';
});
document.querySelectorAll('.pub-card').forEach(el => el.classList.add('reveal'));
document.querySelectorAll('.research-card').forEach(el => el.classList.add('reveal'));
document.querySelectorAll('h2.section-title').forEach(el => el.classList.add('reveal'));
document.querySelectorAll('.lang-card').forEach((el, i) => {
  el.classList.add('reveal-scale');
  el.style.transitionDelay = (i * 0.08) + 's';
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
  revealObserver.observe(el);
});

// ── SMOOTH ANIMATED COUNTER ENGINE ──
function animateCounter(el, target, duration = 1600) {
  const startTime = performance.now();
  const suffix = el.dataset.suffix || '';

  // Auto-detect: if number has a remainder when divided by 1, it's a decimal
  const isDecimal = target % 1 !== 0;

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing: Cubic Out (starts fast, decelerates gracefully)
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = easedProgress * target;

    // Formatting: 1 decimal place for years, whole numbers for others
    const formattedNum = isDecimal
      ? currentVal.toFixed(1)
      : Math.round(currentVal);

    el.textContent = formattedNum + suffix;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Final snap to target to ensure precision
      el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    }
  }

  requestAnimationFrame(step);
}

// ── INTERSECTION OBSERVER LOGIC ──
const statEls = document.querySelectorAll('.stat-num');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  // Trigger when the stats section is 50% visible
  if (entries[0].isIntersecting && !statsAnimated) {
    statsAnimated = true;

    // 1. Calculate dynamic timeline (August 22, 2022 to Today)
    const startDate = new Date('2022-08-22');
    const today = new Date();
    const diffInYears = (today - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    const yearsExperience = parseFloat(diffInYears.toFixed(1));

    // 2. Define the 4 units
    const statsData = [
      { el: statEls[0], val: yearsExperience, suffix: '+' }, // The dynamic year
      { el: statEls[1], val: 40, suffix: '%' }, // Percentage
      { el: statEls[2], val: 1, suffix: 'st' }, // Ranking 1
      { el: statEls[3], val: 5, suffix: 'th' }  // Ranking 2
    ];

    // 3. Fire each animation
    statsData.forEach((item) => {
      if (item.el) {
        item.el.dataset.suffix = item.suffix;
        animateCounter(item.el, item.val, 1600);
      }
    });
  }
}, { threshold: 0.5 });

// Start observing
if (statEls.length > 0) {
  const container = statEls[0].closest('.hero-stats') || statEls[0];
  statsObserver.observe(container);
}

// ── ACTIVE NAV HIGHLIGHT on scroll ──
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a.nav-item, .nav-drawer a.drawer-item');
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      document.querySelectorAll(`a[href="#${entry.target.id}"]`).forEach(a => a.classList.add('active'));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => navObserver.observe(s));

// ── CARD TILT on project cards ──
document.querySelectorAll('.project-card').forEach(card => {
  card.classList.add('tiltable');
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── SKILL PILL click ripple ──
document.querySelectorAll('.skill-pill').forEach(pill => {
  pill.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    const rect = pill.getBoundingClientRect();
    ripple.style.cssText = `
        position:fixed; border-radius:50%;
        background:rgba(0,200,240,0.22);
        width:0; height:0;
        left:${e.clientX}px; top:${e.clientY}px;
        transform:translate(-50%,-50%) scale(0);
        animation:rippleOut 0.5s ease forwards;
        pointer-events:none; z-index:9998;
      `;
    document.body.appendChild(ripple);
    const style = document.createElement('style');
    style.textContent = `@keyframes rippleOut { to { width:80px; height:80px; opacity:0; transform:translate(-50%,-50%) scale(1); } }`;
    document.head.appendChild(style);
    setTimeout(() => { ripple.remove(); }, 600);
  });
});

// ── SECTION LABEL counter ticker ──
document.querySelectorAll('.cert-group-issuer').forEach(el => {
  el.style.cursor = 'default';
});

// ── HERO PARALLAX ──
const heroGlow = document.querySelector('.hero-glow');
const heroGrid = document.querySelector('.hero-grid-bg');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (heroGlow) heroGlow.style.transform = `translateY(${y * 0.25}px)`;
  if (heroGrid) heroGrid.style.transform = `translateY(${y * 0.1}px)`;
}, { passive: true });

// ── EVENT LISTENERS (Replacing inline onclick) ──
const emailCopyBtn = document.getElementById('emailCopyBtn');
if (emailCopyBtn) {
  emailCopyBtn.addEventListener('click', function () {
    copyEmail(this);
  });
}

const contactMeBtn = document.getElementById('contactMeBtn');
if (contactMeBtn) {
  contactMeBtn.addEventListener('click', function () {
    triggerContact();
  });
}

// Auto year
const footerYearElement = document.getElementById('footerYear');
if (footerYearElement) {
  footerYearElement.textContent = new Date().getFullYear();
}

