
function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	jQuery('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            jQuery('html,body').animate({
              scrollTop: target.offset().top - 0
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Preloader
    ======================================*/
	
  	jQuery(window).load(function() {

   	// will first fade out the loading animation 
    	jQuery("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	jQuery("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 
    /*====================================
    Show Menu on Book
    ======================================*/
    jQuery(window).bind('scroll', function() {
        var navHeight = jQuery(window).height() - (150-8);
        if (jQuery(window).scrollTop() > navHeight) {
            jQuery('.navbar-default').addClass('on');
        } else {
            jQuery('.navbar-default').removeClass('on');
        }
    });
    
    jQuery('[data-spy="scroll"]').each(function () {
      var $spy = jQuery(this).scrollspy('refresh')
    });


    jQuery('body').scrollspy({ target: '#navbar-scroll', offset: 80 });
    /*====================================
    Back to top
    ======================================*/
    jQuery(window).bind('scroll', function() {
        var navHeight = jQuery(window).height() - (150-8);
        if (jQuery(window).scrollTop() > navHeight) {
            jQuery('.back-to-top').addClass('active');
        } else {
            jQuery('.back-to-top').removeClass('active');
        }
    });

    jQuery('body').scrollspy({ 
        target: '.back-to-top',
        offset: 80
    })
//~ 
  	//~ /*====================================
    //~ Portfolio Isotope Filter
    //~ ======================================*/
    jQuery(window).load(function() {
        var $container = jQuery('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        jQuery('.cat a').click(function() {
            jQuery('.cat .active').removeClass('active');
            jQuery(this).addClass('active');
            var selector = jQuery(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    
    jQuery(document).ready(function() {
      jQuery("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 400,
        paginationSpeed : 500,
        stopOnHover: true,
        autoPlay: 3000,
        singleItem:true
        });
  	});


  	/*====================================
    WOW JS
    ======================================*/	

	new WOW().init();
	//smoothScroll
	//smoothScroll.init();


	
}());


}
main();
