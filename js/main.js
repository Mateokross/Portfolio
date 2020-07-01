$(window).on('load', function () {
  /* ==========================================================================
    changes no-js class in html
    ========================================================================== */
  $("html").removeClass("no-js").addClass("js");

  /* ==========================================================================
    Preloader
    ========================================================================== */
  $('.preloader-circle').css("display", "none");
  $('.preloader').fadeOut(1000);
  $("body").removeClass("loading");

  /* ==========================================================================
    Burger Menu
    ========================================================================== */
  $(".burger-menu").click(function () {
    burgerMenu()
  });

  function burgerMenu() {
    $("#sidebar").toggleClass("active");
    $(".burger-menu div").toggleClass("close");
    if ($("#sidebar").class = "active") {
      $(".sidebar-footer").removeClass("hidden");
    } else {
      $(".sidebar-footer").addClass("hidden");
    }
    $("header nav ul li").click(function () {
      burgerMenu()
    });
  }
  //esconde la info extra del footer cuando no hay nav bar
  $(window).resize(function () {
    if (window.innerWidth >= 900) {
      $(".sidebar-footer").addClass("hidden");
    } else {
      $(".sidebar-footer").removeClass("hidden");
    }
  });
  //Colors on scroll
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //window.innerHeight = 100vh
    if (scroll >= (window.innerHeight - 75)) {
      $(".burger-menu div").css("background-color", "black")
    } else {
      $(".burger-menu div").css("background-color", "white")
    }
  });

  /* ==========================================================================
    Scroll Parallax
    ========================================================================== */
  (function () {
    if (!document.documentMode) {
      $(".scroll-downs.scrollnimate").css("top", "89%");
    }
    var start = null;
    var scrollPosition = window.scrollY;
    var halfWindowHeight = window.innerHeight / 2;
    var rAFstarted = false;
    var scrollnimates = [].slice.call(document.getElementsByClassName('scrollnimate'));
    // get their offset from top of screen and their scroll speed
    scrollnimates.forEach(function (sn) {
      var clientOffsets = sn.getBoundingClientRect();
      sn.animationOffset = clientOffsets.top + scrollPosition;
      sn.magicNumber = sn.dataset.magicNumber || sn.getAttribute("data-magic-number") || "-14";
    });
    /*
     * The rAF function
     */
    function step(timestamp) {
      if (!start) start = timestamp;
      // full progress indicator
      var progress = timestamp - start;
      var scrollPoint = window.scrollY;
      scrollnimates.forEach(function (sn) {
        //sn.animationOffsets == main.he
        if (scrollPoint > (sn.animationOffset - halfWindowHeight * 2) && scrollPoint < (sn.animationOffset + halfWindowHeight)) {
          var magicPoint = (scrollPoint - (sn.animationOffset - halfWindowHeight)) / sn.magicNumber;
          var up = magicPoint + 'px';
          sn.style.webkitTransform = 'translateY(' + up + ')';
          sn.style.MozTransform = 'translateY(' + up + ')';
          sn.style.msTransform = 'translateY(' + up + ')';
          sn.style.OTransform = 'translateY(' + up + ')';
          sn.style.transform = 'translateY(' + up + ')';
        }
      });
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  })();

  /* ==========================================================================
  Screenshot Slider
  ========================================================================== */
  $('.agrorrhh-slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }]
  });



  /* ==========================================================================
    AOS
    ========================================================================== */
  if (!document.documentMode) { //corre si no es ie
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }

  /* ==========================================================================
      Scroll to top
      ========================================================================== */
  $(".scroll-to-top").click(function () {
    document.querySelector('html').scrollIntoView({
      behavior: 'smooth'
    });
  });
  /*makes button visible after some scrolling*/
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".arrow").removeClass("offsight");
    } else {
      $(".arrow").addClass("offsight");
    }
  });



  /* ==========================================================================
    Auto-updating year (footer)
    ========================================================================== */
  $("span.year").text(new Date().getFullYear());

  /* ==========================================================================
    changes no-js class in html
    ========================================================================== */
  /*
  $("html").removeClass("no-js").addClass("js");*/
  /* ==========================================================================
    Preloader
    ========================================================================== */
  /*
  //closes preloader
  $('.preloader-circle').css("display","none");
  $('.preloader').fadeOut(1000);
  */
  /* ==========================================================================
    Burger Menu
    ========================================================================== */
  /*
  $(".burger-menu").click(function(){burgerMenu()});
  function burgerMenu(){
    $("#sidebar").toggleClass("active");
    $(".burger-menu div").toggleClass("close");
    if ($("#sidebar").class="active"){
      $(".sidebar-footer").removeClass("hidden");
    }else{
      $(".sidebar-footer").addClass("hidden");
    }
    $("header nav ul li").click(function(){burgerMenu()});
  }
  //esconde la info extra del footer cuando no hay nav bar
  $(window).resize(function(){
    if (window.innerWidth >= 900){
      $(".sidebar-footer").addClass("hidden");
    }else{
      $(".sidebar-footer").removeClass("hidden");
    }
  });
  //Colors on scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //window.innerHeight es 100vh
    if (scroll >= (window.innerHeight-75)) {
        $(".burger-menu div").css("background-color","black")
    } else {
        $(".burger-menu div").css("background-color","white")
    }
    });*/
  /* ==========================================================================
    Scroll Parallax
    ========================================================================== */
  /*
    //if (document.documentElement.clientWidth > 480) {(function() {
      window.addEventListener('scroll', function(event) {
          var depth, i, layer, layers, len, movement, topDistance, translate3d;
          topDistance = this.pageYOffset;
          layers = document.querySelectorAll("[data-type='parallax']");
          for (i = 0, len = layers.length; i < len; i++) {
          layer = layers[i];
          depth = layer.getAttribute('data-depth');
          movement = Math.round(-(topDistance * depth));
          translate3d = 'translate3d(0, ' + movement + 'px, 0)';
          layer.style['-webkit-transform'] = translate3d;
          layer.style['-moz-transform'] = translate3d;
          layer.style['-ms-transform'] = translate3d;
          layer.style['-o-transform'] = translate3d;
          layer.style.transform = translate3d;
     }});//}).call(this);}*/
  /* ==========================================================================
    AOS
    ========================================================================== */
  /*
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });*/
  /* ==========================================================================
      Scroll to top
      ========================================================================== */
  /*
      $(".scroll-to-top").click(function(){
        document.querySelector('html').scrollIntoView({behavior: 'smooth'});
      });
      //makes button visible after some scrolling
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".arrow").removeClass("offsight");
        }else{
          $(".arrow").addClass("offsight");
        }
      });*/
  /* ==========================================================================
    Auto-updating year (footer)
    ========================================================================== */
  /*
    var d = new Date();
    $("span.year").text(getFullYear());*/
  /* ==========================================================================
    Fixes for edge & chrome
    ========================================================================== */
  /*if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    //content
  }*/



});