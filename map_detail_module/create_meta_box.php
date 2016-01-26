<?php

function map_detail_add_meta_box() {

		add_meta_box(
			'map_detail',
			"Interior Map",
			'map_detail_callback',
		  'portfolio',
      'normal',
      'high'
		);

}
add_action( 'add_meta_boxes', 'map_detail_add_meta_box' );


function map_detail_callback($post) {
   include 'ui-template.php';
}

?>
