let root = [];
let data = [];

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    root = json.data;
    for (const x of root) data.push(x);
    makeButtons();
    peopleButtons();
    for (let i = 0; i < data.length; i++) {
      data[i].index = i;
    }
    shuffleArray(data);
    createVideos();

    // push indexes
  });

const people = ["Room 642", "Gerrard St E", "Krispy Kreme"];

let currentIndex;

var audio = new Audio("../click.mp3");
let loadedVideos = 0;

let files = [];
let players = [];
let container = document.querySelector(".grid");
let items = "";
let tags = [];

// make the buttons
let btnsTags = [];
function makeButtons() {
  for (const x of data) if (!tags.includes(x.tag)) tags.push(x.tag);
  for (let i = 0; i < tags.length; i++) {
    btnsTags.push(document.createElement("p"));
    btnsTags[i].innerHTML = tags[i];
    btnsTags[i].classList.add("button-class");
    btnsTags[i].addEventListener("mouseover", () => {
      for (let r = 0; r < data.length; r++) {
        document.querySelector(`#my-video${r}`).style.opacity = 0.1;
        document.querySelector(`#my-video${r}`).style.zIndex = -10;
        videojs(`my-video${r}`).muted(true);
        setTimeout(() => {
          videojs(`my-video${r}`).playbackRate(1);
        }, 100);
        soundMake();
      }

      for (let r = 0; r < data.length; r++) {
        if (data[r].tag == tags[i]) {
          document.querySelector(`#my-video${r}`).style.opacity = 1;
          document.querySelector(`#my-video${r}`).style.zIndex = 10;
          videojs(`my-video${r}`).muted(false);
          videojs(`my-video${r}`).volume(0.4);
        }
      }
    });
    document.querySelector(".tags").appendChild(btnsTags[i]);
  }
}

// make people buttons
let btnsPeople = [];
function peopleButtons() {
  for (let i = 0; i < people.length; i++) {
    btnsPeople.push(document.createElement("p"));
    btnsPeople[i].innerHTML = people[i];
    btnsPeople[i].classList.add("button-class");
    btnsPeople[i].addEventListener("click", () => {
      switchPeople(people[i]);
    });
    document.querySelector(".people").appendChild(btnsPeople[i]);
  }
}

// switch and filter people
function switchPeople(person) {
  var ele = document.getElementsByClassName("box");
  for (var i = 0; i < ele.length; i++) {
    ele[i].style.width = "25vw";
  }

  for (let i = 0; i < data.length; i++) {
    document.querySelector(`#my-video${i}`).style.opacity = 1;
    document.querySelector(`#my-video${i}`).style.zIndex = 1;
    videojs(`my-video${i}`).muted(true);
    videojs(`my-video${i}`).src({ type: "video/mp4", src: "videos/p5.mp4" });
    videojs(`my-video${i}`).currentTime(Math.random() * 2);
  }
  data = [];

  //amir
  if (person === people[0]) {
    for (let i = 0; i < root.length; i++) {
      if (root[i].person === "a") {
        data.push(root[i]);
      }
    }
  }
  //omama
  else if (person === people[1]) {
    for (let i = 0; i < root.length; i++) {
      if (root[i].person === "o") data.push(root[i]);
    }
  }
  //sophia
  else if (person === people[2]) {
    for (let i = 0; i < root.length; i++) {
      if (root[i].person === "s") data.push(root[i]);
    }
  }
  items = "";

  for (let i = 0; i < data.length; i++) {
    videojs(`my-video${i}`).src({ type: "video/mp4", src: data[i].file });
  }
}

// filter videos based on tags
function filterVideos(setTag) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].tag == setTag)
      document.querySelector(`.my-video${i}`).style.opacity = 0.3;
  }
}

// setup function to take data and make a grid
function createVideos() {
  for (let i = 0; i < data.length; i++) {
    items += `<div class="box" href="../index.html">
    <video
    onloadeddata="loadedBro(${i})"
    onmouseover="mouseHover(${i})"
    onmouseout="mouseExit(${i})"
    onclick="clicked(${i})"
    id="my-video${i}"
    class="video-js"
    loop muted
    preload="auto"
    autoplay="true"
    fluid="true"
    src="${data[i].file}"
    data-setup="{}"
    ></video>
    </div>`;
    setTimeout(() => {
      videojs(`my-video${i}`).playbackRate(2);
    }, 100);
  }
  container.innerHTML = items;
}

// unmute on hover
function mouseHover(index) {
  for (let r = 0; r < data.length; r++) {
    videojs(`my-video${r}`).muted(true);
  }
  videojs(`my-video${index}`).muted(false);
  document.querySelector(`#my-video${index}`).style.scale = 1.1;
  document.querySelector(`#my-video${index}`).style.zIndex = 100;
  setTimeout(() => {
    videojs(`my-video${index}`).playbackRate(1);
  }, 100);
  soundMake();
}

// mute on exit
function mouseExit(index) {
  videojs(`my-video${index}`).muted(true);
  document.querySelector(`#my-video${index}`).style.scale = 1;
  document.querySelector(`#my-video${index}`).style.zIndex = 1;
  setTimeout(() => {
    videojs(`my-video${index}`).playbackRate(2);
  }, 100);
}

// when clicked save the index value and go to fullscreen
function clicked(index) {
  localStorage.setItem("currentIndex", data[index].index);
  location.href = "../fullscreen/index.html";
}

// shuffle so the order is disrupted
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// sound make, uk?
function soundMake() {
  audio.play();
}

// reset to orginal
function reset() {
  var ele = document.getElementsByClassName("box");
  data = [];
  for (const x of root) data.push(x);
  shuffleArray(data);
  for (var i = 0; i < ele.length; i++) {
    ele[i].style.width = "20vw";
  }

  for (let i = 0; i < data.length; i++) {
    document.querySelector(`#my-video${i}`).style.opacity = 1;
    document.querySelector(`#my-video${i}`).style.zIndex = 1;
    videojs(`my-video${i}`).muted(true);
    videojs(`my-video${i}`).src({ type: "video/mp4", src: data[i].file });
    setTimeout(() => {
      videojs(`my-video${i}`).playbackRate(2);
    }, 100);
  }
}

// loaded bro, now remove loading screen
function loadedBro(index) {
  loadedVideos++;
  if (loadedVideos === root.length)
    document.querySelector("#loading").style.display = "none";
}
