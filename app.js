$(function () {

  // フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function() {
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  });
  // SPメニュー
  $('.js-toggle-sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');

});
$('.js-toggle-sp-menu-target-close').on('click', function () {
  $('.js-toggle-sp-menu').toggleClass('active');
  $('.js-toggle-sp-menu-target').toggleClass('active');
});
});


$(document).ready(function(){
  $('.js-show-modal').on('click',function (){
    var maodalWidth =$('.js-show-modal-target').width();//要素の幅を取得する。変数に入れる
    var windowWidth = $(window).width();//現在の横幅

    $('.js-show-modal-target').attr('style','margin-left: ' + (windowWidth/2 - maodalWidth/2)+ 'px');
    $('.js-show-modal-target').show();
    $('.js-show-cover').show();
  });

  $('.js-hide-modal').on('click',function(){
    $('.js-show-modal-target').hide();
    $('.js-show-cover').hide();
  });

  $('.js-show-cover').on('click',function(){
    $('.js-show-modal-target').hide();
    $('.js-show-cover').hide();
  });

  $('.modal-body').on('click',function(){
    $('.js-show-modal-target').hide();
    $('.js-show-cover').hide();
  });
});








