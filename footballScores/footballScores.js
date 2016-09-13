var league;
var leagueCode;
var sortData = function(apiData){
//what to do with the data when we get it back
		$("#foodballScoreContent").html(apiData);
		var fixtures = apiData.fixtures;
		var displayResults = $("$footballScoreContent");
		var output = [];
		for (var i = 0, len = fixtures.length; i < len; i++) {
			output.push({
				'Home Team': this.homeTeamName,
				'Home Goals Scored': this.goalsHomeTeam,
				'Away Goals Scored': this.goalsAwayTeam,
				'Away Team': this.awayTeamName
			});
			if (output.length) {
				if (console.table) {
					console.table(output);
				}
			} else {
				console.log("This is logged to the console, so the table isn't working");
			}
		}		
};

var request = function(leagueURL) {
	$.get(leagueURL, function(data){
		sortData(data);
	});
};

$("#formSubmit").on("click", function(event){
	event.preventDefault();
	var league = $('#league option:selected').text();
	var gameWeek = $("#gameweek").attr('value');
	var leagueCode;
	switch (league){
		case "Premier League":
		var leagueCode ="426";
		break;
		case "Bundesliga":
		var leagueCode ="430";
		break;
		case "Serie A":
		var leagueCode ="438";
		break;
		case "Ligue 1":
		var leagueCode ="434";
		break;
	}	
	var correctURL = "http://api.football-data.org/v1/competitions/"+leagueCode+"/fixtures?matchday="+gameWeek;
	console.log(correctURL);
	request(correctURL);

});