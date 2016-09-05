console.log(window.location.href);

// Load different javascript creations based upon what nav element the user clicks on.
$("#menu-bar li").on("click", function()
{
	$("#menu-bar li").removeClass('unClicked');
	var selected = $(this).attr('id');
	$(this).addClass('Clicked');
	var url = "this should be logged";
		switch (selected) {
		case "homePage":
		break;
		case "TTT":
		var url = "ticTacToe/ticTacToe.html";
		break;
		case "Pong":
		var url = "pong/pong.html";
		break;
		case "footballScores":
		var url = "footballScores/footballScores.html";
		break;
	};
	$.ajax({
		url: url
	}).done(function(data){
		$("#projectContent").html(data);
	});
});
