function preload(){
  // sound = loadSound('Assets/002_London Bridge is Falling Down.mp3');
  sound = loadSound('Assets/123_Save Ferris ~ Come On Eileen.mp3')
}


// Variables
var count = 0;
var tileCountX = 30;
var tileCountY = 20;
var tileWidth = 0;
var tileHeight = 0;

var colorStep = 15;

var circleCount = 0;
var endSize = 0;
var endOffset = 0;

var actRandomSeed = 0;

var i = 0;


function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);

  tileWidth = windowWidth / tileCountX;
  tileHeight = windowHeight / tileCountY;
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  background(0);

  let spectrum = (fft.analyze());
 
  
  for (var gridX = 0; gridX <= tileCountX; gridX++) {
    for (var gridY = 0; gridY <= tileCountY; gridY++) {

      let h1 = (-height + map(spectrum[i], 0, 255, height, 0));

      push();
      translate(tileWidth * gridX, tileHeight * gridY);
      scale(1, tileHeight / tileWidth);


      // draw module
      fill(150, i, i);
      rect(tileWidth / 2, tileHeight / 2, tileWidth/500*h1, tileWidth/500*h1)
      pop();
      
      i++;
      
    }
  }
  i = 0;

  text('tap to play', 20, 20);
  text('playtime: ' + sound.currentTime(), 20, 40);
  text('Value of I: ' + i,20,60);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}