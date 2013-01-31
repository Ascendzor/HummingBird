function Sky(velocity) {
    var sky;

    var theSun;
    var clouds = [];
	var theHills;
	var middleHills;
	
	var spawnTree;
	var spawnNest;

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
            speed: velocity.X * 0.5
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
                speed: velocity.X * 0.075
            };
        };
        clouds[2].speed = (clouds[1].speed*3);
		
		var middleHillsImage = new Image();
		middleHillsImage.src = "images/hills2.png";
		middleHills = {
			img: middleHillsImage,
			position0: {x: 0, 
						y:(screenSize.height-601)
			},
			position1: {x: 2001,
						y: (screenSize.height-601)
			},
			speed: velocity.X * 0.4
		};
		
		var hillImage = new Image();
		hillImage.src = "images/hills.png";
		theHills = {
			img: hillImage,
			position0: {x: 0, y:(screenSize.height-601)},
			position1: {x: 2001, y:(screenSize.height-601)},
			speed: velocity.X * 0.15
		};
		
		var spawnTreeImage = new Image();
		spawnTreeImage.src = "images/tree.png";
		spawnTree = {
			img: spawnTreeImage,
			position: {x: 70, y:(screenSize.height-600)},
			speed: velocity.X
		};
		
		var spawnNestImage = new Image();
		spawnNestImage.src = "images/nest.png";
		spawnNest = {
			img: spawnNestImage,
			position: {x: (spawnTree.position.x + 80), y: (spawnTree.position.y + 90)},
			speed: spawnTree.speed
		};
    };
	
    this.update = function (xScalar){
        for (var i = 0; i < clouds.length; i++) {
            var newX = clouds[i].position.x - clouds[i].speed * xScalar;
            if (newX < -clouds[i].img.width - 5) {
                newX = screenSize.width - newX;
                clouds[i].position.y = utill.randomRange(200);
            };

            clouds[i].position = {
                x: newX,
                y:clouds[i].position.y
            };
        };
		
		theHills.position0.x = theHills.position0.x - theHills.speed * xScalar;
		if(theHills.position0.x < - theHills.img.width) {
			theHills.position0 = {x:2001-theHills.speed * xScalar, y:0};
		};
		
		theHills.position1.x = theHills.position1.x - theHills.speed * xScalar;
		if(theHills.position1.x < - theHills.img.width) {
			theHills.position1 = {x:2001-theHills.speed * xScalar, y:0};
		};
		
		middleHills.position0.x  = middleHills.position0.x - middleHills.speed * xScalar;
		if(middleHills.position0.x < -middleHills.img.width){
			middleHills.position0 = {x:2001-middleHills.speed * xScalar, y:0};
		}
		middleHills.position1.x = middleHills.position1.x - middleHills.speed * xScalar;
		if(middleHills.position1.x < -middleHills.img.width){
			middleHills.position1 = {x:2001-middleHills.speed * xScalar, y:0};
		}
		
		spawnTree.position.x = spawnTree.position.x - spawnTree.speed * xScalar;
		spawnNest.position.x = spawnNest.position.x - spawnTree.speed * xScalar;
    }
	
    this.draw = function () {
		context.drawImage(sky.img, sky.position.x, sky.position.y);
        context.drawImage(theSun.img, theSun.position.x, theSun.position.y, 200, 200);
		context.drawImage(clouds[0].img, clouds[0].position.x, clouds[0].position.y);
		context.drawImage(clouds[1].img, clouds[1].position.x, clouds[1].position.y);	
		context.drawImage(theHills.img, theHills.position0.x, theHills.position0.y);	
		context.drawImage(theHills.img, theHills.position1.x, theHills.position1.y);
		context.drawImage(middleHills.img, middleHills.position0.x, middleHills.position0.y);
		context.drawImage(middleHills.img, middleHills.position1.x, middleHills.position1.y);
		context.drawImage(clouds[2].img, clouds[2].position.x, clouds[2].position.y);
		context.drawImage(spawnTree.img, spawnTree.position.x, spawnTree.position.y);
		context.drawImage(spawnNest.img, spawnNest.position.x, spawnNest.position.y);
    };
    init();
};
