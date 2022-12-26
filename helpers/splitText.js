export function splitText(frase) {
  let split_texto = frase.split(".");
  let splitedText = "";

  split_texto.forEach(parrafo => {

    splitedText += `<li><span class='info-icon fas fa-caret-right'></span>${parrafo}</li>`;

  });
  return splitedText;
}