function pinFader(obj,dir,speed) {
  var timing = globals.ts;

  if(speed === 'fast') {
    timing = 0;
  }

  if(dir == 'reverse' || dir == 'rev' || dir === 'r') {



    if($(obj).hasClass("__visible") == true) {
      $(obj).stop( true );
      $(obj).animate({opacity:0}, timing, function(){
        $(obj).css({
          'z-index': -1,
          'visibility:': 'hidden'
        }).removeClass("__visible");
      });
    }

  } else {



    if($(obj).hasClass("__visible") == false) {
      $(obj).stop( true );
      $(obj).css({
        'opacity': 0,
        'z-index': 1,
        'visibility': 'visible'
      }).addClass('__visible');
      $(obj).animate({'opacity': 1}, timing);
    }


  }
}
