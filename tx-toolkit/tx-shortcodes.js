(function(){

	tinymce.PluginManager.add('txshortcodes', function( editor, url ) {
		editor.addButton('txshortcodes', {
					title : 'TX Shortcodes', // title of the button
					//image : '../wp-content/plugins/tx-toolkit/tx-shortcode.png',  // path to the button's image
					icon : 'tx-mce-icon',  // path to the button's image					
			onclick: function() {
				
				var $form = jQuery("#txshortcodes-form");
				jQuery.colorbox({inline:true, href:"#tx-shortcode-form"});

			}
		});
	});

	
	// executes this when the DOM is ready
	jQuery(function(){
		// creates a form to be displayed everytime the button is clicked
		// you should achieve this using AJAX instead of direct html code like this
		var form_tx = jQuery('<div id="txshortcodes-form"><div id="tx-shortcode-form"><table id="txshortcodes-table" class="form-table">\
			<tr>\
				<td class="tx-heading"><h2>TX Shortcodes</h2></td>\
			</tr>\
			<tr>\
				<td class="shortcode-list"><span id="columns">Columns</span></td>\
			</tr>\
			<tr>\
				<td class="shortcode-list"><span id="deviders">Divider</span></td>\
			</tr>\
			<tr>\
				<td class="shortcode-list"><span id="spacer">Spacer</span></td>\
			</tr>\
			<tr>\
				<td class="shortcode-list"><span id="testimonials">Testimonials</span></td>\
			</tr>\
			<tr>\
				<td class="shortcode-list"><span id="buttons">Butons</span></td>\
			</tr>\
			<tr>\
				<td class="shortcode-list"><span id="calltoact">Call To Act</span></td>\
			</tr>\
			<tr>\
				<td class="shortcode-list"><span id="services">Services</span></td>\
			</tr>\
			<tr>\
				<td class="shortcode-list"><span id="portfolios">Portfolios</span></td>\
			</tr>\
			<tr>\
				<td class="shortcode-list"><span id="recentposts">Recent Posts</span></td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		</div></div>');
		
		var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;
		W = W - 80;
		H = H - 84;		
		
		var table = form_tx.find('#txshortcodes-table');
		form_tx.appendTo('body').hide();
		//form_tx.appendTo('body');
		
		//call columns
		form_tx.find('#columns').click(function(){			
			setTimeout(function() {
				jQuery.colorbox({inline:true, href:"#tx-column-form"});
			}, 500);
		});

		//call deviders
		form_tx.find('#deviders').click(function(){			
			setTimeout(function() {
				jQuery.colorbox({inline:true, href:"#tx-devider-form"});
			}, 500);
		});	
		
		//call deviders
		form_tx.find('#testimonials').click(function(){			
			setTimeout(function() {
				jQuery.colorbox({inline:true, href:"#tx-testimonial-form"});
			}, 500);
		});	
		
		//call buttons
		form_tx.find('#buttons').click(function(){			
			setTimeout(function() {
				jQuery.colorbox({inline:true, href:"#tx-button-form"});
			}, 500);
		});	
		
		//call calltoact
		form_tx.find('#calltoact').click(function(){			
			setTimeout(function() {
				jQuery.colorbox({inline:true, href:"#tx-calltoact-form"});
			}, 500);
		});
		
		//call Services
		form_tx.find('#services').click(function(){			
			setTimeout(function() {
				jQuery.colorbox({inline:true, href:"#tx-service-form"});
			}, 500);
		});									
				
		//call portfolio
		form_tx.find('#portfolios').click(function(){			
			setTimeout(function() {
				jQuery.colorbox({inline:true, href:"#tx-portfolio-form"});
			}, 500);
		});	
		
		//call blog
		form_tx.find('#recentposts').click(function(){			
			setTimeout(function() {
				jQuery.colorbox({inline:true, href:"#tx-blog-form"});
			}, 500);
		});	
		
		//call spacer
		form_tx.find('#spacer').click(function(){			
			setTimeout(function() {
				jQuery.colorbox({inline:true, href:"#tx-spacer-form"});
			}, 500);
		});						
		
		form_tx.find('.modal-close').click(function(){
			jQuery.colorbox.close();
		});
		
	});
	
	
	jQuery(function(){
		// creates a form to be displayed everytime the button is clicked
		// you should achieve this using AJAX instead of direct html code like this
		var form_portfolio = jQuery('<div id="portfolio-form"><div id="tx-portfolio-form"><table id="portfolio-table" class="form-table">\
			<tr>\
				<td class="tx-heading" colspan="2"><h2>Portfolio</h2></td>\
			</tr>\
			<tr>\
				<th><label for="portfolio-items">Number of item</label></th>\
				<td><input type="number" max="12" min="0" id="portfolio-items" name="items" value="4" /><br />\
				<small>Specify the number of portfolio items to show.</small></td>\
			</tr>\
			<tr>\
				<th><label for="portfolio-columns">Number of columns</label></th>\
				<td><input type="number" min="1" max="4" name="columns" id="portfolio-columns" value="4" /><br />\
				<small>Specify number of portfolio columns.</small>\
			</tr>\
			<tr>\
				<th><label for="portfolio-hidecat">Show/hide item category labels</label></th>\
				<td><select name="hidecat" id="portfolio-hidecat">\
					<option value="no">Show category labels</option>\
					<option value="yes">Hide category labels</option>\
				</select>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="portfolio-hideexcerpt">Show/hide item excerpt</label></th>\
				<td><select name="hideexcerpt" id="portfolio-hideexcerpt">\
					<option value="no">Show excerpt</option>\
					<option value="yes">Hide excerpt</option>\
				</select>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="portfolio-carusel">Show as carousel</label></th>\
				<td><select name="carusel" id="portfolio-carusel">\
					<option value="no">No</option>\
					<option value="yes">Yes</option>\
				</select><br />\
				<small>Number of items must be greater then number of column</small>\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="portfolio-submit" class="button-primary" value="Insert Portfolio" name="submit" />\
			<input type="button" id="modal-close" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		</div></div>');
		
		
		
		var table = form_portfolio.find('#portfolio-table');
		form_portfolio.appendTo('body').hide();
		
		
		// handles the click event of the submit button
		form_portfolio.find('#portfolio-submit').click(function(){

			var number_of_item = table.find('#portfolio-items').val(); 
			var number_of_column = table.find('#portfolio-columns').val(); 
			var hide_cat = table.find('#portfolio-hidecat').val();
			var hide_excerpt = table.find('#portfolio-hideexcerpt').val();
			var show_carusel = table.find('#portfolio-carusel').val(); 			
			
			
			var shortcode = '[tx_portfolio items="'+number_of_item+'" columns="'+number_of_column+'" hide_cat="'+hide_cat+'" hide_excerpt="'+hide_excerpt+'" carousel="'+show_carusel+'"]<br/>';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			jQuery.colorbox.close();
		});
		


		form_portfolio.find('#modal-close').click(function(){
			jQuery.colorbox.close();
		});	
	
	});	
	

	/*
	* Blog Posts
	*/	

	jQuery(function(){
		// creates a form to be displayed everytime the button is clicked
		// you should achieve this using AJAX instead of direct html code like this
		var form_blog = jQuery('<div id="blog-form" class="tx-sh-form"><div id="tx-blog-form"><table id="blog-table" class="form-table">\
			<tr>\
				<td class="tx-heading" colspan="2"><h2>Recent Posts</h2></td>\
			</tr>\
			<tr>\
				<th><label for="blog-ids">Category Id (optional)</label></th>\
				<td><input type="text" name="ids" id="blog-ids" value="" /><br />\
				<small>Add ids of categories to filter, keep it blank for all categories</small>\
			</tr>\
			<tr>\
				<th><label for="blog-items">Number of item</label></th>\
				<td><input type="number" max="12" min="0" id="blog-items" name="items" value="4" /><br />\
				<small>Specify the number of recent posts to show.</small></td>\
			</tr>\
			<tr>\
				<th><label for="blog-columns">Number of columns</label></th>\
				<td><input type="number" min="1" max="4" name="columns" id="blog-columns" value="4" /><br />\
				<small>Specify number of columns.</small>\
			</tr>\
			<tr>\
				<th><label for="blog-hidecat">Show/hide item category labels</label></th>\
				<td><select name="hidecat" id="blog-hidecat">\
					<option value="show">Show category labels</option>\
					<option value="hide">Hide category labels</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="blog-carusel">Show as carousel</label></th>\
				<td><select name="carusel" id="blog-carusel">\
					<option value="no">No</option>\
					<option value="yes">Yes</option>\
				</select><br />\
				<small>Number of items must be greater then number of column</small>\
				</td>\
			</tr>\
			</table>\
		<p class="submit">\
			<input type="button" id="blog-submit" class="button-primary" value="Insert Posts" name="submit" />\
			<input type="button" id="modal-close" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		</div></div>');
		
		
		
		var table = form_blog.find('#blog-table');
		form_blog.appendTo('body').hide();
		
		
		// handles the click event of the submit button
		form_blog.find('#blog-submit').click(function(){

			var number_of_item = table.find('#blog-items').val(); 
			var number_of_column = table.find('#blog-columns').val();
			var show_hide_cat = table.find('#blog-hidecat').val();
			var category_id = table.find('#blog-ids').val();
			var show_carusel = table.find('#blog-carusel').val(); 			
			
			var shortcode = '[tx_blog items="'+number_of_item+'" columns="'+number_of_column+'" showcat="'+show_hide_cat+'" category_id="'+category_id+'" carousel="'+show_carusel+'"]<br/>';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			jQuery.colorbox.close();
		});
		
		form_blog.find('#modal-close').click(function(){
			jQuery.colorbox.close();
		});	
	
	});		
	
	
	/*
	* Columns form
	*/
	jQuery(function(){
		// creates a form to be displayed everytime the button is clicked
		// you should achieve this using AJAX instead of direct html code like this
		var form_column = jQuery('<div id="column-form" class="tx-sh-form"><div id="tx-column-form"><table id="column-table" class="form-table">\
			<tr>\
				<td class="tx-heading" colspan="2"><h2>Columns</h2></td>\
			</tr>\
			<tr>\
				<th><label for="column-size">Column Size</label></th>\
				<td><select name="size" id="column-size">\
					<option value="1/2">2 columns in a row</option>\
					<option value="1/3">3 columns in a row</option>\
					<option value="1/4">4 columns in a row</option>\
				</select><br />\
				<small>specify the column size, you can fruther manually edit them, 2/3 and 3/4 also can be used.</small></td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="column-submit" class="button-primary" value="Insert Columns" name="submit" />\
			<input type="button" id="modal-close" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		<div class="tnext-bottom-lebel">TemplatesNext Shortcodes</div>\
		</div></div>');
		
		var table = form_column.find('#column-table');
		form_column.appendTo('body').hide();
		
		// handles the click event of the submit button
		form_column.find('#column-submit').click(function(){
			
			var columns = table.find('#column-size').val(); 	
			var shortcode = '[tx_row]<br/>';
			
			if(columns=='1/2')
			{
				shortcode += '[tx_column size="1/2"]Content[/tx_column]<br/>[tx_column size="1/2"]Content[/tx_column]';
			}else if(columns=='1/3')
			{
				shortcode += '[tx_column size="1/3"]Content[/tx_column]<br/>[tx_column size="1/3"]Content[/tx_column]<br/>[tx_column size="1/3"]Content[/tx_column]';
			} else if(columns=='1/4')
			{
				shortcode += '[tx_column size="1/4"]Content[/tx_column]<br/>[tx_column size="1/4"]Content[/tx_column]<br/>[tx_column size="1/4"]Content[/tx_column]<br/>[tx_column size="1/4"]Content[/tx_column]';
			}
			
			shortcode += '<br/>[/tx_row]';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			jQuery.colorbox.close();
		});

		form_column.find('#modal-close').click(function(){
			jQuery.colorbox.close();
		});	
			
	});	
	
	
	/*
	* deviders form
	*/
	jQuery(function(){
		var form_devider = jQuery('<div id="devider-form" class="tx-sh-form"><div id="tx-devider-form"><table id="devider-table" class="form-table">\
			<tr>\
				<td class="tx-heading" colspan="2"><h2>Dividers</h2></td>\
			</tr>\
			<tr>\
				<th><label for="devider-style">Divider Style</label></th>\
				<td><select name="style" id="devider-style">\
					<option value="default">Default</option>\
				</select><br />\
				<small>specify the divider style</small></td>\
			</tr>\
            <tr>\
				<th><label for="devider-padding">Divider Margin</label></th>\
				<td><input type="number" name="padding" id="devider-padding" min="0" max="120" value="24" /><br />\
				<small>Top and bottom margin in px</small>\
			</tr>\
        </table>\
		<p class="submit">\
			<input type="button" id="devider-submit" class="button-primary" value="Insert Devider" name="submit" />\
			<input type="button" id="modal-close" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		<div class="tnext-bottom-lebel">TemplatesNext Shortcodes</div>\
		</div></div>');
		
		var table = form_devider.find('#devider-table');
		form_devider.appendTo('body').hide();
		
		// handles the click event of the submit button
		form_devider.find('#devider-submit').click(function(){
			
			var deviderpadding = table.find('#devider-padding').val(); 	
			var shortcode = '[tx_divider size="'+deviderpadding+'"]<br/>';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			jQuery.colorbox.close();
		});

		form_devider.find('#modal-close').click(function(){
			jQuery.colorbox.close();
		});	
			
	});	
	
	
	/*
	* testimonials form
	*/
	jQuery(function(){
		var form_testimonial = jQuery('<div id="testimonial-form" class="tx-sh-form"><div id="tx-testimonial-form"><table id="testimonial-table" class="form-table">\
			<tr>\
				<td class="tx-heading" colspan="2"><h2>Testimonials</h2></td>\
			</tr>\
			<tr>\
				<th><label for="testimonial-style">Testimonial Style</label></th>\
				<td><select name="style" id="testimonial-style">\
					<option value="default">Default</option>\
				</select><br />\
				<small>specify the testimonial style</small></td>\
			</tr>\
        </table>\
		<p class="submit">\
			<input type="button" id="testimonial-submit" class="button-primary" value="Insert Testimonials" name="submit" />\
			<input type="button" id="modal-close" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		<div class="tnext-bottom-lebel">TemplatesNext Shortcodes</div>\
		</div></div>');
		
		var table = form_testimonial.find('#testimonial-table');
		form_testimonial.appendTo('body').hide();
		
		// handles the click event of the submit button
		form_testimonial.find('#testimonial-submit').click(function(){
			
			var testimonial_style = table.find('#testimonial-style').val(); 	
			var shortcode = '[tx_testimonial style="'+testimonial_style+'"]<br/>';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			jQuery.colorbox.close();
		});

		form_testimonial.find('#modal-close').click(function(){
			jQuery.colorbox.close();
		});	
			
	});	
	
	
	/*
	* buttons form
	*/
	jQuery(function(){
		var form_button = jQuery('<div id="button-form" class="tx-sh-form"><div id="tx-button-form"><table id="button-table" class="form-table">\
			<tr>\
				<td class="tx-heading" colspan="2"><h2>Buttons</h2></td>\
			</tr>\
			<tr>\
				<th><label for="button-style">Button Style</label></th>\
				<td><select name="style" id="button-style">\
					<option value="default">Default</option>\
				</select><br />\
				<small>specify the button style</small></td>\
			</tr>\
			<tr>\
				<th><label for="button-text">Button text</label></th>\
				<td><input type="text" name="text" id="button-text" value="Know More.." /><br />\
				<small>specify the button text.</small>\
			</tr>\
			<tr>\
				<th><label for="button-url">Button url</label></th>\
				<td><input type="text" name="url" id="button-url" value="" /><br />\
				<small>specify the button url.</small>\
			</tr>\
			<tr>\
				<th><label for="button-color">Button Color</label></th>\
				<td><input type="text" class="color" name="color" id="button-color" value="">\<br />\
				<small>Select button background color</small></td>\
			</tr>\
			<tr>\
				<th><label for="button-textcolor">Button Text Color</label></th>\
				<td><input type="text" class="color" name="textcolor" id="button-textcolor" value="">\<br />\
				<small>Select button text color</small></td>\
			</tr>\
        </table>\
		<p class="submit">\
			<input type="button" id="button-submit" class="button-primary" value="Insert Button" name="submit" />\
			<input type="button" id="modal-close" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		<div class="tnext-bottom-lebel">TemplatesNext Shortcodes</div>\
		</div></div>');
		
		var table = form_button.find('#button-table');
		
		tx_color_picker(form_button.find('.color'));
		
		form_button.appendTo('body').hide();
		
		// handles the click event of the submit button
		form_button.find('#button-submit').click(function(){
			
			var button_style = table.find('#button-style').val();
			var button_text = table.find('#button-text').val();
			var button_url = table.find('#button-url').val();
			var button_color = table.find('#button-color').val();
			var button_textcolor = table.find('#button-textcolor').val();
			
			 	
			var shortcode = '[tx_button style="'+button_style+'" text="'+button_text+'" url="'+button_url+'" color="'+button_color+'" textcolor="'+button_textcolor+'"]';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			jQuery.colorbox.close();
		});
		
		form_button.find('#modal-close').click(function(){
			jQuery.colorbox.close();
		});	
			
	});	
	
	
	/*
	* calltoact form
	*/
	jQuery(function(){
		var form_calltoact = jQuery('<div id="calltoact-form" class="tx-sh-form"><div id="tx-calltoact-form"><table id="calltoact-table" class="form-table">\
			<tr>\
				<td class="tx-heading" colspan="2"><h2>Call To Act</h2></td>\
			</tr>\
			<tr>\
				<th><label for="calltoact-text">Call to act text</label></th>\
				<td><input type="text" name="text" id="calltoact-text" value="Call To Act Text" /><br />\
				<small>Specify the Call toa ct text.</small>\
			</tr>\
            <tr>\
				<th><label for="calltoact-button-text">Button text</label></th>\
				<td><input type="text" name="button-text" id="calltoact-button-text" value="Know More.." /><br />\
				<small>Specify the calltoact text.</small>\
			</tr>\
			<tr>\
				<th><label for="calltoact-url">Call to act url</label></th>\
				<td><input type="text" name="url" id="calltoact-url" value="" /><br />\
				<small>specify the calltoact button url.</small>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="button-submit" class="button-primary" value="Insert Call to act" name="submit" />\
			<input type="button" id="modal-close" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		<div class="tnext-bottom-lebel">TemplatesNext Shortcodes</div>\
		</div></div>');
		
		var table = form_calltoact.find('#calltoact-table');
		
		//tx_color_picker(form_calltoact.find('.color'));
		
		form_calltoact.appendTo('body').hide();
		
		// handles the click event of the submit button
		form_calltoact.find('#button-submit').click(function(){
			
			var calltoact_text = table.find('#calltoact-text').val();
			var calltoact_button_text = table.find('#calltoact-button-text').val();
			var calltoact_url = table.find('#calltoact-url').val();
	 	
			var shortcode = '[tx_calltoact button_text="'+calltoact_button_text+'" url="'+calltoact_url+'"]'+calltoact_text+'[/tx_calltoact]';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			jQuery.colorbox.close();
		});	
		form_calltoact.find('#modal-close').click(function(){
			jQuery.colorbox.close();
		});			
		
	});	
	
	
	/*
	* Services form
	*/
	jQuery(function(){
		var form_services = jQuery('<div id="services-form" class="tx-sh-form"><div id="tx-service-form"><table id="services-table" class="form-table">\
			<tr>\
				<td class="tx-heading" colspan="2"><h2>Services</h2></td>\
			</tr>\
			<tr>\
				<th><label for="services-title">Services Title</label></th>\
				<td><input type="text" name="title" id="services-title" value="Services Title" /><br />\
				<small>Specify the Call toa ct text.</small>\
			</tr>\
			<tr>\
				<th><label for="services-icon">Services Icons</label></th>\
				<td><div class="awedrop">'+tx_font_awesome_include('tx-fa-icons')+'</div><br /><input type="text" name="icon" id="services-icon" value="" /></td>\
			</tr>\
			<tr>\
				<th><label for="services-content">Services Text</label></th>\
				<td><textarea name="content" id="services-content">Services content</textarea><br />\
				<small>Services content</small>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="button-submit" class="button-primary" value="Insert Call to act" name="submit" />\
			<input type="button" id="modal-close" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		<div class="tnext-bottom-lebel">TemplatesNext Shortcodes</div>\
		</div></div>');
		
		var table = form_services.find('#services-table');
		
		form_services.appendTo('body').hide();
		
		// handles the click event of the submit button
		form_services.find('#button-submit').click(function(){
			
			var services_title = table.find('#services-title').val();
			var services_icon = table.find('#services-icon').val();
			var services_content = table.find('#services-content').val();
	 	
			var shortcode = '[tx_services title="'+services_title+'" icon="'+services_icon+'"]'+services_content+'[/tx_services]';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			jQuery.colorbox.close();
		});

		form_services.find('.tx-fa-icons .fa').click(function(){
			jQuery('.tx-fa-icons .active').removeClass('active');
			jQuery(this).addClass('active');
			//console.log( jQuery(this).data('value') );
			var tx_icon = jQuery(this).data('value');
			jQuery('#services-icon').val(tx_icon);
		});				
		
		form_services.find('#modal-close').click(function(){
			jQuery.colorbox.close();
		});			
		
	});	
					
	
	/*
	* spacer form
	*/
	jQuery(function(){
		var form_spacer = jQuery('<div id="spacer-form" class="tx-sh-form"><div id="tx-spacer-form"><table id="spacer-table" class="form-table">\
			<tr>\
				<td class="tx-heading" colspan="2"><h2>Spacer</h2></td>\
			</tr>\
			<tr>\
				<th><label for="spacer-size">Spacer Size (height in px)</label></th>\
				<td><input type="number" min="0" max="120" name="size" id="spacer-size" value="16" /><br />\
				<small>Use spacer to manage vertical gaps</small>\
			</tr>\
        </table>\
		<p class="submit">\
			<input type="button" id="spacer-submit" class="button-primary" value="Insert Spacer" name="submit" />\
			<input type="button" id="modal-close" class="modal-close button-primary" value="Cancel" name="Cancel" />\
		</p>\
		<div class="tnext-bottom-lebel">TemplatesNext Shortcodes</div>\
		</div></div>');
		
		var table = form_spacer.find('#spacer-table');
		form_spacer.appendTo('body').hide();
		
		// handles the click event of the submit button
		form_spacer.find('#spacer-submit').click(function(){
			
			var spacer_size = table.find('#spacer-size').val(); 	
			var shortcode = '[tx_spacer size="'+spacer_size+'"]<br/>';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			jQuery.colorbox.close();
		});

		form_spacer.find('#modal-close').click(function(){
			jQuery.colorbox.close();
		});	
			
	});		
			
	

})()


jQuery(window).resize( function() {
	tx_resize_thickbox();
});

function tx_resize_thickbox() {
	var TB_WIDTH;
	var TB_HEIGHT;
	jQuery(document).find('#TB_window').width( TB_WIDTH ).height( TB_HEIGHT ).css( 'margin-left', - TB_WIDTH / 2 );
}

