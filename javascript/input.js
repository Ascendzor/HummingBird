var input =  {
    heartup: false,
    heartdown: false,
    restart: false,
}

var KEY = {
    A: 65,
    D: 68,
    Q: 81
}

/*
 * release event called on onpress from the body.
 */
function press (evt) {
    var code = evt.keyCode;
    switch(code) {
        case KEY.A:
            input.heartup = true;
        break;

        case KEY.D:
            input.heartdown = true;
        break;

        case KEY.Q:
            input.restart = true;
        break;
    }
}

/*
 * release event called on onrelease from the body.
 */
function release(evt) {
    var code = evt.keyCode;
    switch(code) {
        case KEY.A:
            input.heartup = false;
        break;

        case KEY.D:
            input.heartdown = false;
        break;

        case KEY.Q:
            input.restart = false;
        break;
    }
}

var activeButtons = [];
var activeIntervals = [];
var lastClick = {x:0, y:0};
function clickHandler(click){
        last_click = {
            x: click.pageX - canvasOffsetLeft,
            y: click.pageY - canvasOffsetTop
        };
		
		for(var i=0; i<activeButtons.length; i++){
			if(last_click.x > activeButtons[i].x){
				if(last_click.y > activeButtons[i].y){
					if(last_click.x < (activeButtons[i].x+activeButtons[i].img.width)){
						if(last_click.y < (activeButtons[i].y+activeButtons[i].img.height)){
							for(var j=0; j<activeIntervals.length; j++){
								clearInterval(activeIntervals[j]);
							}
							activeButtons[i].onClick();
							console.log(i);
							console.log(activeButtons[i]);
						}
					}
				}
			}
		}
        console.log(last_click);
}

function activateState(buttons, intervals){
	activeButtons = buttons
	activeIntervals = intervals;
}

