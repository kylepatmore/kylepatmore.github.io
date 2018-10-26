    $(function () {

    	var scrollConstant = 100;

    	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    		scrollConstant = 200;
    	}



    	var redirect = false;
    	$("#fonts").load("pages/fonts.html");
    	$(".footer").hide();


    	$('#about').click(function () {

    		$('html,body').animate({
    			scrollTop: $(".aboutMe").offset().top - scrollConstant
    		}, 'slow');

    	});

    	$('#resume').click(function () {

    		$('html,body').animate({
    			scrollTop: $(".resume").offset().top - scrollConstant
    		}, 'slow');

    	});

    	$('#portfolio').click(function () {
    		$('html,body').animate({
    			scrollTop: $(".portfolio").offset().top - scrollConstant
    		}, 'slow');

    	});

    	$('#contact').click(function () {
    		$('html,body').animate({
    			scrollTop: $(".contact").offset().top - scrollConstant
    		}, 'slow');
    	});

    	$('#top').click(function () {
    		$('html, body').animate({
    			scrollTop: 0
    		}, 'slow');
    	});





    	$(window).scroll(function () {
    		if ($(window).scrollTop() - 300 < $(".mainHeader").height()) {
    			$(".footer").fadeOut();
    		} else {
    			$(".footer").fadeIn();
    		}
    	});

    	// $('.mobileMenu').click(function () {
    	// 	if (document.getElementsByClassName("mainHeader")[0].style.display != "none") {
    	// 		$('.mainHeader').fadeOut("slow");
    	// 		$('.buttons').fadeIn("slow");
    	//
    	// 	} else {
    	// 		$('.mainHeader').fadeIn("slow");
    	// 		$('.buttons').fadeOut("slow");
    	// 	}
    	// });





    });

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    	showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    	showSlides(slideIndex = n);
    }

    function showSlides(n) {
    	var i;
    	var slides = document.getElementsByClassName("projects");
    	var dots = document.getElementsByClassName("dot");
    	if (n > slides.length) {
    		slideIndex = 1
    	}
    	if (n < 1) {
    		slideIndex = slides.length
    	}
    	for (i = 0; i < slides.length; i++) {
    		slides[i].style.display = "none";
    	}
    	for (i = 0; i < dots.length; i++) {
    		dots[i].className = dots[i].className.replace(" active", "");
    	}
    	slides[slideIndex - 1].style.display = "block";
    	dots[slideIndex - 1].className += " active";
    }
