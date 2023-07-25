const btnToggle = document.querySelectorAll('.js-btn-toggle');

btnToggle.forEach((button) => {
  button.addEventListener('click', () => {
    const listCard = button.closest('.card');

    if (listCard) {
      listCard.classList.toggle('is-show');
    }
  });
});