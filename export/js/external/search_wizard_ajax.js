(function($) {
	$.fn.ajax_wizard = function(options) {

		var opts = $.extend( {}, $.fn.ajax_wizard.defaults, options );
		
		
		path = opts.base_url + '/search_wizard.html';

		$.ajax({
		    timeout: 0,
		    cache: false,
		    url: path,
		    dataType: "html",
		    type: "GET",
		    success: function (html) {
		        
		    	$('#wizard-block-html').html(html);
		    	$.getScript(opts.base_url + "/search_wizard.js")
		    	.done(function(data, status, jqxhr) {
			    	console.log('loaded');
					$('#wizard-block-html').show();
			    	$('#wizard-block-loading').remove(); 
			    }).fail(function( jqxhr, settings, exception ) {
					console.log(exception);
				});
		    },
		    error: function (xhr, ajaxOptions, thrownError) {
		        console.log(xhr.status);
		        console.log(thrownError);
		    }
		});
    };

    $.fn.ajax_wizard.defaults = {
	    base_url: "",
	    modulePath: ""
	};
})(jQuery);