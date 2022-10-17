// cleaner p5
let destinationColor, color1, color2;
let interval;
let c = 0;
let animated = false;

function setup() {
  // seting up the canvas
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("p5");

  // colors
  destinationColor = color(237, 49, 25);
  color1 = color(255);
  color2 = color(255);
}

function draw() {
  background(255);
  if (isScrolling) fadeIn();
  if (c > 0.95 && !isScrolling) fadeOut();
  setGradient(color1, color2);
}

function setGradient(c1, c2) {
  for (let y = 0; y < height / 4; y++) {
    let progress = map(y, 0, height / 4, 0, 1);
    let c = lerpColor(c1, c2, progress);
    stroke(c);
    strokeWeight(0.3);
    line(0, y, width, y);
  }
}

function fadeOut() {
  clearInterval(interval);
  c = 0;
  interval = setInterval(() => {
    color1 = lerpColor(color1, color2, c);
    c += 0.05;
    if (c > 0.95) {
      clearInterval(interval);
      c = 0;
      animated = false;
    }
  }, 20);
}

function fadeIn() {
  if (!animated) {
    animated = true;
    interval = setInterval(() => {
      if (c < 1) {
        color1 = lerpColor(color1, destinationColor, c);
        c += 0.05;
      }
    }, 30);
  }
}

// scroll logic
let isScrolling = false;

document.onscroll = () => {
  if (isScrolling === false) {
    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 400);
  }
};
