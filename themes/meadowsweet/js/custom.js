jQuery(window).load(function() {
  var width;
  jQuery(window).resize(function() {
    width = jQuery(window).width();
  });
  
  
jQuery('.cat .type li').each(function() {
   $this = jQuery('a', this);
   if($this.text() == 'All') {
     $this.addClass('active').attr('data-filter','*');
   }
 });
    
  var jQuerycontainer = jQuery('.portfolio-items');
  jQuerycontainer.isotope({
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
      jQuerycontainer.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
      return false;
  });
  
  jQuery('#myCarousel').carousel({ interval: 3000, cycle: true });
  jQuery('#myCarousel .control-next').click(function() {
    jQuery('#myCarousel').carousel('next');
  });
  jQuery('#myCarousel .control-prev').click(function() {
    jQuery('#myCarousel').carousel('prev');
  });
});
