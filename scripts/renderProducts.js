import productsInfo from "../components/productsInfo.js";
import pagination from "../helpers/pagination.js";

export default function renderProducts(database, searchTerm) {
  const numberOfPages = pagination(database.length);

  const productsListContainer = $("#products-info-container");

  console.log("Outside", searchTerm);
  productosMostrados(database, 1, numberOfPages, searchTerm);

  productsListContainer.on("click", ".page-number", function (e) {
    console.log(searchTerm);
    let index = Number($(this).attr("data-index"));
    console.log(index);
    productosMostrados(database, index + 1, numberOfPages, searchTerm);
  });

  //console.log(database);
}

function productosMostrados(baseDeDatos, numero, numberOfPages, searchTerm) {
  const productosPorPagina = 6;
  const productsListContainer = $("#products-info-container");

  let sortDb = baseDeDatos.slice(
    (numero - 1) * productosPorPagina,
    numero * productosPorPagina
  );

  const objectToRender = {
    database: sortDb,
    pagesNum: numberOfPages,
    searchTerm: searchTerm,
    page: 1,
  };

  let productsTemplate = productsInfo({
    ...objectToRender,
    page: numero,
    allProducts: baseDeDatos.length,
  });

  productsListContainer.html(productsTemplate);
  console.log(baseDeDatos);
}

// // var page_focus = document.querySelectorAll(".page-number");
// // page_focus?.forEach((p_n) => {
// //   p_n.classList.remove("bg-green");
// // });

// page_focus[r]?.classList.add("bg-green");
