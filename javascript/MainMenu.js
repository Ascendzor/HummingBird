
var audioToggle;
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
		
		audioToggle = document.createElement("div");
		audioToggle.setAttribute('id', 'audioOff');
		audioToggle.addEventListener("click", function(){
			if(backgroundAudio.volume == 1){
				backgroundAudio.volume = 0;
				audioToggle.setAttribute('id', 'audioOn');
			}else{
				backgroundAudio.volume = 1;
				audioToggle.setAttribute('id', 'audioOff');
			}
		});

        scoreDiv.appendChild(buttonNewGame);
		scoreDiv.appendChild(buttonScoreboard);
        scoreDiv.appendChild(buttonCredits);
		scoreDiv.appendChild(imageGuide);
		scoreDiv.appendChild(audioToggle);

        gameContainer.appendChild(scoreDiv);
    }
	
    function cleanup () {
        var gameContainer = document.getElementById("gamecontainer");
        gameContainer.removeChild(scoreDiv);
    }

    initialize();
}
