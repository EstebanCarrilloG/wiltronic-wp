


/**
 * Filter products database based on a category and/or a search text
 * @param {string|boolean} category - if false, do not filter by category
 * @param {string|boolean} text - if false, do not filter by text
 * @returns {array} - filtered products database
 */
function filterProducts(category, text) {
  let db = JSON.parse(localStorage.getItem("db")); // get data from local storage

  if (category !== false)
    db = db.filter(
      (e) => e.tag.split(",").indexOf(category) !== -1
    );

  if (text !== false) {
    db = db.filter(
      (e) => e.titulo.toLowerCase().indexOf(text) !== -1
    );
  }
  return db;
}
export { filterProducts };
