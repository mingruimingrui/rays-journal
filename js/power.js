/*====================================
=            DOM IS READY            =
====================================*/
$(function() {
    $('.pagination .active a').click(function() {
        return false;
    });
});


/*========================================
=            WINDOW IS LOADED            =
========================================*/
$(window).load(function() {
  $('.navbar').css('top', '-51px');
  $('.welcome-container').css('height', $(window).height + 51 + 'px');
});


/*=========================================
=            WINDOW IS RESIZED            =
=========================================*/
$(window).resize(function() {
  $('.welcome-container').css('height', $(window).height + 51 + 'px');
});


/*==========================================
=            WINDOW IS SCROLLED            =
==========================================*/
$(window).scroll(function() {
  if ($(window).scrollTop() > $(window).height) {
    console.log('show nav')
  } else {
    console.log('hide nav')
  }
});
