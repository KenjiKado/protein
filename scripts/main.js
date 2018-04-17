$(document).ready(function(){
	var	messages = {
			'name': 'Please, enter your name',
			'country': "Please, select a country",
			'email': "Please, enter the email",
			'phone': 'Please, enter a phone number',
			'checkbox': "Please, confirm your consent to the processing of personal data",
			'thanks': 'Thanks for the request!'
		}
	$("#request-1").validate({
		'messages' : messages
	});	
	$("#request-2").validate({
		'messages' : messages
	});
	$("#request-3").validate({
		'messages' : messages
	});	
	$("#email-form").validate({
		'messages' : messages, 
	  submitHandler: function(form) {
	  	$.cookie('sendEmail', true);
	  	$.fancybox.close();
	    //form.submit();
	  }		
	});	
	$('input[type=tel]').on('keyup', function() {
		var input = $(this);
    input.val(input.val().replace(/[^\d]+/g,''));
	})					
	$("form button").click(function(){
		var validate = $(this).parents('form').valid();	
		if(validate == true){
			$(this).parents('form').submit();
		}	
	});
	$('input[type=checkbox]').change(function() {
		$(this).parent('.checkbox-row').children('label').toggleClass('checked');
	});
	$('.one-review a').hover(function(){
		$('.one-review a').removeClass('hover');
		$(this).addClass('hover');
	});
	$('.one-review').mouseleave(function() {
		$('.one-review a').removeClass('hover');
		$('.reviews-block .col-xs-12:nth-child(2) .one-review a').addClass('hover');
	});
		$(".taste-block .text-block").matchHeight({
	    byRow: false,
	    property: 'height',
	    target: null,
	    remove: false
		});		
		$(".taste-block .image-block").matchHeight({
	    byRow: false,
	    property: 'height',
	    target: null,
	    remove: false
		});			
		$(".certificates-mobile .row").owlCarousel({
			singleItem : true,
	    autoPlay : true,
	    stopOnHover : true, 
	    paginationSpeed : 1000,
	    goToFirstSpeed : 2000,
	    navigation : false
		});
	$(".modal-btn").click(function() {
		$.fancybox.open({
			src  : '#modal',
			type : 'inline',
			scrolling : 'yes'
		});				
	});	
	$(document).scroll(function() {
		var top = 390;
		var height = $(window).height();
		if($(document).scrollTop()>390){
			var top = $(document).scrollTop();
			if(height > 460){
				$('.phone-btn').css('margin-top', top+'px');
			}
			else {
				console.log(top);
				$('.phone-btn').css('margin-top', top-height+'px');
			}
		}
		else {
			$('.phone-btn').css('margin-top','0px');
		}
	});
	
});