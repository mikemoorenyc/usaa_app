$(document).on('click', 'a.hubClick',function(e){
  e.preventDefault();
  var lat = $(this).data('lat'),
      lng = $(this).data('lng');

  var point = new google.maps.LatLng(lat,lng);
  globals.mainMap.setZoom(8);
  globals.mainMap.setCenter(point);
});
