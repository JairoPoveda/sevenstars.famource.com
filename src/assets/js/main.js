$(document).ready(function(){

    // toggle menu in Mobile
    $('.navbtn').click(function(){
        $('.dropdown-list').slideToggle(200, 'linear'); 
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
    $('.person-item').hover(
        // hover on
        function(){
            $(this).find('.person-name').css('display', 'none');
            $(this).find('.social-icons').css('display', 'flex');
        },
        // hover out
        function(){
            $(this).find('.person-name').css('display', 'block');
            $(this).find('.social-icons').css('display', 'none');
        }
    );

    // Feedback Slider
    new Splide( '#feedback-slider', {
        //type : 'loop',
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