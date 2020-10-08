
// Variables
// Tiles
var count = 0;
var tileCountX = 30;
var tileCountY = 20;
var tileWidth = 0;
var tileHeight = 0;

// Circle
var radius = 30;
var moveX = 0;
var moveY = 0;

// Linien
var fächer = 50;
var heightFactor = 2; // reichweite Höhe der Linien / 2 ist für Rand zu Rand
var widthFactor = 2; // reichweite Breite der Linien / 2 ist für Rand zu Rand
var blurre = 15; // Offset für weiss anteil 



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
          // Top left Quadrant
          translate(centerW + moveY, centerH + moveX);
          //circle(centerW + moveY, centerH + moveX, radius);          
          //form((1),(1), random(15, 255), random(15, 255), random(15, 255));
          form((1),(1), random(5, 255), random(5, 255), random(5, 255));
        } else {
          // Bottom left Quadrant
          translate(centerW + moveY, centerH - moveX);
          //circle(centerW + moveY, centerH - moveX, radius);          
          form((1),(-1), random(5, 255), random(5, 255), random(5, 255));
        }
      } else {
        if (gridY%2 == 0) {
          // Top right Quadrant
          translate(centerW - moveY, centerH + moveX);
          //circle(centerW - moveY, centerH + moveX, radius);
          form((-1),(1),random(5, 255), random(5, 255), random(5, 255));
        } else {
          // Bottom right Quadrant
          translate(centerW - moveY, centerH - moveX);
          //circle(centerW - moveY, centerH - moveX, radius);
          form((-1),(-1),random(5, 255), random(5, 255), random(5, 255));
        }
      }
      pop();      
    }
  }
  textSize(32);
  //text('Number of Tiles: ' + tileCountX*tileCountY, 20, 40);
}

function form(xRotat, yRotate, farbe1, farbe2, farbe3) {

  var spacing1 = tileWidth/fächer;
  var spacing2 = tileHeight/fächer;

  //Circle
  //circle(0,0,radius);

  //Triangle
  //triangle(30*xRotat, 75*yRotate, 58*xRotat, 20*yRotate, 86*xRotat, 75*yRotate);

  //Form

    // Line
  for (var i = 0; i*spacing1 < tileWidth+1; i++) {
    //stroke(255-i*255/fächer,255-i*255/fächer,i*255/fächer);
    
    // Linien Horizintal
    stroke(255-(i+blurre)*farbe1/fächer, 255-(i+blurre)*farbe2/fächer, 255-(i+blurre)*farbe3/fächer);    
    strokeWeight(1)
    line(-tileWidth/widthFactor*xRotat, (-tileHeight/widthFactor + i*spacing2)*yRotate, tileWidth/widthFactor*xRotat, tileHeight/widthFactor*yRotate);
  
    // Linien Vertikal
    stroke((i+blurre)*farbe1/fächer, (i+blurre)*farbe2/fächer, (i+blurre)*farbe3/fächer);    
    strokeWeight(1)
    line((tileWidth/widthFactor)*xRotat, tileHeight/heightFactor*yRotate, (-tileWidth/widthFactor + i*spacing1)*xRotat, -tileHeight/heightFactor*yRotate);
  }
}

function mousePressed(){
  redraw(1);
}