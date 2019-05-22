// variables

$( document ).ready(function() {
  	var $isAnimatedSecond = $('#section1 .is-animated');
  	var $isAnimatedThird = $('#section2 .is-animated');
  	var $debris = $('#section2 .debris');


    

    // FULL PAGE
	var myFullpage = new fullpage('#fullpage', {
      licenseKey: '55EF54C5-79804EFB-8D4587F8-748A27E9',
      anchors: ['Intro','History','Problem','Solution', 'Rentry'],
        //sectionsColor: ['#333', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Intro', 'History', 'The Problem', 'The Solution', 'Rentry'],
        scrollOverflow: true,
        css3: true,
        onLeave: function(index, nextIndex, direction) {
        	$.fn.visible = function(partial) {
    
			      var $t            = $(this),
			          $w            = $(window),
			          viewTop       = $w.scrollTop(),
			          viewBottom    = viewTop + $w.height(),
			          _top          = $t.offset().top,
			          _bottom       = _top + $t.height(),
			          compareTop    = partial === true ? _bottom : _top,
			          compareBottom = partial === true ? _top : _bottom;
			    
			    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

			  };
        	if(index.index === 0 ) {
        		$isAnimatedSecond.addClass('animated fadeInUp'); 
		        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
		        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
		        $isAnimatedSecond.eq(3).css('animation-delay', '.9s');
   		        $isAnimatedSecond.eq(4).css('animation-delay', '1.2s');	

        	} else if(index.index == 1) {
		        $isAnimatedThird.addClass('animated fadeInUp').css('animation-delay', '.3s');
		        $isAnimatedThird.eq(1).css('animation-delay', '1s');
		        $isAnimatedThird.eq(2).css('animation-delay', '2s');
		       	$debris.addClass('show').css('animation-delay', '1s');
		       	$debris.eq(1).css('animation-delay', '3s');
		       	$debris.eq(2).css('animation-delay', '4s');
		       	$debris.eq(3).css('animation-delay', '6s');
		       	$debris.eq(4).css('animation-delay', '7s');
		       	$debris.eq(5).css('animation-delay', '8s');

		      }
        }
     });
	
		//First Slide Animations
	setTimeout(function(){
		$('#section0 #header-intro').addClass('in');
		$('#section0 #header-intro')[0].play();
	}, 1000);
	setTimeout(function(){
		$('#section0 p').addClass('in');
	}, 10000);

	setTimeout(function(){
		$('#section0 h1').addClass('in');
	}, 7000);
	
	$('#header-intro').trigger('play');
    // Second Slide Animations


});
