$(document).ready(function() {
	

        	//bx slider for images
			$("#slider").bxSlider({
			  auto: true,
			  minSlides: 1,
			  maxSlides: 1,
			  slideWidth: 450,
			  slideMargin: 10,
			  randomStart: true,
			  pause: 4000, 
			  pagerType: 'short', 
			  pagerSelector: '#pager'
			});
			
		$.getJSON("index.json", function(data) { //parameters: file to be loaded and function to be performed
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#photos").append(
				//add images with listimage2 class
				"<img src ='"+value.image+"' class=\"listimage2\" />"
				);
			});
		}); 
	});
	
});
		
