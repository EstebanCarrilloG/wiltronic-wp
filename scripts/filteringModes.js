import { showHideMenu } from "../helpers/productsDropDownAnimation.js";
import { filterProducts } from "./filterProducts.js";
import renderProducts from "./renderProducts.js";

export function filteringModes() {
  let defaultTag = "Popular";
  const searchCategory = $(".p-busqueda");
  const input = $("#search_i");
  //input.on("keyup", buscarDb);

  input.on("keydown", function (e) {
    if (e.keyCode === 13) {
      buscarDb($(this).val().toLowerCase());
    }
  });

  function buscarDb(text) {
    if (text !== " " || text !== "")
      renderProducts(filterProducts(false, text), text);
  }

  searchCategory.on("click", function () {
    showHideMenu($("#list_1"));
    let dataTag = $(this).attr("data-tag");
    renderProducts(filterProducts(dataTag, false), dataTag);
  });

  renderProducts(filterProducts(defaultTag, false), defaultTag);
}
