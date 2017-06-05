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
		phone:{
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
			minlength: 'Не менее 3 символов',
			email: 'Введите правильный e-mail'
		},
		phone:{				
			required: 'Это обязательное поле',
			minlength: 'Не менее 6 символов'
		}
	}
});

		$(document).ready(function(){
			var showButton = $('.show-items');
			var itemsBoxHeight = $('.results__item-box');
			var link =$('.menu-link');
			var link_active= $('.menu-link__active');
			var menu= $('.menu');
			var menu_active= $('.menu-active');
			var hide_menu= $('.menu a');
			var searchInput = $('.header__search a');

			link.click(function(){
				link.toggleClass('menu-link__active');
				menu.toggleClass('menu-active');
			});
			hide_menu.click(function(){
				link.toggleClass('menu-link__active');
				menu.toggleClass('menu-active');
			});

			showButton.click(function(){
				var target = $(this).attr('target');
				$(this).parents('.results__item-box').addClass('new-height-item-box');
				$(target).toggle(50);
				$(this).remove();
			});

			searchInput.click(function(){
				$('.header__search input').toggleClass('hidden');
			});
			$(".menu-scroll").on("click","a", function (event) {
					//отменяем стандартную обработку нажатия по ссылке
					event.preventDefault();

					//забираем идентификатор бока с атрибута href
					var id  = $(this).attr('href'),

					//узнаем высоту от начала страницы до блока на который ссылается якорь
					top = $(id).offset().top;
					
					//анимируем переход на расстояние - top за 1500 мс
					$('body,html').animate({scrollTop: top}, 1500);
				});
		});

		$('#myTabs a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		});

		$('.show-more-btn').click(function(){
			$('.results__items__show-more').show(1000);
			$(this).remove();
		});
