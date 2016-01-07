<?php
/**
 * Template Name: Download Test
 */
?>
<?php
//$thing = file_get_contents('restricted-files/99favicon.png');
//var_dump($thing);
//include 'restricted-files/99favicon.png';
//$file_url = 'http://dev.realestatearts.org/restricted-files/99favicon.png';

if( !is_user_logged_in() ) {
  exit;
} else {
  readfile($_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/test.html');
}
 // do the double-download-dance (dirty but worky)
?>
