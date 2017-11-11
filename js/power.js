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
      $('.nav-bar-mobile').hide();
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
