
var x = 0;
var xl = 0;
var y = 0;
var yl = 0;
var framesElapsed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(51);
  frameRate(60);

  framesElapsed++;

  if(framesElapsed == 30){
    xl = x + random(-20, 60);
    yl = y + random(-20, 60);
    framesElapsed = 0;
  }
  //x = lerp(x, random(height), 0.05);
  //y = lerp(y, random(width), 0.05);



  fill(255);
  stroke(255);
  ellipse(x, y, 66, 66);
  text('Value of I: ' + frameCount,200,60);
  text('Value of X: ' + x,200,80);
  text('Value of XL: ' + xl,200,100);

  x = lerp(x, xl, 0.05);
  y = lerp(y, yl, 0.05);
}


