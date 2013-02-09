function Scoreboard(segmentsPassed, timePassed, spiderScore, butterflyScore, heartRateScore){
    var spidersEaten = spiderScore;
    var butterflysEaten = butterflyScore;
    var maxHeartRate = heartRateScore;
    var totalScore = (spidersEaten * 1000) + (butterflysEaten * 2000);
    var distance = segmentsPassed;
    var timePlayed = timePassed;

    var buttonNewGame;
    var buttonCredits;

    var scoreDiv;

    function initialize () {
        // get thescore
		
        var gameContainer = document.getElementById("gamecontainer");
        scoreDiv = document.createElement("div");
        scoreDiv.setAttribute('id','scoreboard');

        //TODO refactor so this isn't a huge long line
        scoreDiv.innerHTML = "<ul><li>Spiders Eaten: " + spidersEaten + " </li><li>Butterflys Eaten: " + butterflysEaten + "</li><li> Max HeartRate: " + maxHeartRate + " bpm</li><li><b>Total Score: " + totalScore + "</b></li></ul>";

        buttonNewGame = document.createElement("div");
        buttonNewGame.setAttribute('id', 'ScoreboardPlayButton');
        buttonNewGame.addEventListener("click", function(){
            main();
            cleanup();
        });

        buttonCredits= document.createElement("div");
        buttonCredits.setAttribute('id', 'ScoreboardCreditsButton');
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
