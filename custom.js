$(document).ready(function () {

  /* TypeIt - welcome */

  $('#typing').typeIt({
    strings: ["#Web Publisher", "#UI/UX Designer", "#Portfolio"],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });

  /* mouse를 클릭하면 #about 섹션으로 스크롤하는 기능 */

  var position = $('#about').offset(); // 변수 position에 #about의 위치를 담든다.

  $('.mouse, .scroll, .scroll--text').click(function(){
    
    $('html, body').stop().animate({scrollTop: position.top}, 500); // 문서의 스크롤 위치를 애니메이션으로 이동시켜라(그 위치는 변수 position( #about의 좌표값)의 top값)
  });

  /* Header Scroll Change */

  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.btn--top').addClass('active');
    }
    else {
      $('.btn--top').removeClass('active');  
    }
  });  

  /* Wow Scroll Reveal Animation */
  
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
  })
  wow.init();

  /* Header Trigger */

  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });

  $('.gnb a, section').click(function(){
    $('.gnb, .trigger').removeClass('active');
  });

});




 
