/**
 * @description Creates the header for the given page.
 * @param {object} links - The links to render in the header.
 * @param {boolean} isIndexpage - If the page is the index page.
 * @returns {string} The rendered header as a string.
 */
export function header(links, isIndexpage) {
  console.log(Object.keys(links));
  return `<div class="header-container ${
    isIndexpage ? "" : "bgcolor"
  } " id="header">
        <div class="header-logo">
          <a href="${isIndexpage ? "./" : "../"}"
            ><img
              class="logo__img"
              src="${isIndexpage? "./" : "../"}assets/wiltronic-logo - copia.png"
              alt=""
          /></a>
        </div>

        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>

        <nav class="nav" id="nav">
          <div>
            <ul>
              <!-- <li class="submenu">
                <span>Submenus</span>
                <ul class="children">
                  <li><a href="">submenu</a></li>
                  <li><a href="">submenu</a></li>
                  <li><a href="">submenu</a></li>
                  <li><a href="">submenu</a></li>
                  <li><a href="">submenu</a></li>
                </ul>
              </li> -->
              ${Object.keys(links).map(
                (link) => `<li><a href="${links[link]}">${link}</a></li>`
              )}
            </ul>
          </div>
        </nav>
      </div>
      ${
        isIndexpage
          ? `<div class="header-tumbnail">
        <div class="tumbnail__content container">
          <h2>BIENVENIDO A WILTRONIC ELECTRONICA</h2>
          <a class="cta content-button" href="#about">Continuar</a>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>`
          : ""
      }
        `;
}
