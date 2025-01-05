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
    margin:15,
    autoplay: true,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
        items:2,
        nav:false,
        dots: true
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
          loop:true
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
          nav:false,
          dots: true
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
          loop:true
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
        nav:false,
        dots: true
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
          loop:true
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
        nav:false,
        dots: true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:true
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
        nav:false,
        dots: true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:true
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
        nav:false,
        dots: true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:true
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
        items:4,
        nav:false,
        dots: true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:true
      }
    }
  });
  owl5.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:false,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
          items:2,
          nav:false,
          dots: true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:true
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
          nav:false,
          dots: true,
          margin:5,
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:true
      }
    }
  });
  owl3.owlCarousel({
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
        nav:false,
        dots: true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:6,
          nav:true,
          loop:true
      }
  }
  });
  owl2.owlCarousel({
    loop:true,
    margin:10,
    autoplay: false,
    nav:false,
    items: 1,
    dots: false,
    arrows:false,
    center: true, // Enable centering
    stagePadding: 0,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots: false
      }
  } 
  });

  owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:false,
    items: 1,
    arrows:false, 
    dots: false,
    responsive:{
      0:{
        items:3,
        nav:false,
        dots: true
      }
  } 
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

navsect = document.getElementById("scrollNav");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 2) {
      navsect.className = "navPosFix show borderBottomRadius100"
    } else {
      navsect.className = ""
    }
};

window.addEventListener("scroll", myScrollFunc);


let faqBtn = document.querySelector("#faqBtn");
let faqSect = document.querySelector("#faqSect");
let faqIcon = document.querySelector("#faqIcon");

faqBtn.addEventListener("click", ()=>{

  if (faqSect.style.display === "block") {
    faqSect.style.display = "none";
    faqIcon.classList.remove("fa-angle-up");
    faqIcon.classList.add("fa-angle-down");
  } else {
    faqSect.style.display = "block";
    faqIcon.classList.add("fa-angle-up");
    faqIcon.classList.remove("fa-angle-down");
  }
})