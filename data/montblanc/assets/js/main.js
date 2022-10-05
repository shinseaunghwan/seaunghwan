
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
// /**
//    * Mobile nav toggle
//    */
//  const mobileNavShow = document.querySelector('.mobile-nav-show');
//  const mobileNavHide = document.querySelector('.mobile-nav-hide');

//  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
//    el.addEventListener('click', function(event) {
//      event.preventDefault();
//      mobileNavToogle();
//    })
//  });

//  function mobileNavToogle() {
//    document.querySelector('body').classList.toggle('mobile-nav-active');
//    mobileNavShow.classList.toggle('d-none');
//    mobileNavHide.classList.toggle('d-none');
//  }

//  /**
//   * Hide mobile nav on same-page/hash links
//   */
//  document.querySelectorAll('#navbar a').forEach(navbarlink => {

//    if (!navbarlink.hash) return;

//    let section = document.querySelector(navbarlink.hash);
//    if (!section) return;

//    navbarlink.addEventListener('click', () => {
//      if (document.querySelector('.mobile-nav-active')) {
//        mobileNavToogle();
//      }
//    });

//  });

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * about Slider
   */
    new Swiper('.about-slider', {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    //   clickable: true
    // },
    breakpoints: {
        slidesPerView: 1,
    }
  });


  /**
   * information Slider
   */
  new Swiper('.info1-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  effect: 'slide',

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  //   clickable: true
  // },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});


 /**
   * information3 Slider
   */
  new Swiper('.information3-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    effect: 'slide',
  
    breakpoints: {
        slidesPerView: 1,
    }
  });


  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()