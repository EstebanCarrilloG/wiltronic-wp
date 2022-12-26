
import { mHamburger } from "./components/hamburguer.js";
import { CatMenu } from "./helpers/productsDropDownAnimation.js";
import { CatAnimations } from "./helpers/categoryDropDownAnimations.js"
import { ExelToHtml } from "./components/exeltohtml.js";


$(document).ready(function () {
	mHamburger();
	CatMenu($('#slidebarl_more'), $('#list_1'));
	CatAnimations($('.submenu-cat'), 'ul.children-cat');
	ExelToHtml();

})




/* scroll reveal by esteban carrillo */


