;(function () {

    $(document).ready(function() {
        $('.slider-popup-toggle').tooltipster({
            theme: ['tooltipster-shadow', 'tooltipster-shadow-customized'],
            side: "right",
            maxWidth: "196",
            trigger: 'hover'
        });
        $(document).on('click', '.park-banner__close', function (e) {
            $(this).closest(".park-banner").addClass("hidden");
        });

        $(document).on('click', '.slider-popup-toggle', function (e) {
            if ($(this).hasClass("active")){
                $(this).removeClass("active");
                $(this).siblings(".slider-popup-content").addClass("hidden");
            }
            else{
                $(".slider-popup-toggle").removeClass("active");
                $(".slider-popup-toggle").siblings(".slider-popup-content ").addClass("hidden");
                $(this).toggleClass("active");
                $(this).siblings(".slider-popup-content ").toggleClass("hidden");
            }
        });

    });
})();

