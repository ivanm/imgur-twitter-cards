$(function() {
	
	$(document).on('click', '.js-stream-item', function() {
		appendImgur($(this));	
  });

	$(".permalink .permalink-tweet").each(function() {
		appendImgur($(this));
	});

	function appendImgur(el){
		if (!el.hasClass('imgur')){
			text = el.find(".js-tweet-text").text();
			if (text && (text.indexOf("i.imgur.com") !== -1)) {
				link =  el.find('[data-expanded-url]').attr('data-expanded-url');
				ext = link.split('.').pop();
				if (ext != 'gif'){
					thumb = link.substring(0,link.length-4)+'m.'+ext;
				} else {
					thumb = link;				
				}
				el.find('.expanded-content').prepend('<div><a target="_blank" href="'+link+'"><img src="'+thumb+'" alt="Embedded image permalink"></a><div class="cards-content"><div class="byline"></div></div></div>');
				el.addClass('imgur');
			}
		}	
	}
});

