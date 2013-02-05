function Pickup(spiderTexture, butterflySprite, segmentY) {
	
	var isBooster = utill.randomRange(2);
	var animationIndex = 0;
	
	var position = {
		X: screenSize.width,
		Y: segmentY
	};
	
	var size = {
		width: 32,
		height: 32
	};
		
	this.update = function(velocity, xScalar){
		position.X -= velocity.X * xScalar;
	};
	
	this.draw = function(){
		if(isBooster == 0){
			position.Y += 0.5;
			context.drawImage(spiderTexture[animationIndex], position.X, position.Y, size.width, size.height);
		}else{
			context.drawImage(butterflySprite[animationIndex], position.X, position.Y, size.width, size.height);
		}
	};
	
	var animate = function() {
		if(isBooster == 0){
			animationIndex = (animationIndex+1) % spiderTexture.length;
		}else{
			animationIndex = (animationIndex + 1) % butterflySprite.length;
		}
    };
	
	this.getPosition = function(){
		return position;
	};
	
	this.getSize = function(){
		return size;
	};
	
	this.getIsBooster = function(){
		return isBooster;
	};
	
	this.stopAnimation = function(){
		clearInterval(interval);
	};
	
	var interval = setInterval(animate, 50);
};
