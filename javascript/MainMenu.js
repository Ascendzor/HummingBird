
// draws the main menu
function MainMenu() {

    //store the last click on the canvas in this object
    var last_click = {x:0,y:0};
    var canvasOffsetLeft;
    var canvasOffsetTop;

    var buttons = [];
	
	var intervals = [];

    function initialize () {
		var canvas = document.getElementById('myCanvas');
		context = canvas.getContext('2d');
		
        canvas.addEventListener('click', clickHandler, false);
		
		buttons[0] = {
			img: images["images/Buttons/play.png"],
			x: 5,
			y: 470,
			onClick: function(){main();}
		};
		
		buttons[1] = {
			img: images["images/Buttons/info.png"],
			x: 270,
			y: 470,
			onClick: function(){Scoreboard();}
		};
		
		buttons[2] = {
			img: images["images/Buttons/credits.png"],
			x: 540,
			y: 470,
			onClick: function(){Credits();}
		};
		
        intervals.push(setInterval(update, ONE_FRAME_TIME));
		activateState(buttons, intervals);
    }

    // canvas click handler
    function update() {
		console.log("updating MainMenu");
		context.clearRect(0, 0, screenSize.width, screenSize.height);
		context.drawImage(images["images/SPLASH2.png"], -130, -40);
		for(var i=0; i<buttons.length; i++){
			context.drawImage(buttons[i].img, buttons[i].x, buttons[i].y, 240, 131);
		}
    }
    initialize();
}
