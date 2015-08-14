/*globals FastClick */

'use strict';

var site = {
	
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
	
	init: function(){
		$(function(){
			
			// removes click delay on touch devices
			FastClick.attach(document.body);
			
			// input events like clicks and mouseovers
			site.input_events();
			
		});
	}
	
};

site.init();