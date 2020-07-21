jQuery(document).ready(function($){
    $('.menu-links ul > li.js-has-child').hover(
        function(){
            $(this).addClass('active')
            $(this).children('ul').stop(true, true).slideDown('slow');
        },
        function(){
            $(this).removeClass('active')
            $(this).children('ul').slideUp('fast');
        }
    );

    $('.js-menu-open').click(function(){
      $('.header').addClass('menu-handel-out');
      $('.site-menu').addClass('active-menu');
    })

    $('.js-menu-close').click(function(){
      $('.header').removeClass('menu-handel-out');
      $('.site-menu').removeClass('active-menu')
    })

    $('.js-menu-slider').slick({
        slidesToShow: 6,
        centerPadding: '60px',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

    $('#pagepiling').pagepiling({
        navigation: false,
    });

    $('.scroll-down').click(function () {
		$.fn.pagepiling.moveSectionDown();
    });
    

    

});
