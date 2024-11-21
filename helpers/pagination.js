export default function pagination(length) {
    let productosPorPagina = 6; 
    let numeroTotalDeProductos = length;
    let pageCont = Math.ceil(numeroTotalDeProductos / productosPorPagina);

    return pageCont
  }