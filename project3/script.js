var myPlayer = videojs("my-video");
let tags = [];
var audio = new Audio("../click.mp3");

let data = [
  //Omama
  {
    file: "videos/01OMPE.mp4",
    tag: "people",
    question: "Why Do you love conversation, Opening",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/02OMCO.mp4",
    tag: "connection",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/03OMLA.mp4",
    tag: "language",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/04OMCH.mp4",
    tag: "change",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/05OMCO.mp4",
    tag: "connection",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/11OMCU.mp4",
    tag: "culture",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/13OMBAD.mp4",
    tag: "bad conversation",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/14OMPE.mp4",
    tag: "people",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/15OMOP.mp4",
    tag: "open-minded",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/16OMEM.mp4",
    tag: "empathy",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/21OMLA.mp4",
    tag: "language",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/22OMLAART.mp4",
    tag: "language",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/22OMLAART.mp4",
    tag: "art",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/23OMART.mp4",
    tag: "art",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/24OMLAART.mp4",
    tag: "art",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/24OMLAART.mp4",
    tag: "language",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/25OMEM.mp4",
    tag: "empathy",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/19OMLA.mp4",
    tag: "language",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/20OMART.mp4",
    tag: "art",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/26OMTH.mp4",
    tag: "thinking",
    question: "What contributes to having a long engaging conversation?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/27OMCON.mp4",
    tag: "people",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },

  {
    file: "videos/01AMDE.mp4",
    tag: "debate",
    question: "Why do you love conversation? Opening",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/02AMBAD.mp4",
    tag: "bad conversation",
    question: "Why do you love conversation? Opening",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/03AMPE.mp4",
    tag: "people",
    question: "Why do you love conversation? Opening",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/04AMCU.mp4",
    tag: "culture",
    question: "Why do you love conversation? Opening",
    person: "o",
    transcript: "",
    visited: false,
  },

  {
    file: "videos/05AMCH.mp4",
    tag: "change",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/06AMPE.mp4",
    tag: "people",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/07AMTHDEOP.mp4",
    tag: "thinking",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/07AMTHDEOP.mp4",
    tag: "debate",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/07AMTHDEOP.mp4",
    tag: "open-minded",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/08AMDEOP.mp4",
    tag: "open-minded",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/08AMDEOP.mp4",
    tag: "debate",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/10AMCU.mp4",
    tag: "open-minded",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/11AMLA.mp4",
    tag: "language",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/12AMLACU.mp4",
    tag: "language",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/12AMLACU.mp4",
    tag: "culture",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/14AMLA.mp4",
    tag: "language",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/15AMART.mp4",
    tag: "art",
    question: "Why do you love conversation, Conclusion?",
    person: "o",
    transcript: "",
    visited: false,
  },
];

function changeVideo(index) {
  myPlayer.src({ type: "video/mp4", src: data[index].file });
  document.querySelector(".question").innerHTML = data[index].question;

  let visited;
  if (data[index].visited) {
    visited = "Seen";
  } else {
    visited = "";
  }

  document.querySelector(".visited").innerHTML = visited;
  data[index].visited = true;
}

function makeButtons() {
  for (const x of data) if (!tags.includes(x.tag)) tags.push(x.tag);
  let btns = [];
  for (let i = 0; i < tags.length; i++) {
    btns.push(document.createElement("p"));
    btns[i].innerHTML = tags[i];
    btns[i].classList.add("button-class");
    btns[i].addEventListener("click", () => {
      changeVideo(look(tags[i]));
      soundMake();
    });
    document.querySelector(".tags").appendChild(btns[i]);
  }
}

// function to create buttons

// function createStuff(index) {
//   document.querySelector(".tags").innerHTML = "";
//   myPlayer.src({ type: "video/mp4", src: data[index].file });
//   let btns = [];
//   for (let i = 0; i < data[index].connection.length; i++) {
//     btns.push(document.createElement("p"));
//     btns[i].innerHTML = data[index].connection[i];
//     document.querySelector(".question").innerHTML = data[index].question;
//     btns[i].classList.add("button-class");
//     btns[i].addEventListener("click", () => {
//       createStuff(look(data[index].connection[i]));
//     });
//     document.querySelector(".tags").appendChild(btns[i]);
//   }
// }

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

  // return
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

function soundMake() {
  audio.play();
}

changeVideo(0);
makeButtons();
