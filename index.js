import { hamburgerMenuAnimations} from "./scripts/hamburguer.js";
import { scrollAnimations } from "./scripts/scrollAnimations.js";
import {categoryAnimations } from "./helpers/categoryDropDownAnimations.js";
import footer from "./components/footer.js";
import { header } from "./components/header.js";
import { indexPageLinks } from "./data/headerLinks.js";

$(document).ready(function () {
  $(".header").html(header(indexPageLinks, true)); //Render header 
  hamburgerMenuAnimations(); //hamburger menu animations
  scrollAnimations(); //scroll animations
  categoryAnimations($(".submenu"), "ul.children"); //category animations
  $("#footer").html(footer());  //render footer
});
