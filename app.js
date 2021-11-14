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