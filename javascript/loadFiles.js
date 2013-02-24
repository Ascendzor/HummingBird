var images;
var backgroundAudio;
var audioToggle;

var canvasOffsetLeft;
var canvasOffsetTop;
function loadFiles(){
		backgroundAudio = document.getElementById('audioBackground');
		backgroundAudio.volume = 1;
		
		audioToggle = document.createElement("div");
		audioToggle.setAttribute('id', 'audioOff');
		audioToggle.addEventListener("click", function(){
			if(backgroundAudio.volume == 1){
				backgroundAudio.volume = 0;
				audioToggle.setAttribute('id', 'audioOn');
			}else{
				backgroundAudio.volume = 1;
				audioToggle.setAttribute('id', 'audioOff');
			}
		});
	
		var loadedImages = 0;
		images = [];
		var theImages = [];
		
		theImages = ["images/backgroundtextured.png",
						"images/birdy/bird0.png",
						"images/birdy/bird1.png",
						"images/birdy/bird2.png",
						"images/birdy/bird3.png",
						"images/birdy/explosion/explosion1.png",
						"images/birdy/explosion/explosion10.png",
						"images/birdy/explosion/explosion2.png",
						"images/birdy/explosion/explosion3.png",
						"images/birdy/explosion/explosion4.png",
						"images/birdy/explosion/explosion5.png",
						"images/birdy/explosion/explosion6.png",
						"images/birdy/explosion/explosion7.png",
						"images/birdy/explosion/explosion8.png",
						"images/birdy/explosion/explosion9.png",
						"images/birdy/explosion/Pixel.png",
						"images/cloud0.png",
						"images/cloud1.png",
						"images/cloud2.png",
						"images/cloud3.png",
						"images/Credits.png",
						"images/hills.png",
						"images/hills2.png",
						"images/nest.png",
						"images/Pickups/Butterfly/butterfly1.png",
						"images/Pickups/Butterfly/butterfly2.png",
						"images/Pickups/Butterfly/butterfly3.png",
						"images/Pickups/Butterfly/butterfly4.png",
						"images/Pickups/Butterfly/butterfly5.png",
						"images/Pickups/Butterfly/butterfly6.png",
						"images/Pickups/Butterfly/butterfly7.png",
						"images/Pickups/Butterfly/butterfly8.png",
						"images/Pickups/Butterfly/butterfly9.png",
						"images/Pickups/Spider/spider1.png",
						"images/Pickups/Spider/spider2.png",
						"images/Pickups/Spider/spider3.png",
						"images/Pickups/Spider/spider4.png",
						"images/Pickups/Spider/spider5.png",
						"images/Pickups/Spider/spider6.png",
						"images/Pickups/Spider/spider7.png",
						"images/SegmentTextures/ascending1.png",
						"images/SegmentTextures/ascending2.png",
						"images/SegmentTextures/ascending3.png",
						"images/SegmentTextures/ascending4.png",
						"images/SegmentTextures/descending1.png",
						"images/SegmentTextures/descending2.png",
						"images/SegmentTextures/descending3.png",
						"images/SegmentTextures/descending4.png",
						"images/SegmentTextures/level1.png",
						"images/SegmentTextures/level2.png",
						"images/sign2.png",
						"images/spider.png",
						"images/spiderTree.png",
						"images/SPLASH2.png",
						"images/splashscreen/icemedium0.png",
						"images/splashscreen/icemedium1.png",
						"images/splashscreen/icemedium2.png",
						"images/splashscreen/icemedium3.png",
						"images/splashscreen/logo.png",
						"images/sun.png",
						"images/textbackground.png",
						"images/tree.png",
						"images/Buttons/play.png",
						"images/Buttons/credits.png",
						"images/Buttons/info.png",
						"images/AudioOn.png",
						"images/AudioOff.png"];
						
	
	var canvas = document.getElementById('myCanvas');
	canvas.width = screenSize.width;
	canvas.height = screenSize.height;

    canvasOffsetLeft = canvas.offsetLeft;
    canvasOffsetTop = canvas.offsetTop;
	
	
	function handleLoadedImage(){
		loadedImages++;
		if(loadedImages == theImages.length){
			ColdSplash();
		}
	};
	
	for(var i=0; i<theImages.length; i++){
		var tmpImage = new Image();
		tmpImage.src = theImages[i];
		images[theImages[i]] = tmpImage;
		tmpImage.onload = handleLoadedImage;
	};
}
