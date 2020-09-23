

/**
 * Based on code Vector 
 * by Daniel Shiffman.  
 */

var x1, y1, x2, y2, x3, y3, xspeed, yspeed, x2speed, y2speed, x3speed, y3speed;

function setup() {
  // Canvas full page
  createCanvas(windowWidth,windowHeight);
  // Default screen density (for retina) 
  var density = displayDensity();
  pixelDensity(density);
  // Var init
  background(0);
  x1 = width/2;
  y1 = height/2;
  x2 = width/2;
  y2 = height/2;
  x3 = width/2;
  y3 = height/2;

  var speedmod = 60;

  xspeed = random(-1, 1)*speedmod;
  yspeed = random(-1, 1)*speedmod;
  x2speed = random(-1, 1)*speedmod;
  y2speed = random(-1, 1)*speedmod;
  x3speed = random(-1, 1)*speedmod;
  y3speed = random(-1, 1)*speedmod;

  smooth();

}

function draw() {

  noStroke();
  fill(0,0,0,5);
  rect(0,0,width,height);
  frameRate(60);
  // Add the current speed to the location.
  x1 = x1 + xspeed;
  y1 = y1 + yspeed;
  x2 = x2 + x2speed;
  y2 = y2 + y2speed;
  x3 = x3 + x3speed;
  y3 = y3 + y3speed;

  // Check for bouncing
  if ((x1 > width-50) || (x1 < 50)) {
    xspeed = xspeed * -1;
  }
  if ((y1 > height-50) || (y1 < 50)) {
    yspeed = yspeed * -1;
  }
  if ((x2 > width-50) || (x2 <50)) {
    x2speed = x2speed * -1;
  }
  if ((y2 > height-50) || (y2 < 50)) {
    y2speed = y2speed * -1;
  }
  if ((x3 > width-50) || (x3 < 50)) {
    x3speed = x3speed * -1;
  }
  if ((y3 > height-50) || (y3 < 50)) {
    y3speed = y3speed * -1;
  }

  // Display at x,y location
  stroke(0,1);
  fill(255/width*x1*-1,255/width*x1,255);
  ellipse(x1,y1,50,50);

  stroke(0,1);
  fill(255,255/width*y2*-1,255/width*y2);
  ellipse(x2,y2,50,50);

  stroke(0,5);
  fill(255,255,255/width*x3*-1);
  ellipse(x3,y3,70,70);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

