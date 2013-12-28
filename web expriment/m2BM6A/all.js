$(document).ready(function(){
	$('.manual').click(function(){
		$(this).toggleClass('manual-extend')
		$('.tri').toggleClass('tri-0')
		$('.tri-extend-0').toggleClass('tri-extend-1')
		$('.wave').toggleClass('wave-0')
		$('.content').toggleClass('content-1')
		
	})
})