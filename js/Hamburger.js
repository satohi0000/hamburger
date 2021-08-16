$(".l-header__left__menu__botton").click(function () {//ボタンがクリックされたら
  $(".l-sidebar").toggleClass("__is-open");
  $(".l-sidebar__batsu").toggleClass("__is-open")//ボタン自身に activeクラスを付与し
});

$(".l-sidebar__batsu").click(function () {//ボタンがクリックされたら
  $(".l-sidebar").toggleClass("__is-open");
  $(".l-sidebar__batsu").toggleClass("__is-open")//ボタン自身に activeクラスを付与し
});