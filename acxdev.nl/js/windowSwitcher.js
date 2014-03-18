function switchWindow(from,to){
	$("#"+from+"").hide("slow");
	
	$("#"+to+"").show("slow");
	
	if(to == 'profiel'){
		$("#page2").css("background-image","url(./img/field.jpg)");
	} else if(to == 'onep'){
		$("#page2").css("background-image","url(./img/one_piece.jpg)");
	} else if(to == 'tama') {
		$("#page2").css("background-image","url(./img/tiger.jpg)");
	}
}