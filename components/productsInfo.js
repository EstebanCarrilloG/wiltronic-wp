export default function productsInfo({database, pagesNum,searchTerm,page,allProducts}) {

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
              <p id="numero-pagina">Pagina: ${page} de ${pagesNum} </p>
            </div>
            <div class="slidebar-right__content">
            ${database.map(
              (e) =>
                `<div class="content-product" name=${e.titulo}>
                    <div class = "product-imgAndPrice-title">
                        <div class ="product-img">
                        <img src="../${e.imagen}" alt="">
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

//${for(let i = 0;i<pagesNum;i++) }

// baseDeDatos.map((info) => {
//   const miNodo = document.createElement("div");
//   miNodo.classList.add("content-product");
//   miNodo.setAttribute("name", info.titulo);

//   const texto_divs = `
//     `;
//   miNodo.innerHTML = texto_divs;

//   DOMitems.appendChild(miNodo);

//   modalContent(baseDeDatos);
// });
