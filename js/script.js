(function() {
	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
			loop:true,
			nav:true,
			navText: ["<div class='slider__nav nav__prev'></div>","<div class='slider__nav nav__next'></div>"],
			touchDrag:false,
			mouseDrag:false,
			items: 1,
			URLhashListener:true,
			startPosition: 'URLHash',
			margin:500,
			startPosition:1
		});
	});
}());

(function() {
	function message() {
		$.getJSON("../ajax.php", function(data) {
			var string = "";
			var res = [];
			$.each(data, function(key, val) {
				string = val;
				res.push(string);
			});
			$(".message").html(res[0]);

			if (res[1] == true) {
				$(".message").css({"color" : "green"});
			} else {
				$(".message").css({"color" : "red"});
			};
		});
	}

	$(".js-res").on("click", function() {
		message();
	});
}());