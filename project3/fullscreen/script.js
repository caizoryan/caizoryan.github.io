let data = [];

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    data = json.data;
    console.log(data);
    changeVideo(currentIndex);
    makeButtons();
  });

let durationInterval;
var myPlayer = videojs("my-video");
let tags = [];
var audio = new Audio("../click.mp3");

let currentIndex = 0;
if (localStorage.getItem("currentIndex") === undefined) {
  currentIndex = 0;
} else currentIndex = localStorage.getItem("currentIndex");

for (let i = 0; i < data.length; i++) {
  data[i].index = i;
}

// change the video on button click, index is provided randomly by the look function
function changeVideo(index) {
  clearInterval(durationInterval);
  durationInterval = setInterval(() => {
    document.querySelector(".duration").style.width = `${
      (myPlayer.currentTime() / myPlayer.duration()) * 100
    }%`;
  }, 300);
  myPlayer.src({ type: "video/mp4", src: data[index].file });
  document.querySelector(".question").innerHTML = data[index].question;

  let visited;
  if (data[index].visited) {
    visited = "Seen/Heard";
  } else {
    visited = "";
  }

  document.querySelector(".visited").innerHTML = visited;
  data[index].visited = true;
}

// make the buttons
function makeButtons() {
  for (const x of data) if (!tags.includes(x.tag)) tags.push(x.tag);
  let btns = [];
  for (let i = 0; i < tags.length; i++) {
    btns.push(document.createElement("p"));
    btns[i].innerHTML = tags[i];
    btns[i].classList.add("button-class");
    btns[i].addEventListener("click", () => {
      soundMake();
      changeVideo(look(tags[i]));
    });
    document.querySelector(".tags").appendChild(btns[i]);
  }
}

// check for available videos in given tag, if empty return lookEmpty()
function look(des) {
  let tags = [];
  for (const x of data) {
    tags.push(x.tag);
  }
  let indexList = [];
  for (let i = 0; i < tags.length; i++) {
    if (tags[i] == des && data[i].visited === false) indexList.push(i);
  }
  let r = Math.floor(Math.random() * indexList.length);

  if (indexList.length === 0) return lookEmpty(des);
  else return indexList[r];
}

function lookEmpty(des) {
  let tags = [];
  for (const x of data) {
    tags.push(x.tag);
  }
  let indexList = [];
  for (let i = 0; i < tags.length; i++) {
    if (tags[i] == des) indexList.push(i);
  }
  let r = Math.floor(Math.random() * indexList.length);
  console.log(indexList[r]);
  return indexList[r];
}

// sound make, uk?
function soundMake() {
  audio.play();
}
