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
    styles: [
  {
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
  }
],
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

   //GET STATES
   $.ajax({
     url:globals.templateURL+'/assets/states.xml',
     dataType:'xml',
   })
   .done(function(data){
     var colorArray = [
       '#8396c9',
       '#67b7ea',
       '#5d6fa1',
       '#b9d3df'
     ]
     var randColor = '';
     $(data).find('states > state').each(function(){
       var color = colorArray[0];
       if($(this).attr('region') == 'mid') {
         color = colorArray[1];
       }
       if($(this).attr('region') == 'south') {
         color = colorArray[2];
       }
       if($(this).attr('region') == 'west') {
         color = colorArray[3];
       }
       var points = [];
       $(this).find('point').each(function(){
         var lats = {
           lat: parseFloat($(this).attr('lat')),
           lng: parseFloat($(this).attr('lng'))
         }
         points.push(lats);
       });
       var bermudaTriangle = new google.maps.Polygon({
    paths: points,
    strokeColor: '#ffffff',
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: color,
    fillOpacity: 1,
    clickable: false
  });
  bermudaTriangle.setMap(globals.mainMap);
     });
   })
   .fail(function(){
     alert('Could Not Load Data. Please refresh page.');
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
