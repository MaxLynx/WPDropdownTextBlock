<?php

/**
 * Plugin Name: Dropdown Text
 * Author: MaxLynx
 * Version: 1.0
 */

 function load() {
     wp_enqueue_script(
         'dropdown-text-handle',
         plugin_dir_url(__FILE__) . 'dropdown-text.js',
         array('wp-blocks', 'wp-i18n', 'wp-editor'),
         $in_footer = true
     );
 }

 add_action('enqueue_block_assets', 'load', 10);