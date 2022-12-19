let balls = [];
let dLocations = [];
let cLocations = [];
let inerpolations = [];
let inerpolation = 0.1;
let amount = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < amount; i++) {
    balls.push(new ball(random(width), random(height)));
  }

  for (const x of balls) {
    dLocations.push(createVector(random(width), random(height)));
    inerpolations.push(random(0.005, 0.1));
  }

  setInterval(() => {
    dLocations = [];
    for (let i = 0; i < balls.length; i++) {
      dLocations.push(
        createVector(random(-100, 100) + mouseX, random(-100, 100) + mouseY)
      );
    }
  }, 50);
}

function draw() {
  background(0);
  fill(255);
  stroke(255);
  strokeWeight(0.1);
  line(balls[0].getLocation().x, balls[0].getLocation().y, mouseX, mouseY);
  noStroke();

  for (let i = 0; i < balls.length; i++) {
    let v = p5.Vector.lerp(
      balls[i].getLocation(),
      dLocations[i],
      inerpolations[i]
    );
    balls[i].setLocation(v);
  }
  for (const x of balls) x.render();
}

class ball {
  constructor(x, y) {
    this.size = random(1, 2);
    this.location = createVector(x, y);
  }
  render() {
    circle(this.location.x, this.location.y, this.size);
  }
  setLocation(vector) {
    this.location = vector;
  }
  getLocation() {
    return this.location;
  }
}
