<?php
//PROPERTY
function portfolio_init() {
    $args = array(
      'label' => 'Portfolio',
      'public' => true,
      'labels' => array(
        'add_new_item' => 'Add New Property'
      ),
      'show_ui' => true,
      'capability_type' => 'page',
      'hierarchical' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'portfolio'),
      'query_var' => true,
      'show_in_rest'       => true,
      'supports' => array(
          'title',
          'revisions',
          'thumbnail',
          'editor'
        )
      );
    register_post_type( 'portfolio', $args );
}
add_action( 'init', 'portfolio_init' );
