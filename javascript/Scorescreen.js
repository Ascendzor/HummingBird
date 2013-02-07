// draws the scorescreen on the main canvas
function Scorescreen () {
    //store the last click on the canvas in this object
    var last_click = { x:0,y:0};
    var canvasOffsetLeft;
    var canvasOffsetTop;

    var buttons = [];

    function initialize () {
		var canvas = document.getElementById('myCanvas');
		canvas.width = screenSize.width;
		canvas.height = screenSize.height;

        canvasOffsetLeft = canvas.offsetLeft;
        canvasOffsetTop = canvas.offsetTop;

		context = canvas.getContext('2d');
        canvas.addEventListener('click', clickHandler, false);
        setInterval(update, ONE_FRAME_TIME);
    }

    // canvas click handler
    function clickHandler (click) {
        console.log(click.pageX);
        last_click = {
            x: click.pageX - canvasOffsetLeft,
            y: click.pageY - canvasOffsetTop
        };
        console.log(last_click);

    }
    function update() {

    }
    initialize();
}
