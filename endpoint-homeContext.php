<?php
/**
 * Template Name: Home Context
 */
?>
<?php
header('Content-Type: application/json');
$args = array(
    'post_type' 		=> 'portfolio',
    'orderby' 			=> 'menu_order',
    'order' 			=> 'ASC',
    'posts_per_page' => -1
  );
$content = array();
$files_in_cat_query = new WP_Query($args);
if ( $files_in_cat_query->have_posts() ) {
$port = $files_in_cat_query->get_posts();
foreach($port as $p) {
  $id = $p->ID;
  $pV = array();
  $pV['id'] = $id;
  $pV['title'] = get_the_title($id);
  $pV['permalink'] = get_the_permalink($id);

  $pMeta = get_post_meta($id, 'property-meta', true);
  $pMeta = $pMeta[0];
  // LAT AND LONG
  $latlng = explode(',',$pMeta['coordinates']);

  $pV['lat'] = $latlng[0];
  $pV['lng'] = $latlng[1];
  $pV['core'] = $pMeta['core'];
  $pV['propertyType'] = $pMeta['property-type'];

  if(has_post_thumbnail($id) ) {
    $tid = get_post_thumbnail_id($id);
    $ts = wp_get_attachment_image_src($tid, 'circle', false);
    $ts = $ts[0];
    $pV['thumbID'] = $tid;
    $pV['circleSRC'] = $ts;
  }
  array_push($content,$pV);
}
$propList['properties'] = $content;
echo json_encode($propList);



}
