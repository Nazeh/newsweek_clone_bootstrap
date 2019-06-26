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
            navbar.addClass('fixed');
            navbar.css({
                "top": "40px",
            });

            if (currentScrollTop > 40) {

                if (c < currentScrollTop) {
                    header.css({
                        "top": "-40px",
                        "transition": "all 0.3s "
                    });
                    navbar.css({
                        "top": "0px",
                        "transition": "all 0.3s "
                    });

                } else if (c > currentScrollTop) {
                    header.css({
                        "top": "0",
                        "transition": "all 0.3s "
                    });
                    navbar.css({
                        "top": "40px",
                        "transition": "all 0.3s "
                    });
                }
            }

        } else {
            header.removeClass('fixed');
            header.css({
                "transition": "none"
            });
            navbar.removeClass('fixed')
            navbar.css({
                "top": "0px",
                "transition": "none"
            });
        }

        c = currentScrollTop;
    });

});