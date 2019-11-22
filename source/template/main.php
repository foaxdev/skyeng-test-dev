<main>
 <h1 class="visually-hidden">Tesk tasks</h1>

 <section class="tariffs">
  <h2 class="visually-hidden">Tariffs</h2>
  <ul class="tariffs-list">
    <?php foreach($tariffs as $name => $tariff): ?>
    <li class="tariffs-list__item tariffs-list__item--<?=$tariff["alias"];?>">
      <a class="tariffs-list__link" href="?current_tariff=<?=$name;?>">
        <?php print(include_template("card.php", ["tariff" => $tariff])); ?>
      </a>
    </li>
    <?php endforeach; ?>
  </ul>
 </section>

 <section class="modal">
  <h2 class="modal__header">Confirmation</h2>
  <button class="modal__close-button" type="button">Close window</button>
  <?php print(include_template("card.php", ["tariff" => $tariffs[$current_tariff]])); ?>
  <a class="modal__button" href="#">Confirm and pay</a>
 </section>
</main>
