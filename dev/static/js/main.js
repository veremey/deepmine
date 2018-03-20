$(document).ready(function () {
	// if($(document).width() >=700 ){
		// $('.screen').mCustomScrollbar({
		// 		scrollInertia: 5,
		// 		// mouseWheelPixels: 5
		// 	});
	 // }

	$('.aside').mCustomScrollbar({
				scrollInertia: 5
			});

	$('#full_page').fullpage({
		sectionSelector: '.screen',
		sectionsColor: ['#00214d', '#df3441', '#00214d', '#78b2df', '#ffffff', '#ffffff'],
	  fitToSection: false,
	  verticalCentered: false,
	  lockAnchors: true,
	  scrollingSpeed: 1200,
	  responsiveWidth: 700,
	  afterLoad: function(anchorLink, index) {
			if(index == 4) {
				$('.screen-4').mCustomScrollbar('scrollTo', 0, {
					scrollInertia: 0
				});
			} else if(index > 1) {
				$('.header').addClass('is-scroll');
			}
			else {
				$('.screen-4').mCustomScrollbar('scrollTo', 0, {
					scrollInertia: 5
				});
				$('.header').removeClass('is-scroll');
			}
		}

	});


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




$(document).ready(function () {
	/*- show footer -*/
	// var footerHeight = $('.page__footer').outerHeight();
	// $('.screen-last').css({'padding-bottom' : footerHeight});



	/*- menu -*/
	$('.js-menu').on('click', function () {
		$('.menu').toggleClass('is-active');
	});

	/*- -*/
	$(document).on('scroll', function () {
		var $top = $(document).scrollTop();
		if($top > 100) {
			$('.header').addClass('is-scroll');
		} else {
			$('.header').removeClass('is-scroll');
		}
	});

	/*- accordion -*/
	$('.accordion__title').on('click', function () {
		$(this).parent('.accordion__item').toggleClass('is-active');
	})

	select();

	/*- ui slider-*/
	if($('#slider').length){
	  var handle = $( "#cpu" );
	  $( "#slider" ).slider({
	    range: 'min',
	    max: 100,
	    value: 80,
	    create: function() {
	      handle.val( $( this ).slider( "value" ) + '%' );
	    },
	    slide: function( event, ui ) {
	      handle.val( ui.value  + '%');
	    }
	  });
	}

 	/* get checked calculate inp -*/

 	$('.calculator__field').on('click', function () {
 		var input = $(this).find('.calculator__input');
 		if(input.focus()){
 			$('.calculator__field').removeClass('is-active');
 			$(this).addClass('is-active');
 		}
 	});

 	$('[data-open]').on('click', function (e) {
 		e.preventDefault();
 		var $open = $(this).data('open');

 		$('.page__aside, .aside').removeClass('is-open');

 		setTimeout(function () {
 			$('.page__aside').addClass('is-open');
 			$('.' + $open).addClass('is-open');
 		}, 200);
 	});

 	$('[data-close]').on('click', function (e) {
 		e.preventDefault();
 		var $close = $(this).data('close');
 		$('.' + $close).removeClass('is-open');
 	});

});

/*- select -*/

function select() {
	$(".js-select").each(function(){
		var select_list = $(this).children(".js-select-list");
		var content = select_list.find("li").first().html();
		//$(this).find(".js-select-text").html(content);//.text(text);//content
		$(this).click(function(event){
			$(".js-filter").removeClass("is-active");
			$(".js-filter-list").hide();

				var $self = $(this);

				if ($(this).hasClass("is-active")) {
						setTimeout(function () {
							$self.removeClass('is-active');
						}, 400);
						select_list.slideUp("fast");
				} else {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").hide();
						select_list.slideDown("fast");
						$(this).addClass("is-active");
				}

			event.stopPropagation();
		});
		select_list.find("li").click(function(event) {
			var id = $(this).attr("data-id");
			var content = $(this).html();
			$(this).parent().parent().find(".js-select-text").html(content);
			$(this).parent().parent().find(".js-select-input").val(id);
			$(this).parent().hide();
			$(this).parents(".js-select").removeClass("is-active");
			event.stopPropagation();
		});
	});
}

// $(window).on('resize', function () {
// 	/*- show footer -*/
// 	var footerHeight = $('.page__footer').outerHeight();
// 	var boxHeight = $('.box').outerHeight();
// 	console.log(boxHeight);

// 	$('.screen-last').css({'padding-bottom' : footerHeight,
// 													'padding-top' : boxHeight});

// });

















//# sourceMappingURL=main.js.map
