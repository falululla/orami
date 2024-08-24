$(document).ready(function() {
	$('#banner-slider').owlCarousel({
	  items: 1,
	  margin: 0,
	  autoHeight: true,
	  loop:true,
	  autoplay:true,
	  smartSpeed: 1000,
	  autoplayTimeout:5000,
	  autoplayHoverPause:false
	});
	$('#product-slider').owlCarousel({
	  items: 4,
	  margin: 24,
	  autoHeight: true,
	  loop:true,
	  autoplay:true,
	  smartSpeed: 1000,
	  autoplayTimeout:3000,
	  autoplayHoverPause:false,
	  dots: false,
	  responsive:{
		  0:{
			  items:1
		  },
		  400:{
			  items:2
		  },
		  600:{
			  items:3
		  },
		  1024:{
			  items:4
		  }
	  }
	});
	$('#product_detail_slider').owlCarousel({
		items: 1,
		margin: 16,
		autoHeight: true,
		loop:true,
		autoplay:false,
		smartSpeed: 1000,
		autoplayHoverPause:false,
		nav:true
	});
	$('.cat-header a').click(function(){
		$('.cat-header a').removeClass("active");
		$(this).addClass("active");
  	});
  })
  AOS.init();