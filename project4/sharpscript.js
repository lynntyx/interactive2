$(document).ready(function(){

	$('button').click(function() {
 		$('#toppic').toggle();
 		$('#toppic').addClass('moving')
 		$('#botpic').toggle();
 		$('button').html('<a href="index.html">Homepage</a>')
 		$('button').css('margin-top','2700px');
    	$('button').css('margin-bottom','60px');
    	$('button').css('color','#880000');
    	$('#congratulations').toggle();
	});

});