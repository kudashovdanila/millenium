$(document).ready(function () {

  $(".menu-burger").click(function () { 
    $(this).toggleClass("menu-burger_active");
    $(".navbar-menu").toggleClass("navbar-menu_active");
    $("body").toggleClass("lock");
  });

  $('.input-phone').mask('+7 (000) 000-00-00');

  $(".popup-link").click(function (e) { 
    e.preventDefault();
    $(".popup-wrap").fadeIn();
  });

  $(".popup-close").click(function () {
    $(".popup-wrap").fadeOut();
  });

});