function CollisionSegment(x, y, newTextures){
	var textures = newTextures;
	var texture = textures[5];
    var width = screenSize.width / 4;
    var height = 400;
	var type = "flat";
	
	var velocity = {X:2, Y:0};
		
	var previous;
	
	
	this.getPrevious = function(){
		return previous;
	}
	
	this.setPrevious = function(previousz){
		previous = previousz;
	}
	
	this.getType = function(){
		return type;
	}
	
	this.getY = function(){
		return y;
	}
	
	this.getX = function(){
		return x;
	}
	
	this.getWidth = function(){
		return width;
	}
	
	this.getY = function(){
		return y;
	}
	
	this.getPosition = function(){
		return {X: x, Y: y};
	}
	
	this.moveLeft = function(xScalar){
		x -= velocity.X * xScalar;
	};
	
	this.getVelocity = function(){
		return velocity;
	};
	
	this.draw = function(){
		if((x+width) < 0){
			x = (screenSize.width-velocity.X);
			y = previous.getY();
			var randint;
			if(y >= (450/600) * screenSize.height){
				randint = utill.randomRange(textures.length-4);
				texture = textures[randint];
			}else if( y <= 200/600 * screenSize.width){
				randint = utill.randomRange(textures.length-4);
				randint += 4;
				texture = textures[randint];
			}else{
				randint = utill.randomRange(textures.length);
				texture = textures[randint];
			}
			if(randint < 4){
				type = "ascending";
			}else if((randint > 3) && (randint < 6)){
				type = "flat";
			}else{
				type = "descending";
			}
            var offset = 96;
			//if previous is ascending
			if((previous.getType() == "ascending") && (type == "ascending")){
				y -= offset;
			}
			if((previous.getType() == "ascending") && (type == "flat")){
				y -= offset;
			}
			
			//if previous is flat
			if((previous.getType() == "flat") && (type == "descending")){
				y += offset;
			}
			
			//if previous is descending
			if((previous.getType() == "descending") && (type == "descending")){
				y+= offset;
			}
		}
		context.drawImage(texture, x, y, width, height);
	}
}
