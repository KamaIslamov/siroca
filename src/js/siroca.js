$('.burger-menu').on('click', function() {
    $(this).toggleClass("burger-menu--opened");
    $(this).toggleClass("burger-menu--closed");
});

var swiper = new Swiper('.mainscreen-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 5000,      
    autoplay: {
        delay: 0
    },  
    breakpoints: {
        0: {
            slidesPerView: "auto",
            spaceBetween: 40,
            freemode: true,
        },
        767: {
            slidesPerView: '3',
            spaceBetween: 30,
        }
    },
    loop: true,
    freemode: true,
  });

  var swiper = new Swiper('.development__swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 0
    },  
    updateOnWindowResize: true,
    breakpoints: {
        0: {
            slidesPerView: "auto",
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
            },
            speed: 5000, 
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 5000,
        }
    },
    loop:true,
  });

  $('.projects__btn').on('click', function () {
      $('.projects__cards').toggleClass('active');
      $('.opacity__block').toggleClass('none');
      $('.opacity__block').css('opacity', '0');
  })

$(document).ready(function() {
    $('.text .text-block').eq(0).addClass('active').fadeIn(1000);

    setInterval('blockAnimate();', 5000);
});


function blockAnimate() {
    var length = $('.text .text-block').length - 1;
    $('.text .text-block').each(function(index) {
        if($(this).hasClass('active') && index != length) {
            $(this).removeClass('active').fadeOut(1000).next('.text-block').addClass('active').delay(1000).fadeIn(1000);
            return false;
        } else if (index == length) {
            $(this).removeClass('active').fadeOut(1000);
            $('.text .text-block').eq(0).addClass('active').delay(1000).fadeIn(1000);
            return false;
        }
    });
};

new WOW().init();
