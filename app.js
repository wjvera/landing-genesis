window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousellista'), {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: '.carouselindicadores',
        arrows: {
          prev: '.carouselanterior',
          next: '.carouselsiguiente'
        }
    });
})

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousellistaslider'), {
      slidesToShow: 1,
      slidesToScroll: 2,
      dots: '.carouselindicadoresslider',
      arrows: {
        prev: '.carouselanteriorslider',
        next: '.carouselsiguienteslider'
      }
  });
})


$('.expandHome').mouseover(function() {
  $('.sub-home').css({
        'display': 'block'
    }); 
});
$('.subnavbtn').mouseover(function() {
  $('.sub-home').css({
        'display': 'none'
    }); 
});

$('#trapezoid').mouseleave(function() {
  $('#trapezoid').css({
        'margin-top': '-53px'
    }); 
    $('.sub-home').css({
        'display': 'none'
    }); 
}).mouseenter(function() {
  $('#trapezoid').css({
        'margin-top': '0px'
    }); 
});