<?php
/**
 * Template Name: Post Meta Processor
 */
?>
<?php
header('Content-Type: application/json');
$id = $_GET['id'];
$content = '';
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
  $content = $parsedResponse;
}
echo json_encode($content);
