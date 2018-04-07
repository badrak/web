$(".square").mouseenter(function(){
	$(".mini_square").css("visibility", "visible");
});

$("#triangle").mouseenter(function(){
	$(".mini_square_2").css("visibility", "visible");
});


$("#triangle").mouseleave(function(){
	$(".mini_square").animate({left:'0'}, 3000);
});

$("#triangle").mouseleave(function(){
	$(".mini_square_2").animate({bottom:'0'}, 3000);
});