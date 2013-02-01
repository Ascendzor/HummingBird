function Pickup(texture, boosterTexture, segmentY) {
	
	var isBooster = utill.randomRange(2);
	
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
			context.drawImage(texture, position.X, position.Y, size.width, size.height);
		}else{
			context.drawImage(boosterTexture, position.X, position.Y, size.width, size.height);
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
};
