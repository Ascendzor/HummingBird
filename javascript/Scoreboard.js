function Scoreboard(segmentsPassed, timePassed, spiderScore, butterflyScore, heartRateScore){

    // scorefactors
    var spidersEaten = spiderScore;
    var butterflysEaten = butterflyScore;
    var maxHeartRate = heartRateScore;
    var distance = segmentsPassed;
    var timePlayed = timePassed;
    var totalScore = (spidersEaten * 1000) + (butterflysEaten * 2000) + (distance * 20) + timePlayed + maxHeartRate;


    // ui elements
    var buttonNewGame;
    var buttonCredits;
    var scoreDiv;
    var scoreItemList;

    function addScoreItem (key, value) {
        var listItem = document.createElement("li");
        listItem.innerHTML = key + ": " + value;
        scoreItemList.appendChild(listItem);
    }
    function initialize () {


        
        // get thescore
        var gameContainer = document.getElementById("gamecontainer");
        scoreDiv = document.createElement("div");
        scoreDiv.setAttribute('id','scoreboard');

        //scoreDiv.innerHTML = "<ul><li>Spiders Eaten: " + spidersEaten + " </li><li>Butterflys Eaten: " + butterflysEaten + "</li><li> Max HeartRate: " + maxHeartRate + " bpm</li><li><b>Total Score: " + totalScore + "</b></li></ul>";

        scoreItemList= document.createElement("ul");


        // game button setup
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

        scoreDiv.appendChild(scoreItemList);
        scoreDiv.appendChild(buttonNewGame);
        scoreDiv.appendChild(buttonCredits);
		scoreDiv.appendChild(audioToggle);
        gameContainer.appendChild(scoreDiv);

        // put the score into the div

        addScoreItem("Highest Heartrate", maxHeartRate + " bpm");
        addScoreItem("Travel Distance", distance * 20 + " meters");
        addScoreItem("Flight Time", (Math.floor(timePlayed * ONE_FRAME_TIME) / 1000) + " seconds");
        addScoreItem("Spiders Eaten", spidersEaten);
        addScoreItem("Butterfly Score", spidersEaten);
        addScoreItem("Total", totalScore);

    }

    function cleanup () {
        var gameContainer = document.getElementById("gamecontainer");
        gameContainer.removeChild(scoreDiv);
    }

    initialize();
}
