import { showHideMenu } from "../helpers/productsDropDownAnimation.js";
import { renderizarProductos } from "../views/productsList.js";

export function filteringModes() {

  let defaultTag = "Popular";
  const searchCategory = $(".p-busqueda");
  const input = $("#search_i");

  //input.on("keyup", buscarDb);

  input.on("keydown", function (e) {
    if (e.keyCode === 13) {
      buscarDb($(this).val());
    }
  });

  function buscarDb(text) {
    text = text.toLowerCase();
    if (text == " " || text == "") {
      renderizarProductos(defaultTag, false);
    } else {
      renderizarProductos(false, text);
    }
  }

  searchCategory.each(function () {
    $(this).on("click", function () {
      showHideMenu($("#list_1"));
      renderizarProductos($(this).attr("data-tag"), false);
    });
  });

  renderizarProductos(defaultTag, false);
}
