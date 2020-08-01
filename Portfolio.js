
$(function(){
  $('#jump').click(function () {
      //id名#pagetopがクリックされたら、以下の処理を実行
      $("html,body").animate({scrollTop:0},"300");
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 1000;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

window.onload = function() {
    Particles.init({
      selector: '.background',
      sizeVariations: 20,
      color: [
        'pink', 'rgb(234, 93, 142)', 'rgb(255, 223, 174)'
      ]
    });
  };
  
  
