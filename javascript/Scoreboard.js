
function Scoreboard(){
    var scoreDiv;

    var spidersEaten;
    var butterflysEaten;
    var maxHeartRate;
    var totalScore;

    var buttonNewGame;
    var buttonCredits;

    function initialize () {
        // get thescore
        spidersEaten = 2;
        butterflysEaten = 5;
        maxHeartRate = 300;
        totalScore = 9001;
		
        var gameContainer = document.getElementById("gamecontainer");
        scoreDiv = document.createElement("div");
        scoreDiv.setAttribute('id','scoreboard');
        scoreDiv.innerHTML = "<ul><li>Spiders Eaten: " + spidersEaten + " </li><li>Butterflys Eaten: " + butterflysEaten + "</li><li> Max HeartRate: " + maxHeartRate + " bpm</li><li><b>Total Score: " + totalScore + "</b></li></ul>";

        buttonNewGame = document.createElement("div");
        buttonNewGame.setAttribute('id', 'playbutton');
        buttonNewGame.addEventListener("click", function(){
            MainMenu();
            cleanup();
        });

        buttonCredits= document.createElement("div");
        buttonCredits.setAttribute('id', 'creditsbutton');
        buttonCredits.addEventListener("click", function(){
            Credits();
            cleanup();
        });

        scoreDiv.appendChild(buttonNewGame);
        scoreDiv.appendChild(buttonCredits);

        gameContainer.appendChild(scoreDiv);
    }
    function cleanup () {
        var gameContainer = document.getElementById("gamecontainer");
        gameContainer.removeChild(scoreDiv);
    }

    initialize();
}
