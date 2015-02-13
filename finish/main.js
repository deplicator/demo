// Runs on page load.
$(document).ready(function() {

	// Show home page on start
	$('section').hide().filter(':first').show();

	// Handle tab navigation
	$('nav ul li').click(function() {
		$('li').removeClass('selected');
		$(this).addClass('selected');
		$('section').fadeOut(250);
		var page = $(this).attr('id');
		page = page.split('-');
		$('#' + page[1]).fadeIn(500);
	});

	// Home page Change it! button
	$('#changeit').click(function() {
		if($('#home h2').css('color') == 'rgb(0, 0, 0)') {
			$('#home h2').css('color', 'red');
		} else {
			$('#home h2').css('color', 'rgb(0, 0, 0)');
		}
	});
});