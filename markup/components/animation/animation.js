$(document).ready(function () {
	// if($(document).width() >=700 ){
		// $('.screen').mCustomScrollbar({
		// 		scrollInertia: 5,
		// 		// mouseWheelPixels: 5
		// 	});
	 // }

	$('.aside').mCustomScrollbar({
				scrollInertia: 5,
				mouseWheelPixels: 5
			});

	// $('#full_page').fullpage({
	// 	sectionSelector: '.screen',
	// 	sectionsColor: ['#00214d', '#df3441', '#00214d', '#78b2df', '#ffffff', '#ffffff'],
	//   fitToSection: false,
	//   verticalCentered: false,
	//   lockAnchors: true,
	//   scrollingSpeed: 1200,
	//   responsiveWidth: 700,
	//   afterLoad: function(anchorLink, index) {
	// 		if(index == 4) {
	// 			$('.screen-4').mCustomScrollbar('scrollTo', 0, {
	// 				scrollInertia: 0
	// 			});
	// 		} else if(index > 1) {
	// 			$('.header').addClass('is-scroll');
	// 		}
	// 		else {
	// 			$('.screen-4').mCustomScrollbar('scrollTo', 0, {
	// 				scrollInertia: 5
	// 			});
	// 			$('.header').removeClass('is-scroll');
	// 		}
	// 	}

	// });


	// function toNextSlide() {
	// 	$.fn.fullpage.moveSectionDown();
	// }

	// function toPrevSlide() {
	// 	$.fn.fullpage.moveSectionUp();
	// }

	// function parallax(el1, el2, scrollTop) {
	// 	el1.css('top', 90 - (scrollTop/20) + '%');
	// 	el2.css('top', 70 - (scrollTop/20) + '%');
	// }

	// function fixBlocks(el1, el2) {
	// 	el1.addClass('onScroll');
	// 	el2.addClass('onScroll');
	// }

	// function unfixBlocks(el1, el2) {
	// 	el1.removeClass('onScroll');
	// 	el2.removeClass('onScroll');
	// }

	// function toPosScrollbar(scrollInertia, pos) {
	// 	$('.screen-4').find('.wrap').mCustomScrollbar('scrollTo', pos, {
	// 		scrollInertia: scrollInertia
	// 	});
	// }



	// init
	// var controller = new ScrollMagic.Controller({
	// 	globalSceneOptions: {
	// 		triggerHook: 'onLeave'
	// 	}
	// });

	// // get all slides
	// var slides = document.querySelectorAll(".screen");
	// var er = document.querySelectorAll(".page__footer");

	// // create scene for every slide
	// for (var i=0; i<slides.length; i++) {

	// 	new ScrollMagic.Scene({
	// 			triggerElement: [slides[i], er]
	// 		})
	// 		.setPin([slides[i], er])
	// 		// .addIndicators() // add indicators (requires plugin)
	// 		.addTo(controller);
	// 	}

	// $('.wrap').mCustomScrollbar({
	// 	scrollInertia: 600
	// });
});
