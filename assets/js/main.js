$( document ).ready(function() {
	//First Slide Animations
	setTimeout(function(){
  		$('#section0 #header-intro').addClass('in');
  		$('#section0 #header-intro')[0].play();
	}, 2000);
	setTimeout(function(){
  		$('#section0 p').addClass('in');
	}, 1000);

	$('#section0 h1').addClass('in');
	
	



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