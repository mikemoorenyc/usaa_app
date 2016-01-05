<?php
/**
 * Template Name: Media Processor
 */
?>
<?php
header('Content-Type: application/json');

$type = $_GET['media'];
$mediaArray = array();

if($type == 'video'):

$videoURL = $_GET['url'];

$embedCode = wp_oembed_get($videoURL);


array_push($mediaArray, array(
  'mediatype' => 'video',
  'videocode' => $embedCode
));



endif;

if($type == 'image'):
  $mediaArray['mediatype'] = 'image';

$id = $_GET['id'];

$sizes = array(
  'thumbnail',
  'medium',
  'large'
);
foreach($sizes as $s) {
  $src = wp_get_attachment_image_src($id, $s, false);
  $src = $src[0];
  $mediaArray[$s] = $src;
}



endif;

echo json_encode($mediaArray);





?>
