let canvas = document.getElementById("pp");
let width = canvas.offsetWidth;
let height = canvas.offsetHeight;

let currentSlide = 1;

// code
let slide2 = `<div class="slide2" style=" font-family: regular; text-transform: uppercase; line-height: 35px; z-index: 2; position: fixed; left: 38vw; top: 35vh; width: 600px; padding: 10px; font-size: 28px; background-color: rgb(255, 192, 0); color: white; " ><p id="slide2Text"> So how does this relate to the design of the exhibition? </p></div> `;

// p5
const back = (p) => {
  let c1 = p.color(0);
  let c2 = p.color(255);
  let bgcolor;
  p.setup = () => {
    bgcolor = p.lerpColor(c1, c2, 0);
    p.createCanvas(width, height);
  };

  p.draw = () => {
    let sinator = p.map(p.sin(p.frameCount * 0.005), -1, 1, -0.2, 1.2);
    bgcolor = p.lerpColor(c1, c2, sinator);
    p.background(bgcolor);
  };
  p.keyPressed = () => {
    if (p.keyCode === p.LEFT_ARROW) handleSlides(-1);
    if (p.keyCode === p.RIGHT_ARROW) handleSlides(1);
  };
};

const front = (p) => {
  let xCounter = 0;
  let lineCount = 70;
  let font;
  p.preload = () => {
    font = p.loadFont("x.otf");
  };
  p.setup = () => {
    p.createCanvas(width, height);
    p.frameRate(5);
    p.textFont(font);
  };

  p.draw = () => {
    p.noStroke();
    p.fill(p.random(1) > 0.5 ? 255 : 0);
    p.square(p.random(p.width), p.random(p.height), 3);
    if (currentSlide > 1) changeSlideText();
    if (currentSlide > 2 && xCounter < lineCount) p.drawLines();
  };

  p.drawLines = () => {
    let traveled = p.map(xCounter / lineCount, 0, 1, 0.05, 0.95);
    xCounter++;
    let newTraveled = p.map(xCounter / lineCount, 0, 1, 0.05, 0.95);
    let x = 0.38 * width;
    let y = 0.38 * height;
    let lineY = height * traveled;
    let lineX = width * traveled;
    let newLineY = height * newTraveled;
    let newLineX = width * newTraveled;
    p.textSize(30);
    p.stroke(p.random(1) > 0.5 ? 255 : 0);
    p.strokeWeight(5);
    p.line(lineX, lineY, newLineX, newLineY);
    p.noStroke();
    if (p.random(1) > 0.6)
      p.text("x", lineX + p.random(200), lineY + p.random(200));
  };
};

new p5(front, "pp");
new p5(back, "back");

// control logic
function handleSlides(dir) {
  if (dir === 1) {
    currentSlide += 1;
    if (currentSlide == 2)
      document.querySelector(".slide2Container").innerHTML += slide2;
    changeSlideNumber();
  } else {
    currentSlide -= 1;
    changeSlideNumber();
    if (currentSlide == 1) document.querySelector(".slide2").remove();
  }
}

// helpers
function randLetter() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 58));
}

function changeSlideNumber() {
  document.getElementById("master-slide-up").innerText = `${currentSlide}`;
  document.getElementById("master-slide-down").innerText = `${currentSlide}`;
}
function changeSlideText() {
  let slide = document.getElementById("slide2Text");
  let slideParent = document.querySelector(".slide2");
  let g = Math.random() > 0.7 ? randLetter() : "g";
  let h = Math.random() > 0.7 ? randLetter() : "h";
  let o = Math.random() > 0.7 ? "o" : "@";

  if (currentSlide == 2)
    slide.innerHTML = `So how does this relate to the desi${g}n ${o}f the ex${h}ibition?`;

  if (currentSlide == 3) {
    let el = document.createElement("p");
    el.style.cssText =
      "font-family: regular; text-transform: uppercase; line-height: 35px; z-index: 2; position: fixed; left: 35vw; top: 39vh; width: 600px; padding: 10px; font-size: 28px; background-color: rgb(255, 71, 0); color: white;";
    el.id = "slide3";
    el.innerText = `the desi${g}n ${o}f the ex${h}ibition acts as a bridge`;
    if (!document.getElementById("slide3"))
      document.querySelector(".slide2Container").append(el);
  }

  if (currentSlide == 4) {
    document.getElementById(
      "slide3"
    ).innerText = `the desi${g}n ${o}f the ex${h}ibition acts as a bridge between the viewers and the artists`;
  }
  if (currentSlide == 5) {
    let el = document.createElement("p");
    el.style.cssText =
      "font-family: regular; text-transform: normal; line-height: 35px; z-index: 2; position: fixed; left: 36vw; top: 44vh; width: 600px; padding: 10px; font-size: 28px; background-color: rgb(26, 144, 255); color: white;";
    el.id = "slide5";
    el.innerHTML = `Input&mdash;Ouput is perfect, it is a core concept that is intrinsic to humans, so little kids who know nothing can understand too!`;
    if (!document.getElementById("slide5"))
      document.querySelector(".slide2Container").append(el);
  }
  if (currentSlide == 6) {
    let el = document.createElement("p");
    el.style.cssText =
      "font-family: triple; text-transform: uppercase; line-height: 35px; z-index: 5; position: fixed; left: 12vw; top: 44vh; width: max-content; padding: 10px; font-size: 28px; background-color: black; color: white;";
    el.id = "slide6";
    el.innerHTML = `So how does this look in practice?`;
    if (!document.getElementById("slide6"))
      document.querySelector(".slide2Container").append(el);
  }
  if (currentSlide == 7) {
    if (!document.getElementById("slide7")) {
      let el = document.createElement("img");
      el.src = "source.gif";
      el.style.cssText =
        "z-index: 3; width: 60vw; position: fixed; top: 100px; left: 30vw;";
      el.id = "slide7";
      document.querySelector(".slide2Container").append(el);
    }
  }
  if (currentSlide == 8) {
    if (!document.getElementById("slide8")) {
      let el = document.createElement("img");
      el.src = "source2.gif";
      el.style.cssText =
        "z-index: 3; width: 60vw; position: fixed; top: 20vh; left: 25vw;";
      el.id = "slide8";
      document.querySelector(".slide2Container").append(el);
    }
  }
  if (currentSlide == 9) {
    if (!document.getElementById("slide9")) {
      let el = document.createElement("img");
      el.src = "source3.jpg";
      el.style.cssText =
        "z-index: 3; width: 50vw; position: fixed; top: 28vh; right: 5vw;";
      el.id = "slide9";
      document.querySelector(".slide2Container").append(el);
    }
  }
  if (currentSlide == 10) {
    if (!document.getElementById("slide10")) {
      let el = document.createElement("img");
      el.src = "source4.jpg";
      el.style.cssText =
        "z-index: 3; width: 50vw; position: fixed; top: 30vh; left: 10vw;";
      el.id = "slide10";
      document.querySelector(".slide2Container").append(el);
    }
  }
  if (currentSlide == 11) {
    if (!document.getElementById("slide11")) {
      let el = document.createElement("img");
      el.src = "source5.jpg";
      el.style.cssText =
        "z-index: 3; width: 50vw; position: fixed; top: 12vh; right: 5vw;";
      el.id = "slide11";
      document.querySelector(".slide2Container").append(el);
    }
  }
  if (currentSlide == 12) {
    if (!document.getElementById("slide12")) {
      let el = document.createElement("img");
      el.src = "source6.jpg";
      el.style.cssText =
        "z-index: 3; width: 50vw; position: fixed; top: 44vh; left: 5vw;";
      el.id = "slide12";
      document.querySelector(".slide2Container").append(el);
    }
  }
  if (currentSlide == 13) {
    window.location.href = "https://caizoryan.github.io/type3Execution";
  }
}
