
// Variables
// Tiles
var count = 0;
var tileCountX = 6;
var tileCountY = 4;
var tileWidth = 0;
var tileHeight = 0;

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
  var randoVal = random(6, 9.5);



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
          translate(centerW, centerH);
          //circle(centerW + moveY, centerH + moveX, radius);          
          //form((1),(1), random(15, 255), random(15, 255), random(15, 255));
          form((1), (1), randoVal);
        } else {
          // Bottom left Quadrant
          translate(centerW, centerH);
          //circle(centerW + moveY, centerH - moveX, radius);          
          form((1), (-1), randoVal);
        }
      } else {
        if (gridY % 2 == 0) {
          // Top right Quadrant
          translate(centerW, centerH);
          //circle(centerW - moveY, centerH + moveX, radius);
          form((-1), (1), randoVal);
        } else {
          // Bottom right Quadrant
          translate(centerW, centerH);
          //circle(centerW - moveY, centerH - moveX, radius);
          form((-1), (-1), randoVal);
        }
      }
      pop();
    }
  }
  textSize(32);
  //text('Number of Tiles: ' + tileCountX*tileCountY, 20, 40);
}

function form(xRotat, yRotate, randoVal) {

  var moveX = tileWidth/20;
  var moveY = tileHeight/20;

  //Star



  // Line
  for (var angle = 0; angle < Math.PI * 2; angle += 0.2) {


    noStroke();
    //stroke(0);
    //strokeWeight(1)

    fill(155, 28, 49); // Royal Red
    beginShape();
    vertex(moveX * -10 * xRotat, moveY * 10 * yRotate);
    vertex(moveX * -10 * xRotat, moveY * 0 * yRotate);
    vertex(moveX * 0 * xRotat, moveY * 0 * yRotate);
    vertex(moveX * 0 * xRotat, moveY * -10 * yRotate);
    vertex(moveX * 10 * xRotat, moveY * -10 * yRotate);
    vertex(moveX * 10 * xRotat, moveY * 0 * yRotate);
    vertex(moveX * 0 * xRotat, moveY * 0 * yRotate);
    vertex(moveX * 0 * xRotat, moveY * 10 * yRotate);
    endShape();


    fill(65, 105, 225); // Royal Blue
    beginShape();
    vertex(moveX * -10 * xRotat, moveY * -10 * yRotate);
    vertex(moveX * 0 * xRotat, moveY * -10 * yRotate);
    vertex(moveX * 0 * xRotat, moveY * 0 * yRotate);
    vertex(moveX * 10 * xRotat, moveY * 0 * yRotate);
    vertex(moveX * 10 * xRotat, moveY * 10 * yRotate);
    vertex(moveX * 0 * xRotat, moveY * 10 * yRotate);
    vertex(moveX * 0 * xRotat, moveY * 0 * yRotate);
    vertex(moveX * -10 * xRotat, moveY * 0 * yRotate);
    endShape();


    fill(255, 215, 0); // Gold
    beginShape();
    vertex(moveX * 9.5 * xRotat, moveY * randoVal * yRotate);
    vertex(moveX * 1 * xRotat, moveY * randoVal * yRotate);
    vertex(moveX * 7 * xRotat, moveY * 9 * yRotate);
    vertex(moveX * 5 * xRotat, moveY * 5 * yRotate);
    vertex(moveX * 9 * xRotat, moveY * 7 * yRotate);
    vertex(moveX * randoVal * xRotat, moveY * 1 * yRotate);        
    endShape();

    beginShape();
    vertex(moveX * -9.5 * xRotat, moveY * -9.5 * yRotate);
    vertex(moveX * -1 * xRotat, moveY * -9.5 * yRotate);
    vertex(moveX * -7 * xRotat, moveY * -9 * yRotate);
    vertex(moveX * -5 * xRotat, moveY * -5 * yRotate);
    vertex(moveX * -9 * xRotat, moveY * -7 * yRotate);
    vertex(moveX * -9.5 * xRotat, moveY * -1 * yRotate);        
    endShape();

    beginShape();
    vertex(moveX * 10 * xRotat, moveY * -randoVal * yRotate);
    vertex(moveX * randoVal * xRotat, moveY * -3 * yRotate);
    vertex(moveX * 7 * xRotat, moveY * -4 * yRotate);
    vertex(moveX * 8 * xRotat, moveY * -7 * yRotate);
    vertex(moveX * 6 * xRotat, moveY * -5 * yRotate);
    vertex(moveX * 5 * xRotat, moveY * -5 * yRotate);
    vertex(moveX * 3 * xRotat, moveY * -6 * yRotate);
    vertex(moveX * 5 * xRotat, moveY * -7 * yRotate);
    vertex(moveX * 6 * xRotat, moveY * -9 * yRotate);
    vertex(moveX * 6 * xRotat, moveY * -9 * yRotate);
    endShape();

    beginShape();
    vertex(moveX * -10 * xRotat, moveY * 10 * yRotate);
    vertex(moveX * -10 * xRotat, moveY * 3 * yRotate);
    vertex(moveX * -7 * xRotat, moveY * 4 * yRotate);
    vertex(moveX * -8 * xRotat, moveY * 7 * yRotate);
    vertex(moveX * -6 * xRotat, moveY * 5 * yRotate);
    vertex(moveX * -5 * xRotat, moveY * 5 * yRotate);
    vertex(moveX * -3 * xRotat, moveY * 6 * yRotate);
    vertex(moveX * -5 * xRotat, moveY * 7 * yRotate);
    vertex(moveX * -6 * xRotat, moveY * 9 * yRotate);
    vertex(moveX * -6 * xRotat, moveY * 9 * yRotate);
    endShape();

    fill(192, 192, 192); // silver
    beginShape();
    vertex(moveX * 4 * xRotat, moveY * -9 * yRotate);
    vertex(moveX * 4 * xRotat, moveY * -10 * yRotate);
    vertex(moveX * 10 * xRotat, moveY * -10 * yRotate);
    vertex(moveX * 10 * xRotat, moveY * -9 * yRotate);
    endShape();

    beginShape();
    vertex(moveX * -4 * xRotat, moveY * 9 * yRotate);
    vertex(moveX * -4 * xRotat, moveY * 10 * yRotate);
    vertex(moveX * -10 * xRotat, moveY * 10 * yRotate);
    vertex(moveX * -10 * xRotat, moveY * 9 * yRotate);
    endShape();

  }
}

function mousePressed() {
  redraw(1);
}