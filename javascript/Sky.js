function Sky() {
    var sky;

    var theSun;
    var clouds = [];
	var theHills;

    function init () {

        var sunImage = new Image();
        sunImage.src = "images/sun.png";
        theSun = {
            img: sunImage,
            position: {x:(screenSize.width-200), y:100}
        };

        var skyTexture = new Image();
        skyTexture.src = "images/backgroundtextured.png";
        sky = {
            img:skyTexture,
            position: {x: 0, y:0},
            speed: 1
        };
        
        for (var i = 0; i < 3 ; i++) {
            var imgElement = new Image();
            imgElement.src = "images/cloud" + i + ".png";
            clouds[i] = {
                img: imgElement,
                position: {
                    x:utill.randomRange(screenSize.width),
                    y:utill.randomRange(200)
				},
                speed: 0.15
            };
        };
        clouds[2].speed = (clouds[1].speed*3);
		
		var hillImage = new Image();
		hillImage.src = "images/hills.png";
		theHills = {
			img: hillImage,
			position0: {x: 0, y:(screenSize.height-601)},
			position1: {x: 2001, y:(screenSize.height-601)},
			speed: 0.3
		};
    };
    this.update = function (){

        for (var i = 0; i < clouds.length; i++) {
            var newX = clouds[i].position.x - clouds[i].speed;
            if (newX < -clouds[i].img.width - 5) {
                newX = screenSize.width - newX;
                clouds[i].position.y = utill.randomRange(200);
            };

            clouds[i].position = {
                x: newX,
                y:clouds[i].position.y
            };
        };
		theHills.position0.x = theHills.position0.x - theHills.speed;
		if(theHills.position0.x < - theHills.img.width) {
			theHills.position0 = {x:2001-theHills.speed, y:0};
		}
		theHills.position1.x = theHills.position1.x - theHills.speed;
		if(theHills.position1.x < - theHills.img.width) {
			theHills.position1 = {x:2001-theHills.speed, y:0};
		}
    }
    this.draw = function () {
		context.drawImage(sky.img, sky.position.x, sky.position.y);
        context.drawImage(theSun.img, theSun.position.x, theSun.position.y, 200, 200);
		context.drawImage(clouds[0].img, clouds[0].position.x, clouds[0].position.y);
		context.drawImage(clouds[1].img, clouds[1].position.x, clouds[1].position.y);	
		context.drawImage(theHills.img, theHills.position0.x, theHills.position0.y);	
		context.drawImage(theHills.img, theHills.position1.x, theHills.position1.y);	
		context.drawImage(clouds[2].img, clouds[2].position.x, clouds[2].position.y);
	    
    }
    init();
};
