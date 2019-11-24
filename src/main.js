import {tariffs} from "./tariffs";
import {createListCardTemplate, createCardTemplate} from "./components/card";

const Key = {
  ESC: 'Escape'
};

let currentTariff = "tv";

const overlay = document.querySelector('.overlay');
const tariffsList = document.querySelector('.tariffs-list');
const modalWindow = document.querySelector('.modal');
const modalWindowInfo = modalWindow.querySelector('.modal__info');
const closeButton = modalWindow.querySelector('.modal__close-button');

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const clearElement = container => {
  container.innerHTML = '';
};

const openModalWindow = (tariffCard) => {
  currentTariff = tariffCard.querySelector('a').getAttribute('data-name');
  clearElement(modalWindowInfo);
  render(modalWindowInfo, createCardTemplate(currentTariff));
  modalWindow.classList.add('modal--show');
  overlay.classList.add('overlay--show');
  closeButton.addEventListener('click', closeModalWindowByClickHandler);
  overlay.addEventListener('click', closeModalWindowByClickHandler);
  document.addEventListener('keydown', closeModalWindowByKeydownHandler);
};

const closeModalWindowByClickHandler = () => {
  closeButton.removeEventListener('click', closeModalWindowByClickHandler);
  overlay.removeEventListener('click', closeModalWindowByClickHandler);
  modalWindow.classList.remove('modal--show');
  overlay.classList.remove('overlay--show');
};

const closeModalWindowByKeydownHandler = (evt) => {
  if (evt.key === Key.ESC) {
    closeButton.removeEventListener('click', closeModalWindowByClickHandler);
    overlay.removeEventListener('click', closeModalWindowByClickHandler);
    document.removeEventListener('keydown', closeModalWindowByKeydownHandler);
    modalWindow.classList.remove('modal--show');
    overlay.classList.remove('overlay--show');
  }
};

for (const tariff in tariffs) {
  render(tariffsList, createListCardTemplate(tariff));
}

const tariffCards = document.querySelectorAll('.tariffs-list__item');

tariffCards.forEach(tariffCard => {
  tariffCard.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModalWindow(tariffCard);
  });
});
