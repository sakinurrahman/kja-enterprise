(function ($) {
"use strict";


// owlCarousel
$('.top-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	nav:false,
	autoplay:true,
	dots:false,
	autoplayTimeout:3000,
	animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})

//Clients owlCarousel
$('.multi-item-carousel').owlCarousel({
    loop:true,
	margin:8,
	nav:true,
	dots:false,
	autoplay:true,
	autoplayTimeout:3000,
	navText:[$('.custom-slider-nav .custom-nav-prev'), $('.custom-slider-nav .custom-nav-next')],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1020:{
            items:4
        }
    }
})

//Clients owlCarousel
$('.featured-carousel').owlCarousel({
    loop:true,
	margin:15,
	nav:true,
	dots:false,
	autoplay:true,
	autoplayTimeout:3000,
	navText:[$('.featured-slider-nav .featured-nav-prev'), $('.featured-slider-nav .featured-nav-next')],
    responsive:{
        0:{
			items:1,
			nav:false,
			dots:true
        },
        767:{
            items:2
        },
        1020:{
            items:4
        }
    }
})


$('#navbar').click(function() {
	$('.menu-list').toggleClass('active');
});
// /* magnificPopup img view */
// $('.popup-image').magnificPopup({
// 	type: 'image',
// 	gallery: {
// 	  enabled: true
// 	}
// });

// /* magnificPopup video view */
// $('.popup-video').magnificPopup({
// 	type: 'iframe'
// });




// // scrollToTop
// $.scrollUp({
// 	scrollName: 'scrollUp', // Element ID
// 	topDistance: '300', // Distance from top before showing element (px)
// 	topSpeed: 300, // Speed back to top (ms)
// 	animation: 'fade', // Fade, slide, none
// 	animationInSpeed: 200, // Animation in speed (ms)
// 	animationOutSpeed: 200, // Animation out speed (ms)
// 	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
// 	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
// });

// // WOW active
// new WOW().init();


})(jQuery);