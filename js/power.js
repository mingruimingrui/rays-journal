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

  // nav-modal controller
  // menu_modal = $('#menu-modal');
  //
  // $('#open-menu-modal').click(event => {
  //   event.preventDefault();
  //   menu_modal.css('display', 'block');
  // });
  //
  // $(window).click(event => {
  //   if (event.target.id === 'menu-modal') {
  //     menu_modal.css('display', 'none');
  //   }
  // });

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

});
