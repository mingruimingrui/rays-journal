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
    console.log('show nav')
  } else {
    console.log('hide nav')
  }
});
