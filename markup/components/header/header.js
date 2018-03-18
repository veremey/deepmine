
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
