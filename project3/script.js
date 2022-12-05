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

  // sophia
  {
    file: "videos/02SOEM.mp4",
    tag: "empathy",
    question: "What contributes to having a long engaging conversation?",
    person: "s",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/03SOTH.mp4",
    tag: "thinking",
    question:
      "Is critical thinking necessary to have an engaging conversation?",
    person: "s",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/04SOEM.mp4",
    tag: "empathy",
    question:
      "Is critical thinking necessary to have an engaging conversation?",
    person: "s",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/05SOTH.mp4",
    tag: "thinking",
    question:
      "Is empathy the most important factor to have an engaging conversation?",
    person: "s",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/06SOEM.mp4",
    tag: "empathy",
    question:
      "Is empathy the most important factor to have an engaging conversation?",
    person: "s",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/07SOART.mp4",
    tag: "art",
    question: "Is art and design a form of conversation?",
    person: "s",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/08SOLAART.mp4",
    tag: "language",
    question:
      "Is art and design more ambiguous as a form of conversation than language?",
    person: "s",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/09SOART.mp4",
    tag: "language",
    question:
      "Is art and design more ambiguous as a form of conversation than language?",
    person: "s",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/10SOEM.mp4",
    tag: "empathy",
    question:
      "In your conversations, when do you feel like you have been understood by the person you are conversing with?",
    person: "s",
    transcript: "",
    visited: false,
  },
  {
    file: "videos/11SOTH.mp4",
    tag: "thinking",
    question:
      "Do you feel your thoughts and ideas change while you are in a conversation with someone?",
    person: "s",
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
