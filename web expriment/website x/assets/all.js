


$(document).ready(function(){
	
	$('.x_description_wrapper').click(function(){
		if ($('.x_description_wrapper').height() == 134 ) {
			var h = $('.x_description_container').height()+10;
			$('.x_description_wrapper').animate({'height':h},200);
			$('.x_description_wrapper').addClass('x_description_focus');
		}
		else {
			$('.x_description_wrapper').animate({'height':'134px'},200);
			$('.x_description_wrapper').removeClass('x_description_focus');
		}
	})
	
	$('.rsvp_accept').click(function(){
		$('.rsvp_status_btn').text("Accepted");
		$('.rsvp_status_btn').removeClass('rsvp_status_btn_unavailable')
		$('.rsvp_status').addClass('rsvp_status_show')
		$('.rsvp_status_btn').addClass('rsvp_status_btn_accepted')
		$('.rsvp_set').addClass('rsvp_set_hide');
	})
	
	$('.rsvp_unavailable').click(function(){
		$('.rsvp_status_btn').text("Unavailable");
		$('.rsvp_status_btn').removeClass('rsvp_status_btn_accept')
		$('.rsvp_status').addClass('rsvp_status_show')
		$('.rsvp_status_btn').addClass('rsvp_status_btn_unavailable')
		$('.rsvp_set').addClass('rsvp_set_hide');
	})
	
	$('.rsvp_status_btn').click(function(){
		$('.rsvp_status').removeClass('rsvp_status_show');
		$('.rsvp_set').removeClass('rsvp_set_hide');
	})
	
	$('.exfee_1').click(function(){
		$('.exfee_card').css('display', 'block');
	});
	
	var line_height = function(){
		$('.conv_line').height(function() {
			var b = $('.conv_cell').last().height()-36;
			return $('.x_conv').height() - b;
		});
	}
	
	var description_focus_height = function() {
		if ($('.x_description_wrapper').height() == 134 ) {
			return;
		}
		else {
			$('.x_description_wrapper').height(function(){
				return $('.x_description_container').height()+10;
			});
		}
	}
	
	$(window).resize(function(){
		description_focus_height();
	});

})