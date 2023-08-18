$(document).ready(function(){

    var navFlag = false;
    // toggle menu in Mobile
    $('.navbtn').click(function(){
        $('.toggleMenu').slideToggle();
        
        if (navFlag) {            
            $('.menu-open').css('display', 'block');
            $('.menu-close').css('display', 'none');
            navFlag = false;
            $("#header").addClass('shadow-menuShadow');
        } else {
            $("#header").removeClass('shadow-menuShadow');
            $('.menu-open').css('display', 'none');
            $('.menu-close').css('display', 'flex');
            navFlag = true;
        }
    });

    // Sticky
    var stickyTop = ($('#header').offset()).top;

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > stickyTop) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });

    // Hover Event of Person
    $('footer .contact').hover(        
        // hover on
        function(){
            $(this).find('.icon').css({'background':'#F9901C'});
            $(this).find('.val').css({'color':'#F9901C'});
        },
        // hover out
        function(){
            $(this).find('.icon').css({'background':'#161F2F'});
            $(this).find('.val').css({'color':'#FFF'});
        }
    );
    
    // Feedback Slider
    new Splide( '#feedback-slider', {
        autoplay: 'true',
        type : 'loop',
        height : 'auto',
        cover : true,
        perPage : 3,
        gap: 30,
        arrows : false,
        breakpoints: {
            767: {
                perPage: 2,
                height: 'auto'
            },
            639: {
                perPage: 1,
                height: 'auto'
            },
            
        },
    } ).mount();
});