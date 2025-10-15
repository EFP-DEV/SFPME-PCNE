// Init Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  keyboard: { enabled: true },
  mousewheel: { enabled: true },
  pagination: { el: '.swiper-pagination', type: 'progressbar' },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  speed: 280,
  allowTouchMove: true,
});

// Theme + font size controls
const html = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const themeLbl = document.getElementById('themeLbl');
const densityBtn = document.getElementById('densityBtn');
const densityLbl = document.getElementById('densityLbl');

function setDensity(mode) {
  if (mode === 'dense') {
    document.documentElement.setAttribute('data-density', 'dense');
    densityLbl.textContent = 'Dense';
  } else {
    document.documentElement.removeAttribute('data-density');
    densityLbl.textContent = 'Normale';
  }
}

themeBtn.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'hacker' ? 'lecture' : 'hacker');
});
densityBtn.addEventListener('click', () => {
  const dense = html.getAttribute('data-density') === 'dense';
  setDensity(dense ? 'normal' : 'dense');
});

function adjustFont(delta) {
  const root = getComputedStyle(document.documentElement);
  const cur = parseFloat(root.getPropertyValue('--fs-base')) || 18;
  const next = Math.min(24, Math.max(14, cur + delta));
  document.documentElement.style.setProperty('--fs-base', next + 'px');
  document.documentElement.style.setProperty('--fs-lg', next + 2 + 'px');
  document.documentElement.style.setProperty('--fs-xl', next + 14 + 'px');
  document.documentElement.style.setProperty('--fs-xxl', next + 30 + 'px');
}
biggerBtn.addEventListener('click', () => adjustFont(1));
smallerBtn.addEventListener('click', () => adjustFont(-1));

// Keyboard shortcuts
addEventListener('keydown', (e) => {
  if (e.key === 't') themeBtn.click();
  if (e.key === 'd') densityBtn.click();
  if (e.key === '+') adjustFont(1);
  if (e.key === '-') adjustFont(-1);
  if (e.key === 'p') {
    e.preventDefault();
    window.print();
  }
  if (e.key === 'F11') {
    e.preventDefault();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  if (e.key === 'Home') swiper.slideTo(0);
  if (e.key === 'End') swiper.slideTo(swiper.slides.length - 1);
});

// Quiz reveal on space/enter click
document.querySelectorAll('[data-quiz]').forEach((group) => {
  const options = group.querySelectorAll('.quiz-option');
  options.forEach((btn) => {
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', () => {
      options.forEach((o) => o.classList.add('reveal'));
      btn.setAttribute('aria-pressed', 'true');
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
});
