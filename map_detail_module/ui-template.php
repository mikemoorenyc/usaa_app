<?php
wp_nonce_field( 'interior_map_save_data', 'interior_map_nonce' );
?>
<div id="outer-map-holder">
  <style>
  @import url('<?php echo get_bloginfo('template_url');?>/main_detail_module/main.css');

  </style>
  <?php
  $interior_map_center = get_post_meta( $post->ID, '_interior_map_center', true );
  $interior_map_zoom = get_post_meta( $post->ID, '_interior_map_zoom', true );
  $interior_map_points = get_post_meta( $post->ID, '_interior_map_points', true );
  if($interior_map_center == '') {
    $interior_map_center = '40.767851, -73.982080';
  }
  if($interior_map_zoom == '') {
    $interior_map_zoom = 15;
  }
  if($interior_map_points == '') {
    $interior_map_points = '[]';
  }

  ?>
  <script src="https://maps.googleapis.com/maps/api/js?sensor=true&v=3" ></script>
  <script>
  interiorMapZoom = <?php echo $interior_map_zoom;?>;
  interiorMapCenter = new google.maps.LatLng(<?php echo $interior_map_center;?>);
  interiorMapPoints = <?php echo $interior_map_points;?>;
  </script>
  <div class="zoom-center clearfix">
    <input value="<?php echo $interior_map_zoom;?>" type="hidden" id="interior_map_zoom" name="interior_map_zoom"/>
    <input value="<?php echo $interior_map_center;?>" type="hidden" id="interior_map_center" name="interior_map_center"/>
    <input value="<?php echo $interior_map_points;?>" type="hidden" id="interior_map_points" name="interior_map_points"/>
    <div class="zoom">
      Zoom Level
      <div class="current">Current: <span class="level"><?php echo $interior_map_zoom;?></div>
      <div class="saved">Saved: <span class="level"><?php echo $interior_map_zoom;?></div>
      <div class="zoomChanger">Save Current Zoom Level</div>
    </div>

    <div class="center">
      Map Center
      <div class="current">Current: <span class="level"><?php echo $interior_map_center;?></div>
      <div class="saved">Saved: <span class="level"><?php echo $interior_map_center;?></div>
      <div class="centerChanger">Save Current Map Center</div>
    </div>

  </div>
  <div id="interior-map-holder">
      <div id="interior-map"></div>
    <div id="search-holder">
    <input type="text" id="search-input" placeholder="Search for an address..." onkeydown="if (event.keyCode == 13) return false"/>

    <a href="#" class="search-btn"></a>

  </div>
  </div>
  <div class="add-new-map-point">Add New Map Point</div>



<script src="<?php echo get_bloginfo('template_url');?>/main_detail_module/plugins.js" ></script>


<script>
jQuery(document).ready(function( $ ) {

<?php include 'main.js';?>


});
</script>




</div>
