<?php
/**
 * Plugin Name:       Wp My Blocks
 * Description:       A plugin to create custom blocks: A Title, Date, Content and Image.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            André Ranulfo
 * Author URI:        https://www.linkedin.com/in/andre-ranulfo
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-my-blocks
 * 
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function wp_my_blocks_wp_my_blocks_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'wp_my_blocks_wp_my_blocks_block_init' );
