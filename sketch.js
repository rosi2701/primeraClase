var d; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
  //frameRate(2) dejarlo así por si quiero volverlo a usar
}

function draw() {
  d = random (10,100);
  noStroke();
  fill(255,d);
  ellipse(mouseX,mouseY,d,d);
}
