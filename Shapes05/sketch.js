
// Variables
// Tiles
var count = 0;
var tileCountX = 4;
var tileCountY = 4;
var tileWidth = 0;
var tileHeight = 0;

// Circle
var radius = 30;
var moveX = 0;
var moveY = 0;

// Linien
var fächer = 16;
var heightFactor = 2; // reichweite Höhe der Linien / 2 ist für Rand zu Rand
var widthFactor = 2; // reichweite Breite der Linien / 2 ist für Rand zu Rand



function setup(){
  createCanvas(windowWidth, windowHeight);

  tileWidth = windowWidth / tileCountX;
  tileHeight = windowHeight / tileCountY;
  noLoop();
}

function draw(){
  background(0);

 
  
  for (var gridX = 0; gridX <= tileCountX; gridX++) {
    for (var gridY = 0; gridY <= tileCountY; gridY++) {

      push();
      if (gridX%2 == 0) {
        translate(tileWidth * gridX, tileHeight * gridY);
        //scale(1, tileHeight / tileWidth);
      } else {
        translate(tileWidth * gridX, tileHeight * gridY);
        //scale(1, (tileHeight / tileWidth));
      }

      var centerW = tileWidth/2;
      var centerH = tileHeight/2;


      // draw module
      noStroke();
      fill(100, 100, 100);
      
      if (gridX%2 == 0) {
        if (gridY%2 == 0) {
          translate(centerW + moveY, centerH + moveX);
          //circle(centerW + moveY, centerH + moveX, radius);          
          form((1),(1));
        } else {
          translate(centerW + moveY, centerH - moveX);
          //circle(centerW + moveY, centerH - moveX, radius);          
          form((1),(-1));
        }
      } else {
        if (gridY%2 == 0) {
          translate(centerW - moveY, centerH + moveX);
          //circle(centerW - moveY, centerH + moveX, radius);
          form((-1),(1));
        } else {
          translate(centerW - moveY, centerH - moveX);
          //circle(centerW - moveY, centerH - moveX, radius);
          form((-1),(-1));
        }
      }
      pop();      
    }
  }
  textSize(32);
  //text('Number of Tiles: ' + tileCountX*tileCountY, 20, 40);
}

function form(xRotat, yRotate) {

  //Kreis
  //circle(0,0,radius);

  //Dreieck
  //triangle(30*xRotat, 75*yRotate, 58*xRotat, 20*yRotate, 86*xRotat, 75*yRotate);

  //Form

  var spacing = tileWidth/fächer;

  
  for (var i = 0; i*spacing < tileWidth + 1; i++) {
    stroke(255-i*255/fächer,255-i*255/fächer,i*255/fächer);    
    strokeWeight(2)
    line((tileWidth/widthFactor - i*spacing)*xRotat, tileHeight/heightFactor*yRotate, (-tileWidth/widthFactor + i*spacing)*xRotat, -tileHeight/heightFactor*yRotate);
  }
}