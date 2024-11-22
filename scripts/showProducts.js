import productsInfo from "../components/productsInfo.js";
import { showModal } from "../components/showModal.js";

/**
 * Renders the product list with pagination and initializes click event listeners for pagination and modal elements.
 *
 * @param {Array} db - The array of product objects to render.
 * @param {number} pageNumber - The number of the page to render.
 * @param {number} numberOfPages - The number of pages to render.
 * @param {string} searchTerm - The search term or category used for show category or filtering term in the products search result.
 */
export default function showProducts(
  db,
  pageNumber,
  numberOfPages,
  searchTerm
) {
  const productosPorPagina = 6;
  const productsListContainer = $("#products-info-container");

  let slicedDb = db.slice(
    (pageNumber - 1) * productosPorPagina,
    pageNumber * productosPorPagina
  );

  const objectToRender = {
    db: slicedDb,
    pagesNum: numberOfPages,
    searchTerm: searchTerm,
    page: 1,
  };

  let productsTemplate = productsInfo({
    ...objectToRender,
    page: pageNumber,
    allProducts: db.length,
  });

  productsListContainer.html(productsTemplate);

  $(".page-number").each(function () {
    $(this).removeClass("bg-green");
    $(".page-number")[pageNumber - 1]?.classList.add("bg-green");
  });

  $(".content-product").on("click", function (e) {
    const name = $(this).attr("name");
    console.log(db);
    const product = db.find((e) => e.titulo == name);
    showModal(product);
  });
}
