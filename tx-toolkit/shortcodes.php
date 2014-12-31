<?php


function tx_shortcodes_button() {

   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) {
      return;
   }

   if ( get_user_option('rich_editing') == 'true' ) {
      add_filter( 'mce_external_plugins', 'tx_add_plugin' );
      add_filter( 'mce_buttons', 'tx_register_button' );
   }

}
//add_action('init', 'tx_shortcodes_button');
add_action('admin_head', 'tx_shortcodes_button');

function tx_add_plugin( $plugin_array ) {
   $plugin_array['txshortcodes'] = plugin_dir_url( __FILE__ ) . 'tx-shortcodes.js';
   return $plugin_array;
}

function tx_register_button( $buttons ) {
   array_push( $buttons, "|", "txshortcodes" );
   return $buttons;
}

// recent posts [tx_blog items="3" colums="6" showcat="show" category_id="8,9"]

function tx_blog_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'items' => 4,
      	'columns' => 4,
      	'showcat' => 'show',
      	'category_id' => '',
      	'carousel' => 'no',								
   	), $atts);
	
 	$post_in_cat = tx_shortcodes_comma_delim_to_array( $atts['category_id'] );

	$posts_per_page = intval( $atts['items'] );
	$total_column = intval( $atts['columns'] );
	$tx_category = $atts['showcat'];
	$tx_carousel = $atts['carousel'];
	
	$return_string = '';	

	if( $tx_carousel == 'no' ) {
   		$return_string .= '<div class="tx-blog tx-post-row tx-masonry">';
	} else
	{
   		$return_string .= '<div class="tx-blog tx-post-row tx-carousel" data-columns="'.$total_column.'">';		
	}
	
	wp_reset_query();
	global $post;
	
	$args = array(
		'posts_per_page' => $posts_per_page,
		'orderby' => 'date', 
		'order' => 'DESC',
		'ignore_sticky_posts' => 1,
		//'post__in' => 2//$post_in_cat, //use post ids		
	);
	//$args['paging'] = true;
	/**/
	query_posts( $args );   
   
	if ( have_posts() ) : while ( have_posts() ) : the_post();
		
		$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'tx-medium' );
		$full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );
		
		$return_string .= '<div class="tx-blog-item tx-post-col-'.$total_column.'"><div class="tx-border-box">';

		if ( has_post_thumbnail() ) { 
			$return_string .= '<div class="tx-blog-img"><a href="'.esc_url($full_image_url[0]).'" class="tx-colorbox">';
			$return_string .= '<img src="'.esc_url($large_image_url[0]).'" alt="" class="blog-image" /></a></div>';
		} 
		$return_string .= '<div class="tx-post-content"><h3 class="tx-post-title"><a href="'.get_permalink().'">'.get_the_title().'</a></h3>';
		if ( $tx_category == "show" )
		{
			$return_string .= '<div class="tx-category">'.get_the_category_list( ', ' ).'</div>';	
		} else
		{
			$return_string .= '<div style="height: 16px;"></div>';
		}
		
		$return_string .= '<div class="tx-blog-content">'.get_the_excerpt().'</div>';

		$return_string .= '<div class="tx-meta">';
		$return_string .= '<span class="tx-author">By : <a href="'.esc_url( get_author_posts_url( get_the_author_meta("ID") ) ).'">'.get_the_author().'</a></span>';
		$return_string .= '<span class="tx-date"> | '.get_the_date('M j, Y').'</span>';
		$return_string .= '</div>';
		
		
		$return_string .= '</div></div></div>';		
		
		
	endwhile; else :
		$return_string .= '<p>Sorry, no posts matched your criteria.</p>';
	endif;
  
   	$return_string .= '</div>';

   	wp_reset_query();

   	return $return_string;
}

// row

function tx_row_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'class' => '',
   	), $atts);
	
	$return_string ='';

   	$return_string .= '<div class="tx-row">';
	$return_string .= do_shortcode($content);
   	$return_string .= '</div>';

   	return $return_string;
}

// columns
function tx_column_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'size' => '1/4',
		'class' => '',
   	), $atts);
	
	$return_string ='';
	$column_class = 'tx-column-size-';
	
	if ( $atts['size'] == '1/1' ) 
	{
		$column_class .= '1-1';
	} elseif ( $atts['size'] == '1/2' )
	{
		$column_class .= '1-2';
	} elseif ( $atts['size'] == '1/3' )
	{
		$column_class .= '1-3';
	} elseif ($atts['size'] == '1/4' )
	{
		$column_class .= '1-4';
	} elseif ($atts['size'] == '2/3' )
	{
		$column_class .= '2-3';
	} elseif ($atts['size'] == '3/4' )
	{
		$column_class .= '3-4';
	}

   	$return_string .= '<div class="tx-column ' .$column_class. '">';
	$return_string .= do_shortcode($content);
   	$return_string .= '</div>';

   	return $return_string;
}

// spacer

function tx_spacer_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'class' => '',
		'size' => '16',
   	), $atts);
	
	$return_string ='';

   	$return_string .= '<div class="tx-spacer clearfix" style="height: '.esc_attr($atts['size']).'px"></div>';

   	return $return_string;
}

// devider [tx_devider size="24"]
function tx_divider_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'class' => '',
		'size' => '16',
   	), $atts);
	
	$return_string ='';

   	$return_string .= '<div class="tx-divider clearfix" style="margin-top: '.esc_attr($atts['size']).'px;margin-bottom: '.esc_attr($atts['size']).'px"></div>';

   	return $return_string;
}


// recent posts

function tx_testimonial_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'posts' => 6,
   	), $atts);
	
   
   	$posts_per_page = $atts['posts'];
	$posts_per_page = intval( $posts_per_page );
	
	$return_string = '';

   	$return_string .= '<div class="tx-testimonials">';
 
  
	wp_reset_query();
	global $post;
	
	$args = array(
		'posts_per_page' => $posts_per_page,
		'post_type' => 'testimonials',
		'orderby' => 'date', 
		'order' => 'DESC'
	);
	//$args['paging'] = true;
	/**/
	query_posts( $args );   
   
	if ( have_posts() ) : while ( have_posts() ) : the_post();
	
		$testi_name = esc_attr(rwmb_meta('icreate_testi_name'));
		$testi_desig = esc_attr(rwmb_meta('icreate_testi_desig'));
		$testi_organ = esc_attr(rwmb_meta('icreate_testi_company'));				

	
		$return_string .= '<div class="tx-testi-item">';
		$return_string .= '<span class="tx-testi-text">'.get_the_content().'</span>';
		$return_string .= '<span class="tx-testi-name">'.$testi_name.'</span>';
		$return_string .= '<span class="tx-testi-desig">'.$testi_desig.', </span>';
		$return_string .= '<span class="tx-testi-org">'.$testi_organ.'</span>';						
		$return_string .= '</div>';
	endwhile; else :
		$return_string .= '<p>Sorry, no posts matched your criteria.</p>';
	endif;
  
   	$return_string .= '</div>';

   	wp_reset_query();
   	return $return_string;
}


// button 

function tx_button_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'style' => '',
		'text' => '',
		'url' => '',
		'color' => '',
		'textcolor' => '',				
		'class' => '',
   	), $atts);
	
	$return_string ='';

   	$return_string .= '<a class="tx-button" href="'.esc_url($atts['url']).'" style="color: '.esc_attr($atts['textcolor']).'; background-color: '.esc_attr($atts['color']).'">'.esc_attr($atts['text']).'</a>';

   	return $return_string;
}

// Call to act

function tx_calltoact_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'button_text' => '',
		'url' => '',
		'class' => '',
   	), $atts);
	
	$cta_text = esc_attr($content);
	
	$return_string ='';
	
   	$return_string .= '<div class="tx-cta" style=""><div class="tx-cta-text">'.$content.'</div><a href="'.esc_url($atts['url']).'" class="cta-button">'.esc_attr($atts['button_text']).'</a></div>';

   	return $return_string;
}



// Call to act [tx_services title="Services Title" icon="fa-heart"]Services content[/tx_services]

function tx_services_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'title' => '',
		'icon' => '',
		'class' => '',
   	), $atts);
	
	$service_text = do_shortcode($content);
	$service_icon = esc_attr($atts['icon']);
	$service_title = esc_attr($atts['title']);
	
	$return_string ='';
	
   	$return_string .= '<div class="tx-service" style="">';
	$return_string .= '<div class="tx-service-icon"><span><i class="fa '.$service_icon.'"></i></span></div>';
	$return_string .= '<div class="tx-service-title">'.$service_title.'</div>';
	$return_string .= '<div class="tx-service-text">'.$service_text.'</div>';		
	$return_string .= '</div>';

   	return $return_string;
}

// portfolio [tx_portfolio items="6" columns="3"]

function tx_portfolio_function($atts, $content = null) {
	
   	$atts = shortcode_atts(array(
      	'items' => 4,
      	'columns' => 4,
		'hide_cat' => 'no',
		'hide_excerpt' => 'no',
		'carousel' => 'no',		
   	), $atts);
	
   
   	$posts_per_page = intval( $atts['items'] );
   	$total_column = intval( $atts['columns'] );
	$tx_carousel = $atts['carousel'];

	
	$return_string = '';

	if( $tx_carousel == 'no' ) {
   		$return_string .= '<div class="tx-portfolio tx-post-row tx-masonry">';
	} else
	{
   		$return_string .= '<div class="tx-portfolio tx-post-row tx-carousel" data-columns="'.$total_column.'">';		
	}
 
  
	wp_reset_query();
	global $post;
	
	$args = array(
		'posts_per_page' => $posts_per_page,
		'post_type' => 'portfolio',
		'orderby' => 'date',
		'order' => 'DESC'
	);
	//$args['paging'] = true; 
	/**/
	query_posts( $args );   
   
	if ( have_posts() ) : while ( have_posts() ) : the_post();
	
		$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'tx-medium' );
		$full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );
	

		$return_string .= '<div class="tx-portfolio-item tx-post-col-'.$total_column.'"><div class="tx-border-box">';
		

		if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
			$return_string .= '<div class="tx-folio-img"><a href="'.esc_url($full_image_url[0]).'" class="tx-colorbox"><img src="'.esc_url($large_image_url[0]).'" alt="" class="folio-img" /></a></div>';
		} 

		$return_string .= '<h3 class="tx-folio-title"><a href="'.get_permalink().'">'.get_the_title().'</a></h3>';
		if ( $atts['hide_cat'] == 'no' ) { // check if the post has a Post Thumbnail assigned to it.
			$return_string .= '<div class="tx-folio-category">'.tx_folio_term( 'portfolio-category' ).'</div>';
		} else
		{
			$return_string .= '<div style="display: block; clear: both; height: 16px;"></div>';
		}
		if ( $atts['hide_excerpt'] == 'no' ) { // check if the post has a Post Thumbnail assigned to it.
			$return_string .= '<div class="tx-folio-content">'.get_the_excerpt().'</div>';
		}
			
		$return_string .= '</div></div>';
	endwhile; else :
		$return_string .= '<p>Sorry, no posts matched your criteria.</p>';
	endif;
  
   	$return_string .= '</div>';

   	wp_reset_query();
   	return $return_string;
}



function register_shortcodes(){
	add_shortcode('tx_recentposts', 'tx_recentposts_function');
	add_shortcode('tx_row', 'tx_row_function');
	add_shortcode('tx_column', 'tx_column_function');
	add_shortcode('tx_spacer', 'tx_spacer_function');	
	add_shortcode('tx_testimonial', 'tx_testimonial_function');	
	add_shortcode('tx_button', 'tx_button_function');
	add_shortcode('tx_calltoact', 'tx_calltoact_function');
	add_shortcode('tx_services', 'tx_services_function');
	add_shortcode('tx_portfolio', 'tx_portfolio_function');	
	add_shortcode('tx_blog', 'tx_blog_function');
	add_shortcode('tx_divider', 'tx_divider_function');					
}

add_action( 'init', 'register_shortcodes');



