google.maps.Circle.prototype.contains = function(latLng) {
  return this.getBounds().contains(latLng) && google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
}
function mainMapMaker() {
  var centerLat = 39.747293,
      centerLon = -104.9973211,
      center = new google.maps.LatLng(centerLat,centerLon);

  var mapOptions = {
    zoom: 5,
    disableDefaultUI: true,
    center: center,
    styles: globals.mapStyle,
    minZoom: 5,
    maxZoom: 8
  };

  globals.mainMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Bounds for North America
   var strictBounds = new google.maps.LatLngBounds(
     new google.maps.LatLng(28.70, -127.50),
     new google.maps.LatLng(48.85, -55.90)
   );

   google.maps.event.addListener(globals.mainMap, 'center_changed', function() {
     if (strictBounds.contains(globals.mainMap.getCenter())) return;

     // We're out of bounds - Move the map back within the bounds

     var c = globals.mainMap.getCenter(),
         x = c.lng(),
         y = c.lat(),
         maxX = strictBounds.getNorthEast().lng(),
         maxY = strictBounds.getNorthEast().lat(),
         minX = strictBounds.getSouthWest().lng(),
         minY = strictBounds.getSouthWest().lat();

     if (x < minX) x = minX;
     if (x > maxX) x = maxX;
     if (y < minY) y = minY;
     if (y > maxY) y = maxY;

     globals.mainMap.setCenter(new google.maps.LatLng(y, x));
   });

   //ZOOM CHANGE
   google.maps.event.addListener(globals.mainMap, 'zoom_changed', function(){

       stateCreator(globals.properties);

   });

  //GET PINS
  $.ajax({
    url:globals.homeURL+'/home-context',
    dataType:'json',
  })
  .done(function(data){
    globals.properties = data.properties;

    hubCreator(globals.mapHubs);
    mainMapPinSetter(globals.properties);

  })
  .fail(function(){
    alert('Could Not Load Data. Please refresh page.');
  })
}

///CLICKING THE LINK
$(document).on('click', 'a.mainMapPin', function(e){
  e.preventDefault();
  detailCreator($(this));
});
