// variables
$('body').css('overflow', 'hidden');


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
	$('#section0 #header-intro')[0].play();

	
});

$(window).on('scroll', function(e) {
	 var scroll = $(this).scrollTop();
            var opacity = 1 - (scroll / 1000);
            var headingParallax = -scroll / 6;
            $('#heading').css({transform: 'translateY(' + headingParallax +'px)'});
            $('p.lead').css({transform: 'translateY(' + headingParallax +'px)'});

            if (opacity > 0) {
                $('.header').css('opacity', opacity);
                
            }
	$(".is-animated").each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("animated fadeInUp"); 
		}
	});
	var inView = false;
	 if($('#chart').visible(true)) {
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
    console.log(inView);
	
});




$( document ).ready(function() {




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

		//First Slide Animations
		setTimeout(function(){
			$('#section0 #header-intro').addClass('in');
			$('#section0 #header-intro')[0].play();
		}, 1000);
		
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
		
		$('#header-intro').trigger('play');
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
