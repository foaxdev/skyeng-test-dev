'use strict';

const tariffCards = document.querySelectorAll('.tariffs-list__item');
const modalWindow = document.querySelector('.modal');

tariffCards.forEach(tariffCard => {
  tariffCard.addEventListener('click', () => {
    modalWindow.classList.add('modal--show');
  });
});
