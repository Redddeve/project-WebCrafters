import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen ? disableBodyScroll : enableBodyScroll;
    scrollLockMethod(document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) {
      toggleMenu();
      return;
    }
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    enableBodyScroll(document.body);
  });
})();
