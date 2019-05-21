$( document ).ready(function() {
	//First Slide Animations
	setTimeout(function(){
  		$('#section0 #header-intro').addClass('in');
  		$('#section0 #header-intro')[0].play();
	}, 1);
	setTimeout(function(){
  		$('#section0 p').addClass('in');
	}, 9000);

	setTimeout(function(){
  		$('#section0 h1').addClass('in');
	}, 6000);

	
	
	



$('#header-intro').trigger('play');
// Check if items are in viewport
$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};

	// For css animations
	$(window).on('resize scroll', function() {

		$(function() {
    $('body').on("mousewheel", function() {
        console.log($(document).scrollTop());
    });
});


		if($('#section0').hasClass('active')) {
	  		$('#section0 #header-intro')[0].play();
		} else {
			$('#section0 #header-intro')[0].pause();
		}
		$('.animate').each(function() {
			if ($(this).isInViewport()) {
				console.log("DH");
				$(this).addClass('in');
			} else {
				//$(this).pause();
			}
		});
	});

});