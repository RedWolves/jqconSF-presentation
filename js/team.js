$(document).ready(function(){
	$("#buttonset").buttonset();
	var $data = $("#team").clone();
	$(".team-resp").hide();

	$("#buttonset").delegate("button", "click", function(){
		$(".team-resp").fadeOut(800);
		var dataType = $(this).attr("data-type").substring(5);
		var selector = "li";
		if (dataType !== "all")
		{
			selector += "[data-type=" + dataType + "]";
		}
		$("#team").quicksand($data.find(selector),
		{
			duration: 800,
			easing: 'easeInOutQuad'
		});
		$("ul#" + dataType).delay(900).fadeIn(400);
	});
	
});