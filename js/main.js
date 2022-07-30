// BURGER-MENU
let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let btnOff = document.querySelector('.nav__btn-off');

burger.addEventListener('click', function () {

  menu.classList.toggle('nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

btnOff.addEventListener('click', function () {

  menu.classList.remove('nav--active');

  document.body.classList.remove('stop-scroll');
})


// SEARCH
let search = document.querySelector('.header-top__btn');
let searchForm = document.querySelector('.form-search');
let searchFormOff = document.querySelector('.form-search__btn-off');

search.addEventListener('click', function () {

  searchForm.classList.toggle('form-search--active');
})

searchFormOff.addEventListener('click', function () {

  searchForm.classList.remove('form-search--active');
})


//  DROPDOWN
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 28,
  });
})

const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})


//  SLIDER-hero
const container = document.querySelector(".container")
const swiper = new Swiper('.swiper', {
  loop: true,
  // slidesPerView: 1,
  // spaceBetween: 10,
  speed: 3000,
  effect: "fade",
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".hero .swiper-pagination",
    type: 'bullets',
    clickable: true,
  },
});


// SELECT
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false
});


// SLIDER-gallery
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    swipe: true,
    pagination: {
      el: ".gallery .slider__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".slider__next",
      prevEl: ".slider__prev"
    },

    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 1
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },

      1230: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});


// SLIDER-events
document.addEventListener("DOMContentLoaded", () => {
  let eventsSlider = new Swiper(".events__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    swipe: true,
    navigation: {
      nextEl: ".events__next",
      prevEl: ".events__prev"
    },
    pagination: {
      el: ".events .events__pagination",
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      704: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 1
      },

      900: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 1
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3
      },

      1500: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },
  });
});


// VALIDATE
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },

  messages: {

    name: {
      required: 'Вы не ввели имя',
      minLength: 'Используйте минимум 2 символа',
      maxLength: 'Используйте не более 30 символов'
    },
    tel: {
      required: 'Да введите вы телефон!!!',
      function: 'Укажите номер телефона полностью'
    },
  }
});


// Yandex-Map
ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.75842570725757,37.60117460624302],
    zoom: 14,
    controls: []
  }, {
    suppressMapOpenBlock: true, //убираем значки Как добраться
  });

  myMap.controls.add('zoomControl', {
    float: 'none',
    position: {
      right: 17,
      top: 130
    }
  });

  myMap.controls.add('geolocationControl', {
    float: 'none',
    position: {
      right: 17,
      top: 360
    }
  });

  var myPlacemark = new ymaps.Placemark([55.75842570725757,37.60117460624302], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/contacts-map-icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-12, -12]
  });

  myMap.behaviors.disable('scrollZoom'); //убираем масштаб по скроллу
  myMap.geoObjects.add(myPlacemark);
}


// SLIDER-projects
document.addEventListener("DOMContentLoaded", () => {
  let eventsSlider = new Swiper(".projects__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // grid: {
    //   rows: 1,
    //   fill: "row"
    // },
    swipe: true,
    navigation: {
      nextEl: ".projects__next",
      prevEl: ".projects__prev"
    },

    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },
  });
});


// ACCORDION для версии плагина  3.1.1. (https://unpkg.com/accordion-js@3.1.1/dist/accordion.min.js)
(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();

// TABS
let howBtn = document.querySelectorAll('.accordion__link');
let howContent = document.querySelectorAll('.tabs__item');

howBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    howBtn.forEach(function(btn){ btn.classList.remove('accordion__link--active') });
    e.currentTarget.classList.add('accordion__link--active');

    howContent.forEach(function(element){ element.classList.remove('tabs__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});


// МОДАЛЬНОЕ ОКНО
const modal = new GraphModal();


// Для ПЛАВНОГО СКРОЛЛА
// document.querySelectorAll('.js-scroll-link').forEach(link => {
//   link.addEventListener('click', function(e) {
//       e.preventDefault();

//       const href = this.getAttribute('href').substring(1);
//       const scrollTarget = document.getElementById(href);
//       const elementPosition = scrollTarget.getBoundingClientRect().top;

//       window.scrollBy({
//           top: elementPosition,
//           behavior: 'smooth'
//       });
// })});
