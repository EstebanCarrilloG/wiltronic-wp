
export function mHamburger() {
    var contador = 0;
    const hamburger = document.querySelector(".hamburger");

    $('.hamburger').click(function () {
        showHideHamnuerger();
    });

    function showHideHamnuerger() {
        hamburger.classList.toggle("active");
        if (contador %= 2) {
            $('nav').animate({
                left: '-100%'
            });
        } else {
            $('nav').animate({
                left: '0'
            });
        }
        contador++;
    }

    // Mostramos y ocultamos submenus
 	/*$('.submenu').click(function () {
        $(this).children('.children').slideToggle();
    }); */

    $('body').on('click', 'nav a', function(){
       contador = 1;
       showHideHamnuerger();
   })
}