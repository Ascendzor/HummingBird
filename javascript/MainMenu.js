
// draws the main menu
function MainMenu() {

    //store the last click on the canvas in this object
    var last_click = {x:0,y:0};
    var canvasOffsetLeft;
    var canvasOffsetTop;

    var buttons = [];
	
	var isActive;

    function initialize () {
		var canvas = document.getElementById('myCanvas');
		canvas.width = screenSize.width;
		canvas.height = screenSize.height;

        canvasOffsetLeft = canvas.offsetLeft;
        canvasOffsetTop = canvas.offsetTop;

		context = canvas.getContext('2d');
		
		isActive = true;
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
			onClick: function(){
                Credits();}
		};
		
        setInterval(update, ONE_FRAME_TIME);
    }

    // canvas click handler
    function clickHandler (click) {
		if(!isActive){
			return;
		}
		
        last_click = {
            x: click.pageX - canvasOffsetLeft,
            y: click.pageY - canvasOffsetTop
        };
		
		for(var i=0; i<buttons.length; i++){
			if(last_click.x > buttons[i].x){
				if(last_click.y > buttons[i].y){
					if(last_click.x < (buttons[i].x+buttons[i].img.width)){
						if(last_click.y < (buttons[i].y+buttons[i].img.height)){
							isActive = false;
							buttons[i].onClick();
						}
					}
				}
			}
		}
        console.log(last_click);
    }
    function update() {
        if (!isActive) {
            return;
        };
		//console.log(isActive);
		context.clearRect(0, 0, screenSize.width, screenSize.height);
		context.drawImage(images["images/SPLASH2.png"], -130, -40);
		for(var i=0; i<buttons.length; i++){
			context.drawImage(buttons[i].img, buttons[i].x, buttons[i].y, 240, 131);
		}
    }
    initialize();
}
