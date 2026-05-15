document.querySelectorAll('[data-faq-item="data-faq-item"]').forEach(item => {
  const summary = item.querySelector('[data-faq-summary="faq-summary"]');
  const icon = item.querySelector(
    '[data-faq-item-icon-wrapper="faq-item-icon-wrapper"]'
  );
  const content = item.querySelector('[data-faq-content="faq-content"]');

  summary.addEventListener('click', e => {
    // дозволяємо відкриття тільки по svg
    if (
      !e.target.closest('[data-faq-item-icon-wrapper="faq-item-icon-wrapper"]')
    ) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    if (item.open) {
      // CLOSE
      content.style.height = content.scrollHeight + 'px';

      requestAnimationFrame(() => {
        content.style.height = '0px';
      });

      content.addEventListener(
        'transitionend',
        () => {
          item.open = false;
        },
        { once: true }
      );
    } else {
      // OPEN
      item.open = true;

      content.style.height = '0px';

      requestAnimationFrame(() => {
        content.style.height = content.scrollHeight + 'px';
      });

      content.addEventListener(
        'transitionend',
        () => {
          content.style.height = 'auto';
        },
        { once: true }
      );
    }
  });
});
