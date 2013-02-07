
// draws the main menu
function MainMenu() {
	
	var buttonNewGame;
	var buttonScoreboard;
	var buttonCredits;
	
	var imageGuide;
	
	var scoreDiv;
	
    function initialize () {
        var gameContainer = document.getElementById("gamecontainer");
        scoreDiv = document.createElement("div");
        scoreDiv.setAttribute('id','MainMenu');

        buttonNewGame = document.createElement("div");
        buttonNewGame.setAttribute('id', 'MainMenuPlayButton');
        buttonNewGame.addEventListener("click", function(){
            main();
            cleanup();
        });
		
		buttonScoreboard= document.createElement("div");
        buttonScoreboard.setAttribute('id', 'MainMenuScoreboard');
        buttonScoreboard.addEventListener("click", function(){
            Scoreboard();
            cleanup();
        });

        buttonCredits= document.createElement("div");
        buttonCredits.setAttribute('id', 'MainMenuCredits');
        buttonCredits.addEventListener("click", function(){
            Credits();
            cleanup();
        });
		
		imageGuide = document.createElement("div");
		imageGuide.setAttribute('id', 'MainMenuImageGuide');

        scoreDiv.appendChild(buttonNewGame);
		scoreDiv.appendChild(buttonScoreboard);
        scoreDiv.appendChild(buttonCredits);
		scoreDiv.appendChild(imageGuide);

        gameContainer.appendChild(scoreDiv);
    }
	
    function cleanup () {
        var gameContainer = document.getElementById("gamecontainer");
        gameContainer.removeChild(scoreDiv);
		
    }

    initialize();
}
