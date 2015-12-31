$(document).ready(function() {
function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
$('.ryu').mouseenter(function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
});
$('.ryu').mouseleave(function() {
	$('.ryu-still').show();
	$('.ryu-ready').hide();

});

$('.ryu').mousedown(function(){
	playHadouken();
	$('.ryu-ready').hide();
	$('.ryu-throwing').show();
	$('.hadouken').show().animate(
		{'left':'1020px'},
		500,
		function (){
			$(this).hide ();
			$(this).css('left','520px');
		}
		);
	});
$('.ryu').mouseup(function(){
	$('.ryu-throwing').hide();
	$('.hadouken').hide();
	$('.ryu-ready').show();
});

});