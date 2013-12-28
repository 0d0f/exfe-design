var pin = false;
var currentSelect;
var currentHover;
$(document).ready(function(){

	$(".style-gallery-wrapper").resizable({handles:"e"});
	
	$(".style-gallery-cell").hover(function(){
		if (!pin) {
			currentHover = $(this).attr("id");
			$("#"+currentHover+"-description").show();
		}
		},function(){
			if (pin) {
				return;
			}
			else {
				currentHover = $(this).attr("id");
				$("#"+currentHover+"-description").hide();
			}
		}
	)
	
	$(".style-gallery-cell").click(function(){
		if (!pin) {
			pin = true;
			$(this).addClass("style-selected")
			currentSelect = $(this).attr("id");
			$("#"+currentSelect+"-description").show();		
		}
		else {
			if ($(this).attr("id")==currentSelect) {
				pin = false;
				$(this).removeClass("style-selected");
			}
			else {
				$("#"+currentSelect).removeClass("style-selected");
				$("#"+currentSelect+"-description").hide();
				$(this).addClass("style-selected");
				currentSelect = $(this).attr("id");
				$("#"+currentSelect+"-description").show();	
			}
		}
	})
})