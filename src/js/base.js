
$(function() {
	new WOW().init();
    $('#nav-wrapper').height($("#nav").height());
    
   	$(window).scroll(function() {
   		var scroll = $(window).scrollTop();

   		
   		if ( scroll >= 0 && scroll <= 40) {
   			$('.navbar-transparent').removeClass('navbar-transparent-noscroll');	
   			$('.navbar-transparent').removeClass('navbar-transparent-scrollhalf');
   			$('.navbar-transparent').addClass('navbar-transparent-noscroll');	
   			
   		}

   		if ( scroll > 40 && scroll <= 80 ) {
   			$('.navbar-transparent').removeClass('navbar-transparent-noscroll');	
   			$('.navbar-transparent').removeClass('navbar-transparent-scrolled');	
   			$('.navbar-transparent').addClass('navbar-transparent-scrollhalf');	
   			
   		}
   		
   		if ( scroll > 80 )
   		{
	   		$('.navbar-transparent').removeClass('navbar-transparent-scrolled');	
	   		$('.navbar-transparent').removeClass('navbar-transparent-scrollhalf');	
	   		$('.navbar-transparent').addClass('navbar-transparent-scrolled');
	   		
   		}
   	});
});