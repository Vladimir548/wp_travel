function soccer_academy_gb_Menu_open() {
	jQuery(".side_gb_nav").addClass('show');
}
function soccer_academy_gb_Menu_close() {
	jQuery(".side_gb_nav").removeClass('show');
}

jQuery(function($){
  
	$('.gb_toggle').click(function () {
    soccer_academy_Keyboard_loop($('.side_gb_nav'));
  });

  jQuery(window).scroll(function(){
  	if (jQuery(this).scrollTop() > 50) {
  		jQuery('.scrollup').addClass('is-active');
  	} else {
    		jQuery('.scrollup').removeClass('is-active');
  	}
  });
  
  jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 120) {
      jQuery('.menu_header').addClass('fixed');
    } else {
        jQuery('.menu_header').removeClass('fixed');
    }
  });

  jQuery( document ).ready(function() {
  	jQuery('#soccer-academy-scroll-to-top').click(function (argument) {
  		jQuery("html, body").animate({
        scrollTop: 0
      }, 600);
  	})
  })

	jQuery(window).load(function() {
		jQuery(".preloader").delay(2000).fadeOut("slow");
	});

});

jQuery('document').ready(function(){
  var owl = jQuery('#player .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: true,
    autoplay :true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:false,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});