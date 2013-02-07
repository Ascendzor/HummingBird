
function Scoreboard(){
    //store the last click on the canvas in this object
    var last_click = { x:0,y:0};
    var canvasOffsetLeft;
    var canvasOffsetTop;

    var buttons = [];
<<<<<<< HEAD
	var isActive;
    var scoreDiv;

    var spidersEaten;
    var butterflysEaten;
    var maxHeartRate;
    var totalScore;

    var buttonNewGame;
    var buttonCredits;
=======
	var intervals = [];
>>>>>>> d48c6ac77bf74433a083a468be791bb76f4fc532

    function initialize () {
		var canvas = document.getElementById('myCanvas');
		canvas.width = screenSize.width;
		canvas.height = screenSize.height;

        canvasOffsetLeft = canvas.offsetLeft;
        canvasOffsetTop = canvas.offsetTop;

		context = canvas.getContext('2d');
<<<<<<< HEAD
		
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
        gameContainer.removeChild(scoreboard);
=======
        canvas.addEventListener('click', clickHandler, false);
		
		buttons[0] = {
			img: images["images/Buttons/play.png"],
			x: 5,
			y: 470,
			onClick: function(){main();console.log("PLAY");}
		};
		
		buttons[1] = {
			img: images["images/Buttons/credits.png"],
			x: 540,
			y: 470,
			onClick: function(){
                Credits();}
		};
		
        intervals.push(setInterval(update, ONE_FRAME_TIME));
		activateState(buttons, intervals);
    }
	
    function update() {
		console.log("updating Scoreboard");
		context.clearRect(0, 0, screenSize.width, screenSize.height);
		context.drawImage(images["images/SPLASH2.png"], -130, -40);
		for(var i=0; i<buttons.length; i++){
			context.drawImage(buttons[i].img, buttons[i].x, buttons[i].y, 240, 131);
		}
>>>>>>> d48c6ac77bf74433a083a468be791bb76f4fc532
    }

    initialize();
}
