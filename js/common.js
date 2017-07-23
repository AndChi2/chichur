$(document).ready(function() {

	$("#portfolio_grid").mixItUp();    // сортировка плиток портфолио

	$(".s_portfolio li").click(function() {   // Смена класса Портфолио
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});  // Зум на аватарку
	$(".popup_content").magnificPopup({         // Зум на плитку Портфолио
		type:"inline",
		midClick: true
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");  //

	$(".animation_1").animated("flipInY", "fadeOutDown");    // анимация аватарки
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");   // анимация описания
	$(".animation_3").animated("fadeInRight", "fadeOutDown");   // анимация `О себе`

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");   // анимация Резюме/Работа
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");   // анимация Резюме/Учеба

	function heightDetect() {
		$(".main_head").css("height", $(window).height());    // высота во весь экран
	};
	heightDetect();
	$(window).resize(function() {         // подгонка при изминении экрана
		heightDetect();
	});

	$(".toggle_mnu").click(function() {      // Меню
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio_item").each(function(i) {                 // Добавляем id и href плиткам Портфолио
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();   // Обработка валидатора формы

	$(".top_mnu ul a").mPageScroll2id();    // Скролинг якоря меню

});
$(window).load(function() {      // Preloader

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");    // анимация "Андрей Ч"
	$(".top_text p").animated("fadeInUp", "fadeOutDown");     // анимация должности

}); 