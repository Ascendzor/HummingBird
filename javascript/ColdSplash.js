
//
// Draws the cold studios logo with a background of rotating snowflakes
//
function ColdSplash () {
    var snowflakes = [];
    var logo;
    var timers = [];

    // The following 4 functions are helper functions for setting up the position of the snowflake
    function get_x_velocity() {
        return -(1 / (utill.randomRange(5) + 1));
    };
	
    function get_y_velocity() {
        return 1/(utill.randomRange(2) + 1);
    };

    function get_rotation() {
        return 1/((utill.randomRange(10) - 5) + 1);
    };

    function get_start_position () {
        var xPos= utill.randomRange(screenSize.width);
        var yPos = - utill.randomRange(screenSize.height);
        return {x:xPos, y:yPos};
    }

    function initialize () {
		var backgroundAudio = document.getElementById('audioBackground');
		backgroundAudio.volume = 0.1;
		
		var canvas = document.getElementById('myCanvas');
		canvas.width = screenSize.width;
		canvas.height = screenSize.height;
		context = canvas.getContext('2d');
        logo = {
            img: images["images/splashscreen/logo.png"],
            position: {x:(screenSize.width/2)-(images["images/splashscreen/logo.png"].width/2), y:(screenSize.height/2)-(images["images/splashscreen/logo.png"].height/2)}
        }

        for (var i = 0; i < 100; i++) {
            var snowFlakeObject = {
                img: images["images/splashscreen/icemedium" + utill.randomRange(4) + ".png"],
                velocity: {x:get_x_velocity(),y:get_y_velocity()},
                position: get_start_position(),
                rotation: get_rotation(),
                rotationDirection: utill.randomRange(2) - 1,
                rotationRate: 1
            };
            snowflakes.push(snowFlakeObject);
        };
        timers.push(setInterval(update, ONE_FRAME_TIME));
        timers.push(setTimeout(segue, 6000));
    }

    function update() {
        //clear the screen so we can draw the next step in the animation

        context.fillStyle = "rgb(45, 39, 111)";
        context.fillRect(0, 0, screenSize.width, screenSize.height);
        //draw all the snowflakes
        for (var i = 0; i < snowflakes.length; i++) {
            var snowflake = snowflakes[i];
            context.drawImage(snowflakes[i].img, snowflake.position.x, snowflake.position.y);
            //update snowflakes position
            snowflakes[i].position.x = snowflakes[i].position.x + snowflake.velocity.x;
            snowflakes[i].position.y = snowflakes[i].position.y + snowflake.velocity.y;

            //rotate the snowflake
            context.save(); //push the context onto stack so we can restore after messing with the coordinate system
            if (snowflake.rotation > 0) {
            } else {
            };
            context.rotate(snowflake.rotation);
            context.restore();

            //check if the snowflake has gone off the left side of the screen
            if ((snowflake.position.x) < (0 -snowflake.img.width)) {
                snowflake.position.x = screenSize.width + snowflake.img.width;
            };

            // check if the snowflake has run off the bottom of the screen
            if (snowflake.position.y > screenSize.height + snowflake.img.height) {
                //reset the whole position of the snowflake
                snowflake.position = get_start_position();
            };

        };
        
        //draw our logo
        context.drawImage(logo.img, logo.position.x, logo.position.y, 800, 600);
    }
    // Moves onto the next scene
    function segue () {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, screenSize.width, screenSize.height);
		for(var i=0; i<timers.length; i++){
			clearInterval(timers[i]);
		}
        MainMenu();
    }
    initialize();
}
