/*====================================
=            DOM IS READY            =
====================================*/
$(function() {
  $('.pagination .active a').click(function() {
    return false;
  });

  scrollToOnClick('.scroll-down', $(window).height(), 1000);
});


/*========================================
=            WINDOW IS LOADED            =
========================================*/
$(window).load(function() {

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
  if ($(window).scrollTop() > $(window).height()) {
    $('nav.navbar').css('top', '-51px');
  } else {
    $('nav.navbar').css('top', 0);
  };
});

/*==========================================
=             HOMEMADE METHODS             =
==========================================*/
const fadeIn = (targetName, start, duration) => {
  $(targetName).css('opacity', 0);
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
