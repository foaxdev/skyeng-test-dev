import {tariffs} from "../tariffs";

export const createListCardTemplate = tariff => {
  return (`
    <li class="tariffs-list__item">
      ${createCardTemplate(tariff)}
    </li>
  `);
};

export const createCardTemplate = tariff => {
  return (`
    <a class="tariffs-list__link" href="#" data-name="${tariff}">
      <h3 class="tariffs-list__header">${tariffs[tariff].title}</h3>
      <p class="tariffs-list__description">${tariffs[tariff].description}</p>
      <p class="price">
        <sup class="price__currency">&#36;</sup>${tariffs[tariff].price}<span class="price__period"> / month</span>
      </p>
    </a>
  `);
};
