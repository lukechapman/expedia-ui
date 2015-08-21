/*globals FastClick, is */

'use strict';

var delay;

var site = {
	
	setup: function(){
		
	},
	
	input_events: function(){
		
		// toggle main nav
		$('.js-toggle-main-nav').on('click', function(e){
			$('body').toggleClass('show-main-nav');
			e.preventDefault();
			return false;
		});
		
		// input focus
		$('input').on('focusin', function(){
			$(this).parents('.field-wrap').addClass('focused');
		}).on('focusout', function(){
			$(this).parents('.field-wrap').removeClass('focused');
		});
		
		// dropdown toggle
		$('.js-dropdown').on('click', function(){
			$(this).parents('.js-dropdown-parent').toggleClass('show');
		});
		
		// booking form toggle
		$('.js-toggle-form').on('click', function(e){
			
			
			var form = $(this).attr('data-form');
			
			if($(this).parent('li').hasClass('active')){
				$('.booking-form-wrap').removeClass('active');
				$(this).parent('li').removeClass('active');
			}else{
				$('.js-toggle-form').parent('li').removeClass('active');
				$(this).parent('li').addClass('active');
				$('.booking-form-wrap').addClass('active');
				$('.booking-form .form').removeClass('active');
				$(form).addClass('active');
			}
			
			e.preventDefault();
			return false;
		});
		
		// close booking form
		$('.js-close-booking').on('click', function(e){
			$('.booking-form-wrap').removeClass('active');
			$('.js-toggle-form').parent('li').removeClass('active');
			e.preventDefault();
			return false;
		});
		
		// show/hide return date field
		$('.js-one-way').on('change', function(){
			console.log('changed');
			if($(this).is(':selected')){
				$('.js-return-date').hide();
			}else{
				$('.js-return-date').show();
			}
		});
		
		// toggle form advanced options
		$('.js-options-toggle').on('click', function(e){
			
			$(this).toggleClass('active');
			
			$(this).next('.js-options').toggle();
			
			e.preventDefault();
			return false;
		});
			
	},
	
	side_nav_dock: {
		ready: false,
		offset_top: 0,
		offset_bottom: 0,
		sticky_position: 0,
		el: '',
		reset: function(){
			if(this.el !== ''){
				this.el.removeAttr('style');
			}
			$('body').removeClass('side-ready dock-side');
			this.ready = false;
		},
		setup: function(){
			
			this.reset();
			
			// side nav
			var side_nav = $('.side-nav');
			this.el = side_nav;
			
			if(typeof side_nav !== 'undefined' && side_nav.length){
			
				var window_height = $(window).height();
				var window_width = $(window).width();
				var content_wrap = $('.main-content');
				var bar_height = $('.booking-bar').outerHeight();
				var parent_padding = parseInt(side_nav.parent().css('padding-top'),10);
				
				// set top offset
				var offset_top = side_nav.position().top - bar_height - parent_padding;
				this.offset_top = offset_top;
				
				// get biggest child menu height
				var biggest_child = 0;
				side_nav.find('.children').each(function(){
					if($(this).outerHeight() > biggest_child){
						biggest_child = $(this).outerHeight();
					}
				});
				
				// collapse children and get parent collapsed height
				$('body').addClass('side-ready');
				var parent_height = side_nav.parent().outerHeight();
				
				// content offset
				var content_offset = content_wrap.offset().top + content_wrap.outerHeight();
				
				// set bottom offset
				var offset_bottom = (content_offset - (bar_height + parent_height + biggest_child) );
				this.offset_bottom = offset_bottom;
				
				// set sticky position
				var sticky_position = (offset_bottom + bar_height + parent_padding);
				this.sticky_position = sticky_position;
				
				// check if sidebar exists and will fit docked within the viewport
				if( window_width > 760 && (biggest_child + parent_height) < window_height ){
					this.ready = true;
				}else{
					this.ready = false;
				}
				
			}else{
				this.ready = false;
			}
			
		},
		run: function(scroll_top){
			
			// check if ready
			if(this.ready){
			
				// dock / undock
				if( scroll_top >= this.offset_top ){
					$('body').addClass('dock-side');
				}else{
					$('body').removeClass('dock-side');
				}
				
				// stick / unstick
				if( scroll_top >= this.offset_bottom ){
					this.el.css({ 'position':'absolute','top': this.sticky_position });
				}else{
					this.el.removeAttr('style');
				}

			}
			
		}
	},
	
	bar_dock: {
		
		ready: false,
		offset_top: 0,
		reset: function(){
			$('body').removeClass('dock-bar');
			$('.js-buffer').remove();
			this.ready = false;
		},
		setup: function(){
			
			this.reset();
			
			var bar = $('.booking-bar');
			
			if(typeof bar !== 'undefined' && bar.length){
			
				var window_width = $(window).width();
				this.offset_top = bar.position().top;
				// create buffer the same size to prevent content jump
				var buffer = $('<div class="js-buffer" />');
				buffer.height(bar.outerHeight());
				buffer.insertAfter(bar);
				buffer.hide();
				
				if(window_width > 760){
					this.ready = true;
				}else{
					this.ready = false;
				}
				
			}else{
				this.ready = false;
			}
			
		},
		run: function(scroll_top){
			
			// check if ready
			if(this.ready){
				
				// dock / undock
				if(scroll_top >= this.offset_top){
					$('body').addClass('dock-bar');
					$('.js-buffer').show();
				}else{
					$('body').removeClass('dock-bar');
					$('.js-buffer').hide();
				}
			
			}
		}
		
	},
	
	dropdowns: function(){
		
		$('select').selectOrDie();
		
	},
	
	carousels: function(){
		
		if( $('.carousel-is-module').length ){
			$('.carousel-is-module').owlCarousel({
				margin:20,
				nav:true,
				navText: ['<span class="icon icon-angle-left"></span>','<span class="icon icon-angle-right"></span>'],
				responsive: {
					0: {
						items: 1,
						dots: false,
						stagePadding: 40
					},
					480: {
						items: 2
					},
					720: {
						items: 3
					},
					1020: {
						items: 4
					}
				}
			});
		}
		
		if( $('.carousel-in-content').length ){
			$('.carousel-in-content').owlCarousel({
				margin:20,
				nav:true,
				navText: ['<span class="icon icon-angle-left"></span>','<span class="icon icon-angle-right"></span>'],
				responsive: {
					0: {
						items: 1,
						dots: false,
						stagePadding: 40
					},
					480: {
						items: 2
					},
					720: {
						items: 2
					},
					1020: {
						items: 3
					}
				}
			});
		}
			
	},
	
	accordion: function(){
		
		$('.has-children > a').on('click', function(e){
			
			if($(this).siblings('.children').hasClass('show-children')){
				$(this).siblings('.children').removeClass('show-children');
			}else{
				$('.show-children').removeClass('show-children');
				$(this).siblings('.children').addClass('show-children');
			}
			
			e.preventDefault();
			return false;
		});
		
	},
	
	sliders: function(){
		
		$('.gallery-module').each(function(){
			
			var slider = $(this).find('.image-gallery');
			var thumbs = $(this).find('.image-gallery-thumbs');
		
			thumbs.flexslider({
				animation: 'slide',
			    controlNav: false,
			    animationLoop: false,
			    slideshow: false,
			    itemWidth: 165,
			    itemMargin: 0,
			    asNavFor: slider[0],
			    nextText: '<span class="icon-angle-right"></span>',
			    prevText: '<span class="icon-angle-left"></span>'
			});
			
			slider.flexslider({
			    animation: 'slide',
			    controlNav: false,
			    directionNav: false,
			    animationLoop: false,
			    slideshow: false,
			    sync: thumbs[0]
			});
		
		});
		
	},
	
	init: function(){
		
		// jquery loaded
		$(function(){
			
			// removes click delay on touch devices
			FastClick.attach(document.body);
			
			// setup
			site.setup();
			
			// input events like clicks and mouseovers
			site.input_events();
			
			// carousels
			site.carousels();
			
			//nav accordion
			site.accordion();
			
			// image sliders
			site.sliders();
			
			// custom select dropdowns
			site.dropdowns();
			
		});
		
		// window events
		$(window).on('scroll', function(){
			
			var st = $(window).scrollTop();
			
			// dock booking bar and side nav for desktop only (possibly tablet too)
			if( is.desktop() ){
				site.bar_dock.run(st);
				site.side_nav_dock.run(st);
			}
			
		});
		
		$(window).on('load', function(){
			
			// setup docking
			site.bar_dock.setup();
			// timeout to allow for flexslider to load
			setTimeout(function(){
				site.side_nav_dock.setup();
			},100);
		
		});
		
		$(window).on('resize', function(){
	
			clearTimeout(delay);
			delay = setTimeout(function(){
				site.bar_dock.setup();
				site.side_nav_dock.setup();
			},100);
				
		});
	}
	
};

site.init();