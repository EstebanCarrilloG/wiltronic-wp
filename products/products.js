import { mHamburger } from "../scripts/hamburguer.js";
import { CatMenu } from "../helpers/productsDropDownAnimation.js";
import { CatAnimations } from "../helpers/categoryDropDownAnimations.js";
import { ExelToHtml} from "../scripts/exeltohtml.js";
import { productsPageLinks } from "../data/headerLinks.js";
import { header } from "../components/header.js";
import footer from "../components/footer.js";
import { filteringModes} from "../scripts/filteringModes.js";

$(document).ready( function () {
  $(".header").html(header(productsPageLinks, false));
  mHamburger();
  CatMenu($("#slidebarl_more"), $("#list_1"));
  CatAnimations($(".submenu-cat"), "ul.children-cat");
  ExelToHtml();
  // timeout para que se carguen los productos
  setTimeout(() => {
    filteringModes();
  }, 2000);

  
  

  $("#footer").html(footer());
});

/* scroll reveal by esteban carrillo */
