$(document).ready(function(){
  var owl = $('.owl-carousel');
  var owl2 = $('#arrowcarousel .owl-themecarousel');
  var owl3 = $('#gamesection .owl-themecarousel');
  var owl4 = $('#newssection .owl-themecarousel');
  var owl5 = $('#bonuscard .owl-themecarousel');
  var owl6 = $('#gamesection #mobGames .owl-themecarousel');
  var owl7 = $('#mobBonus .owl-themecarousel');
  var owl8 = $('#offeringsect .owl-themecarousel');
  var owl9 = $('#expertcornersection .owl-themecarousel');
  var owl10 = $('#bonussection .owl-themecarousel');
  var owl11 = $('#mobileBtns .owl-themecarousel');
  var owl12 = $('#slotssection .owl-themecarousel');
  var owl13 = $('#mobProviders .owl-themecarousel');

  owl13.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:2,
          nav:true
      },
      300:{
        items:2,
        nav:false
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
    }
  });
  
  owl12.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:3,
          nav:true
      },
      300:{
        items:2,
        nav:false
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
    }
  });

  owl11.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:3,
          nav:true
      },
      300:{
        items:2,
        nav:false
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
    }
  });
  owl10.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
    }
  });

  owl9.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
    }
  });
  owl8.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
    }
  });
  owl7.owlCarousel({
    loop:true,
    margin:2,
    autoplay: true,
    nav:false,
    items: 2,
    dots: false,
    arrows:false,
  });
  owl6.owlCarousel({
    loop:true,
    margin:2,
    autoplay: true,
    nav:false,
    items: 4,
    dots: false,
    arrows:false,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
    }
  });
  owl5.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
    }
  });

  owl4.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:2,
          nav:true,
          margin:5,
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
    }
  });
  owl3.owlCarousel({
    loop:true,
    margin:8,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:3,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:6,
          nav:true,
          loop:false
      }
  }
  });
  owl2.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:false,
    items: 1,
    dots: false,
    arrows:false,
  });

  owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:false,
    items: 1,
    arrows:false, 
    dots: false,
  });
  // Custom Button
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
    owl.trigger('prev.owl.carousel');
  });
}); 


// function readmore(){
//     let readmore = document.querySelector("#readmore");
//     let readless = document.querySelector("#readless");
//     let contentsect2 = document.querySelector("#contentsect2");
//     readmore.style.display = "none";
//     contentsect2.style.display = "block";
// }
// function readless(){
//     let readmore = document.querySelector("#readmore");
//     let readless = document.querySelector("#readless");
//     let contentsect2 = document.querySelector("#contentsect2");
//     readmore.style.display = "block";
//     contentsect2.style.display = "none";
// }

// navsect2 = document.getElementById("navsect2");

// var myScrollFunc = function () {
//     var y = window.scrollY;
//     if (y >= 600) {
//         navsect2.className = "navsectfooter show"
//     } else {
//         navsect2.className = "navsectfooter hide"
//     }
// };

// window.addEventListener("scroll", myScrollFunc);


