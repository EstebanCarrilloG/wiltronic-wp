/**
 * Adds animation effects to different sections of the page when the user scrolls to their positions.
 *
 * The sections are:
 * - #about
 * - #products
 * - #services
 * - #contact
 *
 * The effects are:
 * - Adding a background color to the header and navigation bar when the user scrolls down a bit.
 * - Adding a class to each section when the user scrolls down to it, and removing the class when the user scrolls up from it.
 */
export function scrollAnimations() {
  const $about = $("#about"),
    $products = $("#products"),
    $services = $("#services"),
    $contact = $("#contact"),
    $cabecera = $("#header"),
    $nav = $("#nav");

  let previousScroll = 0;
  
  $(window).scroll(function (event) {
    var scroll = $(this).scrollTop();

    if (scroll > 25) {
      $cabecera.addClass("bgcolor");
      $nav.addClass("bgcolor");
    } else {
      $cabecera.removeClass("bgcolor");
      $nav.removeClass("bgcolor");
    }

    if (scroll > 50) {
      $about.addClass("about-init");
    } else {
      $about.removeClass("about-init");
    }

    if (scroll > 800) {
      $products.addClass("products-init");
    } else {
      $products.removeClass("products-init");
    }

    if (scroll > 1300) {
      $services.addClass("services-init");
    } else {
      $services.removeClass("services-init");
    }

    if (scroll > 2000) {
      $contact.addClass("about-init");
    } else {
      $contact.removeClass("about-init");
    }

    previousScroll = scroll;
  });
}
