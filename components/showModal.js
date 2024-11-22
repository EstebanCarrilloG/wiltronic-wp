import { splitText } from "../helpers/splitText.js";

/**
 * Renders the product modal with the provided product information
 * @param {Object} product - The object with the product information to be rendered
 * @prop {string} titulo - The title of the product
 * @prop {string} imagen - The image path of the product
 * @prop {string} descripcion - The description of the product
 * @prop {number} precio - The original price of the product
 * @prop {number} precioDescuento - The discounted price of the product
 * @prop {string} palabra - The search term to be appended to the whatsapp message
 */
export function showModal(product) {

  var modal = document.getElementById("myModal");
  var products_zoom = $("#products-zoom");

  let splitedText = splitText(product.descripcion);

  modal.style.display = "block";

  products_zoom.html(`<div class = "product-imgAndPrice-title">
      <div class ="product-img">
        <img src="../${product.imagen}" alt="">
          <div class= "product-price">
            <span class= "product-price-before">$${product.precio}</span>
            <span class= "product-price-dicount">$${product.precioDescuento}</span>
          </div>
      </div>
      <h2 class ="product-title">${product.titulo}</h2>
    </div>
    <div class ="prouct-info">
      <h3 class = "product-info__title">Caracteristicas:</h3>
      <ul class = "product-info__info">${splitedText}</ul>
    </div>
    <div class ="btn-products">
      <a class = "cta btn-products__buy" href="https://wa.me/593987586859?text=Hola,me interesa comprar%20${product.palabra}%20${product.titulo}.%0A" target="_blank">
        <i class="fas fa-shopping-cart"></i>
        Comprar
      </a>
    </div>
    <span id="close"><i class="fas fa-window-close"></i></span>`);

  var closeModal = $("#close");
  closeModal.on("click", function () {
    modal.style.display = "none";
  });
}
