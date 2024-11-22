/**
 * Function that renders the products info container. This container includes
 * the pagination and products content.
 * @param {{db: Array, pagesNum: Number, searchTerm: string, page: Number, allProducts: Number}} props
 * - db: The array of product objects to render.
 * - pagesNum: The number of pages of the pagination.
 * - searchTerm: The search term or category used for show category or filtering term in the products search result.
 * - page: The current page of the pagination.
 * - allProducts: The total number of products of the database.
 * @returns {String} The string of the rendered products info container.
 */
export default function productsInfo({db, pagesNum,searchTerm,page,allProducts}) {

  /**
   * Renders the pagination numeration based on the number of pages given.
   * @param {Number} pagesnum - The number of pages to render in the pagination.
   * @returns {Array} An array of strings. Each string is a list item of the pagination.
   */
  const renderNumeration=(pagesnum)=>{
    let numerationContainer =[]
    for(let i =0; i < pagesNum ;i++){
        numerationContainer.push(`<li ><a href = "#" data-index = "${i}" class = "page-number">${i + 1}</a></li>`)    
    }
    return numerationContainer
  }   

  return ` <div class="category-name-number">
              <span id="category-name">Termino de busqueda: "${searchTerm}"</span>
              <h2 id="category-number">Productos encontrados: (${allProducts})</h2>
            </div>
            <div class="pagination-container top-1">
              ${pagesNum !== 0 ? `<p id="numero-pagina">Pagina: ${page} de ${pagesNum} </p>` : ""}
            </div>
            <div class="slidebar-right__content">
            ${db.map(
              (e) =>
                `<div class="content-product" name="${e.titulo}">
                    <div class = "product-imgAndPrice-title">
                        <div class ="product-img">
                        <img src="../${e.imagen}" alt="${e.titulo}">
                        <div class= "product-price">
                            <span class= "product-price-before">$${e.precio}</span>
                            <span class= "product-price-dicount">$${e.precioDescuento}</span>
                        </div>
                    </div>
                    <h2 class ="product-title">${e.titulo}</h2>
                    </div>
                </div>
                `
            ).join("")}
            </div>

            <div class="pagination-container">
              <ul id="pagination">${renderNumeration(pagesNum).join("")}</ul>
            </div>`;
}