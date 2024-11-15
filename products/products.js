import { mHamburger } from "../scripts/hamburguer.js";
import { CatMenu } from "../helpers/productsDropDownAnimation.js";
import { CatAnimations } from "../helpers/categoryDropDownAnimations.js";
import { ExelToHtml } from "../scripts/exeltohtml.js";
import { productsPageLinks } from "../data/headerLinks.js";
import { header } from "../components/header.js";
import footer from "../components/footer.js";

$(document).ready(function () {
  $(".header").html(header(productsPageLinks, false));
  mHamburger();
  CatMenu($("#slidebarl_more"), $("#list_1"));
  CatAnimations($(".submenu-cat"), "ul.children-cat");
  ExelToHtml();
  $("#footer").html(footer());
});

/* scroll reveal by esteban carrillo */
