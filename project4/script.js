$(document).ready(function(){

	$('#round1').mouseenter(function() {
 		$('body').css("background","orange");
 		$('#color').html('<p>Color Calibration</p>');
	});
	$('#round1').mouseleave(function() {
 		$('body').css("background","#f5f5f5");
 		$('#color').html('<div id="color">1</div>');
	});

	$('#round2').mouseenter(function() {
 		$('body').css("background-image","url(pics/gradient.png)");
 		
	});
	$('#round2').mouseleave(function() {
 		$('body').css("background","#f5f5f5");
	});

	$('#round3').mouseenter(function() {
 		$('body').css("background-image","url(pics/sharpness.png");	
	});
	$('#round3').mouseleave(function() {
 		$('body').css("background","#f5f5f5");
	});

});