import { hamburgerMenuAnimations} from "../scripts/hamburguer.js";
import { menuAnimations } from "../helpers/productsDropDownAnimation.js";
import { categoryAnimations } from "../helpers/categoryDropDownAnimations.js";
import { excelToJson } from "../scripts/excelToJson.js";
import { productsPageLinks } from "../data/headerLinks.js";
import { header } from "../components/header.js";
import footer from "../components/footer.js";
import { filteringModes } from "../scripts/filteringModes.js";

$(document).ready(function () {
  $(".header").html(header(productsPageLinks, false));
  hamburgerMenuAnimations(); //hamburger menu animations
  menuAnimations($("#slidebarl_more"), $("#list_1")); //menu animations
  categoryAnimations($(".submenu-cat .cat-dropdown-menu")); //category animations
  excelToJson(); //Convert exel to html
  /*
  after excel file is converted into json, 
  the object is stored in localstorage, 
  so we set a timeout before accessing the data
  */
  setTimeout(() => {
    //Inside this fuction we have all the logic for filtering and rendering products 
    filteringModes(); 
  }, 2000);

  $("#footer").html(footer());
});

/* scroll reveal by esteban carrillo */
