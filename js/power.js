/*====================================
=            DOM IS READY            =
====================================*/
$(function() {
  $('.pagination .active a').click(function() {
    return false;
  });

  // welcome page
  scrollToOnClick('.scroll-down', $(window).height() + 1, 1000);
  $('.title-container p')
});


/*========================================
=            WINDOW IS LOADED            =
========================================*/
$(window).load(function() {
  if ($(window).width() > 480) {
    fadeIn('.title-container p', 100, 600);
    fadeIn('.gold-button', 300, 600);
    fadeIn('.link-container', 300, 600);
    fadeIn('.left-vert-bar', 500, 600);
    fadeIn('.right-vert-bar', 700, 600);
  }

});


/*=========================================
=            WINDOW IS RESIZED            =
=========================================*/
$(window).resize(function() {
  if ($(window).width() > 480) {
    fadeIn('.title-container p', 100, 600);
    fadeIn('.gold-button', 300, 600);
    fadeIn('.link-container', 300, 600);
    fadeIn('.left-vert-bar', 500, 600);
    fadeIn('.right-vert-bar', 700, 600);
  }
});


/*==========================================
=            WINDOW IS SCROLLED            =
==========================================*/
$(window).scroll(function() {
  console.log('hello there')
  if (window.location.pathname === '/') {
    console.log('hello again')
    if ($(window).width() > 480) {
      if ($(window).scrollTop() > $(window).height()) {
        $('nav.navbar').css('top', 0);
      } else {
        $('nav.navbar').css('top', '-51px');
      };
    } else {
      if ($(window).scrollTop() > $(window).height()) {
        $('nav.navbar').css('top', 0);
      } else {
        $('nav.navbar').css('top', '-51px');
      };
    }
  }
});

/*==========================================
=             HOMEMADE METHODS             =
==========================================*/
const fadeIn = (targetName, start, duration) => {
  setTimeout(() => {
    $(targetName).fadeTo(duration, 1);
  }, start)
}

const scrollToOnClick = (buttonName, targetHeight, duration) => {
  $(buttonName).click(() => {
    $('html, body').animate({
      scrollTop: targetHeight
    }, duration);
  })
}
