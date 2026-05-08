document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.menu-btn-open');
  const closeMenuBtn = document.querySelector('.menu-btn-close');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Функция для переключения меню
  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');

    // Блокируем скролл body, чтобы страница не крутилась под меню
    document.body.classList.toggle('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрытие меню при клике на ссылку (важно для одностраничников)
  mobileMenu.addEventListener('click', event => {
    if (event.target.classList.contains('menu-link')) {
      toggleMenu();
    }
  });
});
