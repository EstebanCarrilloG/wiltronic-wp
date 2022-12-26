import { mHamburger } from "./components/hamburguer.js";
import { ScrollAnims } from "./components/scrollAnimations.js";
import { CatAnimations } from "./helpers/categoryDropDownAnimations.js"

$(document).ready(function () {
    mHamburger();
    ScrollAnims();
    CatAnimations($('.submenu'), 'ul.children');
})

