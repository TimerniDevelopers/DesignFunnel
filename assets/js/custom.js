/*=========


Template Name: Portfolio -  HTML Template

=========*/

/*=========
----- JS INDEX -----

=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

	      // Magnific popup
          $('.video-icon').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'https://www.youtube.com/',
    
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
    
                },
                srcAction: 'iframe_src',
            }
         });  
        //  $(window).scroll(function () {
		// 	if ($(this).scrollTop() > 300) {
		// 		$('.sticky-top').css('top', '0px');
		// 	} else {
		// 		$('.sticky-top').css('top', '-100px');
		// 	}
		// });
		    

});