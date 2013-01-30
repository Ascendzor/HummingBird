var context; 
var screenSize = {
	width: 800,
	height: 600
};

function main(){ 
    var ONE_FRAME_TIME = 100/6;
	
    var bird;

    var collisionSegments = []; 
    var collisionSegmentImages = [];
	
	var pickups = [];
	var pickupSpider;

    var eventLog = [];
    var start_date = Date.now();
	
    var isHeartBeating = false; 
    var hasHeartUpBeat = false; 
    var hasHeartDownBeat = false;

	var score = 0;
	
	var bps = 2;
	var pickupsPickedUp = 1;
    var beatrate; 
    var total_beats= 0;
	
    // drawing the skybox
    var sky;

    var mainLoop = function() { 
        context.clearRect(0, 0, screenSize.width, screenSize.height);
		
        manageInput(); 
        updateObjects(); 
        checkCollisions(); 
        draw();
		
		manageScore();
	}
	
	function initialize(){
		var audioBackground = document.createElement('audio');
		audioBackground.src = "audio/Magellan9.mp3";
		audioBackground.volume = 0.1;
		audioBackground.play();
		var canvas = document.getElementById('myCanvas');
		canvas.width = screenSize.width;
		canvas.height = screenSize.height;
		context = canvas.getContext('2d');

        sky = new Sky();

        var birdTextures = [];
        for (var i = 0; i < 4; i++) {
            birdTextures[i] = new Image();
            birdTextures[i].src = "images/birdy/bird" + i + ".png";
        };
		bird = new Bird(birdTextures);
		
		pickupSpider = new Image();
		pickupSpider.src="images/TroysPickup.png";
		
		var ascendingTexture = new Image();
		ascendingTexture.src = "images/ascending.png";
		collisionSegmentImages.push(ascendingTexture);
		var flatTexture = new Image();
		flatTexture.src = "images/level.png";
		collisionSegmentImages.push(flatTexture);
		var descendingTexture = new Image();
		descendingTexture.src = "images/descending.png";
		collisionSegmentImages.push(descendingTexture);
		
		// makes circular linked list
		var firstSegment;
       
		for(var i = 0; i< 5; i++ )
		{
			collisionSegments[i] = new CollisionSegment(i*(screenSize.width / 4), screenSize.height-(screenSize.width / 4), ascendingTexture, flatTexture, descendingTexture);
			if( i == 0 ) {
				firstSegment = collisionSegments[i];
			} else {
				collisionSegments[i].setPrevious(collisionSegments[i-1]);
			}
		}
		
		collisionSegments[0].setPrevious(collisionSegments[collisionSegments.length-1]);
		
        // schdule main loop updated
        setInterval(mainLoop, ONE_FRAME_TIME);
        setInterval(heartbeat_sample, 1000);
		setInterval(spawnPickup, (collisionSegments[0].getWidth()/collisionSegments[0].getVelocity().X)*(ONE_FRAME_TIME));
		setInterval(increaseBps, 15000);
	}
	
	function manageInput(){
        if (input.heartup) {
            if (!hasHeartUpBeat) hasHeartUpBeat = true;

            var current = bird.getFrameInterval();
            bird.setFrameInterval(current - 10);
        } else {
            if (hasHeartUpBeat) {
                hasHeartUpBeat = false;
                eventLog.push({
                    time: Date.now() - start_date,
                    type: "up beat"
                });
            };
        };
        if (input.heartdown) {
            if (!hasHeartDownBeat) hasHeartDownBeat = true;
        } else {
            if (hasHeartDownBeat) {
                hasHeartDownBeat = false;
                eventLog.push({
                    time: Date.now() - start_date,
                    type: "down beat"
                });
            };
        };
	}
	
	function increaseBps(){
		bps++;
	}

    /*
     * On a 1 second rail.
     */
    function heartbeat_sample () {
        var lastType;
        var beatCounter = 0;
        
        // count the heartbeats since the last
        for (var i = 0; i < eventLog.length; i++) {
            if (i == 0) {
                lastType = eventLog[i].type;
            } else {
                if (lastType == "up beat" && eventLog[i].type == "down beat") {
                    beatCounter ++;
                    lastType = eventLog[i-1].type;
                } else if (lastType == "down beat" && eventLog[i].type == "up beat"){
                    beatCounter ++;
                    lastType = eventLog[i-1].type;
               }
                
            };
        };
		
        if (beatCounter > 0) {
            isHeartBeating = true;
            beatrate = (beatCounter) * 60;
            total_beats += beatCounter;;
        } else {
			
        };
        eventLog = [];

        document.getElementById("heartbeat").innerHTML = "HeartBeats: " + total_beats +  " <br/> BPM: " + beatrate + " <br/>";
    };
    
    
	function updateObjects(){
		for(var i=0; i < collisionSegments.length; i++){
			collisionSegments[i].moveLeft();
		}
		
        var bird_movement = (bps - (eventLog.length*pickupsPickedUp));
        bird.move({
			X: 0,
			Y:bird_movement
		});
		
		for(var i=0; i < pickups.length; i++){
			pickups[i].update(collisionSegments[0].getVelocity());
		}
		
        sky.update();
    }
	
	function spawnPickup(){
		if(utill.randomRange(3) == 0){
			var rightestSegment = collisionSegments[0];
			for(var i=1; i<collisionSegments.length; i++){
				if(rightestSegment.getX() < collisionSegments[i].getX()){
					rightestSegment = collisionSegments[i];
				}
			}
			pickups.push(new Pickup(pickupSpider, utill.randomRange(rightestSegment.getY()-60)));
		}
	}
	
	function checkCollisions(){
		for(var i=0; i < collisionSegments.length; i++){
			if((collisionSegments[i].getX() > -50) && (collisionSegments[i].getX() < 278)){
				if(collisionSegments[i].getTexture().src == collisionSegmentImages[0].src){
					
					var birdCollisionY = (bird.getY() + 128);
					var birdCollisionX = bird.getX() + 64;
					
					var distanceBetween = birdCollisionX - collisionSegments[i].getX();
					if(distanceBetween > 0){
						var percentageAcross = (distanceBetween/2)/100;
						var blockHeight = (collisionSegments[i].getY() + 106) - (106*percentageAcross);
						
						if(birdCollisionY > blockHeight){
							bird.kill();
						}
					}
				}else if(collisionSegments[i].getTexture().src == collisionSegmentImages[1].src){
					if(bird.getY() > (collisionSegments[i].getY()-22)){
						bird.kill();
					}
				}else if(collisionSegments[i].getTexture().src == collisionSegmentImages[2].src){
					var birdCollisionY = (bird.getY() + 128);
					var birdCollisionX = bird.getX() + 64;
					
					var distanceBetween = birdCollisionX - collisionSegments[i].getX();
					if(distanceBetween > 0){
						var percentageAcross = (distanceBetween/2)/100;
						var blockHeight = (collisionSegments[i].getY()) + (106*percentageAcross);
						
						if(birdCollisionY > blockHeight){
							bird.kill();
						}
					}
				}
			}
		}
		
		for(var i=0; i < pickups.length; i++){
			if(bird.getX() < (pickups[i].getPosition().X+64)){
				if((bird.getX()+128) > pickups[i].getPosition().X){
					if(bird.getY() < (pickups[i].getPosition().Y+64)){
						if((bird.getY()+128) > pickups[i].getPosition().Y){
							//collision with pickup is working
							var index = pickups.indexOf(pickups[i]);
							score += 1000;
							pickups.splice(index, 1);
							pickupsPickedUp += 0.1;
							playPickupAudio();
						}
					}
				}
			}
		}
	}
	function draw(){
        sky.draw();
		for(var i=0; i < collisionSegments.length; i++){
			collisionSegments[i].draw();
		}
		for(var i=0; i < pickups.length; i++){
			pickups[i].draw();
		}
		bird.draw();
	}
	
	function manageScore(){
		if(bird.getIsDead() == false){
			score++;
			document.getElementById("theParagraph").innerHTML = score;
		}
	}
	initialize();
}

function playPickupAudio(){
	var audio = document.createElement("audio");
	audio.src = "audio/deepBeep.mp3";
	audio.play();
}

var utill = {
	randomRange : function(maxValue){
		return Math.floor(Math.random() * maxValue);
	}
}


