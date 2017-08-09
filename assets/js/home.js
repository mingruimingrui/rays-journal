document.onload = () ={
  AOS.init({
    duration: 1000
  });
  const pos = $(".nav-container").offset().top + 100;

  $(window).on("scroll", () => {
    // console.log(win.scrollTop() >= 293)
    if ($(window).scrollTop() >= pos) {
      // fix nav bar to position
      $(".nav-container").addClass("fixed");

      // hide scroll down
      $(".scroll-down-container").hide();

      // strech navbar
      $(".nav").removeClass("nav1");
      $(".nav").addClass("nav2");
      // $("li").css("font-size", "1em");
      // $(".nav").children().css("justify-content", "space-evenly");
    } else {
      // unfix nav bar to position
      $(".nav-container").removeClass("fixed");

      // show scroll down
      let opacity = 1 - $(window).scrollTop()/pos;
      $(".scroll-down-container").show();
      $(".scroll-down-container").children().css("color", "rgba(0, 0, 0, " + opacity/2 + ")");

      // shrink navbar
      $(".nav").addClass("nav1");
      $(".nav").removeClass("nav2");
      // $("li").css("font-size", "1.5em");
      // $(".nav").children().css("justify-content", "center");
    }
  });

  $(".scroll-down-container").on("click", function(e) {
    $("html, body").animate({
      scrollTop: $(window).height() * 0.5
    }, 1200);
  });

}