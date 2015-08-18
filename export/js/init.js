/*globals FastClick, is */

'use strict';

var site = {
	
	setup: function(){
		
		// setup docking
		site.docker.setup();
		
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
			
	},
	
	docker: {
		
		ready: false,
		offset: 0,
		
		setup: function(){
			
			var el = $('.booking-bar');
			site.docker.offset = el.position().top;
			
			var buffer = $('<div class="buffer" />');
			buffer.height(el.outerHeight());
			buffer.insertAfter(el);
			
			site.docker.ready = true;
			
		},
		
		init: function(st){
			
			var el = $('.booking-bar');
			
			if(typeof el !== 'undefined' && el.length && site.docker.ready){
				
				if(st >= site.docker.offset){
					$('body').addClass('dock-bar');
				}else{
					$('body').removeClass('dock-bar');
				}
			
			}
		}
		
	},
	
	carousels: function(){
		
		if( $('.carousel-guides').length ){
			$('.carousel-guides').owlCarousel({
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
		
		if( $('.carousel-guides-content').length ){
			$('.carousel-guides-content').owlCarousel({
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
	
	init: function(){
		$(function(){
			
			// removes click delay on touch devices
			FastClick.attach(document.body);
			
			// input events like clicks and mouseovers
			site.input_events();
			
			// carousels
			site.carousels();
			
			// setup
			site.setup();
			
		});
		
		$(window).on('scroll', function(){
			
			var st = $(window).scrollTop();
			
			// dock booking bar
			if( is.desktop() ){
				site.docker.init(st);
			}
			
		});
	}
	
};

site.init();