
function preload(){
	// Laden des Musikstückes
	//sound = loadSound('Assets/012_Enya ~ Only Time.mp3');
	sound = loadSound('Assets/136_Frank Sinatra ~ My Way Lyric Video (TFS Perfect Cell Cover).mp3');
	//sound = loadSound('Assets/139_Michael Calfan - Resurrection.mp3');
	//Song: The Cinematic Orchestra Arrival of the Birds & Transformation
	//Artist: The Cinematic Orchestra, London Metropolitan Orchestra
	//Album: Les Ailes pourpres : Le Mystère des flamants
	
	
  }
  
  let img;
  
  function setup(){
	let cnv = createCanvas(windowWidth, windowHeight);
  // Mausklick erkennung und laden des FFT gemäss https://p5js.org/reference/#/p5.FFT
	cnv.mouseClicked(togglePlay);
	fft = new p5.FFT();
	sound.amp(0.1);
	
  // Laden des Bildes  
	//img = loadImage('Assets/Viereck.png');
	
  }
  
  function draw(){
	background(25);
  
  
	let spectrum = fft.analyze();
	noStroke();
	s1 = 1.0; //scalefactor
	s2 = 0.5; //scalefactor
	 
	// Erestellen des Vogels mittel der Tonfrequenzen
	// Ersstelt den grünen Vogel der durhc seine Lebensdauer and Farben gewinnt und Verliert (Rot und Blau)
	for (let i = 0; i< spectrum.length; i++){
	  fill(i/2, 255 - (i/4), sound.currentTime()*2, 255);
	  let x = map(i, 0, spectrum.length, 0, width);
	  
	  let h = (-height + map(spectrum[i], 0, 255, height, 0));
	  // down leftwing
	  rect(width/2 + x/s1, height/1.5 - i/(tan(i)+0.5), width / spectrum.length, h*s2 );
	  // down rightwing
	  rect(width/2 - (x/s1), height/1.5 - i/(tan(i)+0.5), width / spectrum.length, h*s2 );
	  // up leftwing
	  rect(width/2 + x/s1, height/1.5 + i/(tan(i)+0.5), (width / spectrum.length) / 2, -h*s2);
	  // up rightwing
	  rect(width/2 - (x/s1), height/1.5 + i/(tan(i)+0.5), (width / spectrum.length) / 2, -h*s2);
	  
	}
	
	// tint() Der Kopf des Vogels sollte je nach Lautstärke verschwinden
	// Leider ist mir dies in der Zeit nicht mehr gelungen
	//image(img, (width/2) - 35, (height/2) - 75, 70, 70);
  
	// Hinweistext
	// Intressanterweise ist dieser Text immer Rot, scheint jedoch türkis zwischenzeitlich
	text('Klick to Start', width/2 - 35, 18);
	fill(0,244,255);  
  }
  
  // Starten der Musik
  function togglePlay() {
	if (sound.isPlaying()) {
	  sound.pause();
	} else {
	  sound.loop();
	}
  }