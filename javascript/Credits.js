function Credits () {
    var background;
    var yVelocity;
    var updateInterval;
	
	var isActive;
    function init () {
		isActive = true;
		var canvas = document.getElementById('myCanvas');
		canvas.width = screenSize.width;
		canvas.height = screenSize.height;
		context = canvas.getContext('2d');
		
        canvas.addEventListener('click', clickHandler, false);

        background = {
            img: images["images/Credits.png"],
            y: screenSize.height
        };
        yVelocity = -0.88;
        updateInterval = setInterval(update, ONE_FRAME_TIME);
    }
	
	function clickHandler(click){
		if(!isActive){
			return;
		}
		isActive = false;
		MainMenu();
		
	}
	
    function update () {
	if(!isActive){
		return;
	}
        context.fillStyle = "rgb(0, 0, 0)";
        context.fillRect(0, 0, screenSize.width, screenSize.height);
        context.drawImage(background.img, 0, background.y);
        background.y += yVelocity;
        if (background.y  < -background.img.height) {
            clearInterval(updateInterval);
            MainMenu();
        };
    }
    init();
}
