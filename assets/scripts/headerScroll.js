$(document).ready(function () {

    'use strict';


    var c, currentScrollTop = 0,
        navbar = $('nav'),
        header = $('header')



    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        currentScrollTop = scroll;

        if (currentScrollTop > 0) {
            header.addClass('fixed');
            navbar.addClass('fixed')

            if (currentScrollTop > 40) {

                if (c < currentScrollTop ) {
                    header.css({
                        "top": "-40px",
                        "transition":"all 0.3s ease 0s"}
                        );

                } else if (c > currentScrollTop ) {
                    header.css({
                        "top": "0",
                        "transition":"all 0.3s ease 0s"}
                        );
                }
            }

        } else {
            header.removeClass('fixed');
            header.css({
                "transition":"none"}
                );
            navbar.removeClass('fixed')
        }

        c = currentScrollTop;
    });

});