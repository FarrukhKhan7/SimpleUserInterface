$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay: true,
        responsive:{
            0:{
                items:3,
                nav:true
            },
            600:{
                items:5,
                nav:false
            },
            1000:{
                items:6,
                nav:true,
            
            }
        }
    })
  });