/* set up XMLHttpRequest */

import { DbFiltering } from "./dbFiltering.js";


export function ExelToHtml() {


  var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwyysWVKkiCRPBzxmOXzjvoCeYYciP5-4CjSahK0NfLcOnkdI4Avkpx4DLFW-K8yf6y3y9kyvn9sP0/pubhtml?gid=0&single=true";

  var oReq = new XMLHttpRequest();
  oReq.open("GET", url, true);
  oReq.responseType = "arraybuffer";

  oReq.onload = function (e) {
    var arraybuffer = oReq.response;

    /* convert data to binary string */
    var data = new Uint8Array(arraybuffer);
    var arr = new Array();
    for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");

    /* Call XLSX */
    var workbook = XLSX.read(bstr, { type: "binary" });

    /* DO SOMETHING WITH workbook HERE */
    var first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];

    var baseDeDatos = XLSX.utils.sheet_to_json(worksheet);
    Object.freeze(baseDeDatos);

    DbFiltering(baseDeDatos);

  }

  oReq.send();

}