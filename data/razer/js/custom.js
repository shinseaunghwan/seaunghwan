$(document).ready(function(){

  let ht = $(window).height();
  // console.log(ht);
  $('section').height(ht);

  $(window).resize(function(){
    let ht = $(window).height();
    $('section').height(ht);
  });

  // 주 메뉴 클릭시 자동으로 해당 section으로 이동
  $('ul#menu li').click(function(e){
     e.preventDefault();

     let ht = $(window).height();
     let i = $(this).index();
     let nowTop = i*ht;

     $('html, body').stop().animate({scrollTop : nowTop}, 500);
  });

  $(window).scroll(function(){
    let ht = $(window).height();


    let scroll = $(window).scrollTop();
    // console.log(scroll);

    for ( let i =0; i<5; i++ ) {
      if ( scroll >= ht*i && scroll < ht*(i+1)) {
        $('ul#menu li').removeClass();
        $('ul#menu li').eq(i).addClass('on');
      }
    }
  })

  //마우스 휠의 움직임에 따라 화면 스크롤시키기
  $('section').mousewheel(function(event, delta) {
    if (delta > 0 ) {

      let prev = $(this).prev().offset().top;

      $('html, body').stop().animate({scrollTop : prev},300, 'swing')
    }
  });

  $('section').mousewheel(function(event, delta) {

    if (delta < 0 ) {

      let next = $(this).next().offset().top;
      $('html, body').stop().animate({scrollTop : next},300,'swing');
    }

  })

});

  // aos Animation
  
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: false,
        mirror: false,
      });
    });
