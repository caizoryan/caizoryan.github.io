let data = [
  {
    name: "Netflix",
    net: 266.97,
    people: 220.7,
    length: 294,
    spending: 17,
  },
  {
    name: "Peacock",
    net: 0.778,
    people: 15,
    length: 30,
    spending: 1.5,
  },
  {
    name: "Apple Tv+",
    net: 17.5,
    people: 20,
    length: 35,
    spending: 6,
  },
  {
    name: "Disney+",
    net: 97,
    people: 221,
    length: 35,
    spending: 25.26,
  },
  {
    name: "Hulu",
    net: 9.6,
    people: 46.2,
    length: 180,
    spending: 0.2,
  },
  {
    name: "Paramount",
    net: 1.39,
    people: 32.8,
    length: 19,
    spending: 2.2,
  },
  {
    name: "Crunchyroll",
    net: 0.04,
    people: 4,
    length: 101,
  },
];

let arr = [];

let o;
function setup() {
  noStroke();
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < data.length; i++) {
    arr.push(
      new Corporation(
        100,
        (i + 1) * 100,
        data[i].net,
        data[i].spending,
        data[i].length,
        data[i].people
      )
    );
  }
}

function draw() {
  background(0);
  for (let x of arr) x.render();
}

class Corporation {
  constructor(posX, posY, net, spending, time, people) {
    this.posX = posX;
    this.posY = posY;
    this.net = net;
    this.spending = spending;
    this.time = time;
    this.people = people;
  }
  render() {
    let temp = this.people;
    fill(255);
    //time
    rect(this.posX, this.posY, this.time * 2, 35);

    //money
    fill(200, 0, 0);
    rect(
      this.posX + ((this.net * 2) / (this.spending * 2)) * 12,
      this.posY + 20,
      this.net * 2,
      35
    );
    //spending
    fill(0, 200, 0);
    rect(this.posX + this.time * 2, this.posY, 10, this.spending * 2);

    fill(0, 100, 200);
    for (let x = 0; x < 50; x++) {
      for (let y = 0; y < 6; y++) {
        if (temp > 0) {
          circle(this.posX - 10 + x * 10, this.posY - 10 + y * 8, 6);
          temp--;
        } else return;
      }
    }
  }
}
