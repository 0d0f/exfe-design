
$(document).ready(function(){
	var textframe_fold = true;
	
	$('.login .titlebar').click(function(){
			$('.login').toggleClass('login_unfold');
			$('.clearbtn').removeClass('clearbtn');
			$('.login .content .textframe').height('50');
			$('.portrait').css('display', 'none');
			textframe_fold = true;
			
	});
	
	
	$('.nextbtn').click(function(){
		if (textframe_fold)
		{
			$(this).addClass('clearbtn');
			$('.login .content .textframe').height('200');
			$('.portrait').css('display', 'block');
			textframe_fold = false;
		}
		else
		{
			$('.clearbtn').removeClass('clearbtn');
			$('.login .content .textframe').height('50');
			$('.portrait').css('display', 'none');
			textframe_fold = true;
		}
	});
});