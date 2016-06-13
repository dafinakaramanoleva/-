$(function(){

    // $("#includedLightboxes").load("lightboxes.html"); 

	// Setting the user's name
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

	// Add class to active categories
	$('.panel-heading a').on('click', function() {
		$('.panel-heading').removeClass('active');
    	$(this).parents('.panel-heading').addClass('active');
	});

	//Init lightbox
	var btnInit = $('.btn');

	btnInit.magnificPopup({
	type:'inline',
	fixedContentPos: false,
	removalDelay: 200
	});

	$("a[href='#save_name'").on('click', function(){
		$('#user_name').html($("input[name=user_name]").val())
	})

	//Increments
	$(".temp-button").on("click", function() {

	  var $button = $(this);
	  var oldValue = $button.parent().find("input").val();

	  if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
	   // Don't allow decrementing below zero
	    if (oldValue > 0) {
	      var newVal = parseFloat(oldValue) - 1;
	    } else {
	      newVal = 0;
	    }
	  }

	  $button.parent().find("input").val(newVal);

	});

	//Volum Controll
	$('.on-off-wrapper > div').on('click', function(){
		$(this).toggleClass('on');
	});

	//Smooth scroll
	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  

});