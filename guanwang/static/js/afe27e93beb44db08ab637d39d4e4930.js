$(document).ready(function(){
var _height=$(window).height();//获取当前窗口的宽度
var _width=$(window).width();//获取当前窗口的高度
if ($(window).width() > 768){

  
  $require(['swiper'], function () {
  var productsZJ = new Swiper ('.productsZJ', {
autoplay: {
delay: 0,
disableOnInteraction: false,
},
  
speed: 10000,
roundLengths: true,
loop: false,
slidesPerView: 3,
spaceBetween: 20,
  
 pagination: {
    el: '.productsZJ .swiper-pagination',
    clickable: true,
  }, 
   scrollbar: {
    el: '.swiper-scrollbar',
   draggable: true,
    snapOnRelease: false,
  },

  });  
  
  
  $('.productsZJ').on('mouseenter', function(e){
    productsZJ.stopAutoplay();
})
$('.productsZJ').on('mouseleave', function(e){      
     productsZJ.startAutoplay();
});


})
  
  
  

}
else{

  
  
  
  
    $require(['swiper'], function () {
  var productsZJ = new Swiper ('.productsZJ', {
autoplay: {
delay: 3000,
disableOnInteraction: false,
},
  
speed: 800,
roundLengths: true,
loop: true,
slidesPerView: 2,
slidesPerGroup: 1,
spaceBetween: 20,
  
watchSlidesVisibility: true,
centerInsufficientSlides: true,
 pagination: {
    el: '.productsZJ .swiper-pagination',
    clickable: true,
  }, 
   scrollbar: {
    el: '.swiper-scrollbar',
   draggable: true,
    snapOnRelease: false,
  },

  });   


})
  
  
};
});

