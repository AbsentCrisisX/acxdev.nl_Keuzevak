$(document).ready(function() {
	
	half_window_height = $(window).height() / 2;
	
	icon_nav_height = "-" + (($("#icon_nav").height() + 20) / 2) + "px";
	index_article_height = "-" + (($("#index article").height() + 10) / 2) + "px";
	
	$("#icon_nav").draggable();
	$("#icon_nav").css({ "top" : half_window_height, "margin-top" : icon_nav_height });
	$("#index article").css({ "top" : half_window_height, "margin-top" : index_article_height });
	
});