function Credits () {
    var background;
    var yVelocity;
    var updateInterval;
    function init () {

		var canvas = document.getElementById('myCanvas');
		canvas.width = screenSize.width;
		canvas.height = screenSize.height;
		context = canvas.getContext('2d');

        background = {
            img: images["images/Credits.png"],
            y: screenSize.height
        };
        yVelocity = -0.88;
        updateInterval = setInterval(update, ONE_FRAME_TIME);
        console.log(background.img.height);
    }
    function update () {
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
