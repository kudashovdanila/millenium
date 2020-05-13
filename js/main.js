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

  jQuery(function ($) {
    $(document).mouseup(function (e) { // отслеживаем событие клика по веб-документу
      var block = $(".popup"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
      if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
        && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
        $(".popup-wrap").fadeOut(); // если условия выполняются - скрываем наш элемент
      }
    });
  });

  $(".hero").click(function () {
    if ($(".navbar-menu").hasClass("navbar-menu_active")) {
      $(".navbar-menu").toggleClass("navbar-menu_active");
      $(".menu-burger").toggleClass("menu-burger_active");
      $("body").toggleClass("lock");
    }
  });

});