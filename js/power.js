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

  // nav
  $('.open-nav-container').css('left', $('#close-nav').offset().left);

  const nav_bar = $('.nav-bar-container');
  nav_bar.css('top', '-' + nav_bar.css('height'));

  $('#open-nav').click(event => {
    event.preventDefault();
    nav_bar.css('top', '0');
    $('#open-nav').css('opacity', 0);
  })

  $('#close-nav').click(event => {
    event.preventDefault();
    nav_bar.css('top', '-' + nav_bar.css('height'));
    $('#open-nav').css('opacity', 1);
  })

});


/*=========================================
=            WINDOW IS RESIZED            =
=========================================*/
$(window).resize(function() {

  const nav_bar = $('.nav-bar-container');
  nav_bar.css('top', '-' + nav_bar.css('height'));
  $('.open-nav-container').css('left', $('#close-nav').offset().left);
});


/*==========================================
=            WINDOW IS SCROLLED            =
==========================================*/
$(window).scroll(function() {
  if (window.innerWidth > 550 & window.pageYOffset > $('.topper').height()) {
    $('.open-nav-container').css('position', 'fixed');
    $('.open-nav-container').css('color', 'black');
  } else {
    $('.open-nav-container').css('position', 'absolute');
    $('.open-nav-container').css('color', 'white');
  }
});
