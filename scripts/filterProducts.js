import { modalContent } from "../views/modalView.js";

function filterProducts(category, text) {
  let baseDeDatos = JSON.parse(localStorage.getItem("db"));
  //$(".page-number").removeClass("bg-green");

  if (category !== false)
    baseDeDatos = baseDeDatos.filter(
      (e) => e.tag.split(",").indexOf(category) !== -1
    );

  // buscar - productos
  if (text !== false) {
    baseDeDatos = baseDeDatos.filter(
      (e) => e.titulo.toLowerCase().indexOf(text) !== -1
    );
  }
  return baseDeDatos;
  console.log(baseDeDatos);
  // Mostrar productos en el dom
  var productosPorPagina = 6;
  //nbd(baseDeDatos, productosPorPagina);
}
export { filterProducts };
