$("body").css("overflow","hidden"),$.fn.visible=function(e){var t=$(this),a=$(window),o=a.scrollTop(),n=o+a.height(),r=t.offset().top,i=r+t.height(),s=!0===e?i:r;return(!0===e?r:i)<=n&&s>=o},$(window).on("load",function(){setTimeout(function(){$("#loader").fadeOut("slow")},1e3),$("#section0 #header-intro").addClass("in"),$("#section0 #header-intro")[0].play()}),$(window).on("scroll",function(e){var t=$(this).scrollTop(),a=1-t/1e3,o=-t/6;$("#heading").css({transform:"translateY("+o+"px)"}),$("p.lead").css({transform:"translateY("+o+"px)"}),a>0&&$(".header").css("opacity",a),$(".is-animated").each(function(e,t){var t=$(t);t.visible(!0)&&t.addClass("animated fadeInUp")});var n=!1;if($("#chart").visible(!0)){if(n)return;n=!0;var r=document.getElementById("myChart").getContext("2d");new Chart(r,{type:"line",data:{labels:["1960","1970","1980","1990","2000","2010"],datasets:[{label:"# Space Objects",data:[0,100,250,500,1200,2e3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}else n=!1;console.log(n)}),$(document).ready(function(){new fullpage("#fullpage",{licenseKey:"55EF54C5-79804EFB-8D4587F8-748A27E9",anchors:["Intro","History","Problem","Solution","Rentry"],navigation:!0,navigationPosition:"left",navigationTooltips:["Intro","History","The Problem","The Solution","Rentry"],css3:!0,showActiveTooltip:!0,autoScrolling:!1,fadingEffect:!0,fitToSection:!1});setTimeout(function(){$("#section0 #header-intro").addClass("in"),$("#section0 #header-intro")[0].play()},1e3),setTimeout(function(){$("#section0 #debris").addClass("in")},1e3),setTimeout(function(){$("#section0 #debris").fadeOut(1e3)},6e3),setTimeout(function(){$("#section0 p").addClass("in")},1e4),setTimeout(function(){$("#section0 h1").addClass("in")},7e3),$("#header-intro").trigger("play");var e=document.getElementById("byCountry").getContext("2d");new Chart(e,{type:"doughnut",data:{labels:["US","China","Russia","Multinational","Japan","UK"],datasets:[{label:"Space Objects By Country",data:[830,280,140,145,75,54],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]}})});