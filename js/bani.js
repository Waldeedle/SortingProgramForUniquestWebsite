$(function() {

	//configuration for opacity timer
	var opTimer = 500;

	//reference to specific buttons or links to animate on click
   	$("#sign, #link1, #link, #log, #btn1, #btn2, #btn3").click(function(){
   		$(this).animate({opacity: '0.5'}, opTimer, function() {
   			$(this).animate({opacity: '1'});
   		});
   	}); 
});