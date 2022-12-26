var contador1 = 1;

function CatMenu(target, element) {
  target.click(function () {
    showHideMenu(element);
  });
}

function showHideMenu(element) {
  if (contador1 %= 2) {
    element.animate({
      top: '4.7em'
    });

  } else {

    element.animate({
      top: '-1000%'
    });
  }
  contador1++;
}

export { CatMenu, showHideMenu };