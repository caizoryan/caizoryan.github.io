let c = 0;
let interval;

function setup() {
  createCanvas(windowWidth, windowHeight).parent("pp");
  background(0);
}

function draw() {
  for (let y = 0; y < 100; y++) {
    for (let x = 0; x < 100; x++) {
      let r = compute(frameCount * 0.1, x, y);
      let red = map(sin(frameCount * 0.1 + x * y), -1, 1, 100, 255);
      let green = map(sin(frameCount * 0.3 + y * x), -1, 1, 0, 0);
      let blue = map(sin(frameCount * 0.01 + x + y), -1, 1, 0, 80);
      fill(red, green, blue);
      square(x * 10, y * 10, r + c);
    }
  }
}
function compute(t, x, y) {
  return sin(t - sqrt((x - width / 100) ** 2 + (y - height / 2) ** 2));
}

function keyPressed() {
  if (key == "s")
    interval = setInterval(() => {
      c += 0.1;
    }, 100);
  if (key == "c") noLoop();
}
