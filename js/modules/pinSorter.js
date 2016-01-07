function pinSorter() {
/*
    $('.mapPin').each(function(){

      if($(this).hasClass('__toggled') == true && $(this).hasClass('__in-hub') == false) {

        pinFader($(this));
      } else {
        pinFader($(this), 'rev');
      }
    });
*/
$(globals.properties).each(function(){
  p = this;
  if(p.toggled == true && p.inhub == false) {
    pinFader($('.mapPin.pin-'+p.id));
  } else {
    if(p.inhub == true) {
      pinFader($('.mapPin.pin-'+p.id), 'rev','fast');
    } else {
      pinFader($('.mapPin.pin-'+p.id), 'rev');
    }
  }
});
//console.log(globals.properties);
}
