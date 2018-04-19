<?php
/**
 * Plugin Name: Sensei Lesson Info Block
 * Description: Add Lesson Info Gutenberg Block to Sensei Lessons.
 * Version: 0.0.1
 * Author: Automattic
 */

class Sensei_Lesson_Info_Block {
	private static $_instance = null;

	public static function get_instance() {
		self::$_instance = new Sensei_Lesson_Info_Block();
	}

	private function __construct() {
		add_action( 'rest_api_init', array( $this, 'rest_api_init' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_js' ) );
	}

	public function rest_api_init() {
		// TODO
	}

	public function enqueue_block_js() {
		// Only enqueue on CPT Page.
		global $post;

		if ( 'lesson' === $post->post_type ) {
			wp_enqueue_script(
				'sensei_lesson_info_block',
				plugins_url( 'script.js', __FILE__ ),
				array( 'wp-blocks', 'wp-element' ),
				'0.0.1'
			);
		}
	}
}
Sensei_Lesson_Info_Block::get_instance();
