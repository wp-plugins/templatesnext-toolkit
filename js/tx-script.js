jQuery(document).ready(function ($) {
	
		"use strict";
		
	
	
	//client carousel
	$('.tx-testimonials').each(function () {
		$(this).owlCarousel({
			autoPlay : 8000,
			stopOnHover : true,
			//navigation:true,
			paginationSpeed : 1000,
			goToFirstSpeed : 2000,
			singleItem : true,
			autoHeight : true,
			//navigationText:	["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"],
			//theme: "tx-custom-slider",
			addClassActive: true
		});
	});
	
	
	//blog and portfolio carousel
	$('.tx-carousel').each(function () {
	
		var _this = $('.tx-carousel');
		var car_columns = _this.data('columns');
			
		$(this).owlCarousel({
			items : car_columns,
			stopOnHover : true,
			//navigation:true,
			paginationSpeed : 1000,
			navigation : true,
			goToFirstSpeed : 2000,
			singleItem : false,
			autoHeight : true,
			//navigationText:	["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"],
			//theme: "tx-custom-slider",
			navigationText: ['<span class="genericon genericon-leftarrow"></span>','<span class="genericon genericon-rightarrow"></span>'],
			addClassActive: true,
			theme : "tx-owl-theme"
		});
	});
		
			
	// colorboxpopup
	$('.tx-colorbox').each(function () {
		$(this).colorbox();
	});
	
	// blog area masonry
	//if ( $('.tx-post-row').length > 0 )
	
	$(window).load(function(){		
		$('.tx-masonry').each(function () {
			$(this).masonry({});
		});
	});	
	
	/*
	$('.tx-blog').each(function () {
		
		console.log ('maso');
		
		var _this = $(this);
		var container_3 = document.querySelector('.tx-blog');
		var msnry_3 = new Masonry( container_3, {
		  //itemSelector: '.widget'
		});	
	});
	*/	
	
	


});

