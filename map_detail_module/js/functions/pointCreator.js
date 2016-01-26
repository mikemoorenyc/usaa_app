function pointCreator(id, lat,lng, type, value) {

  var infoBoxOptions = {
    content : ''
    ,disableAutoPan: true
    ,maxWidth: 0
    ,boxStyle: {
      background: 'red',
      width: "20px",
      height: "20px",

    }
    ,zIndex: -1
    ,boxClass: 'map-point point-'+id
    ,closeBoxMargin: "0"
    ,closeBoxURL: ''
    ,infoBoxClearance: new google.maps.Size(10,10)
    ,pixelOffset: new google.maps.Size(-10,-10)
    ,visible: true
    ,pane: 'floatPane'
    ,enableEventPropagation: true
    ,alignBottom: false
    ,position: new google.maps.LatLng(lat, lng)
  }
  var pinObject = new InfoBox(infoBoxOptions);
  pinObject.open(interiorMap);
}
