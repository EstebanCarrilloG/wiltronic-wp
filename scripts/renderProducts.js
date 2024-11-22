import pagination from "../helpers/pagination.js";
import showProducts from "./showProducts.js";


/**
 * Renders the product list with pagination and initializes click event listeners for pagination.
 *
 * @param {Array} db - The array of product objects to render.
 * @param {string} term - The search term or category used for show category or filtering term in the products search result.
 */
export default function renderProducts(db, term) {
  const productsPerPage = 6;
  const numberOfPages = pagination(db.length, productsPerPage);
  const productsListContainer = $("#products-info-container");

  showProducts(db, 1, numberOfPages, term);

  productsListContainer.on("click", ".page-number", function (e) {
    let index = Number($(this).attr("data-index"));
    showProducts(db, index + 1, numberOfPages, term);
  });
}