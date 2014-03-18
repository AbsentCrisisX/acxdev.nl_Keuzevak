$(document).ready(function() {

	function anchor(point, speed){
		var aTag = $("a[name='"+ point +"']");
		$('html,body').animate({scrollTop: aTag.offset().top},speed);
	}
	
	$(".backToTop").click(function() {
	   anchor('indexAnchor', 1000);
	});
	
	$(".about_me").click(function() {
	   anchor('amAnchor', 1000);
	});
	
	$(".profile").click(function() {
	   anchor('prAnchor', 1000);
	});
	
	$(".contact").click(function() {
	   anchor('coAnchor', 1000);
	});

});