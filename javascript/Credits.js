function Credits () {
    var background;
    var yVelocity;
    var updateInterval;
	
	var canvas;
	var scoreDiv;
	
	var clickEvent = function(){
			cleanup();
			MainMenu();
	};
	
    function initialize () {
        background = {
            img: images["images/Credits.png"],
            y: screenSize.height
        };
        yVelocity = -0.88;
        updateInterval = setInterval(update, ONE_FRAME_TIME);
		
		canvas = document.getElementById("myCanvas");
		canvas.addEventListener("click", clickEvent);
    }
	
    function update () {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, screenSize.width, screenSize.height);
		context.drawImage(background.img, 0, background.y);
		background.y += yVelocity;
		if (background.y  < -background.img.height) {
			cleanup();
			MainMenu();
		};
    }
	
	function cleanup(){
		canvas.removeEventListener("click",clickEvent)
		context.fillRect(0, 0, screenSize.width, screenSize.height);
		clearInterval(updateInterval);
	}
    initialize();
}
