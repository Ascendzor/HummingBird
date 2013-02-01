function treeSpider(position, texture){
	var positionz = {
		X: position.X,
		Y: position.Y
	};
	
	this.update = function(velocity, xScalar){
		positionz.X  = positionz.X - velocity.X * xScalar;
	};
	
	this.draw = function(){
		context.drawImage(texture, positionz.X, positionz.Y);
	};
}