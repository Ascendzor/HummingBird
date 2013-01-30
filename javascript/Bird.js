function Bird(textures, explosionTextures){
	var activeTexture = textures[0];
    var animationIndex = 0;
    var frameInterval = 15;
	var x = 150;
	var y = 0.28 * screenSize.height;
	
	var intervaleExplode;
	
	var isDead = false;
	
	var velocity;
	var animationIndex = 0;
	
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
	
	this.setVelocityX = function(newVelocityX){
		velocity.X = newVelocityX
	}
	
	this.getPosition = function(){
		return {X: x, Y: y};
	};
	
	this.getSize = function(){
		return {width: 100, height: 110};
	};
	
	this.draw = function(){
		context.drawImage(activeTexture, x, y, 128, 128);
		
		if(isDead){
			context.drawImage(explosionTextures[animationIndex], x, y, 256, 256);
		}
	};
	
	this.getIsDead = function(){
		return isDead;
	};
	
	this.kill = function(){
		if(!isDead){
			console.log("this better not be happenning");
			intervalExplode = setInterval(explode, 1000);
			isDead = true;
		};
	};
	
	var explode = function(){
		animationIndex++;
	}

	constructor();
}
