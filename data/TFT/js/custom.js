$(document).ready(function(){


  $('article').mouseenter(function(){
    let vid = $(this).find('video').get(0);
    vid.currentTime = 0;
    vid.play();
    $(this).stop().animate({width : '35%'},1000,function(){
      $(this).find('h3').stop().animate({left: '10px'},200);
      $(this).find('ul').stop().animate({left: '10px'},400);
    });
    $(this).find('video').stop().animate({opacity : 0.8},1000);
  })


  $('article').mouseleave(function(){
    let vid = $(this).find('video').get(0);
    vid.currentTime = 0;
    vid.pause();
    $(this).stop().animate({width : '12%'},700);
    $(this).find('video').stop().animate({opacity : 0},2000);
    $(this).find('h3').stop().animate({left: '-320px'},200);
      $(this).find('ul').stop().animate({left: '-320px'},400)
  })

})

window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: false,
  });
});
