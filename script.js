const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  document.documentElement.classList.add('nav-ready');
  menuToggle.hidden = false;
  const closeMenu = () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
