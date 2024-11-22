
/**
 * Initializes animations for a hamburger menu.
 * 
 * - Toggles the 'active' class on the hamburger element when clicked.
 * - Animates the navigation menu sliding in and out from the left based on a counter.
 * - Resets the counter and hides the menu when a link inside the navigation is clicked.
 */
export function hamburgerMenuAnimations() {
    var counter = 0;
    const hamburger = document.querySelector(".hamburger");

    $('.hamburger').click(function () {
        showHideHamnuerger();
    });

    function showHideHamnuerger() {
        hamburger.classList.toggle("active");
        if (counter %= 2) {
            $('nav').animate({
                left: '-100%'
            });
        } else {
            $('nav').animate({
                left: '0'
            });
        }
        counter++;
    }

    // Mostramos y ocultamos submenus
 	/*$('.submenu').click(function () {
        $(this).children('.children').slideToggle();
    }); */

    $('body').on('click', 'nav a', function(){
       counter = 1;
       showHideHamnuerger();
   })
}