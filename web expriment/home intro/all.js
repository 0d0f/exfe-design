if ($(window).height() >650) {
	$('.logo-warpper').css('top', $(window).height()/2 - $('.logo-warpper').height()/2);
}
else {
	$('.logo-warpper').css('top', '165');
};//logo位置适应
$('.intro').css('top', $(window).height());//首屏高度适应
$('.intro-0').height($(window).height());//首屏高度适应
var logoTop = $('.logo-warpper').offset().top;
var currentLogoTop = $('.logo-warpper')[0].getBoundingClientRect().top;
var logoOpacity = (currentLogoTop+200)/(logoTop+200);
$('.logo-warpper').css('opacity', logoOpacity);//logo初始透明度


$('.intro-0-container').waypoint(function(){
	$(this).toggleClass('intro-0-sticky')
},{offset:20});//title固定




$('.intro').waypoint(function(direction){
	if (direction = 'down') {
		$('.intro-0-container').addClass('intro-0-bottom');
		$('.intro-0-bottom').css('top', $(window).height()-$('.intro-0-container').height());//title离开
		console.log(direction);
	}
	else if (direction = "up") {
		$('.intro-0-container').removeClass('intro-0-bottom');
		$('.intro-0-container').addClass('intro-0-sticky');
		$('.intro-0-container').css('top', '20');
		$('.intro-0-container').css('position','relative')
		console.log(direction);
	}	
},{offset:118})

$(window).resize(function(){
	$('.intro').css('top', $(window).height());//首屏高度适应
	if ($(window).height() >650) {
		$('.logo-warpper').css('top', $(window).height()/2 - $('.logo-warpper').height()/2);
	}//logo位置适应
	logoTop = $('.logo-warpper').offset().top;
})



$(window).on('scroll',function(){
	var currentLogoTop = $('.logo-warpper')[0].getBoundingClientRect().top;
	if (currentLogoTop>-200) {
		var logoOpacity = (currentLogoTop+200)/(logoTop+200);
		$('.logo-warpper').css('opacity', logoOpacity);
	}//logo透明度
})

var csrX, csrY, dx, dy, dr, bloomX, bloomY, touchX, touchY, touch;
var r = $('.logo').width()/2;
var centerX = $('.logo').offset().left + r;
var centerY = $('.logo').offset().top + r;


$(window).resize(function() {	
	centerX = $('.logo').offset().left + r;
	centerY = $('.logo').offset().top + r;
})

$(window).on('mousemove touchstart touchmove', function (e) {
	if (!e.touches) {
		e.touches = [{
			pageX: e.pageX,
			pageY: e.pageY
		}]
	}//触屏事件映射
	
	csrX = e.touches[0].pageX;
	csrY = e.touches[0].pageY;
	
	dx = -csrX + centerX;
	dy = -csrY + centerY;
	dr = Math.sqrt(dx*dx + dy*dy);
	
	bloomX = dx/100;
	bloomY = dy/100;
	if (bloomX>4) {
		bloomX = 4
	}
	else if (bloomX<-4) {
		bloomX = -4
	}
	
	if (bloomY>2) {
		bloomY = 2
	}
	else if (bloomY<-2) {
		bloomY = -2
	}
	$('.logo-bloom').css({
		'-webkit-transform':'translate('+ bloomX + 'px, ' + bloomY +'px)',
		'-webkit-transition-duration':'0',
	})

})
