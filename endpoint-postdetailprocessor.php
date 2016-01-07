<?php
/**
 * Template Name: Property Detail Processor
 */
?>
<?php
header('Content-Type: application/json');
$id = $_GET['id'];
$content = '';

$obj = get_post($id);

//Basic Content
$content['id'] = $id;
$content['title'] = $obj->post_title;
$content['url'] = get_permalink($id);
$content['content'] = apply_filters('the_content', $obj->post_content);

//FEATURE IMAGE
if(has_post_thumbnail($id) ) {
  $content['thumbID'] = get_post_thumbnail_id($id);
} else {
  $content['thumbID'] = '';
}
//META CONTENT
$parsedResponse = array();
$allData = get_post_meta($id);
if(!empty($allData)) {
  foreach($allData as $key=>$val) {
    if(strpos($key,'_') !== 0 || strpos($key,'_') === false) {
      $metaVal = get_post_meta($id, $key, true);
      //CHECK IF SINGLE
      if(count($metaVal) == 1) {
        $metaVal = $metaVal[0];
      }
      $parsedResponse[$key] = $metaVal;
    }
  }
  $content['meta'] = $parsedResponse;
}

echo json_encode($content);
