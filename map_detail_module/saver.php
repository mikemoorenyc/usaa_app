<?php
function interior_map_save_data( $post_id ) {
	/*
	 * We need to verify this came from our screen and with proper authorization,
	 * because the save_post action can be triggered at other times.
	 */
	// Check if our nonce is set.
	if ( ! isset( $_POST['interior_map_nonce'] ) ) {
		return;
	}
	// Verify that the nonce is valid.
	if ( ! wp_verify_nonce( $_POST['interior_map_nonce'], 'interior_map_save_data' ) ) {
		return;
	}
	// If this is an autosave, our form has not been submitted, so we don't want to do anything.
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	// Check the user's permissions.
	if ( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type'] ) {
		if ( ! current_user_can( 'edit_page', $post_id ) ) {
			return;
		}
	} else {
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}
	}
	/* OK, it's safe for us to save the data now. */
	// Make sure that it is set.
  /*
	if ( ! isset( $_POST['google_coordinates'] ) ) {
		return;
	}
  */
	// Sanitize user input.
	//$my_data = sanitize_text_field( $_POST['google_coordinates'] );
	// Update the meta field in the database.
	//update_post_meta( $post_id, '_coordinates', $my_data );

  //LOOP TO CHECK
  $points = array(
    'interior_map_center',
    'interior_map_zoom',
		'interior_map_points'
  );

  foreach($points as $p) {
    if ( ! isset( $_POST[$p] ) ) {
  		return;
  	}
    $data = sanitize_text_field( $_POST[$p] );
    update_post_meta( $post_id, '_'.$p, $data );
  }


}
add_action( 'save_post', 'interior_map_save_data' );
?>
