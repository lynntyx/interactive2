$(document).ready(function(){

	$('button').click(function() {
 		$('#gif').toggle();
 		$('button').html('<a href="gradient.html">Next Treatment</a>')
 		$('button').css('color','#880000');
	});

});