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



