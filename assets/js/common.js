'use-strict'

const fadeIn = (targetName, start, duration) => {
  $(targetName).css('opacity', 0);
  setTimeout(() => {
    $(targetName).fadeTo(duration, 1);
  }, start)
}

const scrollToOnClick = (buttonName, targetName, duration) => {
  $(buttonName).click(() => {
    $('html, body').animate({
      scrollTop: $(targetName).offset().top
    }, duration);
  })
}
