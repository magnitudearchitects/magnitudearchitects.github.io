


(function ($) {
    "use strict";
    $(document).ready(function () {

        var year = new Date().getFullYear();
        $('.year').append(year);

        $('a[data-mail]').on('click', function (e) {
            e.preventDefault();
            var domain = 'gmail.com';
            window.location = 'mailto:' + $(this).data('mail') + '@' + domain.substring(0) + '?subject=Work Enquiry';
        });


        var body = $("body");
        setTimeout(function () {
            body.addClass("loaded")
        }, 150);
        var shotContainer = $(".shot");
        $.each(shotContainer, function (b, c) {
            var $this = $(this);
            $this.imagesLoaded(function () {
                setTimeout(function () {
                    $this.addClass("loaded")
                }, 50 + 150 * b)
            })
        });
    })

    $(window).on('click', function () {
        // will first fade out the loading animation
        $(".loader-wrapper").fadeOut();
        // will fade out the whole DIV that covers the website.
        $(".preloader").delay(1000).fadeOut("slow");
    });

})(window.jQuery);





