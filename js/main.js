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
    autoplay: false,
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
    autoplay: false,
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
    autoplay: false,
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
    margin:7,
    autoplay: false,
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
    autoplay: false,
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
    autoplay: false,
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
    autoplay: false,
    nav:false,
    items: 2,
    dots: false,
    arrows:false,
  });
  owl6.owlCarousel({
    loop:true,
    margin:2,
    autoplay: false,
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
    autoplay: false,
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
    autoplay: false,
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
    margin:7,
    autoplay: false,
    nav:true,
    items: 1,
    dots: false,
    arrows:true,
    responsive:{
      0:{
        items:2.4,
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
          loop:true,
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
    autoplay: false,
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
const review = document.querySelector('#review');
if(!review){

  const navsect = document.getElementById("scrollNav");
  
  var myScrollFunc = function () {
      var y = window.scrollY;
      if (y >= 2) {
        navsect.className = "navPosFix show borderBottomRadius100"
      } else {
        navsect.className = ""
      }
  };
}

window.addEventListener("scroll", myScrollFunc);

const how_we_rate = document.querySelector('#ratingsss');
if(how_we_rate || review){
const licenseClick = document.querySelector("#licenseClick");
const licenseText = document.querySelector("#licenseText");

const gameClick = document.querySelector("#gameClick");
const gameText = document.querySelector("#gameText");

const bonusClick = document.querySelector("#bonusClick");
const bonusText = document.querySelector("#bonusText");

const uiClick = document.querySelector("#uiClick");
const uiText = document.querySelector("#uiText");

const paymentClick = document.querySelector("#paymentClick");
const paymentText = document.querySelector("#paymentText");

const securityClick = document.querySelector("#securityClick");
const securityText = document.querySelector("#securityText");

const customerClick = document.querySelector("#customerClick");
const customerText = document.querySelector("#customerText");

const tournamentClick = document.querySelector("#tournamentClick");
const tournamentText = document.querySelector("#tournamentText");

const vipClick = document.querySelector("#vipClick");
const vipText = document.querySelector("#vipText");

const responsibleClick = document.querySelector("#responsibleClick");
const responsibleText = document.querySelector("#responsibleText");

licenseClick.addEventListener("click", ()=>{
  licenseText.style.display="block";
  gameText.style.display="none";
  bonusText.style.display="none";
  uiText.style.display="none";
  paymentText.style.display="none";
  securityText.style.display="none";
  customerText.style.display="none";
  tournamentText.style.display="none";
  vipText.style.display="none";
  responsibleText.style.display="none";
});

gameClick.addEventListener("click", ()=>{
  licenseText.style.display="none";
  gameText.style.display="block";
  bonusText.style.display="none";
  uiText.style.display="none";
  paymentText.style.display="none";
  securityText.style.display="none";
  customerText.style.display="none";
  tournamentText.style.display="none";
  vipText.style.display="none";
  responsibleText.style.display="none";
});

bonusClick.addEventListener("click", ()=>{
  licenseText.style.display="none";
  gameText.style.display="none";
  bonusText.style.display="block";
  uiText.style.display="none";
  paymentText.style.display="none";
  securityText.style.display="none";
  customerText.style.display="none";
  tournamentText.style.display="none";
  vipText.style.display="none";
  responsibleText.style.display="none";
});

uiClick.addEventListener("click", ()=>{
  licenseText.style.display="none";
  gameText.style.display="none";
  bonusText.style.display="none";
  uiText.style.display="block";
  paymentText.style.display="none";
  securityText.style.display="none";
  customerText.style.display="none";
  tournamentText.style.display="none";
  vipText.style.display="none";
  responsibleText.style.display="none";
});

paymentClick.addEventListener("click", ()=>{
  licenseText.style.display="none";
  gameText.style.display="none";
  bonusText.style.display="none";
  uiText.style.display="none";
  paymentText.style.display="block";
  securityText.style.display="none";
  customerText.style.display="none";
  tournamentText.style.display="none";
  vipText.style.display="none";
  responsibleText.style.display="none";
});

securityClick.addEventListener("click", ()=>{
  licenseText.style.display="none";
  gameText.style.display="none";
  bonusText.style.display="none";
  uiText.style.display="none";
  paymentText.style.display="none";
  securityText.style.display="block";
  customerText.style.display="none";
  tournamentText.style.display="none";
  vipText.style.display="none";
  responsibleText.style.display="none";
});

customerClick.addEventListener("click", ()=>{
  licenseText.style.display="none";
  gameText.style.display="none";
  bonusText.style.display="none";
  uiText.style.display="none";
  paymentText.style.display="none";
  securityText.style.display="none";
  customerText.style.display="block";
  tournamentText.style.display="none";
  vipText.style.display="none";
  responsibleText.style.display="none";
});

tournamentClick.addEventListener("click", ()=>{
  licenseText.style.display="none";
  gameText.style.display="none";
  bonusText.style.display="none";
  uiText.style.display="none";
  paymentText.style.display="none";
  securityText.style.display="none";
  customerText.style.display="none";
  tournamentText.style.display="block";
  vipText.style.display="none";
  responsibleText.style.display="none";
});

vipClick.addEventListener("click", ()=>{
  licenseText.style.display="none";
  gameText.style.display="none";
  bonusText.style.display="none";
  uiText.style.display="none";
  paymentText.style.display="none";
  securityText.style.display="none";
  customerText.style.display="none";
  tournamentText.style.display="none";
  vipText.style.display="block";
  responsibleText.style.display="none";
});

responsibleClick.addEventListener("click", ()=>{
  licenseText.style.display="none";
  gameText.style.display="none";
  bonusText.style.display="none";
  uiText.style.display="none";
  paymentText.style.display="none";
  securityText.style.display="none";
  customerText.style.display="none";
  tournamentText.style.display="none";
  vipText.style.display="none";
  responsibleText.style.display="block";
});

}


const home = document.querySelector('#home');
if(home){
  const newsBox = document.getElementById("newsBox");
  const newsImg = document.getElementById("newsImg");
  const newsText = document.getElementById("newsText");
  

  const slotsBox = document.querySelector("#slotsBox");
  const slotsImg = document.querySelector("#slotsImg");
  const slotsText = document.querySelector("#slotsText");

  const tableGamesBox = document.querySelector("#tableGamesBox");
  const tableGamesImg = document.querySelector("#tableGamesImg");
  const tableGamesText = document.querySelector("#tableGamesText");
  
  const freeGamesBox = document.querySelector("#freeGamesBox");
  const freeGamesImg = document.querySelector("#freeGamesImg");
  const freeGamesText = document.querySelector("#freeGamesText");
  
  const bonusBox = document.querySelector("#bonusBox");
  const bonusImg = document.querySelector("#bonusImg");
  const bonusTexts = document.querySelector("#bonusTexts");
  
  const casinoBox = document.querySelector("#casinoBox");
  const casinoImg = document.querySelector("#casinoImg");
  const casinoText = document.querySelector("#casinoText");
  
  if (slotsBox && slotsImg) {
    slotsBox.addEventListener('mouseenter', () => {
      slotsImg.src = "img/home/Slot-w.png"; 
    });
    slotsBox.addEventListener('mouseout', () => {
      slotsImg.src = "img/home/slots.png"; 
    });
    slotsImg.addEventListener('mouseenter', () => {
      slotsImg.src = "img/home/Slot-w.png"; 
    });
    slotsImg.addEventListener('mouseout', () => {
      slotsImg.src = "img/home/slots.png"; 
    });
    slotsText.addEventListener('mouseenter', () => {
      slotsImg.src = "img/home/Slot-w.png"; 
    });
    slotsText.addEventListener('mouseout', () => {
      slotsImg.src = "img/home/slots.png"; 
    });
  }

  if (tableGamesBox && tableGamesImg) {
    tableGamesBox.addEventListener('mouseenter', () => {
      tableGamesImg.src = "img/home/Table-w.png"; 
    });
    tableGamesBox.addEventListener('mouseout', () => {
      tableGamesImg.src = "img/home/Table_Games.png"; 
    });
    tableGamesImg.addEventListener('mouseenter', () => {
      tableGamesImg.src = "img/home/Table-w.png"; 
    });
    tableGamesImg.addEventListener('mouseout', () => {
      tableGamesImg.src = "img/home/Table_Games.png"; 
    });
    tableGamesText.addEventListener('mouseenter', () => {
      tableGamesImg.src = "img/home/Table-w.png"; 
    });
    tableGamesText.addEventListener('mouseout', () => {
      tableGamesImg.src = "img/home/Table_Games.png"; 
    });
  }

  if (freeGamesBox && freeGamesImg) {
    freeGamesBox.addEventListener('mouseenter', () => {
      freeGamesImg.src = "img/home/Freegames-w.png"; 
    });
    freeGamesBox.addEventListener('mouseout', () => {
      freeGamesImg.src = "img/home/FreeGames.png"; 
    });
    freeGamesImg.addEventListener('mouseenter', () => {
      freeGamesImg.src = "img/home/Freegames-w.png"; 
    });
    freeGamesImg.addEventListener('mouseout', () => {
      freeGamesImg.src = "img/home/FreeGames.png"; 
    });

    freeGamesText.addEventListener('mouseenter', () => {
      freeGamesImg.src = "img/home/Freegames-w.png"; 
    });
    freeGamesText.addEventListener('mouseout', () => {
      freeGamesImg.src = "img/home/FreeGames.png"; 
    });
  }

  if (bonusBox && bonusImg) {
    bonusBox.addEventListener('mouseenter', () => {
      bonusImg.src = "img/home/Bonus_w.png"; 
    });
    bonusBox.addEventListener('mouseout', () => {
      bonusImg.src = "img/home/Bonus.png"; 
    });
    bonusImg.addEventListener('mouseenter', () => {
      bonusImg.src = "img/home/Bonus_w.png"; 
    });
    bonusImg.addEventListener('mouseout', () => {
      bonusImg.src = "img/home/Bonus.png"; 
    });

    bonusTexts.addEventListener('mouseenter', () => {
      bonusImg.src = "img/home/Bonus_w.png"; 
    });
    bonusTexts.addEventListener('mouseout', () => {
      bonusImg.src = "img/home/Bonus.png"; 
    });
  }

  if (casinoBox && casinoImg) {
    casinoBox.addEventListener('mouseenter', () => {
      casinoImg.src = "img/home/Casino_w.png"; 
    });
    casinoBox.addEventListener('mouseout', () => {
      casinoImg.src = "img/home/casino.png"; 
    });
    casinoImg.addEventListener('mouseenter', () => {
      casinoImg.src = "img/home/Casino_w.png"; 
    });
    casinoImg.addEventListener('mouseout', () => {
      casinoImg.src = "img/home/casino.png"; 
    });

    casinoText.addEventListener('mouseenter', () => {
      casinoImg.src = "img/home/Casino_w.png"; 
    });
    casinoText.addEventListener('mouseout', () => {
      casinoImg.src = "img/home/casino.png"; 
    });
  }

  if (newsBox && newsImg) {
    newsBox.addEventListener('mouseenter', () => {
      newsImg.src = "img/home/Newz-w.png"; 
    });
    newsBox.addEventListener('mouseout', () => {
      newsImg.src = "img/home/news.png"; 
    });
    newsImg.addEventListener('mouseenter', () => {
      newsImg.src = "img/home/Newz-w.png"; 
    });
    newsImg.addEventListener('mouseout', () => {
      newsImg.src = "img/home/news.png"; 
    });

    newsText.addEventListener('mouseenter', () => {
      newsImg.src = "img/home/Newz-w.png"; 
    });
    newsText.addEventListener('mouseout', () => {
      newsImg.src = "img/home/news.png"; 
    });
  }
}


if(!review){
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
}
