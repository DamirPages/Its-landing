"use strict";

var caseSlider = document.querySelector('.case .swiper');
if (caseSlider) {
  var swiperPagination = document.querySelector('.case .swiper-pagination');
  var swiperNextEl = document.querySelector('.case .swiper-button-next');
  var swiperPrevEl = document.querySelector('.case .swiper-button-prev');
  var swiper = new Swiper(caseSlider, {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: swiperPagination,
      clickable: true
    },
    navigation: {
      nextEl: swiperNextEl,
      prevEl: swiperPrevEl
    },
    breakpoints: {
      1241: {
        slidesPerView: 5
      },
      992: {
        slidesPerView: 4
      },
      749: {
        slidesPerView: 3
      },
      479: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
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
    loop: true,
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
Fancybox.bind("[data-fancybox]");
"use strict";

var menuButton = document.querySelector('.menu-btn');
var menuContainer = document.querySelector('.menu-links');
if (menuButton || menuContainer) {
  menuButton.addEventListener('click', function () {
    menuContainer.classList.toggle('active');
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
    loop: true,
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
    },
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      749: {
        slidesPerView: 3
      },
      479: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    }
  });
}
"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
    item.dataset.sliderId = index;
    var reviewImg = item.dataset.reviewImg;
    var logo = item.querySelector('.reviews__img img').getAttribute('src');
    slidersItems += "<div class=\"swiper-slide\">\n                      <div class=\"reviews__item\" data-logo=\"".concat(logo, "\" data-slider-id=\"").concat(index, "\">\n                        <img src=\"").concat(reviewImg, "\" alt=\"\" />\n                      </div>\n                    </div>");
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
        var logoUrl = reviewsSliderPopup.querySelector('[data-slider-id="0"]').dataset.logo;
        var logoElement = document.querySelector('.reviews__logo img');
        logoElement.setAttribute('src', logoUrl);
      }
    }
  });
  swiperModal.on('slideChange', function () {
    var index = swiperModal.activeIndex;
    var logoUrl = reviewsSliderPopup.querySelector('[data-slider-id="' + index + '"]').dataset.logo;
    var logoElement = document.querySelector('.reviews__logo img');
    logoElement.setAttribute('src', logoUrl);
  });
  reviewsItems.forEach(function (item, index) {
    item.querySelector('.reviews__title').addEventListener('click', function () {
      swiperModal.slideTo(index);
    });
  });
}
document.addEventListener('DOMContentLoaded', function () {
  var phoneInputs = document.querySelectorAll('input[data-tel-input]');
  var getInputNumbersValue = function getInputNumbersValue(input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
  };
  var onPhonePaste = function onPhonePaste(e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  };
  var onPhoneInput = function onPhoneInput(e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = '';
    if (!inputNumbersValue) {
      return input.value = '';
    }
    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }
    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9') inputNumbersValue = '7' + inputNumbersValue;
      var firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
      formattedInputValue = input.value = firstSymbols + ' ';
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };
  var onPhoneKeyDown = function onPhoneKeyDown(e) {
    // Clear input after remove last symbol
    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = '';
    }
  };
  var _iterator = _createForOfIteratorHelper(phoneInputs),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var phoneInput = _step.value;
      phoneInput.addEventListener('keydown', onPhoneKeyDown);
      phoneInput.addEventListener('input', onPhoneInput, false);
      phoneInput.addEventListener('paste', onPhonePaste, false);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});