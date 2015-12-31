$(document).ready(function() {
$('.ryu').mouseenter(function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
});
$('.ryu').mouseleave(function() {
	$('.ryu-still').show();
	$('.ryu-ready').hide();

});

$('.ryu').mousedown(function(){
	$('.ryu-ready').hide();
	$('.ryu-throwing').show();
	$('.hadouken').show();
});
$('.ryu').mouseup(function(){
	$('.ryu-throwing').hide();
	$('.hadouken').hide();
	$('.ryu-ready').show();
});

});