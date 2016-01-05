<?php





//add_filter( 'rest_prepare_portfolio', 'add_meta_to_json', 10, 3 );
function add_meta_to_json($data, $post, $request){

$response_data = $data->get_data();

if ( $request['context'] !== 'view' || is_wp_error( $data ) ) {
    return $data;
}

$content = '';
$parsedResponse = array();
$allData = get_post_meta($post->ID);
if(!empty($allData)) {
  foreach($allData as $key=>$val) {
    if(strpos($key,'_') !== 0 || strpos($key,'_') === false) {
      $metaVal = get_post_meta($post->ID, $key, true);
      //CHECK IF SINGLE
      if(count($metaVal) == 1) {
        $metaVal = $metaVal[0];
      }
      $parsedResponse[$key] = $metaVal;
    }
  }
  $content = $parsedResponse;
}

if($post->post_type == 'portfolio'){
    $response_data['portfolio_meta'] = $content;
}

$data->set_data( $response_data );

return $data;
}
?>
