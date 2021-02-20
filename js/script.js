$(document).ready(function() {
	$(window).on('load', function () {
	    var $preloader = $('#preloader'),
		$spinner   = $preloader.find('#preloader img');
	    $spinner.fadeOut();
	    $preloader.delay(1000).fadeOut();
	});


	// Убираем placeholder при клике в поле
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	//if ( /*window.innerWidth > 600 &*/ window.innerWidth < 1030 ) {
		$('.menu_button').on('click', function(e){
			if( !$(this).hasClass('active') ) {
				$(this).addClass('active');
				$(".main_menu").css('top', '0');
			}else{
				$(this).removeClass('active');
				$(".main_menu").css('top', '-100vh'); 
			}
		});
	//};

	// добавляем класс в пункты с подменю
	$('ul.menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	$('.submenu > ul > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu2');
		};
	});
	
	// animation
	$(window).on('load', function () {
		if ( window.innerWidth>0 ){
			$('#header').toggleClass("hidden");
			$('.main_section').toggleClass("hidden");
			$('#header').addClass('animated');
			$('#main_screen').addClass('animated');
		};
		$(window).on('load scroll', function(){
			$('.main_section').each(function(){
			if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
				$(this).addClass('animated');
			}
			});
		});
	});

	// tab switching
	$('.tab_buttons span').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons span', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});


	// Проверка заполнености полей формы
	$('.rf').each(function(){
		var form = $(this)
		//form.find('.rfield').addClass('empty_field');
	
		function checkInput(){
		  form.find('.rfield').each(function(){
			if($(this).val() != ''){
				$(this).addClass('filled_field');
			} else {
				$(this).removeClass('filled_field');
			}
		  });
		}
		setInterval(function(){
		  checkInput();
		},500);
	});

	$('.catalog_filter .filter_open').on('click', function(){
		if( $(this).parent().hasClass('show') ) {
			$(this).parent().removeClass('show');  
			$(this).parent().children('.filter_block').slideUp(500);
		} else {
			$(this).parent().addClass('show');  
			$(this).parent().children('.filter_block').slideDown(500);
		}
	});
	$('.catalog_filter .filter_close').on('click', function(){
		if( $('.catalog_filter').hasClass('show') ) {
			$('.catalog_filter').removeClass('show');  
			$('.catalog_filter').children('.filter_block').slideUp(500);
		}
	});




	$("[data-fancybox]").fancybox();


	$('.catalog_slider').slick({
	    slidesToShow: 2,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: false,
		responsive: [
			{
				breakpoint: 901,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.services_container .text_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '.services_container .image_slider',
		dots: false,
		fade: true,
		//infinite: false,
		//autoplay: true,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	$('.services_container .image_slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
		arrows: false,
		dots: false,
		//infinite: false,
		focusOnSelect: true,
	    asNavFor: '.services_container .text_slider',
		responsive: [
			{
				breakpoint: 1031,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.campaigns_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
		fade: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});


	$('.projects_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
		fade: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});

	$('.working_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
		fade: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});

	$('.product_images .main_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
		dots: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});

	$('.gallery_slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: false,
	    //centerMode: true,
		//vertical: true,
		focusOnSelect: true,
		responsive: [
			
			{
				breakpoint: 800,
				settings: {
				  	slidesToShow: 2,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.gallery_slider_2item').slick({
	    slidesToShow: 2,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: false,
	    //centerMode: true,
		//vertical: true,
		focusOnSelect: true,
		responsive: [
			
			{
				breakpoint: 800,
				settings: {
				  	slidesToShow: 2,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.gallery_slider_3item').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: false,
	    //centerMode: true,
		//vertical: true,
		focusOnSelect: true,
		responsive: [
			
			{
				breakpoint: 800,
				settings: {
				  	slidesToShow: 2,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

});

