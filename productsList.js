import { modalContent } from "./modalView.js";

const DOMitems = document.querySelector('.slidebar-right__content');

function renderizarProductos(baseDeDatos, category, text) {
  DOMitems.innerHTML = "";
  $(".page-number").removeClass("bg-green");
  // filtrar productos por categoria
  if (category !== false) {

    baseDeDatos = baseDeDatos.filter(function (s_category) {
      let split_texto = s_category.tag.split(",");
      document.getElementById('category-name').innerHTML = category;

      return split_texto.indexOf(category) !== -1;


    });
  }
  // buscar - productos
  if (text !== false) {

    baseDeDatos = baseDeDatos.filter(function (cc) {
      let pedo = cc.titulo.toLowerCase();

      if (pedo.indexOf(text) !== -1) {

        document.getElementById('category-name').innerHTML = "Resultados para termino de busqueda " + `"${text}"`;
        return pedo;

      } else {
        document.getElementById('category-name').innerHTML = "Resultados para termino de busqueda " + `"${text}"`;
      }

    });
  }
  // Mostrar productos en el dom
  var productosPorPagina = 6;
  nbd(baseDeDatos, productosPorPagina);

}



// Pagination
function nbd(baseDeDatos, productosPorPagina) {
  var numeroTotalDeProductos = baseDeDatos.length;
  var pageCont = Math.ceil(numeroTotalDeProductos / productosPorPagina);
  var pagination = document.getElementById("pagination");

  pagination.innerHTML = "";

  for (var i = 1; i <= pageCont; i++) {
    pagination.innerHTML += '<li ><a href = "#" class = "page-number">' + i + '</a></li>';
  }

  document.getElementById('category-number').innerHTML = `Productos encontrados: (${baseDeDatos.length})`


  var pagNumSelector = document.querySelectorAll(".page-number");

  pagNumSelector.forEach((pageNumber, index) => {
    pageNumber.onclick = function () {

      mostrarNumDePaginas(index + 1);
      DOMitems.innerHTML = "";
      productosMostrados(baseDeDatos, index + 1, productosPorPagina)

    }
  });


  mostrarNumDePaginas(1);

  productosMostrados(baseDeDatos, 1, productosPorPagina);

  function mostrarNumDePaginas(pageNumber) {
    document.querySelector("#numero-pagina").innerHTML = `Pagina ${pageNumber} de ${pageCont} `;
  }
}

function productosMostrados(baseDeDatos, numero, productosPorPagina) {
  var r = numero - 1
  var page_focus = document.querySelectorAll(".page-number");
  page_focus.forEach(p_n => {
    p_n.classList.remove("bg-green");
  });

  page_focus[r].classList.add("bg-green");
  baseDeDatos = baseDeDatos.slice((numero - 1) * productosPorPagina, numero * productosPorPagina);

  showDbContent(baseDeDatos);
}

function showDbContent(baseDeDatos) {

  baseDeDatos.map((info) => {

    const miNodo = document.createElement('div');
    miNodo.classList.add('content-product');
    miNodo.setAttribute("name", info.titulo)

    const texto_divs = `
    <div class = "product-imgAndPrice-title">
      <div class ="product-img">
        <img src="${info.imagen}" alt="">
          <div class= "product-price">
            <span class= "product-price-before">$${info.precio}</span>
            <span class= "product-price-dicount">$${info.precioDescuento}</span>
          </div>
      </div>
      
      <h2 class ="product-title">${info.titulo}</h2>
    </div>`
    miNodo.innerHTML = texto_divs;

    DOMitems.appendChild(miNodo);

    modalContent(baseDeDatos)

  });
}

export { renderizarProductos };