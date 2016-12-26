var swiper = new Swiper('.swiper-one', {
       pagination: '.swiper-pagination',
       effect: 'coverflow',
       grabCursor: true,
       centeredSlides: true,
       slidesPerView: 'auto',
       coverflow: {
           rotate: 50,
           stretch: 0,
           depth: 100,
           modifier: 1,
           slideShadows : true
       }
   });
var swiper_one = new Swiper('.swiper-two', {
    pagination: '.swiper-pagination',
           effect: 'coverflow',
           grabCursor: true,
           centeredSlides: true,
           slidesPerView: 'auto',
           coverflow: {
               rotate: 50,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows : true
           }
   });