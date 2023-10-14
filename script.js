const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

function toggle() {
  // disable overflow body
  body.classList.toggle("overflow");
  // dark background
  overlay.classList.toggle("overlay--active");
  // add open class
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggle();
});

window.onkeydown = function (event) {
  const key = event.key; // const {key} = event; in ES6+
  const active = menuItems.classList.contains("open");
  if (key === "Escape" && active) {
    toggle();
  }
};

document.addEventListener("click", (e) => {
  let target = e.target,
    its_menu = target === menuItems || menuItems.contains(target),
    its_hamburger = target === menuBtn,
    menu_is_active = menuItems.classList.contains("open");
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggle();
  }
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
  });
});




'use strict';
const tabs = document.querySelectorAll('[data-id]');
const contents = document.querySelectorAll('[data-content]');
let id = 0;

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabs[id].classList.remove('active');
        tab.classList.add('active');
        id = tab.getAttribute('data-id');
        contents.forEach(function (box) {
            box.classList.add('hide');
            if (box.getAttribute('data-content') == id){
                box.classList.remove('hide');
                box.classList.add('show');
            }
        });
    });
});

// --------------

function ToggleCheckBox(elem) {
  var TickLine1 = elem.querySelector(".tick>.Tickline1")
  var Tickline2 = elem.querySelector(".tick>.Tickline2")
  if (elem.getAttribute("data-status") == "true") {
      TickLine1.style.opacity = 1
      Tickline2.style.opacity = 1
      elem.setAttribute("data-status", false)

  } else {
      TickLine1.style.opacity = 0
      Tickline2.style.opacity = 0
      elem.setAttribute("data-status", true)


  }
}


// --------------- product page ----------------

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
/* sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
}); */
$(function () {
  /* console.log("width: "+ document.body.clientWidth); */

  resizeScreen();
  $(window).resize(function () {
    resizeScreen();
  });
  $('.bx-menu').click(function () {

    if (document.body.clientWidth > 400) {
      $('.sidebar').toggleClass('close');
    } else {
      $('.sidebar').toggleClass('small-screen');
    }
  });

  function resizeScreen() {
    if (document.body.clientWidth < 400) {
      $('.sidebar').addClass('close');
    } else {
      $('.sidebar').removeClass('close');
    }
  }
});

// ========================= Product Details ================================

$(document).ready(function() {
  var slider = $("#slider");
  var thumb = $("#thumb");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;
  slider.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: false, 
      dots: false,
      loop: true,
      responsiveRefreshRate: 200
  }).on('changed.owl.carousel', syncPosition);
  thumb
      .on('initialized.owl.carousel', function() {
          thumb.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
          items: slidesPerPage,
          dots: false,
          nav: true,
          item: 4,
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: slidesPerPage, 
        navText: ['<svg width="18px" height="18px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="25px" height="25px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
          responsiveRefreshRate: 100
      }).on('changed.owl.carousel', syncPosition2);
  function syncPosition(el) {
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);
      if (current < 0) {
          current = count;
      }
      if (current > count) {
          current = 0;
      }
      thumb
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
      var onscreen = thumb.find('.owl-item.active').length - 1;
      var start = thumb.find('.owl-item.active').first().index();
      var end = thumb.find('.owl-item.active').last().index();
      if (current > end) {
          thumb.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
          thumb.data('owl.carousel').to(current - onscreen, 100, true);
      }
  }
  function syncPosition2(el) {
      if (syncedSecondary) {
          var number = el.item.index;
          slider.data('owl.carousel').to(number, 100, true);
      }
  }
  thumb.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      slider.data('owl.carousel').to(number, 300, true);
  });


      $(".qtyminus").on("click",function(){
          var now = $(".qty").val();
          if ($.isNumeric(now)){
              if (parseInt(now) -1> 0)
              { now--;}
              $(".qty").val(now);
          }
      })            
      $(".qtyplus").on("click",function(){
          var now = $(".qty").val();
          if ($.isNumeric(now)){
              $(".qty").val(parseInt(now)+1);
          }
      });
});

// ========== Annoucement 

'use strict';
  var kagepisuceng = (function (config) {

  const ClassName = {
  INDICATOR_ACTIVE: 'kagepisuceng__indicator_active',
  ITEM: 'kagepisuceng__item',
  ITEM_LEFT: 'kagepisuceng__item_left',
  ITEM_RIGHT: 'kagepisuceng__item_right',
  ITEM_PREV: 'kagepisuceng__item_prev',
  ITEM_NEXT: 'kagepisuceng__item_next',
  ITEM_ACTIVE: 'kagepisuceng__item_active'
  }

  var
  _isSliding = false, 
  _interval = 0, 
  _transitionDuration = 700,
  _kagepisuceng = {}, 
  _items = {}, 
  _kagepisucengIndicators = {}, 
  _config = {
  selector: '',
  isCycling: true, 
  direction: 'top',
  interval: 10, 
  pause: true 
  };

  var
  // функция для получения порядкового индекса элемента
  _getItemIndex = function (_currentItem) {
  var result;
  _items.forEach(function (item, index) {
  if (item === _currentItem) {
  result = index;
  }
  });
  return result;
  },
  // функция для подсветки активного индикатора
  _setActiveIndicator = function (_activeIndex, _targetIndex) {
  if (_kagepisucengIndicators.length !== _items.length) {
  return;
  }
  _kagepisucengIndicators[_activeIndex].classList.remove(ClassName.INDICATOR_ACTIVE);
  _kagepisucengIndicators[_targetIndex].classList.add(ClassName.INDICATOR_ACTIVE);
  },

  // функция для смены слайда
  _slide = function (direction, activeItemIndex, targetItemIndex) {
  var
  directionalClassName = ClassName.ITEM_RIGHT,
  orderClassName = ClassName.ITEM_PREV,
  activeItem = _items[activeItemIndex], // текущий элемент
  targetItem = _items[targetItemIndex]; // следующий элемент

  var _slideEndTransition = function () {
  activeItem.classList.remove(ClassName.ITEM_ACTIVE);
  activeItem.classList.remove(directionalClassName);
  targetItem.classList.remove(orderClassName);
  targetItem.classList.remove(directionalClassName);
  targetItem.classList.add(ClassName.ITEM_ACTIVE);
  window.setTimeout(function () {
  if (_config.isCycling) {
  clearInterval(_interval);
  _cycle();
  }
  _isSliding = false;
  activeItem.removeEventListener('transitionend', _slideEndTransition);
  }, _transitionDuration);
  };

  if (_isSliding) {
  return;  
  }
  _isSliding = true;  

  if (direction === "next") {
  directionalClassName = ClassName.ITEM_LEFT;
  orderClassName = ClassName.ITEM_NEXT;
  }

  targetItem.classList.add(orderClassName);  
  _setActiveIndicator(activeItemIndex, targetItemIndex);  
  window.setTimeout(function () {  
  targetItem.classList.add(directionalClassName);
  activeItem.classList.add(directionalClassName);
  activeItem.addEventListener('transitionend', _slideEndTransition);
  }, 1);

  },

  _slideTo = function (direction) {
  var
  activeItem = _kagepisuceng.querySelector('.' + ClassName.ITEM_ACTIVE),  
  activeItemIndex = _getItemIndex(activeItem),  
  lastItemIndex = _items.length - 1,  
  targetItemIndex = activeItemIndex === 0 ? lastItemIndex : activeItemIndex - 1;
  if (direction === "next") {  
  targetItemIndex = activeItemIndex == lastItemIndex ? 0 : activeItemIndex + 1;
  }
  _slide(direction, activeItemIndex, targetItemIndex);
  },
   
  _cycle = function () {
  if (_config.isCycling) {
  _interval = window.setInterval(function () {
  _slideTo(_config.direction);
  }, _config.interval);
  }
  },

  _actionClick = function (e) {
  var
  activeItem = _kagepisuceng.querySelector('.' + ClassName.ITEM_ACTIVE),  
  activeItemIndex = _getItemIndex(activeItem),  
  targetItemIndex = e.target.getAttribute('data-slide-to');

  if (!(e.target.hasAttribute('data-slide-to') || e.target.classList.contains('kagepisuceng__control'))) {
  return;
  }
  if (e.target.hasAttribute('data-slide-to')) {
  if (activeItemIndex === targetItemIndex) {
  return;
  }
  _slide((targetItemIndex > activeItemIndex) ? 'next' : 'prev', activeItemIndex, targetItemIndex);
  } else {
  e.preventDefault();
  _slideTo(e.target.classList.contains('kagepisuceng__control_next') ? 'next' : 'prev');
  }
  },

  _setupListeners = function () {
   
  _kagepisuceng.addEventListener('click', _actionClick);

  if (_config.pause && _config.isCycling) {
  _kagepisuceng.addEventListener('mouseenter', function (e) {
  clearInterval(_interval);
  });
  _kagepisuceng.addEventListener('mouseleave', function (e) {
  clearInterval(_interval);
  _cycle();
  });
  }
  };

  for (var key in config) {
  if (key in _config) {
  _config[key] = config[key];
  }
  }
  _kagepisuceng = (typeof _config.selector === 'string' ? document.querySelector(_config.selector) : _config.selector);
  _items = _kagepisuceng.querySelectorAll('.' + ClassName.ITEM);
  _kagepisucengIndicators = _kagepisuceng.querySelectorAll('[data-slide-to]');
  // запуск функции cycle
  _cycle();
  _setupListeners();

  return {
  next: function () {  
  _slideTo('next');
  },
  prev: function () {  
  _slideTo('prev');
  },
  stop: function () {
  clearInterval(_interval);
  },
  cycle: function () {  
  clearInterval(_interval);
  _cycle();
  }
  }
  }({
  selector: '.kagepisuceng',
  isCycling: false,
  direction: 'top',
  interval: 5000,
  pause: true
  }));

