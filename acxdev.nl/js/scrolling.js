$(document).ready(function() {	
	
	scrollState = 0;
	amsetting = 0;
	prsetting = 0;
	cosetting = 0;
	
	$.fn.isOnScreen = function(){
		
		var win = $(window);
		
		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();
		
		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();
		
		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
		
	};
	
	$(window).scroll(function() {
		
		$("#scrollCounter").html($(window).scrollTop());
		
		
		if( $(".ambox").isOnScreen() == true && amsetting == 0){
				
			$("#meicon").attr("src", "./img/meicon.png");
			amsetting = 1;
			
		} else if($(".ambox").isOnScreen() == false && amsetting == 1) {
			$("#meicon").attr("src", "./img/meicon_b.png");
			amsetting = 0;
		}
		
		if( $(".prbox").isOnScreen() == true && prsetting == 0){
				
			$("#proicon").attr("src", "./img/proicon.png");
			prsetting = 1;
			
		} else if($(".prbox").isOnScreen() == false && prsetting == 1) {
			$("#proicon").attr("src", "./img/proicon_b.png");
			prsetting = 0;
		}
		
		if( $(".cobox").isOnScreen() == true && cosetting == 0){
				
			$("#conicon").attr("src", "./img/conicon.png");
			cosetting = 1;
			
		} else if($(".cobox").isOnScreen() == false && cosetting == 1) {
			$("#conicon").attr("src", "./img/conicon_b.png");
			cosetting = 0;
		}
		
		
		if(scrollState == 1){
			if($(window).scrollTop() < 400 && scrollState == 1){
				$('#backToTop').animate( {top: '-66px'}, 800);
				scrollState = 0;
			}
		} else if (scrollState == 0){
			if($(window).scrollTop() > 400 && scrollState == 0){
				scrollState = 1;
				$('#backToTop').animate( {top: '0px'}, 800);
			}
		}
	
	});
});