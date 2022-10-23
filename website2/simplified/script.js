// cleaner p5

let val = 0;
let interval;
let animated = false;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style("display", "fixed");
  cnv.parent("p5");
  const destinationColor = color(255, 144, 40);
  let color1 = color(255);
  let color2 = color(255);
  background(255, 0, 200);
}

function draw() {
  background(255);
  setGradient(color1, color2);
  if (isScrolling) animateScroll();
  if (val > 0.95 && !isScrolling) fadeOut();
}

function setGradient(c1, c2) {
  noFill();
  for (let y = 0; y < height / 2; y++) {
    let inter = map(y, 0, height / 2, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    strokeWeight(3);
    line(0, y, width, y);
  }
}
function fadeOut() {
  clearInterval(interval);
  val = 0;
  interval = setInterval(() => {
    color1 = lerpColor(color1, color2, val);
    val += 0.05;
    if (val > 0.95) {
      clearInterval(interval);
      val = 0;
      animated = false;
    }
  }, 30);
}
function animateScroll() {
  if (!animated) {
    animated = true;
    interval = setInterval(() => {
      color1 = lerpColor(color1, destinationColor, val);
      val += 0.05;
    }, 50);
  }
}

// scroll logic
let scrolling;
let isScrolling = false;

$(window).scroll(() => {
  if (isScrolling === false) {
    isScrolling = true;
    scrolling = setTimeout(() => {
      isScrolling = false;
      console.log(isScrolling);
    }, 1000);
  }
});
