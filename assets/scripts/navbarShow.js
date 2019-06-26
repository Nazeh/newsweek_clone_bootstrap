function toggle() {
    var navbar = $('nav');

    if (navbar.hasClass('toggle')){
        navbar.removeClass('toggle')
    }else{
        navbar.addClass('toggle');
    }
}