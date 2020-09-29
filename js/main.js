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

//Navigation Menu JS
$('#navbar').click(function() {
	$('.menu-list').toggleClass('active');
});

$('#navbar-close').click(function() {
	$('.menu-list').removeClass('active');
});

//Category menu js
$('#show-btn').click(function() {
	$('.mobile-category-list').addClass('show-category');
});
//Remove class
$('#btn-close').click(function() {
    $('.mobile-category-list').removeClass('show-category');
});


// WOW active
new WOW().init();


})(jQuery);