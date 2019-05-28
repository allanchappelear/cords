// variables
//$('body').css('overflow', 'hidden');


//Build Characters for Intro Animation

function setUpCharacters() {
	var $sentences = $('.intro-debris');

  // Run for each sentence
  $sentences.each(function() {
  	var $sentence = $(this);
  	var newContent = '';

    // Go through all characters of the sentence
    for (i = 0; i < $sentence.text().length; i++) {
    	var substring = $sentence.text().substr(i, 1);

      // If we have a character, wrap it
      if (substring != " ") {
      	newContent += '<span>' + substring + '</span>';
      } else {
      	newContent += substring;
      } 
  }

    // Replace content
    $sentence.html(newContent); 
});
}

setUpCharacters();

//Check Viewport
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


$(window).on('load', function() {

	setTimeout(function(){
		$('#loader').fadeOut('slow');
	}, 1000);
	$('#section0 #header-intro').addClass('in');
	$('#header-intro')[0].play();
	//$('#section0 #header-intro')[0].play();
	setTimeout(function(){
		$('#fp-nav').addClass('in');
	}, 3000);
	//First Slide Animations
		
		
		setTimeout(function(){
			$('#section0 #debris').addClass('in');
		}, 1000);
		setTimeout(function(){
			$('#section0 #debris').fadeOut(1000);
		}, 6000);

		setTimeout(function(){
			$('#section0 p').addClass('in');

		}, 10000);

		setTimeout(function(){
			$('#section0 h1').addClass('in');
		}, 7000);
	
	
});





$(window).on('scroll', function(e) {
	var scroll = $(this).scrollTop();
	var opacity = 1 - (scroll / 1000);
	var headingParallax = -scroll / 6;
	$('#heading').css({transform: 'translateY(' + headingParallax +'px)'});
	$('p.lead').css({transform: 'translateY(' + headingParallax +'px)'});

	/*if (opacity > 0) {
		$('.header').css('opacity', opacity);

	}
	if (opacity < 0.2) {
		$('.header').fadeOut();
	} else {
		$('.header').fadeIn();
	}*/

	if ($('#section0').visible(true) || $('#section5').visible(true)) {
		$('#header-intro')[0].play();
	} else {
		$('#header-intro')[0].pause();
	};
	$(".is-animated").each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			setTimeout(function(){
				el.addClass("animated fadeInUp"); 
			}, 500);
		}
	});
	$(".debris").each(function(i, el) {
		var el = $(el);
		if ($('#section2').visible(true)) {
			el.addClass("show"); 
		}
	});
	$(".rebr-section").each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			setTimeout(function(){
				el.addClass("explode"); 
			}, 500);
			
		}
	});
	
});


$( document ).ready(function() {
	var inView = false;
	function isScrolledIntoView(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
	}

	$(window).scroll(function() {
		if (isScrolledIntoView('#myChart')) {
			if (inView) { return; }
			inView = true;
			var spaceObj = document.getElementById('myChart').getContext('2d');
			var myChart = new Chart(spaceObj, {
				type: 'line',
				data: {
					labels: ['1960', '1970', '1980', '1990', '2000', '2010'],
					datasets: [{
						label: '# Space Objects',
						data: [0, 100, 250, 500, 1200, 2000],
						backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			});
		} else {
			inView = false;  
		}
	});



    // FULL PAGE
    var myFullpage = new fullpage('#fullpage', {
    	licenseKey: '55EF54C5-79804EFB-8D4587F8-748A27E9',
    	anchors: ['Intro','History','Problem','Solution', 'Rentry'],
        //sectionsColor: ['#333', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Intro', 'History', 'The Problem', 'The Solution', 'Rentry'],
        //scrollOverflow: true,
        css3: true,
        showActiveTooltip: true,
  		//scrollBar: true,
  		autoScrolling:false,
  		//autoScrolling: true,
		//normalScrollElements: '#section0, #section1, #section2, #section3, #section4',
		//scrollOverflow: false,
		fadingEffect: true,
		fitToSection:false,
		//normalScrollElements: '#section0, #section1',

		
	});

		
		
		
	    // Second Slide Animations


	    

	    var byCountryx = document.getElementById('byCountry').getContext('2d');
	    var byCountry = new Chart(byCountryx, {
	    	type: 'doughnut',
	    	data: {
	    		labels: ['US', 'China', 'Russia', 'Multinational', 'Japan', 'UK'],
	    		datasets: [{
	    			label: 'Space Objects By Country',
	    			data: [830, 280, 140, 145, 75, 54],
	    			backgroundColor: [
	    			'rgba(255, 99, 132, 0.2)',
	    			'rgba(54, 162, 235, 0.2)',
	    			'rgba(255, 206, 86, 0.2)',
	    			'rgba(75, 192, 192, 0.2)',
	    			'rgba(153, 102, 255, 0.2)',
	    			'rgba(255, 159, 64, 0.2)'
	    			],
	    			borderColor: [
	    			'rgba(255, 99, 132, 1)',
	    			'rgba(54, 162, 235, 1)',
	    			'rgba(255, 206, 86, 1)',
	    			'rgba(75, 192, 192, 1)',
	    			'rgba(153, 102, 255, 1)',
	    			'rgba(255, 159, 64, 1)'
	    			],
	    			borderWidth: 1
	    		}]
	    	},

	    });


	});
