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
 			console.log(turnToGo);
 			var restartGame = $("#restartTheGame");

 	//Starting the Game Logic
	$("#beginTheGame").click(function(){
 		$(restartGame).show();;
 		$("#turn").html("Click on a Tile to Select your position");
 		$.each(boardGame, function(index) {
 			$(this).removeClass("playerTwo playerOne").addClass("default");
 		});
 		$("#turn").html("It is currently Player One's Turn");
 		 turnToGo = "playerOneGo";
 	});
		//Gameplay Logic
	
 	//Logic for Winning a Game

	// Logic to restart the game
	$(restartGame).click(function(){
		$.each(boardGame, function(index) {
			$(this).removeClass('playerOne playerTwo').addClass('default');
		});
		$('#turn').hide();
		$(this).hide();
		var turnToGo = "notBegun";

	});
	$.each(boardGame, function(index){
		$(this).on("click", function() {

			var squareIDValue = $(this).attr('id');
			var squareClassValue = $(this).attr('class');
			

			if (turnToGo === "playerOneGo" && squareClassValue ==='default') {
				$(this).removeClass('default').addClass('playerOne');
				turnToGo = "playerTwoGo";
				$("#turn").html("It is currently Player Two's Turn");
			}
			else if (turnToGo === "playerTwoGo" && squareClassValue ==='default') {
				$(this).removeClass('default').addClass('playerTwo');
				turnToGo = "playerOneGo";
				$("#turn").html("It is currently Player One's Turn");
			}
			else if (squareClassValue !== 'default') {
				console.log("Someone has already chosen this square. Please pick another");

			}
			else {

			}	
	})});





});

