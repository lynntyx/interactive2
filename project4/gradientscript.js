$(document).ready(function () {
  $('#scan').click(function () {
    $('body').addClass('scanning');
    $('button').html('<a href="sharpness.html">Next Treatment</a>')
    setTimeout(function () {
     $('body').removeClass('scanning');
    }, 20 * 1000);
  });
});

