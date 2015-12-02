$(document).ready(function () {
  $('#scan').click(function () {
    $('body').addClass('scanning');
    $('button').html('<a href="sharpness.html">Next Treatment</a>');
    $('button').css('margin-top','2200px');
    $('button').css('margin-bottom','400px');
    $('button').css('color','#880000');
  });
});

