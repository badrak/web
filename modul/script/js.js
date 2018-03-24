$(".square").mouseenter(function(){
	$(".rectangle").css("visibility", "visible");
});



$("#triangle-down").mouseenter(function(){
	$(".rectangle").animate({bottom:'0',left:'0'}, 3000);
});

$("#triangle").mouseenter(function(){
	$(".rectangle").animate({bottom:'0',left:'0'}, 3000);
});