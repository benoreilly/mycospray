$(document).ready(function () {
  $(".sidenav").sidenav({
    inDuration: 400,
    outDuration: 400,
    edge: "left",
  });
  $(".scrollspy").scrollSpy({
    scrollOffset: 20,
  });
  $(".slider").slider({
    indicators: false,
    height: 680,
    transition: 500,
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("nav").addClass("shadow");
    } else {
      $("nav").removeClass("shadow");
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  $("#logo").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
