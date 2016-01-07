function hubChecker(statuses) {
  var currentZoom = globals.mainMap.getZoom();

  if(currentZoom >= 7) {

    //console.log('zoomed');
    //FADE OUT HUB PIND IMMEDIATELY
    $('.hubPin').each(function(){
      pinFader($(this),'rev','fast');
    });
    $('.mapPin').each(function(){
      $(this).removeClass('__in-hub');
    });
    /*
    $(globals.stateSet).each(function(index,e){
      var state = this;
      state.inhub = false;
    });
    */
    $(globals.properties).each(function(){
      var p = this;
      p.inhub = false;
    });

  } else {
    //console.log('not-zoomed');
    $(globals.mapHubs).each(function(index,e){
      var hub = this;
      var pointCount = 0;

      $(globals.properties).each(function(index,e){

        var p = this;
      //  console.log(this);
        if(p.toggled == true && p.inhub == false) {
          if (hub['drawn'].contains(new google.maps.LatLng(p.lat, p.lng))) {
            p.inhub = true;

            pointCount++;
          }
        }
      });
      if(pointCount > 0) {

        $('.hubPin.hub-'+index).find('span.count').text(pointCount);
        // FADE IN IMMEDIATELY
        pinFader($('.hubPin.hub-'+index),'fore','fast')
      }
    });
    /*
    $(globals.mapHubs).each(function(index,e){
      //LOOP THROUGH PROPERTIES
      var hub = this;
      var pointCount = 0;
      $(globals.properties).each(function(index,e){
        var point = this;
        if($('.mapPin.pin-'+point.id).hasClass("__in-hub") == false && $('.mapPin.pin-'+point.id).hasClass("__toggled") == true) {
          //var innerIndex = index;


          var marker = new google.maps.LatLng(point.lat, point.lng)
          //console.log(hub['drawn'].getBounds());

          if (hub['drawn'].contains(marker)) {
            //console.log(point.id);
            $('.mapPin.pin-'+point.id).addClass('__in-hub');
            console.log('thsfsa');
            //pinFader('.mapPin.pin-'+point.id, 'rev', 'fast');

            pointCount++;
          } else {
            //pinFader('.mapPin.pin-'+point.id, 'fast');
          }
        }


      });

      if(pointCount > 0) {

        $('.hubPin.hub-'+index).find('span.count').text(pointCount);
        // FADE IN IMMEDIATELY
        pinFader($('.hubPin.hub-'+index))
      }


    });*/
  }
  //console.log(globals.properties);
  pinSorter();
}
