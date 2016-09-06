var league;
var leagueCode;
var sortData = function(apiData){
//what to do with the data when we get it back
		$("#foodballScoreContent").html(apiData);
		console.log(apiData);
};

var request = function(leagueURL) {
	$.get("leagueURL", function(data){
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
	console.log(league);
	console.log(leagueCode);
	console.log(gameWeek);
	var correctURL = "http://api.football-data.org/v1/competitions/"+leagueCode+"/fixtures?matchday="+gameWeek;
	console.log(correctURL);
});