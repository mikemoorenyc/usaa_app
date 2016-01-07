function mainMapPinSetter(props) {
  var pinsToLoad = props.length,
      pinsLoaded = 0;
  $(props).each(function(index,e){

    var p = this;


    //SET PIN LINK
    var pinContent = templates.mainMapPin(p);


    var infoBoxOptions = {
      content : pinContent
      ,disableAutoPan: true
      ,maxWidth: 0
      ,boxStyle: {
        background: 'red',
        width: "20px",
        height: "20px",
      }
      ,zIndex: -1
      ,boxClass: 'all mapPin '+p.propertyType+' '+p.core+' pin-'+p.id
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
    mapPin.setPosition(new google.maps.LatLng(p.lat, p.lng));
    mapPin.open(globals.mainMap);
    mapPin.addListener("domready", function() {

      pinsLoaded++;
      if(pinsLoaded === pinsToLoad) {
        globals.loaded++;
        mapLoadedCheck();
      }
    });

  });


}
