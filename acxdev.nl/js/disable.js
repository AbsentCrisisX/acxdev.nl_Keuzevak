$(document).ready(function() {	

	function disableF5(e) { 
		if (e.which == 116){ 
			e.preventDefault();
		}
	};
	
	$(document).bind("keydown", disableF5);
	
});