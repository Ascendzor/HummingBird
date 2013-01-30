function CollisionSegment(x, y, ascendingTexture, flatTexture, descendingTexture){
	var textures = [];
	var texture;
    var width = screenSize.width / 4;
    var height = 400;
	
	var velocity = {X:2, Y:0};
		
	var previous;
	
	var constructor = function(){
		textures.push(ascendingTexture);
		textures.push(flatTexture);
		textures.push(descendingTexture);
		texture = textures[1];
	};
	
	this.setDebug = function(v) {
		isDebug = v;
	}
	this.getPrevious = function(){
		return previous;
	}
	
	this.setPrevious = function(previousz){
		previous = previousz;
	}
	
	this.getTexture = function(){
		return texture;
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
			
			if(y >= (450/600) * screenSize.height){
				var randint = utill.randomRange(textures.length-1);
				texture = textures[randint];
			}else if( y <= 200/600 * screenSize.width){
				var randint = utill.randomRange(textures.length-1);
				texture = textures[(randint+1)];
			}else{
				var randint = utill.randomRange(textures.length);
				texture = textures[randint];
			}

            var offset = 96;
			//if previous is ascending
			if((previous.getTexture().src == textures[0].src) && (texture.src == textures[0].src)){
				y -= offset;
			}
			if((previous.getTexture().src == textures[0].src) && (texture.src == textures[1].src)){
				y -= offset;
			}
			
			//if previous is flat
			if((previous.getTexture().src == textures[1].src) && (texture.src == textures[2].src)){
				y += offset;
			}
			
			//if previous is descending
			if((previous.getTexture().src == textures[2].src) && (texture.src == textures[2].src)){
				y+= offset;
			}
		}
		context.drawImage(texture, x, y, width, height);
	}
	
	constructor();
}
