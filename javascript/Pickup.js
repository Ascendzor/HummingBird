function Pickup(texture, segmentY) {
	var position = {
		X: screenSize.width,
		Y: segmentY
	};
	
	var size = {
		width: 64,
		height: 64
	};
	
	this.update = function(velocity){
		position.X -= velocity.X;
	};
	
	this.draw = function(){
		context.drawImage(texture, position.X, position.Y, size.width, size.height);
	};
	
	this.getPosition = function(){
		return position;
	};
};
