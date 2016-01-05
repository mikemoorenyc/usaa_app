function mainMapPinSetter(props) {
  $(props).each(function(index,e){

    var p = $(this);
    p = p[0];

    //SET PIN LINK
    var pinContent = templates.mainMapPin(p);


    var infoBoxOptions = {
      content : pinContent
      ,disableAutoPan: true
      ,maxWidth: 0
      ,boxStyle: {
        background: 'red',
        width: "20px",
        height: "20px"
      }
      ,zIndex: 1
      ,boxClass: 'mapPin '+p.propertyType+' '+p.core+' pin-'+index
      ,closeBoxMargin: "0"
      ,closeBoxURL: ''
      ,infoBoxClearance: new google.maps.Size(10,10)
      ,pixelOffset: new google.maps.Size(-10,-10)
      ,isHidden: false
      ,pane: 'floatPane'
      ,enableEventPropagation: true
      ,alignBottom: false
    }
    var mapPin = new InfoBox(infoBoxOptions);
    mapPin.setPosition(new google.maps.LatLng(p.lat, p.lng));
    mapPin.open(globals.mainMap);
  });
}
