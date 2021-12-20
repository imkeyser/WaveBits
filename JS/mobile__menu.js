$(function() {
    $('.navbar__mobile__menu__icon').click(function(){
        main__visibility = $('main').is(':visible');
        if(main__visibility)
        {
            $('main').fadeOut(50);
            $('.mobile__menu').fadeIn(200);
            return false;
        }
        else 
        {
            $('.mobile__menu').fadeOut(50);
            $('main').fadeIn(200);
            return false;
        }
    });
});