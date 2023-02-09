let canvas = document.getElementById("pp");
let width = canvas.offsetWidth;
let height = canvas.offsetHeight;

let currentSlide = 12;

// code
let slide2 = `<div class="slide2" style=" font-family: regular; text-transform: normal; line-height: 35px; z-index: 2; position: fixed; left: 38vw; top: 35vh; width: 600px; padding: 10px; font-size: 28px; background-color: rgb(26, 144, 255); color: white; " ><p id="slide2Text"> </p></div> `;

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
  };
};

new p5(front, "pp");
new p5(back, "back");

// control logic
function handleSlides(dir) {
  if (dir === 1) {
    currentSlide += 1;
    if (currentSlide == 13)
      document.querySelector(".slide2Container").innerHTML += slide2;
    changeSlideNumber();
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
  if (currentSlide == 13)
    slide.innerHTML = `So how does this apply in practice for children and visual hyperbole?`;

  if (currentSlide == 14) {
    if (!document.getElementById("slide14")) {
      let el = document.createElement("p");
      el.style.cssText =
        "font-family: regular; text-transform: normal; line-height: 35px; z-index: 2; position: fixed; left: 35vw; top: 39vh; width: 600px; padding: 10px; font-size: 28px; background-color: rgb(255, 71, 0); color: white;";
      el.id = "slide3";
      el.innerHTML = `Children love to see a magnitude of things, a&nbsp;good variety to satisfy their attention spans`;
      document.querySelector(".slide2Container").append(el);
    }
  }
  if (currentSlide == 15) {
    if (!document.getElementById("slide15")) {
      let el = document.createElement("p");
      el.style.cssText =
        "font-family: regular; text-transform: normal; line-height: 35px; z-index: 2; position: fixed; left: 36vw; top: 44vh; width: 600px; padding: 10px; font-size: 28px; background-color: rgb(255, 192, 0); color: white;";
      el.innerHTML = `But they also get lost, so it's important to consider how to direct them`;
      el.id = "slide15";
      document.querySelector(".slide2Container").append(el);
    }
  }
  if (currentSlide == 16) {
    if (!document.getElementById("slide16")) {
      let div = document.createElement("div");
      div.style.cssText =
        "background-color: white; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; mix-blend-mode: hue; z-index: 3";
      document.querySelector(".slide2Container").append(div);
      let iel = document.createElement("img");
      iel.src = "wayfinding.gif";
      iel.style.cssText =
        "z-index: 3; width: 44vw; position: fixed; top: 10vh; left: 5vw;";
      iel.id = "slide16c";
      document.querySelector(".slide2Container").append(iel);
      let el = document.createElement("p");
      el.style.cssText =
        "font-family: regular; text-transform: uppercase; line-height: 35px; z-index: 3; position: fixed; left: 19vw; top: 59vh; width: 600px; padding: 10px; font-size: 28px; background-color: white; color: black;";
      el.innerHTML = `Wayfinding through interaction&mdash;`;
      el.id = "slide16";
      let pel = document.createElement("p");
      pel.style.cssText =
        "font-family: regular; text-transform: normal; line-height: 28px; z-index: 3; position: fixed; left: 30vw; top: 65vh; width: 700px; padding: 10px; font-size: 22px; background-color: black; color: white;";
      pel.innerHTML = `If children have fun interacting <span style="font-family:triple; color: rgb(100, 100, 100)">(input)</span> with signage, then they would follow wherever this interaction <span style=" color: rgb(100, 100, 100)">(output)</span> leads&nbsp;them`;
      pel.id = "slide16b";
      document.querySelector(".slide2Container").append(el);
      document.querySelector(".slide2Container").append(pel);
    }
  }
  if (currentSlide == 17) {
    if (!document.getElementById("slide17")) {
      let div = document.createElement("div");
      div.style.cssText =
        "background-color: white; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; mix-blend-mode: hue; z-index: 3";
      document.querySelector(".slide2Container").append(div);
      let el = document.createElement("p");
      el.style.cssText =
        "font-family: regular; text-transform: uppercase; line-height: 35px; z-index: 5; position: fixed; left: 36vw; top: 8vh; width: 650px; padding: 10px; font-size: 28px; background-color: black; color: white;";
      el.innerHTML = `Visual Hyperbole through magnitude&mdash;`;
      el.id = "slide17";
      let pel = document.createElement("p");
      pel.style.cssText =
        "font-family: regular; text-transform: normal; line-height: 28px; z-index: 5; position: fixed; left: 30vw; top: 14vh; width: 600px; padding: 10px; font-size: 22px; background-color: white; color: black;";
      pel.innerHTML = `Visual hyperbole created by stacking in magnitudes <span style="color: rgb(200, 200, 200)">(&nbsp;like&nbsp;this&nbsp;presentation&nbsp;)</span> creates a fun engaging enviroment for children to navigate and find fun stuff&nbsp;in.`;
      pel.id = "slide17b";
      document.querySelector(".slide2Container").append(el);
      document.querySelector(".slide2Container").append(pel);

      let iel1 = document.createElement("img");
      iel1.src = "stack1.png";
      iel1.style.cssText =
        "z-index: 3; width: 250px; height: 250px; position: fixed; top: 200px; left: 35vw;";
      let iel2 = document.createElement("img");
      iel2.src = "stack2.png";
      iel2.style.cssText =
        "z-index: 3; width: 250px; height: 250px; position: fixed; top: 200px; left: 55vw;";
      let iel3 = document.createElement("img");
      iel3.src = "stack3.png";
      iel3.style.cssText =
        "z-index: 3; width: 250px; height: 250px; position: fixed; top: 200px; left: 75vw;";
      let iel4 = document.createElement("img");
      iel4.src = "stack2.png";
      iel4.style.cssText =
        "z-index: 3; width: 250px; height: 250px; position: fixed; top: 500px; left: 35vw;";
      let iel5 = document.createElement("img");
      iel5.src = "stack3.png";
      iel5.style.cssText =
        "z-index: 3; width: 250px; height: 250px; position: fixed; top: 500px; left: 55vw;";
      let iel6 = document.createElement("img");
      iel6.src = "stack1.png";
      iel6.style.cssText =
        "z-index: 3; width: 250px; height: 250px; position: fixed; top: 500px; left: 75vw;";
      setTimeout(() => {
        document.querySelector(".slide2Container").append(iel1);
      }, 400);
      setTimeout(() => {
        document.querySelector(".slide2Container").append(iel2);
      }, 800);
      setTimeout(() => {
        document.querySelector(".slide2Container").append(iel3);
      }, 1200);
      setTimeout(() => {
        document.querySelector(".slide2Container").append(iel4);
      }, 1600);
      setTimeout(() => {
        document.querySelector(".slide2Container").append(iel5);
      }, 2300);
      setTimeout(() => {
        document.querySelector(".slide2Container").append(iel6);
      }, 2800);
    }
  }
}
