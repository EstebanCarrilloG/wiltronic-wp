export function ScrollAnims() {
    const $about = $("#about"),
        $products = $("#products"),
        $services = $("#services"),
        $contact = $("#contact");


    var $cabecera = $('#header');
    var $nav = $('#nav');
    var previousScroll = 0;
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();


        if (scroll > 25) {
            $cabecera.addClass('bgcolor');
            $nav.addClass('bgcolor');
        } else {
            $cabecera.removeClass('bgcolor');
            $nav.removeClass('bgcolor');
        }

        if (scroll > 50) {
            $about.addClass('about-init');
        } else {
            $about.removeClass('about-init');
        }

        if (scroll > 800) {
            $products.addClass('products-init');
        } else {
            $products.removeClass('products-init');
        }

        if (scroll > 1300) {
            $services.addClass('services-init');
        } else {
            $services.removeClass('services-init');
        }

        if (scroll > 2000) {
            $contact.addClass('about-init');
        } else {
            $contact.removeClass('about-init');
        }

        previousScroll = scroll;
    });
}