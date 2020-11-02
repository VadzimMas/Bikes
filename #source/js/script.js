$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();


//SLIDER
let slider = document.querySelectorAll(".slider");
slider.forEach(el => {
	let sliderItem = new Glide(el, {
		type: 'carousel',
		perView: 1,
	});
	sliderItem.mount();
});
