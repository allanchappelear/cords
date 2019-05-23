// variables

$( document ).ready(function() {
  	var $isAnimatedSecond = $('#section1 .is-animated');
  	var $isAnimatedThird = $('#section2 .is-animated');
  	var $isAnimated4 = $('#section3 .is-animated');

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
      	showActiveTooltip: true,
  		scrollBar: false,
  		//autoScrolling: true,
		//normalScrollElements: '#section0, #section1, #section2, #section3, #section4',
		//scrollOverflow: false,
		fadingEffect: true,
		//normalScrollElements: '#section0, #section1',

        onLeave: function(index, nextIndex, direction) {
        	console.log(index);
        	if(index.anchor == "History") {
  				$('#section0 #header-intro')[0].play();
        	} else {
        		$('#section0 #header-intro')[0].pause();
        	}
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
		       	$debris.addClass('show').css('animation-delay', '.5s');
		       	$debris.eq(1).css('animation-delay', '1s');
		       	$debris.eq(2).css('animation-delay', '2s');
		       	$debris.eq(3).css('animation-delay', '3s');
		       	$debris.eq(4).css('animation-delay', '4s');
		       	$debris.eq(5).css('animation-delay', '5s');

		      } else if(index.index == 2) {
		        $isAnimated4.addClass('animated fadeInUp').css('animation-delay', '.3s');
		        $isAnimated4.eq(0).css('animation-delay', '.6s');

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

    
var ctx = document.getElementById('myChart').getContext('2d');
					var myChart = new Chart(ctx, {
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
