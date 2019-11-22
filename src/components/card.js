export const createCardTemplate = tariff => {
  return (`
    <h3 class="tariffs-list__header">${tariff.title}</h3>
    <p class="tariffs-list__description">${tariff.description}</p>
    <p class="price">
      <span class="price__currency">&#36;</span>
      ${tariff.price}
      <span class="price__period">/ month</span>
    </p>
  `);
};
