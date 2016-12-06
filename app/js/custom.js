;(function () {
    /*$('.main-slider').owlCarousel({
        autoplay:false,
        loop:true,
        nav:true,
        responsive: {
            0: {
                nav: false,
                items: 1
            }
        }
    });*/

    $(document).ready(function() {

        $(document).on('click', '.park-banner__close', function (e) {
            $(this).closest(".park-banner").addClass("hidden");
        });

        $(document).on('click', '.slider-popup-toggle', function (e) {
            $(".slider-popup-toggle").removeClass("active");
            $(".slider-popup-toggle").siblings(".slider-popup-content ").addClass("hidden");
            $(this).toggleClass("active");
            $(this).siblings(".slider-popup-content ").toggleClass("hidden");
        });

    });
})();

