<?php
require_once("tariffs.php");

$current_tariff;

function isTariffExist($tariff, $tariffs) {
  return array_key_exists($tariff, $tariffs);
}

if (isset($_GET['current_tariff'])) {
  $tariff = $_GET['current_tariff'];

  if (isTariffExist($tariff, $tariffs)) {
    $current_tariff = $tariff;
  }
}
