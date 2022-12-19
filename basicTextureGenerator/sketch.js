let size = 50;
let spacing = 100;
let number = 30;
let colors = [];
let shape = 0;
let dominantColor = "r";
let r = 0;
let g = 0;
let b = 0;
function setup() {
  colorMode(RGB);
  let contr = document.getElementById("controls");
  let canvas = createCanvas(windowWidth - 300, windowHeight, WEBGL);
  canvas.parent("container");
  // create a lot of colors
  for (let i = 0; i < 14400; i++) {
    colors.push(color(random(100, 255), sin(i) * 127, 0));
  }
  createP("change shape").parent(contr);
  shp = createSelect().parent(contr);
  shp.option("Torus");
  shp.option("Box");
  shp.option("Cylinder");
  shp.option("Cone");
  shp.option("Ellipsiode");
  shp.changed(() => {
    if (shp.value() === "Torus") shape = 0;
    else if (shp.value() === "Box") shape = 1;
    else if (shp.value() === "Cylinder") shape = 2;
    else if (shp.value() === "Cone") shape = 3;
    else if (shp.value() === "Ellipsiode") shape = 4;
  });

  createP("change Size").parent(contr);
  sizeSlider = createSlider(1, 100, 20, 1).parent(contr);
  sizeSlider.changed(() => {
    size = sizeSlider.value();
  });

  createP("change spacing").parent(contr);
  spacingSlider = createSlider(-10, 200, 20, 1).parent(contr);
  spacingSlider.changed(() => {
    spacing = spacingSlider.value();
  });

  createP("change number of shapes").parent(contr);
  numberSlider = createSlider(20, 120, 20, 1).parent(contr);
  numberSlider.changed(() => {
    number = numberSlider.value();
  });

  createP("change Dominant Color").parent(contr);
  col = createSelect().parent(contr);
  col.option("Red");
  col.option("Blue");
  col.option("Green");

  col.changed(() => {
    if (col.value() === "Red") dominantColor = "r";
    else if (col.value() === "Blue") dominantColor = "b";
    else if (col.value() === "Green") dominantColor = "g";

    changeColors();
  });

  createP("red values").parent(contr);
  rSlider = createSlider(1, 255, 1, 1).parent(contr);
  rSlider.changed(() => {
    r = rSlider.value();
    changeColors();
  });
  createP("green values").parent(contr);
  gSlider = createSlider(1, 255, 1, 1).parent(contr);
  gSlider.changed(() => {
    g = gSlider.value();
    changeColors();
  });
  createP("blue values").parent(contr);
  bSlider = createSlider(1, 255, 1, 1).parent(contr);
  bSlider.changed(() => {
    b = bSlider.value();
    changeColors();
  });
}
function draw() {
  background(240);
  angleMode(DEGREES);
  noStroke();
  for (let y = 0; y < number; y++) {
    for (let x = 0; x < number; x++) {
      fill(colors[x * y]);
      drawShape(
        createVector(x * spacing, y * spacing),
        createVector(mouseX, mouseY)
      );
    }
  }
}

function drawShape(base, vec) {
  push();
  translate(-width / 2, -height / 2);
  translate(base.x, base.y);

  rotateY((vec.x - base.x) * 0.1);
  rotateX(-(vec.y - base.y) * 0.1);
  if (shape === 0) torus(size, size, size);
  if (shape === 1) box(size, size, size);
  if (shape === 2) cylinder(size, size, size);
  if (shape === 3) cone(size, size, size);
  if (shape === 4) ellipsoid(size, size, size + 50);
  pop();
}

function keyTyped() {
  console.log(key);
  if (key === "s") saveCanvas("file", "jpeg");
}

function changeColors() {
  colors = [];
  // create a lot of colors
  for (let i = 0; i < 14400; i++) {
    if (dominantColor === "r") colors.push(color(random(100, 255), g, b));
    if (dominantColor === "g") colors.push(color(r, random(100, 255), b));
    if (dominantColor === "b") colors.push(color(r, g, random(100, 255)));
  }
}

// ....................................................
// ....................................................
// ........................./\.........................
// ..................______/__\_______.................
// ..................||-------------||.................
// ..................||             ||.................
// ..................||    \|||/    ||.................
// ..................||   [ @-@ ]   ||.................
// ..................||    ( ' )    ||.......       ...
// ..................||    _(O)_    ||.......|EXIT |...
// ..................||   / >=< \   ||.......|==>> |...
// ..................||__/_|_:_|_\__||.................
// ..................-----------------.................
// ....................................................
// ....................................................
// Monkey with a bowtie in the museum
