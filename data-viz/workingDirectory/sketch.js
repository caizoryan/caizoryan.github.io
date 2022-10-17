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
        200,
        (i + 1) * 100,
        data[i].net,
        data[i].spending,
        data[i].length,
        data[i].people,
        data[i].name
      )
    );
  }
}

function draw() {
  background(250);
  for (let x of arr) x.render();
}

class Corporation {
  constructor(posX, posY, net, spending, time, people, name) {
    this.posX = posX;
    this.posY = posY;
    this.net = net;
    this.spending = spending;
    this.time = time;
    this.people = people;
    this.name = name;
  }
  render() {
    let temp = this.people;
    fill(10);
    stroke(0);
    strokeWeight(0.1);
    line(0, this.posY + 10, width, this.posY + 10);
    text(this.name, 50, this.posY + 10);
    noStroke();
    //time
    rect(this.posX, this.posY, this.time * 2, 35);

    //money
    fill(200, 0, 0);
    rect(
      this.posX + (this.net / this.spending) * 12,
      this.posY + 10,
      this.net * 2,
      35
    );
    //spending
    fill(200, 100, 50);
    rect(this.posX + this.time * 2 - 15, this.posY - 3, 15, this.spending * 4);

    fill(200, 127);
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
