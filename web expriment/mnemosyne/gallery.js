$(document).ready(function(){

	$(".pic_info_head").click(function(){
		$(".pic_info_body").animate({height:'toggle',opacity:'toggle'}, 300, function(){
			$(".pic_info_head").css({"border-radius" : $(".pic_info_body").css("display")=='none' ? "0px 0px 3px 3px" : "0px"});
		});
		
	})

	$(".pic_info_map_heading").click(function(){
		$(".pic_info_map").animate({height:"toggle",opacity:"toggle"},300,function(){
			$(".pic_info_map_container").css({"padding-bottom": $(".pic_info_map").css("display")=='none' ? "0px" : "10px"});
		});
	})

	$(".pic_info_conv_heading").click(function(){
		$(".pic_info_conv").animate({height:"toggle",opacity:"toggle"},300,function(){
			$(".pic_info_conv_container").css({"padding-bottom": $(".pic_info_conv").css("display")=='none' ? "0px" : "10px"});
		});
	})

	$("img").load(function(){
		if($(this).width() / $(this).height() > $(this).parent().width()/$(this).parent().height()){
			$(this).css("max-width","100%");
			$(this).height("auto");
			$(this).parent().width("80%");
		};
		if($(this).width() / $(this).height() < $(this).parent().width()/$(this).parent().height()){
			$(this).css("max-height","100%");
			$(this).width("auto");
			$(this).parent().height("80%");
		};
		$(this).parent().width($(this).width());
		$(this).parent().height($(this).height());
	});
	var dockPosition = $(window).height()/2 - 20;
	$('.dock').css('-webkit-transform', 'perspective(1000px) rotateY(0deg) translateY('+ dockPosition +'px)');
	
	$(window).resize(function(){
		dockPosition = $(window).height()/2 - 20;
		$('.dock').css('-webkit-transform', 'perspective(1000px) rotateY(0deg) translateY('+ dockPosition +'px)');
	})
});