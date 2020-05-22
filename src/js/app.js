

$(document).ready(function(){
	$('.fb').append('<div id="fb-root"></div> <script> window.fbAsyncInit = function() { FB.init({ xfbml            : true, version          : "v7.0" }); }; (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src =  "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"; fjs.parentNode.insertBefore(js, fjs); }(document, "script ",  "facebook-jssdk ""));</script> <div class="fb-customerchat" attribution=setup_tool page_id="475738506254897"theme_color="#568B88"> </div>');
		AOS.init({
		  // Global settings:
		  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		  initClassName: 'aos-init', // class applied after initialization
		  animatedClassName: 'aos-animate', // class applied on animation
		  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
		  
		  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		  offset: 120, // offset (in px) from the original trigger point
		  delay: 0, // values from 0 to 3000, with step 50ms
		  duration: 1200, // values from 0 to 3000, with step 50ms
		  easing: 'ease', // default easing for AOS animations
		  once: false, // whether animation should happen only once - while scrolling down
		  mirror: false, // whether elements should animate out while scrolling past them
		  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
		});
 
	$( "a.scrollLink" ).click(function( event ) {
	event.preventDefault();
		$("html, body").animate({  
			scrollTop: $($(this).attr("href")).offset().top -150 }, 500);
	});




var iframeVsm = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe6Fpjqt-Nzm9ODr6o9gQc-Zh8hOivuqm5-02a_KqdVcAUPKA/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0" class="animate fadeIn 		embed-responsive-item"></iframe>'
var iframebookVy = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf7w6k_xJafDgoxHkhzH4Sh5lP5snG9LaxZrXsb6SNZO2ZzBA/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0" class="animate fadeIn 		embed-responsive-item"></iframe>'
var iframebookVyf = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf7w6k_xJafDgoxHkhzH4Sh5lP5snG9LaxZrXsb6SNZO2ZzBA/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0" class="animate fadeIn 		embed-responsive-item"></iframe>'
var iframeintroSession = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf3Um34tg7dn0AG-Krx05vEMczrOXSne1ucte5W06-5fYOwUg/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0" class="animate fadeIn 		embed-responsive-item"></iframe>'
var iframegiftCard = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSqzpbzMcwkuVR6NQVcZdUP3QE8wpHfxBBg5FbZ6tKKpsNAA/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0" class="animate fadeIn 		embed-responsive-item"></iframe>'
var iframecontactUs = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmeeayo3O57E8m1wZCHeE68JAGEjqXdAOMx-_A_sWYqMIS4A/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0" class="animate fadeIn 		embed-responsive-item"></iframe>'

	
	$('.btn').click(function() {
		var modalAttr = $(this).attr('data-target');
		console.log(modalAttr)

		if(modalAttr === '#book-vsm'){
			$('#book-vsm .modal-body').append(iframeVsm);
			console.log("ok");
		}
		if(modalAttr === '#intro-session'){
			$('#intro-session .modal-body').append(iframeintroSession);
		}
		if(modalAttr === '#book-vy'){
			$('#book-vy .modal-body').append(iframebookVy);
		}
		if(modalAttr === '#gift-card'){
			$('#gift-card .modal-body').append(iframegiftCard);
		}
		if(modalAttr == '#contact-us'){
			$('#contact-us .modal-body').append(iframecontactUs);
		}
		// console.log("ok")
	});

	$('.modal').on('hidden.bs.modal', function (e) {
	  $('.modal-body').html('');
	})

});

