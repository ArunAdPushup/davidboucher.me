// Need selector here for league select form
var league;
var leagueCode;


function(leagueURL) {
	$.get(leagueURL, function(data){
		$("#foodballScoreContent").html(data);
		console.log(data);
	})
};

$("form").on("submit", function(event){
	event.preventDefault();
	var league = $('#league option:selected').text();
	var gameWeek = $("#gameWeek").elements["gameweek"];	

	//Need a switch statement here for selecting the correct league code based upon the value of league.
	console.log(league);
	console.log(gameWeek);
	var correctURL = "http://api.football-data.org/v1/competitions/"+league+"/fixtures?matchday="+gameWeek;
	console.log(correctURL);
});