function mapDetailInitialize() {
  //center = new google.maps.LatLng(40.802391,-73.179438);

  var mapOptions = {
    zoom: interiorMapZoom,
    center: interiorMapCenter,
    disableDefaultUI: true,
    zoomControl: true,
    styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }]}]
  };
  interiorMap = new google.maps.Map(document.getElementById('interior-map'),
  mapOptions);
  geocoder = new google.maps.Geocoder();

}
mapDetailInitialize();



  //ADD PREVIOUS POINTS
  if(interiorMapPoints.length > 0) {
    for(i=0; i<interiorMapPoints.length; i++) {
      var p = interiorMapPoints[i];

      pointCreator(p.id, p.lat, p.lng, p.type, p.value);
    }
  }

  google.maps.event.addListener(interiorMap, 'zoom_changed', function(event) {
     var newZ = interiorMap.getZoom();
     $('.zoom-center .zoom .current .level').text(newZ);
  });

  $('.zoomChanger').click(function(){
    var saveZ = interiorMap.getZoom();
    $('.zoom-center .zoom .saved .level').text(saveZ);
    $('input#interior_map_zoom').val(saveZ);
    return false;
  });

  google.maps.event.addListener(interiorMap, 'center_changed', function(event) {
     var newC = interiorMap.getCenter();
     newC = String(newC);
     newC = newC.replace('(','');
     newC = newC.replace(')','');
     $('.zoom-center .center .current .level').text(newC);
  });

  $('.centerChanger').click(function(){
    var newC = interiorMap.getCenter();
    newC = String(newC);
    newC = newC.replace('(','');
    newC = newC.replace(')','');
    $('.zoom-center .center .saved .level').text(newC);
    $('input#interior_map_center').val(newC);
    return false;
  });

  $('#search-holder .search-btn').click(function(){
    searchFetcher();
    return false;
  });
  function searchFetcher(location) {
    var location = $('#search-input').val();
    if(location == '') {
      return false
    }
    $('#search-holder').addClass('__page-loading');
    geocoder.geocode({'address': location}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        theLocation = results[0].geometry.location;
        interiorMap.setCenter(theLocation);
        $('#search-holder').removeClass('__page-loading');
      } else {
        $('#search-holder').removeClass('__page-loading');
        alert('We were unable to locate your address.');
      }
    });
  }

  //UPDATE mapPointsValue




  //ADDDING A MAP POINT

  function addStateReverse() {
    $('#interior-map-holder').removeClass('__adding-map-point');
    $('.add-new-map-point').text('Add New Map Point');
  }

  $('.add-new-map-point').click(function(){
    if($("#interior-map-holder").hasClass('__adding-map-point') == true) {
      addStateReverse();
      return;
    }
    $('#interior-map-holder').addClass('__adding-map-point');
    $(this).text('Cancel');
    return false;
  });

  //CHECK ON CLICK
  google.maps.event.addListener(interiorMap, 'click', function(event) {
    if($("#interior-map-holder").hasClass('__adding-map-point') == true) {
      addAPoint(event.latLng);
    }
  });


  $(document).on('click', '.map-point',function(){
    
  });
