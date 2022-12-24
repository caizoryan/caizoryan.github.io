let keyframesPos = [
  [100, 100],
  [200, 200],
  [500, 500],
  [800, 800],
];
let keyframesScale = [1, 1.5, 1, 1.5];
let keyframesRotation = [90, 180, 90, 180];
let keyframesColor = [200, 100, 200, 255];
let turn = 0;
let r = 0;
let x = 0;
let s = 0;
let c = 0;
y = 0;
let font;
function setup() {
  angleMode(DEGREES);

  let canvas = createCanvas(windowWidth * 0.8, windowHeight);
  canvas.parent("canvas");
  createP("Size Keyframes").parent("size");
  let size1 = createInput().parent("size");
  let size2 = createInput().parent("size");
  let size3 = createInput().parent("size");
  let size4 = createInput().parent("size");

  size1.changed(() => {
    keyframesScale[0] = size1.value();
  });
  size2.changed(() => {
    keyframesScale[1] = size2.value();
  });
  size3.changed(() => {
    keyframesScale[2] = size3.value();
  });
  size4.changed(() => {
    keyframesScale[3] = size4.value();
  });

  createP("Rotation Keyframes").parent("rotation");
  let rotation1 = createInput().parent("rotation");
  let rotation2 = createInput().parent("rotation");
  let rotation3 = createInput().parent("rotation");
  let rotation4 = createInput().parent("rotation");

  rotation1.changed(() => {
    keyframesRotation[0] = rotation1.value();
  });
  rotation2.changed(() => {
    keyframesRotation[1] = rotation2.value();
  });
  rotation3.changed(() => {
    keyframesRotation[2] = rotation3.value();
  });
  rotation4.changed(() => {
    keyframesRotation[3] = rotation4.value();
  });
  createP("Color Keyframes").parent("color");
  let color1 = createInput().parent("color");
  let color2 = createInput().parent("color");
  let color3 = createInput().parent("color");
  let color4 = createInput().parent("color");

  color1.changed(() => {
    keyframesColor[0] = color1.value();
  });
  color2.changed(() => {
    keyframesColor[1] = color2.value();
  });
  color3.changed(() => {
    keyframesColor[2] = color3.value();
  });
  color4.changed(() => {
    keyframesColor[3] = color4.value();
  });

  createP("posX Keyframes").parent("posX");
  let posX1 = createInput().parent("posX");
  let posX2 = createInput().parent("posX");
  let posX3 = createInput().parent("posX");
  let posX4 = createInput().parent("posX");

  posX1.changed(() => {
    keyframesPos[0][0] = posX1.value();
  });
  posX2.changed(() => {
    keyframesPos[1][0] = posX2.value();
  });
  posX3.changed(() => {
    keyframesPos[2][0] = posX3.value();
  });
  posX4.changed(() => {
    keyframesPos[3][0] = posX4.value();
  });

  createP("posY Keyframes").parent("posY");
  let posY1 = createInput().parent("posY");
  let posY2 = createInput().parent("posY");
  let posY3 = createInput().parent("posY");
  let posY4 = createInput().parent("posY");

  posY1.changed(() => {
    keyframesPos[0][1] = posY1.value();
  });
  posY2.changed(() => {
    keyframesPos[1][1] = posY2.value();
  });
  posY3.changed(() => {
    keyframesPos[2][1] = posY3.value();
  });
  posY4.changed(() => {
    keyframesPos[3][1] = posY4.value();
  });

  setInterval(() => {
    turn++;
  }, 1000);
  font = loadFont("font.otf");
  textFont(font);
}

function draw() {
  noStroke();
  background(0, 50);
  push();
  x = lerp(x, keyframesPos[turn % keyframesPos.length][0], 0.1);
  y = lerp(y, keyframesPos[turn % keyframesPos.length][1], 0.1);
  r = lerp(r, keyframesRotation[turn % keyframesRotation.length], 0.1);
  s = lerp(s, keyframesScale[turn % keyframesScale.length], 0.1);
  c = lerp(c, keyframesColor[turn % keyframesColor.length], 0.1);
  translate(x, y);
  fill(c);
  scale(s);

  // draw any graphics here and itll do that
  textAlign(CENTER);
  rotate(r);
  textSize(90);
  text("COOL WORDS", 0, 0);

  // circle(100, 200, 100);
  // square(0, 0, 100);
  pop();
}

function wPlay() {
  if ((document.getElementById("whiteCatPlay").style.display = "block")) {
    document.getElementById("whiteCat").style.display = "none";
  }
  setTimeout(() => {
    document.getElementById("whiteCat").style.display = "block";
    document.getElementById("whiteCatPlay").style.display = "none";
  }, 4000);
}
