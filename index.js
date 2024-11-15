import { mHamburger } from "./scripts/hamburguer.js";
import { ScrollAnims } from "./scripts/scrollAnimations.js";
import { CatAnimations } from "./helpers/categoryDropDownAnimations.js";
import footer from "./components/footer.js";
import { header } from "./components/header.js";
import { indexPageLinks } from "./data/headerLinks.js";

$(document).ready(function () {
  $(".header").html(header(indexPageLinks, true));
  mHamburger();
  ScrollAnims();
  CatAnimations($(".submenu"), "ul.children");
  $("#footer").html(footer());
});
