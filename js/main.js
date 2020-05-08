$(document).ready(function () {
  $(".menu-burger").click(function () { 
    $(this).toggleClass("menu-burger_active");
    $(".navbar-menu").toggleClass("navbar-menu_active");
  });
});