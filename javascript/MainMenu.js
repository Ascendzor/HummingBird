
// draws the main menu
function MainMenu() {
	
	var buttonNewGame;
	var buttonScoreboard;
	var buttonCredits;
	
	var scoreDiv;
	
    function initialize () {
        var gameContainer = document.getElementById("gamecontainer");
        scoreDiv = document.createElement("div");
        scoreDiv.setAttribute('id','MainMenu');

        buttonNewGame = document.createElement("div");
        buttonNewGame.setAttribute('id', 'playbutton');
        buttonNewGame.addEventListener("click", function(){
            main();
            cleanup();
        });
		
		buttonScoreboard= document.createElement("div");
        buttonScoreboard.setAttribute('id', 'scoreboardbutton');
        buttonScoreboard.addEventListener("click", function(){
            Scoreboard();
            cleanup();
        });

        buttonCredits= document.createElement("div");
        buttonCredits.setAttribute('id', 'creditsbutton');
        buttonCredits.addEventListener("click", function(){
            Credits();
            cleanup();
        });

        scoreDiv.appendChild(buttonNewGame);
		scoreDiv.appendChild(buttonScoreboard);
        scoreDiv.appendChild(buttonCredits);

        gameContainer.appendChild(scoreDiv);
    }
	
    function cleanup () {
        var gameContainer = document.getElementById("gamecontainer");
        gameContainer.removeChild(scoreDiv);
    }

    initialize();
}
