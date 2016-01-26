function addAPoint(coordinates) {

  var realValue = String(coordinates);
realValue = realValue.replace('(','');
realValue = realValue.replace(')','');
  //Add it to Array
  if(interiorMapPoints.length == 0) {
    var last = 0;
  } else {
    last = interiorMapPoints[interiorMapPoints.length - 1].id + 1;
  }


  //ADD PIN TO MAP

  var latlng = realValue.split(',');
  var lat = latlng[0],
      lng = latlng[1];
  var point = {
    id: last,
    coordinates: realValue,
    label: '',
    type: '',
    lat: lat,
    lng: lng
  }
  interiorMapPoints.push(point);

  pointCreator(last, lat,lng);
  mapPointsUpdate();
  addStateReverse();
}
