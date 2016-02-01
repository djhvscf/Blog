/* ==============================================
			Page loader
 =============================================== */
 
 $(window).load(function() {
	$(".loader-item").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
	});


/* ==============================================
   Sticky navigation
 =============================================== */

  $(window).load(function(){
          $("#navigation").sticky({ topSpacing: 0 });
        });


/* ==============================================
    Home Slider
 =============================================== */
 
    $(window).load(function() {
    $('.homeslider').flexslider({
        animation: "fade", 
		controlNav: false,
		directionNav: true,
		slideshowSpeed:12000,
    });
  });
  
  
	jQuery('#text-slider').bxSlider({
		mode: 'fade',
		pager: false,
		auto: true,
		controls: false
	});


	
/* ==============================================
			Mixitup portfolio
 =============================================== */
    
	   setTimeout(function () {
		   jQuery('#list').mixItUp({
				load: {
					filter: '.Javascript'
				},
				controls: {
					live: true
				}
			});
			$('#list').mixItUp('filter', '.JavaScript');
	   }, 2000);

	
/* ==============================================
	Magnific popup
 =============================================== */

$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});


/* ==============================================
    Testimonial carousel
 =============================================== */

	 $(".testimonials-carousel").owlCarousel({
	autoPlay: 5000,
	slideSpeed: 200,
	items: 1,
	itemsDesktop: [1199, 1],
	itemsDesktopSmall: [979, 1],
	itemsTablet: [768, 1],
	itemsMobile: [479, 1],
	autoHeight: true,
	navigation: false,
    });



	
/* ==============================================
			Smooth scroll
 =============================================== */
 
      (function($) { "use strict";
		$(".page-scroll a[href^='#']").on('click', function(e) {
		   e.preventDefault();
		   var hash = this.hash;
		   $('html, body').stop().animate({
			   scrollTop: $(hash).offset().top}, 2000, 'easeOutExpo');
		});
		 })(jQuery);

		$('.navbar-collapse ul li a').click(function(){ 
		$('.navbar-toggle:visible').click();
	   });	


/* ==============================================
			Scroll to top
 =============================================== */
	 
	$(window).scroll(function(){
                    if ($(this).scrollTop() > 100) {
                        $('.scrollup').fadeIn();
                    } else {
                        $('.scrollup').fadeOut();
                    }
                }); 
         
                $('.scrollup').click(function(){
                    $("html, body").animate({ scrollTop: 0 }, 2000);
                    return false;
                });
   


/* ==============================================
		Switcher
 =============================================== */

jQuery(function(){

		var demoSwitcher = jQuery('.demo-switcher');
		var currentColor = 'default';
		
		jQuery('body').addClass(currentColor);

		jQuery('.switcher-trigger').click(function(){
				
				if(demoSwitcher.css('left')=='0px'){
						demoSwitcher.animate({ "left": "-250px" }, "slow" );
				}else{
						demoSwitcher.animate({ "left": "0px" }, "slow" );
				}
		});
		
		setTimeout(function(){
				demoSwitcher.animate({ "left": "-250px" }, "slow" );
		}, 2000);
		
		
		jQuery('ul#switch-color a').click(function(){
		
				var color = jQuery(this).attr('rel');
		
				jQuery('body').removeClass(currentColor);
				jQuery('body').addClass(color);
				currentColor=color;
		});
		
		jQuery('#color-skin').bind('change', function () {
				var skin = jQuery('select[name=skin]').val()
				
				jQuery('body').removeClass(currentSkin);
				jQuery('body').addClass(skin);
				currentSkin=skin;
		});

		jQuery('.variations').bind('change', function () {
				var url = jQuery(this).val();
				if (url) {
						window.location = url;
				}
		});
});
