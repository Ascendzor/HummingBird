
function Scoreboard(){
    //store the last click on the canvas in this object
    var last_click = { x:0,y:0};
    var canvasOffsetLeft;
    var canvasOffsetTop;

    var buttons = [];
	var intervals = [];

    function initialize () {
		var canvas = document.getElementById('myCanvas');
		canvas.width = screenSize.width;
		canvas.height = screenSize.height;

        canvasOffsetLeft = canvas.offsetLeft;
        canvasOffsetTop = canvas.offsetTop;

		context = canvas.getContext('2d');
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
    }
    initialize();
}
