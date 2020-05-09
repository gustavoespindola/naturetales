$(document).ready(function(){
		
	// Click Scroll
	$( "a.scrollLink" ).click(function( event ) {
	event.preventDefault();
		$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
	});

});

// $('body').hide();
