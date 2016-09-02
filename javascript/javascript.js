jQuery(function(){
			var turnToGo = "notBegun";
			var squareTL = $("#squareTL");
			var squareTC = $("#squareTC");
			var squareTR = $("#squareTR");
			var squareCL = $("#squareCL");
			var squareCC = $("#squareCC");
			var squareCR = $("#squareCR");
			var squareBL = $("#squareBL");
			var squareBC = $("#squareBC");
			var squareBR = $("#squareBR");
			var boardGame = [squareTL, squareTC, squareTR, squareCL, squareCC, squareCR, squareBL, squareBC, squareBR];			
 			var restartGame = $("#restartTheGame");
 			var winTheGame = $("#winTheGame");
 			var topRow = [squareTL, squareTC, squareTR];
 			var middleRow = [squareCL, squareCC, squareCR];
 			var bottomRow = [squareBL, squareBC, squareBR];
 			var leftColumn = [squareTL, squareCL, squareBL];
 			var centerColumn = [squareTC, squareCC, squareBC];
 			var rightColumn = [squareTR, squareCR, squareBR];
 			var leftDiagonal = [squareTL, squareCC, squareBR];
 			var rightDiagonal = [squareTR, squareCC, squareBL];
 			var p1score = 0;
 			var p2score = 0;
 			var playerOneScore = $('#playerOneScore');
 			var playerTwoScore = $('#playerTwoScore');
 			playerOneScore.html(p1score);
 			playerTwoScore.html(p2score);




 //Starting the Game Logic
	$("#beginTheGame").click(function(){
 		$(restartGame).show();
 		$("#turn").html("Click on a Tile to Select your position");
 		$.each(boardGame, function(index) {
 			$(this).removeClass("playerTwo playerOne").addClass("default");
 		});
 		$("#turn").html("It is currently Player One's Turn");
 		 turnToGo = "playerOneGo";
 		 winTheGame.html('');
 	});
//Gameplay Logic


// Logic to restart the game
	$(restartGame).click(function(){
		$.each(boardGame, function(index) {
			$(this).removeClass('playerOne playerTwo').addClass('default');
		});
		$('#turn').hide();
		$(this).hide();
		var turnToGo = "notBegun";
		winTheGame.html('');

	});
//Logic for selecting tiles whilst making sure a tile isn't already selected.
	$.each(boardGame, function(index){
		$(this).on("click", function() {

			var squareIDValue = $(this).attr('id');
			var squareClassValue = $(this).attr('class');

			if (turnToGo === "playerOneGo" && squareClassValue ==='default') {
				$(this).removeClass('default').addClass('playerOne');
				turnToGo = "playerTwoGo";
				$("#turn").html("It is currently Player Two's Turn");
				$('#wrongTile').html("");
			}
			else if (turnToGo === "playerTwoGo" && squareClassValue ==='default') {
				$(this).removeClass('default').addClass('playerTwo');
				turnToGo = "playerOneGo";
				$("#turn").html("It is currently Player One's Turn");
				$('#wrongTile').html("");
			}
			else if (squareClassValue !== 'default') {
				$('#wrongTile').html("Somebody has already selected this tile. Please select another");

			}
			})});
// Winning the Game Logic
	$.each(boardGame, function(index) {
		$(this).on("click", function(){
			if (	
	(topRow.every(function(value) { return value.attr('class') === "playerOne";}) === true) || 
	(middleRow.every(function(value) { return value.attr('class') === "playerOne";}) === true) || 
	(bottomRow.every(function(value) { return value.attr('class') === "playerOne";}) === true) || 
	(leftColumn.every(function(value) { return value.attr('class') === "playerOne";}) === true) || 
	(centerColumn.every(function(value) { return value.attr('class') === "playerOne";}) === true) || 
	(rightColumn.every(function(value) { return value.attr('class') === "playerOne";}) === true) || 
	(leftDiagonal.every(function(value) { return value.attr('class') === "playerOne";}) === true) || 
	(rightDiagonal.every(function(value) { return value.attr('class') === "playerOne";}) === true)) 
		{
	winTheGame.html('Player One Has Won The Game. Congratulations');
	p1score += 1;
	playerOneScore.html(p1score);
	console.log(p1score);
} else if (	
	(topRow.every(function(value) { return value.attr('class') === "playerTwo";}) === true) || 
	(middleRow.every(function(value) { return value.attr('class') === "playerTwo";}) === true) || 
	(bottomRow.every(function(value) { return value.attr('class') === "playerTwo";}) === true) || 
	(leftColumn.every(function(value) { return value.attr('class') === "playerTwo";}) === true) || 
	(centerColumn.every(function(value) { return value.attr('class') === "playerTwo";}) === true) || 
	(rightColumn.every(function(value) { return value.attr('class') === "playerTwo";}) === true) || 
	(leftDiagonal.every(function(value) { return value.attr('class') === "playerTwo";}) === true) || 
	(rightDiagonal.every(function(value) { return value.attr('class') === "playerTwo";}) === true)) 
{
	winTheGame.html('Player Two Has Won The Game. Congratulations');
	p2score += 1;
	playerTwoScore.html(p2score);
	console.log(p2score);
} else {}
});
	});	
 				


});

