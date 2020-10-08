
// Variables
// Tiles
var count = 0;
var tileCountX = 1;
var tileCountY = 1;
var tileWidth = 0;
var tileHeight = 0;

// Circle
var radius = 20;
var moveX = 0;
var moveY = 0;

// Linien
var fächer = 50;
var heightFactor = 2; // reichweite Höhe der Linien / 2 ist für Rand zu Rand
var widthFactor = 2; // reichweite Breite der Linien / 2 ist für Rand zu Rand
var blurre = 15; // Offset für weiss anteil 



function setup() {
  createCanvas(windowWidth, windowHeight);

  tileWidth = windowWidth / tileCountX;
  tileHeight = windowHeight / tileCountY;
  noLoop();
}

function draw() {
  background(50);



  for (var gridX = 0; gridX <= tileCountX; gridX++) {
    for (var gridY = 0; gridY <= tileCountY; gridY++) {

      push();
      if (gridX % 2 == 0) {
        translate(tileWidth * gridX, tileHeight * gridY);
        //scale(1, tileHeight / tileWidth);
      } else {
        translate(tileWidth * gridX, tileHeight * gridY);
        //scale(1, (tileHeight / tileWidth));
      }

      var centerW = tileWidth / 2;
      var centerH = tileHeight / 2;


      // draw module
      noStroke();
      fill(100, 100, 100);

      if (gridX % 2 == 0) {
        if (gridY % 2 == 0) {
          // Top left Quadrant
          translate(centerW + moveY, centerH + moveX);
          //circle(centerW + moveY, centerH + moveX, radius);          
          //form((1),(1), random(15, 255), random(15, 255), random(15, 255));
          form((1), (1), random(5, 255), random(5, 255), random(5, 255));
        } else {
          // Bottom left Quadrant
          translate(centerW + moveY, centerH - moveX);
          //circle(centerW + moveY, centerH - moveX, radius);          
          form((1), (-1), random(5, 255), random(5, 255), random(5, 255));
        }
      } else {
        if (gridY % 2 == 0) {
          // Top right Quadrant
          translate(centerW - moveY, centerH + moveX);
          //circle(centerW - moveY, centerH + moveX, radius);
          form((-1), (1), random(5, 255), random(5, 255), random(5, 255));
        } else {
          // Bottom right Quadrant
          translate(centerW - moveY, centerH - moveX);
          //circle(centerW - moveY, centerH - moveX, radius);
          form((-1), (-1), random(5, 255), random(5, 255), random(5, 255));
        }
      }
      pop();
    }
  }
  textSize(32);
  //text('Number of Tiles: ' + tileCountX*tileCountY, 20, 40);
}

function form(xRotat, yRotate, farbe1, farbe2, farbe3) {

  var spacing1 = tileWidth / fächer;
  var spacing2 = tileHeight / fächer;

  //Form

  // Line
  for (var angle = 0; angle < Math.PI * 2; angle += 0.2) {

    // Linien Horizintal
    stroke(255, 255, 255);
    strokeWeight(1)
    line((radius * Math.sin(angle)) * xRotat, (radius * Math.cos(angle)) * yRotate, (radius * Math.cos(angle)) * xRotat, (radius * Math.sin(angle)) * yRotate);

    //noStroke();
    stroke(0);
    fill(150, 200, 50);
    beginShape();
    vertex(0 * xRotat, 0 * yRotate);
    vertex(tileWidth / 4 * xRotat, 0 * yRotate);
    vertex(tileWidth / 2 * xRotat, tileHeight / 2 * yRotate);
    vertex(tileWidth / 4 * xRotat, tileHeight / 2 * yRotate);
    vertex(tileWidth / 4 * xRotat, tileHeight / 4 * yRotate);
    vertex(0 * xRotat, tileHeight / 4 * yRotate);
    endShape();

    fill(150, 0, 50);
    beginShape();
    vertex(0 * xRotat, 0 * yRotate);
    vertex(0 * xRotat, -tileHeight / 4 * yRotate);
    vertex(-tileWidth / 4 * xRotat, -tileHeight / 4 * yRotate);
    vertex(-tileWidth / 4 * xRotat, -tileHeight / 2 * yRotate);
    vertex(tileWidth / 4 * xRotat, -tileHeight / 2 * yRotate);
    vertex(tileWidth / 4 * xRotat, 0 * yRotate);
    endShape();

    fill(50, 0, 200);
    beginShape();
    vertex(0 * xRotat, 0 * yRotate);
    vertex(-tileWidth / 4 * xRotat, 0 * yRotate);
    vertex(-tileWidth / 2 * xRotat, -tileHeight / 4 * yRotate);
    vertex(-tileWidth / 2 * xRotat, -tileHeight / 2 * yRotate);
    vertex(-tileWidth / 4 * xRotat, -tileHeight / 2 * yRotate);
    vertex(-tileWidth / 4 * xRotat, -tileHeight / 4 * yRotate);
    vertex(0 * xRotat, -tileHeight / 4 * yRotate);
    endShape();

    fill(200, 50, 50);
    beginShape();
    vertex(0 * xRotat, 0 * yRotate);
    vertex(0 * xRotat, tileHeight / 4 * yRotate);
    vertex(tileWidth / 4 * xRotat, tileHeight / 4 * yRotate);
    vertex(tileWidth / 4 * xRotat, tileHeight / 2 * yRotate);
    vertex(-tileWidth / 4 * xRotat, tileHeight / 2 * yRotate);
    vertex(-tileWidth / 4 * xRotat, 0 * yRotate);
    endShape();
  }
}

function mousePressed() {
  redraw(1);
}