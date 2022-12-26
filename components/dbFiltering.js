import { showHideMenu } from "../helpers/productsDropDownAnimation.js";
import { renderizarProductos } from "../views/productsList.js";

export function DbFiltering(baseDeDatos) {
    const searchCategory = document.querySelectorAll('.p-busqueda');
    const input = document.querySelector("#search_i");

    input.addEventListener("keyup", buscarDb);

    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            buscarDb();
        }
    });

    function buscarDb() {
        var text = input.value.toLowerCase();
        if (text == " " || text == "") {
            renderizarProductos(baseDeDatos, "Popular", false);
        } else {
            renderizarProductos(baseDeDatos, false, text);
        }
    }

    searchCategory.forEach(c_category => {
        c_category.onclick = function () {

            const explText = splitCategory(c_category.innerHTML);
            showHideMenu($('#list_1'));
            renderizarProductos(baseDeDatos, explText, false);
        }
    });

    function splitCategory(frase) {
        let split_texto = frase.split(">");
        return split_texto[2];
    }

    renderizarProductos(baseDeDatos, "Popular", false)

}