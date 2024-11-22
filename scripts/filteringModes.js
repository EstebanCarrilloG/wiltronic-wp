import { showHideMenu } from "../helpers/productsDropDownAnimation.js";
import { filterProducts } from "./filterProducts.js";
import renderProducts from "./renderProducts.js";

/**
 * Initializes the filtering modes for rendering product lists.
 * 
 * - Sets a default tag to render the initial list of products.
 * - Attaches event listeners to the search input and category elements.
 * - Triggers a search and renders products when the Enter key is pressed in the search input.
 * - Toggles the visibility of the category menu and renders products based on the selected category when a category is clicked.
 * - Initially renders products based on the default tag.
 */
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

  /**
   * Searches the products database by the given string and renders the matched products.
   * @param {string} text The string to search for in the products database.
   */
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
