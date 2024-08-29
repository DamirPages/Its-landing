"use strict";

var caseSlider = document.querySelector('.case .swiper');
if (caseSlider) {
  var swiperPagination = document.querySelector('.case .swiper-pagination');
  var swiperNextEl = document.querySelector('.case .swiper-button-next');
  var swiperPrevEl = document.querySelector('.case .swiper-button-prev');
  var swiper = new Swiper(caseSlider, {
    slidesPerView: 3,
    grid: {
      rows: 2
    },
    spaceBetween: 30,
    pagination: {
      el: swiperPagination,
      clickable: true
    },
    navigation: {
      nextEl: swiperNextEl,
      prevEl: swiperPrevEl
    }
  });
}
"use strict";

var diplomsSlider = document.querySelector('.diploms .swiper');
if (diplomsSlider) {
  var swiperPagination = document.querySelector('.diploms .swiper-pagination');
  var swiperNextEl = document.querySelector('.diploms .swiper-button-next');
  var swiperPrevEl = document.querySelector('.diploms .swiper-button-prev');
  var swiper = new Swiper(diplomsSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: swiperPagination,
      clickable: true
    },
    navigation: {
      nextEl: swiperNextEl,
      prevEl: swiperPrevEl
    }
  });
}
"use strict";

var popupOpenButtons = document.querySelectorAll('[data-popup-open]');
popupOpenButtons.forEach(function (popupBtn) {
  popupBtn.addEventListener('click', function () {
    var popupName = popupBtn.dataset.popupOpen;
    var popupContainer = document.querySelector('.' + popupName);
    popupContainer.classList.add('active');
    document.body.classList.add('no-scroll');
  });
});
var popupCloseButtons = document.querySelectorAll('.popup__close');
popupCloseButtons.forEach(function (closeBtn) {
  var popupContainer = closeBtn.closest('.popup');
  closeBtn.addEventListener('click', function () {
    popupContainer.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
var cookieButton = document.querySelector('.cookie-button');
var cookiePopup = document.querySelector('.popup__usecookie');
var cookieAcept = localStorage.getItem('cookieAcept');
if (!cookieAcept) {
  cookiePopup.classList.add('active');
}
cookieButton.addEventListener('click', function () {
  localStorage.setItem('cookieAcept', '1');
  cookiePopup.classList.remove('active');
});
var reviewsSliderPopup = document.querySelector('.popup__reviews .swiper');
var reviewsItems = document.querySelectorAll('.reviews__item');
if (reviewsSliderPopup && reviewsItems.length) {
  var slidersItems = '';
  reviewsItems.forEach(function (item, index) {
    var reviewImg = item.dataset.reviewImg;
    var logo = item.querySelector('.reviews__img img').getAttribute('src');
    slidersItems += "<div class=\"swiper-slide\">\n                      <div class=\"reviews__item\" data-logo=\"".concat(logo, "\">\n                        <img src=\"").concat(reviewImg, "\" alt=\"\" />\n                      </div>\n                    </div>");
  });
  reviewsSliderPopup.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', slidersItems);
  var swiperPagination = document.querySelector('.popup__reviews .swiper-pagination');
  var swiperNextEl = document.querySelector('.popup__reviews .swiper-button-next');
  var swiperPrevEl = document.querySelector('.popup__reviews .swiper-button-prev');
  var swiperModal = new Swiper(reviewsSliderPopup, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: swiperPagination,
      clickable: true
    },
    navigation: {
      nextEl: swiperNextEl,
      prevEl: swiperPrevEl
    },
    on: {
      init: function init() {
        var logoUrl = reviewsSliderPopup.querySelector('.swiper-slide-active .reviews__item').dataset.logo;
        var logoElement = document.querySelector('.reviews__logo img');
        logoElement.setAttribute('src', logoUrl);
      }
    }
  });
  swiperModal.on('slideChange', function () {
    var logoUrl = reviewsSliderPopup.querySelector('.swiper-slide-active .reviews__item').dataset.logo;
    var logoElement = document.querySelector('.reviews__logo img');
    logoElement.setAttribute('src', logoUrl);
  });
  reviewsItems.forEach(function (item, index) {
    item.querySelector('.reviews__title').addEventListener('click', function () {
      swiperModal.slideTo(index);
    });
  });
}
"use strict";

var reviewsSlider = document.querySelector('.reviews .swiper');
if (reviewsSlider) {
  var swiperPagination = document.querySelector('.reviews .swiper-pagination');
  var swiperNextEl = document.querySelector('.reviews .swiper-button-next');
  var swiperPrevEl = document.querySelector('.reviews .swiper-button-prev');
  var swiper = new Swiper(reviewsSlider, {
    slidesPerView: 4,
    grid: {
      rows: 2
    },
    spaceBetween: 20,
    pagination: {
      el: swiperPagination,
      clickable: true
    },
    navigation: {
      nextEl: swiperNextEl,
      prevEl: swiperPrevEl
    }
  });
}