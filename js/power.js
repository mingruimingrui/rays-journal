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
    )
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
  if (window.onmobile) {
    // nav on mobile
    $('.nav-bar-desktop').hide();
  } else {
    // nav on desktop
    $('.nav-bar-mobile').hide();
  }



  // $('.open-nav-container').css('left', $('#close-nav').offset().left);
  //
  // const nav_bar = $('.nav-bar-container');
  // nav_bar.css('top', '-' + nav_bar.css('height'));
  //
  // $('#open-nav').click(event => {
  //   event.preventDefault();
  //   nav_bar.css('top', '0');
  //   $('#open-nav').css('opacity', 0);
  // })
  //
  // $('#close-nav').click(event => {
  //   event.preventDefault();
  //   nav_bar.css('top', '-' + nav_bar.css('height'));
  //   $('#open-nav').css('opacity', 1);
  // })

});


/*=========================================
=            WINDOW IS RESIZED            =
=========================================*/
$(window).resize(function() {

  // const nav_bar = $('.nav-bar-container');
  // nav_bar.css('top', '-' + nav_bar.css('height'));
  // $('.open-nav-container').css('left', $('#close-nav').offset().left);
});


/*==========================================
=            WINDOW IS SCROLLED            =
==========================================*/
$(window).scroll(function() {

  if (window.pageYOffset > 100) {
    $('.scroll-up').css('opacity', 1);
  } else {
    $('.scroll-up').css('opacity', 0);
  }


  // if ($('.img').length > 0) {
  //   if (window.innerWidth > 550 & window.pageYOffset > $('.topper').height()) {
  //     $('.open-nav-container').css('position', 'fixed');
  //     $('.open-nav-container').css('color', 'black');
  //   } else {
  //     $('.open-nav-container').css('position', 'absolute');
  //     $('.open-nav-container').css('color', 'white');
  //   }
  // }
});
