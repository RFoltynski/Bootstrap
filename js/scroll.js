jQuery(function($){		
			
			$('.link1-Contact').click(function() { $.scrollTo($('.feed'), 500); });
			$('.link2-Blog').click(function() { $.scrollTo($('.Blog'), 500); });
			$('.link3-Services').click(function() { $.scrollTo($('.OurServices'), 500); });
			$('.link4-Gallery').click(function() { $.scrollTo($('.Gallery'), 500); });
			$('.link5-About').click(function() { $.scrollTo($('.aboutUs'), 500); });
			$('.link6-Home').click(function() { $.scrollTo($('.freshLife'), 500); });
			$('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
			$.scrollTo(0);
		});