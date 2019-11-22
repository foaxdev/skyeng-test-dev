<?php
require_once("helpers.php");
require_once("tariffs.php");
require_once("modal.php");

$page_title = "Loop 1 - Step 1";

$page_content = include_template("main.php", [
  "tariffs" => $tariffs,
  "current_tariff" => $current_tariff
]);

$layout_content = include_template("layout.php", ["content" => $page_content, "page_title" => $page_title]);
print($layout_content);
