/*====================================
=            DOM IS READY            =
====================================*/
$(function() {
    $('.pagination .active a').click(function() {
        return false;
    });

    window.onmobile = (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );

    // nav
    if (window.onmobile) {
      // nav on mobile
      $('.nav-bar-desktop').hide();
    } else {
      // nav on desktop
      $('.menu-btn').hide();
      $('.nav-bar-mobile-container').hide();
    };

});


/*========================================
=            WINDOW IS LOADED            =
========================================*/
$(window).load(function() {
  // scroll down to article
  $('.scroll-down').click(event => {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $('.topper').offset().top + $('.topper').height()
    }, 'slow');
  });

  // scroll up to top
  $('.scroll-up').click(event => {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
  });

  // menu-burger
  $('.menu-burger').click(event => {
    event.preventDefault();
    if ($('.nav-bar-mobile-container').css('top') == '0px') {
      setTimeout(() => $('.nav-bar-mobile-container').toggleClass('onScreen'), 500);
    } else {
      $('.nav-bar-mobile-container').toggleClass('onScreen');
    }
    $('.menu-burger').toggleClass('menu-burger-back');
    $('.menu-burger').toggleClass('fixed');
    $('.nav-bar-mobile').toggleClass('visible');
  })

});


/*=========================================
=            WINDOW IS RESIZED            =
=========================================*/
$(window).resize(function() {

});


/*==========================================
=            WINDOW IS SCROLLED            =
==========================================*/
$(window).scroll(function() {

  if (window.pageYOffset > 100) {
    $('.scroll-up').addClass('visible');
    $('.scroll-up').removeClass('invisible');
  } else {
    $('.scroll-up').addClass('invisible');
    $('.scroll-up').removeClass('visible');
  };

});
