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