$(document).ready(function() {
  $("#bthome").bind('click',function () {
    $("html, body").animate({scrollTop:'0'},500);
});

$('#bthome').on('click', function() {
  $('html').scrollTop('0');
});
