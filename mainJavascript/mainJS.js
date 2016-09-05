
$.ajax({
	url: "./ticTacToe/ticTacToe.html"
}).done(function(data){
	console.log(data);
	$("#projectContent").html(data);
});