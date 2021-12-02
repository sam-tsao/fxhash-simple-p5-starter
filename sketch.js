const backgroundColor = fxrand()*255

window.$fxhashFeatures = {
  // here define the token features
  "Background Color": backgroundColor
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
  background(backgroundColor)
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
