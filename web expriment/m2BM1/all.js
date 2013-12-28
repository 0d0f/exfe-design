$(document).ready(function(){
	$('.bar').click(function(){
		$('.circle-warpper').animate({left:"-244px"}, 900, 'easeInOutBack');
		$('.layer-3').delay(80).animate({
			opacity:"1",
			width:"542px",
			left:"-242px",	
			}, 700, 'easeInOutBack');
		$('.layer-2').delay(130).animate({
			opacity:"1",
			width:"562px",
			left:"-242px",	
			}, 700, 'easeInOutBack');
		$('.layer-1').delay(180).animate({
			opacity:"1",
			width:"562px",
			left:"-242px",	
			}, 700, 'easeInOutBack');
		$('.layer-0').delay(230).animate({
			opacity:"1",
			width:"562px",
			left:"-242px",	
			}, 700, 'easeInOutBack');
		$('.bg').delay(900, 'op').queue('op', function () {
				$(this).css('opacity', 1);
			}).dequeue('op');
		
		
	})
})