//=require jquery.min.js

// to inlude plugins add "=" sign below
// require bootstrap.min.js
// require slick.min.js

// ;(function($){
	$(document).ready(function(){
			$('.tabs__button-a').on('click', function(event) {

				event.preventDefault();

				$('.tabs__button-a').removeClass('active-tab');
				$(this).addClass('active-tab');

				var $tabId = $(this).attr('href');
		    $('.content__box').removeClass('active__content');
		    $($tabId).addClass('active__content');
			});
	});
// })(jQuery);
