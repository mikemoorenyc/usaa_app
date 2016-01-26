
function hubCreator(hubs) {
  hubsLoaded = 0;
  hubsToLoad = hubs.length;
  $(hubs).each(function(index,e){
    var hub = this;
    globals.mapHubs[index]['drawn'] = new google.maps.Circle({
      clickable: false,
      fillColor: 'blue',
      map: globals.mainMap,
      center: new google.maps.LatLng(hub.lat, hub.lng),
      radius: hub.mileRadius* 1609.344,
      fillOpacity: 0,
      strokeOpacity:0
    });
    //CREATE THE HUB PINS
    var data = {
      count: '0',
      lat: hub.lat,
      lng: hub.lng,
      hubSlug: hub.hubSlug
    }
    var hubContent = templates.hubPin(data);
    var infoBoxOptions = {
      content : hubContent
      ,disableAutoPan: true
      ,maxWidth: 0
      ,boxStyle: {
        background: 'red',
        width: "20px",
        height: "20px",

      }
      ,zIndex: -1
      ,boxClass: 'hubPin '+hub.hubSlug+' '+'hub-'+index
      ,closeBoxMargin: "0"
      ,closeBoxURL: ''
      ,infoBoxClearance: new google.maps.Size(10,10)
      ,pixelOffset: new google.maps.Size(-10,-10)
      ,visible: true
      ,pane: 'floatPane'
      ,enableEventPropagation: true
      ,alignBottom: false
    }
    var mapPin = new InfoBox(infoBoxOptions);
    //mapPin.setPosition(new google.maps.LatLng(hub.lat, hub.lng));
    mapPin.open(globals.mainMap);
    mapPin.addListener("domready", function() {
      hubsLoaded++;
      if(hubsLoaded === hubsToLoad) {
        globals.loaded++;
        mapLoadedCheck();
      }
    });

  });

}
