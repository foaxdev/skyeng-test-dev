import {tariffs} from "./tariffs";
import {createCardTemplate} from "./components/card";

let currentTariff = "tv";

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const clearElement = container => {
  container.innerHTML = '';
};

const tariffsList = document.querySelector('.tariffs-list');

for (const tariff in tariffs) {
  render(tariffsList, createCardTemplate(tariff));
}

const tariffCards = document.querySelectorAll('.tariffs-list__item');
const modalWindow = document.querySelector('.modal');
const modalWindowInfo = modalWindow.querySelector('.modal__info');

tariffCards.forEach(tariffCard => {
  tariffCard.addEventListener('click', () => {
    currentTariff = tariffCard.getAttribute('data-name');
    clearElement(modalWindowInfo);
    render(modalWindowInfo, createCardTemplate(currentTariff));
    modalWindow.classList.add('modal--show');
  });
});
