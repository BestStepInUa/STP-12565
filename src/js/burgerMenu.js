document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('[data-action="open-menu"]');
  const closeBtn = document.querySelector('[data-action="close-menu"]');
  const menu = document.querySelector('[data-menu="mobile"]');

  if (!openBtn || !closeBtn || !menu) return;

  const openMenu = () => {
    const scrollY = window.scrollY;

    document.body.dataset.scroll = 'locked';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';

    menu.dataset.state = 'open';
  };

  const closeMenu = () => {
    const scrollY = document.body.style.top;

    document.body.removeAttribute('data-scroll');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    menu.dataset.state = 'closed';
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  menu.addEventListener('click', e => {
    if (e.target.closest('[data-menu-link]')) {
      closeMenu();
    }
  });

  menu.dataset.state = 'closed';
});
