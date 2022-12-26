import { splitText } from "../helpers/splitText.js";

export function modalContent(baseDeDatos) {

  var modal = document.getElementById("myModal");
  var more = document.querySelectorAll(".content-product");
  var products_zoom = document.getElementById("products-zoom");

  more.forEach((e, dotIndex) => {
    e.addEventListener("click", function (e) {
      console.log(baseDeDatos[dotIndex])

      const info = baseDeDatos[dotIndex];

      console.log(info.titulo);


      let splitedText = splitText(info.descripcion);

      modal.style.display = "block";
      products_zoom.innerHTML = `<div class = "product-imgAndPrice-title">
      <div class ="product-img">
        <img src="${info.imagen}" alt="">
          <div class= "product-price">
            <span class= "product-price-before">$${info.precio}</span>
            <span class= "product-price-dicount">$${info.precioDescuento}</span>
          </div>
      </div>
      
      <h2 class ="product-title">${info.titulo}</h2>
    </div>
    <div class ="prouct-info">
      <h3 class = "product-info__title">Caracteristicas:</h3>
      <ul class = "product-info__info">${splitedText}</ul>
    </div>
    <div class ="btn-products">
      <a class = "cta btn-products__buy" href="https://wa.me/593987586859?text=Hola,me interesa comprar%20${info.palabra}%20${info.titulo}.%0A" target="_blank">
        <i class="fas fa-shopping-cart"></i>
        Comprar
      </a>
    </div>`;
      products_zoom.innerHTML += `<span id="close"><i class="fas fa-window-close"></i></span>`;
      close_x();

    })
  })

  // funcion para cerrar ventana de producto con zoom
  function close_x() {
    var span = document.getElementById("close");
    span.onclick = function () {
      modal.style.display = "none";
    }
  }
}