function mapPointsUpdate() {
  var jsonString = JSON.stringify(interiorMapPoints);
  jQuery("input#interior_map_points").val(jsonString);

}
