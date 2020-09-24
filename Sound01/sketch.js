function preload(){
  // sound = loadSound('Assets/002_London Bridge is Falling Down.mp3');
  sound = loadSound('Assets/028_R.I.O. Feat. U-Jean ~ Summer Jam.mp3')
}

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  background(0);

  let spectrum = (fft.analyze());
 
  s = 1.8; //scalefactor
    
  for (let i = 0; i< 51; i++){
    noFill();
    stroke(i*12, i*6, 255-(i*12));
    strokeWeight(2);
    //let x = map(i, 0, spectrum.length/, 0, width);

    let steps = 20;
    
    let h1 = (-height + map(spectrum[i], 0, 255, height, 0));
    let h2 = (-height + map(spectrum[i+(steps*1)], 0, 255, height, 0));
    let h3 = (-height + map(spectrum[i+(steps*2)], 0, 255, height, 0));
    let h4 = (-height + map(spectrum[i+(steps*3)], 0, 255, height, 0));
    let h5 = (-height + map(spectrum[i+(steps*4)], 0, 255, height, 0));
    let h6 = (-height + map(spectrum[i+(steps*5)], 0, 255, height, 0));
    let h7 = (-height + map(spectrum[i+(steps*6)], 0, 255, height, 0));
    let h8 = (-height + map(spectrum[i+(steps*7)], 0, 255, height, 0));
    let h9 = (-height + map(spectrum[i+(steps*8)], 0, 255, height, 0));
    let h10 = (-height + map(spectrum[i+(steps*9)], 0, 255, height, 0));
    let h11 = (-height + map(spectrum[i+(steps*10)], 0, 255, height, 0));
 

    // Cricle
    
    circle(width*(1/8),height*(1/4),h1/2);
    circle(width*(2/8),height*(2/4),h2/2);
    circle(width*(3/8),height*(1/4),h3/2);
    circle(width*(4/8),height*(2/4),h4/2);
    circle(width*(5/8),height*(1/4),h5/2);
    circle(width*(6/8),height*(2/4),h6)/2;
    circle(width*(7/8),height*(1/4),h7/2);
    circle(width*(1/8),height*(3/4),h8/2);
    circle(width*(3/8),height*(3/4),h9/2);
    circle(width*(5/8),height*(3/4),h10/2);
    circle(width*(7/8),height*(3/4),h11/2);
  } 

  text('tap to play', 20, 20);
  text('playtime: ' + sound.currentTime(), 20, 40);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
function keyPressed() {
  if (key == 's' || key == 'S') saveThumb(650, 350);
}

// Thumb
function saveThumb(w, h) {
  let img = get( width/2-w/2, height/2-h/2, w, h);
  save(img,'thumb.jpg');
}