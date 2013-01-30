function Bird(textures){
	var activeTexture = textures[0];
    var textures = textures;
    var animationIndex = 0;
    var frameInterval = 15;
	var x = 150;
	var y = 0.28 * screenSize.height;
	
	var isDead = false;
	
	var velocity;
	
	var constructor = function(){
        setInterval(animate, frameInterval);
		velocity = {X:0, Y:0};
	};
    var animate = function() {
        animationIndex = (animationIndex + 1) % textures.length;
        activeTexture = textures[animationIndex];
    };

    this.setFrameInterval = function(val) {
        frameInterval = val;
    };
    this.getFrameInterval = function() {
        return frameInterval;
    };

    /*
     * Move the bird by velocity.x, velocity.y
     */
    this.move = function (acceleration) {
	acceleration.X /= 100;
	acceleration.Y /= 100;
		velocity.X += acceleration.X;
		velocity.Y += acceleration.Y;
		
        x += velocity.X;
        y += velocity.Y;
    };
	
	this.getVelocity = function(){
		return velocity;
	};
	
	this.getY = function(){
		return y;
	};
	
	this.getX  = function(){
		return x;
	};
	this.draw = function(){
		context.drawImage(activeTexture, x, y, 128, 128);
	};
	
	this.getIsDead = function(){
		return isDead;
	};
	
	this.kill = function(){
		isDead = true
		
		alert("you dead son");
		console.log("DEAD BIRD IS DEAD");
	}

	constructor();
}
