$(function(){

    // $("#includedLightboxes").load("lightboxes.html"); 

	//setting the user's name
	$('#user_name').html($("input[name=user_name]").val())

	if($(window).width() >= 1170) {
		$('#accordion').height($('.collapse.in').height() - 16);
		$.support.transition = false;
		$('.collapse').on('shown.bs.collapse', function () {
			var elemHeight = $(this).height();
			var elemParent = $('#accordion');
	  		
			elemParent.height(elemHeight - 16);
		})
	}

	//Init lightbox
	var btnInit = $('.btn-default');

	btnInit.magnificPopup({
	type:'inline',
	fixedContentPos: false,
	removalDelay: 200
	});

	$("a[href='#save_name'").on('click', function(){
		$('#user_name').html($("input[name=user_name]").val())
	})

});