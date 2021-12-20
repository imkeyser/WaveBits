$(function() {
    $('.navbar__mobile__menu__icon').click(function(){
        main__visibility = $('.section__1__container').is(':visible');
        if(main__visibility)
        {
            $('.section__2__container').fadeOut(50);
            $('.section__1__container').fadeOut(50);
            $('.section__3__container').fadeOut(50);
            $('.section__4__container').fadeOut(50);
            $('.navbar__links').fadeOut(50);
            $('.mobile__menu').fadeIn(300);
            $('.mobile__menu').css("display", "flex");
            
            return false;
        }
        else 
        {
            $('.mobile__menu').fadeOut(50);
            $('.section__1__container').fadeIn(200);
            $('.section__2__container').fadeIn(200);
            $('.section__3__container').fadeIn(200);
            $('.section__4__container').fadeIn(200);
            $('.navbar__links').fadeIn(200);
            return false;
        }
    });
    $('.mobile__menu a').click(function(){
        $('.mobile__menu').fadeOut(50);
        $('.section__1__container').fadeIn(200);
        $('.section__2__container').fadeIn(200);
        $('.section__3__container').fadeIn(200);
        $('.section__4__container').fadeIn(200);
    });
});