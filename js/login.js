$(function(){

  	$('.login .btn').on('click', function(){
  		if($('#inputEmail').val() != '' && $('#inputPassword').val() != '') {
  			window.location.href = 'home.html';

  		} else {
  			alert('Wrong inputs')
  		}
  	});

});