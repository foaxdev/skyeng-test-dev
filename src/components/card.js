import {tariffs} from "../tariffs";

export const createCardTemplate = tariff => {
  return (`
    <li class="tariffs-list__item" data-name="${tariff}">
      <h3 class="tariffs-list__header">${tariffs[tariff].title}</h3>
      <p class="tariffs-list__description">${tariffs[tariff].description}</p>
      <p class="price">
        <span class="price__currency">&#36;</span>
        ${tariffs[tariff].price}
        <span class="price__period">/ month</span>
      </p>
    </li>
  `);
};
