

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

  var speedmod = 40;

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
  fill(0,0,0,1
  );
  rect(0,0,width,height);
  frameRate(30);
  // Add the current speed to the location.
  x1 = x1 + xspeed*random(-0.8, 1.3);
  y1 = y1 + yspeed*random(-0.8, 1.3);
  x2 = x2 + x2speed*random(-0.8, 1.3);
  y2 = y2 + y2speed*random(-0.8, 1.3);
  x3 = x3 + x3speed*random(-0.8, 1.3);
  y3 = y3 + y3speed*random(-0.8, 1.3);

  // Check for bouncing
  if ((x1 > width-50) || (x1 < 50)) {
    xspeed = (xspeed * -1);
  }
  if ((y1 > height-50) || (y1 < 50)) {
    yspeed = (yspeed * -1);
  }
  if ((x2 > width-50) || (x2 <50)) {
    x2speed = (x2speed * -1);
  }
  if ((y2 > height-50) || (y2 < 50)) {
    y2speed = (y2speed * -1);
  }
  if ((x3 > width-50) || (x3 < 50)) {
    x3speed = (x3speed * -1);
  }
  if ((y3 > height-50) || (y3 < 50)) {
    y3speed = (y3speed * -1);
  }

  // Display at x,y location
  stroke(0,0);
  fill(255/width*x1*-1,255/width*x1,255);
  ellipse(x1,y1,20,20);

  stroke(0,0);
  fill(255,255/width*y2*-1,255/width*y2);
  ellipse(x2,y2,20,20);

  stroke(0,0);
  fill(255,255,255/width*x3*-1);
  ellipse(x3,y3,20,20);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

