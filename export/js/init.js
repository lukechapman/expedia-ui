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
		side_offset: 0,
		bar_offset: 0,
		nav_offset: 0,
		content_offset: 0,
		side_fit: false,
		biggest_child: 0,
		setup: function(){
			
			// booking bar dock
			var bar = $('.booking-bar');
			site.docker.bar_offset = bar.position().top;
			var buffer = $('<div class="buffer" />');
			buffer.height(bar.outerHeight());
			buffer.insertAfter(bar);
			
			// side nav dock
			var wh = $(window).height();
			var side = $('.side-nav');
			site.docker.side_offset = side.position().top;
			
			var content = $('.main-content');
			site.docker.content_offset = ( content.offset().top + content.outerHeight() );
			
			$('.side-nav .children').each(function(){
				if($(this).outerHeight() > site.docker.biggest_child){
					site.docker.biggest_child = $(this).outerHeight();
				}
			});
			$('body').addClass('side-ready');
			
			site.docker.nav_offset = bar.outerHeight() + $('.sidebar').outerHeight();

			
			if( (site.docker.biggest_child + $('.sidebar').outerHeight()) < wh){
				site.docker.side_fit = true;
			}
			
			site.docker.ready = true;
			
		},
		
		init: function(st){
			
			// booking bar dock
			var bar = $('.booking-bar');
			if(typeof bar !== 'undefined' && bar.length && site.docker.ready){
				
				if(st >= site.docker.bar_offset){
					$('body').addClass('dock-bar');
				}else{
					$('body').removeClass('dock-bar');
				}
			
			}
			
			var side = $('.side-nav');
			
			
			if(typeof side !== 'undefined' && side.length && site.docker.ready && site.docker.side_fit){
				
				if(st >= site.docker.bar_offset){
					$('body').addClass('dock-side');
				}else{
					$('body').removeClass('dock-side');
				}

				var at_bottom = (site.docker.content_offset - (site.docker.nav_offset + site.docker.biggest_child));
				if( st >= at_bottom ){
					side.css({ 'position':'absolute','top':(at_bottom + bar.outerHeight() + parseInt($('.sidebar').css('padding-top'),10)) });
				}else{
					side.removeAttr('style');
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
			
			//nav accordion
			site.accordion();
			
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