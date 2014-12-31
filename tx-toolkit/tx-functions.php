<?php

//wp_list_categories('orderby=name');
/**/
function tx_fix_shortcodes($content){   
    $array = array (
        '<p>[' => '[', 
        ']</p>' => ']', 
        ']<br />' => ']'
    );

    $content = strtr($content, $array);
    return $content;
}
add_filter('the_content', 'tx_fix_shortcodes');

if ( ! function_exists( 'tx_folio_term' ) ) {
	function tx_folio_term( $taxonomy ) {
		global $post;

		$folio_categories = array();
		$folio_cats = "";
		$tax_seperator = "";

		if ( is_object_in_taxonomy( $post->post_type, $taxonomy ) ) {
			foreach ( (array) wp_get_post_terms( $post->ID, $taxonomy ) as $term ) {
				if ( empty( $term->name ) )
					continue;
				$folio_cats .= $tax_seperator.$term->name;
				$tax_seperator = ', ';
			}
		}

		return $folio_cats;
	}
}

if ( ! function_exists( 'tx_shortcodes_comma_delim_to_array' ) ) {
	function tx_shortcodes_comma_delim_to_array( $string ) {
		$a = explode( ',', $string );

		foreach ( $a as $key => $value ) {
			$value = trim( $value );

			if ( empty( $value ) )
				unset( $a[ $key ] );
			else
				$a[ $key ] = $value;
		}

		if ( empty( $a ) )
			return '';
		else
			return $a;
	}
}
