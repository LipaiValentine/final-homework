$("#use-systems-logo-gellery").owlCarousel({
				items:10,
				loop: true,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 2000,
				responsive:{
					0:{
						items:3
					},
					500:{
						items:5
					},
					1000:{
						items:8
					}
				}
});
$("#our-partners-logo-gellery").owlCarousel({
	items: 5,
	loop: true,
	autoplay: true,
	smartSpeed: 500,
	autoplayTimeout: 3000,
	margin: 50,
	responsive:{
		0:{
			items:3,
			margin: 10
		},
		1000:{
			items:5,
			margin: 10
		}
	}
});
$(".bd-desc-tabs__bottom-logos-mobile").owlCarousel({
	items: 3,
	loop: true,
	autoplay: true,
	smartSpeed: 500,
	autoplayTimeout: 3000,
	margin: 20
});
$('#form').validate({
	rules:{
		name:{
			required: true,
			minlength: 2
		},
		email:{
			required: true,
			minlength: 3,
			email: true
		},
		password:{
			required: true,
			minlength: 6
		}
	},
	messages:{
		name:{
			required: 'Это обязательное поле',
			minlength: 'Не менее 2 символов'
		},
		email:{
			required: 'Это обязательное поле',
			minlength: 'Не менее 3 символов'
		},
		password:{				
			required: 'Это обязательное поле',
			minlength: 'Не менее 6 символов'
		}
	}
});
