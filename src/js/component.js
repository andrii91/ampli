$(document).ready(function () {
  $('.head-img img').click(function () {
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });

  $('.left .included-list li').hover(function () {
      $('.hover_left').css({
        'opacity': '1'
      })
    },
    function () {
      $('.hover_left').css({
        'opacity': '0.8'
      })
    })

  $('.right .included-list li').hover(function () {
      $('.hover_right').css({
        'opacity': '1'
      })
    },
    function () {
      $('.hover_right').css({
        'opacity': '0.8'
      })
    })

  var reviews = $('.reviews-carousel');
  reviews.owlCarousel({
    center: true,
    loop: true,
    nav: true,
    dots: false,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 7
      },
      1900: {
        items: 10
      }
    }
  });

  $('.reviews-item ').click(function () {
    $('.reviews-item').removeClass('current');
    $(this).addClass('current');
    $('.owl-item').removeClass('act')
    $(this).parents('.owl-item').addClass('act')
  });
  
  
  $('.mob-btn').click(function(){
    $('.menu').slideToggle(300);
    $('.lang').slideToggle(300);
  })
  
  $('#cbx').change(function(){
    if($(this).prop('checked')){
     $(this).parents('form').find('button').removeAttr('disabled')
    }else{
      $(this).parents('form').find('button').attr('disabled', 'disabled')
    }
  })
  


});