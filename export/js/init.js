/*globals FastClick, is, google, globals, ScrollScope */

'use strict';

var delay;

var site = {
	
	setup: function(){
		
		// equal heights for boxes
		site.helpers.update_heights('.js-equal-heights');
		
		// create a scroll scope instance
		site.helpers.scroll_scope.init();
		
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
			
			$('.booking-form-wrap').height( $(window).height() - $('.booking-bar > ul').outerHeight() );
			
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
		
		// scroll to map and show overlay
		$('.js-goto-map').on('click', function(e){
			
			var idx = $(this).attr('data-number');
			
			if($('.google-map').length){
				$('html,body').stop().animate({ scrollTop: $('.google-map').offset().top - 100 }, 700, 'easeInOutExpo', function(){
					$('.pin-overlay').removeClass('show-overlay');
					$('.pin-'+idx).addClass('show-overlay');
				});
			}
			
			e.preventDefault();
			return false;
		});
		
		// sharethis button
		$('.social-sharethis').on('click', function(e){
			e.preventDefault();
			return false;
		});
			
	},
	
	google_map: function(){
		
		// using the google maps API v3: https://developers.google.com/maps/documentation/javascript/3.exp/reference with a custom OverayView class
		
		if(typeof globals.map_location !== 'undefined'){

			var ExpediaMarker = function(latlng, args) {
				this.latlng = new google.maps.LatLng(latlng.lat, latlng.lng);
				this.idx = args.number;
				this.image = args.image;
				this.address = args.address;
			};
			
			ExpediaMarker.prototype = new google.maps.OverlayView();
			
			ExpediaMarker.prototype.onAdd = function() {
				
				var self = this;
			
				var div = document.createElement('div');
				div.className = 'map-marker';
				
				// Create the img element and attach it to the div.
				var pin = document.createElement('span');
				pin.className = 'pin-obj';
				div.appendChild(pin);
				
				var num = document.createElement('span');
				num.className = 'pin-num';
				num.innerHTML = this.idx;
				div.appendChild(num);
				
				var overlay = document.createElement('div');
				overlay.className = 'pin-overlay pin-' + this.idx;
				
				var overlay_image = document.createElement('div');
				overlay_image.className = 'overlay-image';
				overlay_image.style.backgroundImage = 'url('+this.image+')';
				overlay.appendChild(overlay_image);
				
				var overlay_text = document.createElement('div');
				overlay_text.className = 'overlay-text';
				overlay_text.innerHTML = this.address;
				overlay.appendChild(overlay_text);
				
				div.appendChild(overlay);
				
				this.div_ = div;
				
				// Add the element to the "overlayLayer" pane.
				var panes = this.getPanes();
				panes.overlayMouseTarget.appendChild(div);
				
				google.maps.event.addDomListener(div, 'click', function(event) {
					$('.map-marker .pin-overlay').removeClass('show-overlay');
					$(event.target).siblings('.pin-overlay').addClass('show-overlay');
					google.maps.event.trigger(self, 'click');
				});
				
			};
			
			ExpediaMarker.prototype.draw = function() {
				
				var div = this.div_;
				
				var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
				if (point) {
					div.style.left = (point.x - 20) + 'px';
					div.style.top = (point.y - 40) + 'px';
				}
				
			};
		
			var map = new google.maps.Map(document.getElementById('google-map'), {
				center: globals.map_location,
				zoom: 14,
				scrollwheel: false,
				streetViewControl: false,
				mapTypeControl: false,
				panControl: false
			});
			
			var marker;
			
			if(typeof globals.map_markers !== 'undefined'){

				for(var i=0;i<globals.map_markers.length;i++){
					marker = new ExpediaMarker(globals.map_markers[i].location, {
						number: globals.map_markers[i].number,
						image: globals.map_markers[i].image,
						address: globals.map_markers[i].address
					});
					marker.setMap(map);
				}
				
			}else{
				marker = new google.maps.Marker({
					position: globals.map_location,
					map: map,
					title: ''
				});
				marker.setMap(map);
			}
		}

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
				if( window_width > 760 && (biggest_child + parent_height) < window_height && (biggest_child + parent_height) < content_wrap.outerHeight()){
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
					site.helpers.scroll_scope.activate();
				}else{
					$('body').removeClass('dock-bar');
					$('.js-buffer').hide();
					site.helpers.scroll_scope.deactivate();
				}
			
			}
		}
		
	},
	
	dropdowns: function(){
		
		// custom select dropdowns using SelectOrDie: https://github.com/vestman/Select-or-Die
		
		$('select').selectOrDie();
		
	},
	
	carousels: function(){
		
		// carousels using Owl Carousel: https://github.com/OwlFonk/OwlCarousel
		
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
				},
				onInitialized:function(event){
					site.helpers.update_heights(event.target);
				},
				onResized: function(event){
					site.helpers.update_heights(event.target);
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
				},
				onInitialized:function(event){
					site.helpers.update_heights(event.target);
				},
				onResized: function(event){
					site.helpers.update_heights(event.target);
				}
			});
		}
			
	},
	
	accordion: function(){
		
		// toggle sub menu children
		
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
		
		// using flexslider: https://github.com/woothemes/FlexSlider
		
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
	
	helpers: {
		// makes the heights of .box-items equal to the largest box for uniform sizing
		update_heights: function(parent){
			
			var biggest_box = 0;
			$(parent).find('.box-item').each(function(){
				
				var box_height = $(this).outerHeight();
				
				if(box_height > biggest_box){
					biggest_box = box_height;
				}
				
				$(parent).find('.box-item').height(biggest_box);
				
			});
		},
		
		// using Scroll Scope: http://eiskis.net/scroll-scope/
		scroll_scope: {
			instance: null,
			init: function(){
				this.instance = new ScrollScope();
			},
			activate: function(){
				this.instance.bind(document);
			},
			deactivate: function(){
				this.instance.unbind();
			}
		}
		
	},
	
	tabs: function(){
		
		$('.js-tab-toggle').on('click', function(e){
			
			$('.js-tab-toggle').parent().removeClass('active');
			$(this).parent().addClass('active');
			
			var section = $(this).attr('href');
			$('.js-tab-content').removeClass('active');
			$(section).addClass('active');
			
			e.preventDefault();
			return false;
			
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
			
			// nav accordion toggle
			site.accordion();
			
			// image sliders
			site.sliders();
			
			// custom select dropdowns
			site.dropdowns();
			
			// tabs
			site.tabs();
			
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
			
			// load google map
			site.google_map();
		
		});
		
		$(window).on('resize', function(){
			
			// check if docking is still available on resize
			clearTimeout(delay);
			delay = setTimeout(function(){
				site.bar_dock.setup();
				site.side_nav_dock.setup();
			},100);
				
		});
	}
	
};

site.init();