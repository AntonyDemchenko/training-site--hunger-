$(document).ready(function($){

	$("button.scrollto").click(function () {
	elementClick = jQuery(this).attr("href")
	destination = jQuery(elementClick).offset().top-0	;
	$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
	return false;
	});

	$('.menu-burger').click(function(event){
		$('.menu-burger, .header-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.lang-menu').detach().appendTo('.menu');
	});

	$('.header-menu__item').click(function(event) {
        $('.menu-burger, .header-menu').removeClass('active');
        $('body').removeClass('lock');
    });

	$('.specialties-slider').slick({
		dots:true,
  		// speed:1000,
  		// autoplay:true,
  		slidesToShow:1,
  		arrows:false,
  		// appendDots: $('.specialties'),
	});

	$('.menu-slider').slick({
		arrows:false,
		dots:true,
		appendDots:$(".menu-slider-dots"),
	});

	let columns = document.querySelectorAll('.menu-slider__column');
	let menuItem = document.querySelector('.menu-slider__position');

	for (let j = 1; j < columns.length; j++) {
		
		let i = 1;
		if (j < 4 ){
			i = 2
		};
		while (i < 8) {
			columns[j].append(menuItem.cloneNode(true));
			i++
		};
	};

	// for (let item of columns){
	// 	let i = 1;
	// 	while (i < 7) {
	// 		item.append(menuItem.cloneNode(true));
	// 		i++
	// 	};
	// }

	$(".gallery__watch").click(function () {

		$(this).addClass('gallery__watch_active');
		$(".gallery-popup").css({'opacity':'1', 'visibility':'visible'});
		$("body").css("overflow","hidden");

		let photoOrder = $('.gallery__watch').index($('.gallery__watch_active'));
		console.log(photoOrder);

		$('.gallery-popup__slider').slick({
			initialSlide:photoOrder,
			dots:true,
			// centerMode: true,
			responsive: [
			    {
			      breakpoint: 1025, 
			      settings: {
			        arrows:false,
			      }
			    },
			  ]
		});
	});

	$(".gallery-popup__exit").click(function () {

		$(".gallery__watch").removeClass('gallery__watch_active');
		$(".gallery-popup").css({'opacity':'0', 'visibility':'hidden'});
		$("body").css("overflow","visible")
				
	});
});