
$(function(){

  var H = $('.pic1').offset().top - 200;
  // alert(H);

  $(window).scroll(function(){

    var N = $(window).scrollTop();
    console.log(N);

    if(N > H){
      $('.pic1').animate({opacity:'1'},500);
    }

    if(N > 800){
      $('.pic2').animate({right:'0', opacity:'1'},500);
    }

    if(N > 1200){
      $('.text3').animate({fontSize:'18px'},500);
    }

  })

  $('a').click(function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
  })
  
})







