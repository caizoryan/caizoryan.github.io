// the data set for all the images
const data = [
  {
    file: "01_han.jpg",
    name: "Jean Han  /  jeanhan@ocadu.ca",
    group: "fashion",
  },
  {
    file: "02_miele.jpg",
    name: "Olivia Miele  /  oliviamiele@ocadu.ca",
    group: "fashion",
  },
  {
    file: "03_roque.jpg",
    name: "Jiordan Roque  /  jiordanroque@ocadu.ca",
    group: "fashion",
  },
  {
    file: "04_kim.jpg",
    name: "Esther Kim  /  esther.kim3@ocadu.ca",
    group: "fashion",
  },
  {
    file: "05_khan.jpg",
    name: "Palwasha Khan  /  palwashak@ocadu.ca",
    group: "fashion",
  },
  {
    file: "06_irfan.jpg",
    name: "Zaid Irfan  /  zaidirfan@ocadu.ca",
    group: "film",
  },
  {
    file: "07_li.jpg",
    name: "Yinuo Li  /  edwardli@ocadu.ca",
    group: "film",
  },
  {
    file: "08_yakubov.jpg",
    name: "Rivka Yakubov  /  rivka.yakubov@ocadu.ca",
    group: "film",
  },
  {
    file: "09_hassanzadeh.jpg",
    name: "Yas Hassanzadeh  /  yas.hassanzadeh@ocadu.ca",
    group: "film",
  },
  {
    file: "10_pashine.jpg",
    name: "Aaryan Pashine  /  aaryan.pashine@ocadu.ca",
    group: "film",
  },
  {
    file: "11_lee.jpg",
    name: "Jaehyeok Lee  /  jaehyeoklee@ocadu.ca",
    group: "food",
  },
  {
    file: "12_jiang.jpg",
    name: "Sunny Jiang  /  sunnyjiang@ocadu.ca",
    group: "food",
  },
  {
    file: "13_leake.jpg",
    name: "Alex Leake  /  alex.leake@ocadu.ca",
    group: "food",
  },
  {
    file: "14_gao.jpg",
    name: "Wuyuan Gao  /  gaowuyuan@ocadu.ca",
    group: "food",
  },
  {
    file: "15_tambakos.jpg",
    name: "Talea Tambakos  /  taleatambakos@ocadu.ca",
    group: "horror",
  },
  {
    file: "16_bagchi.jpg",
    name: "Michelle Bagchi  /  michellebagchi@ocadu.ca",
    group: "horror",
  },
  {
    file: "17_caija.jpg",
    name: "Caija Brome-Cumberbatch  /  caijabrome@ocadu.ca",
    group: "horror",
  },
  {
    file: "18_einarsson.jpg",
    name: "Finnbogi Einarsson  /  finnbogi.einarsson@ocadu.ca",
    group: "horror",
  },
  {
    file: "19_tsang.jpg",
    name: "Jayden Tsang  /  jaydent@ocadu.ca",
    group: "horror",
  },
  {
    file: "20_cosentino.jpg",
    name: "Thomas Cosentino  /  tcosentino@ocadu.ca",
    group: "music",
  },
  {
    file: "21_kuzma.jpg",
    name: "Liam Kuzma-Hunt  /  liamkuzmahunt@ocadu.ca",
    group: "music",
  },
  {
    file: "22_xu.jpg",
    name: "Jaylin Xu  /  jaylinxu@ocadu.ca",
    group: "music",
  },
  {
    file: "23_tadipa.jpg",
    name: "Bryan Tadipa  /  bryantadipa@ocadu.ca",
    group: "music",
  },
  {
    file: "24_mcleod.jpg",
    name: "Emily Herbert-Mcleod  /  emilysherbert@ocadu.ca",
    group: "music",
  },
  {
    file: "25_qin.jpg",
    name: "Claudia Qin  /  claudia.qin@ocadu.ca",
    group: "sports",
  },
  {
    file: "26_lin.jpg",
    name: "Max Lin  /  max.lin@ocadu.ca",
    group: "sports",
  },
  {
    file: "27_shenvi.jpg",
    name: "Avi Shenvi  /  avis@ocadu.ca",
    group: "sports",
  },
  {
    file: "28_aitzhanov.jpg",
    name: "Amir Aitzhanov  /  amir.aitzhanov@ocadu.ca",
    group: "sports",
  },
];

// the container to put all the images in
const container = document.querySelector(".cover");

// the loop that will run to put the name and image in the container
for (const x of data)
  container.innerHTML += `<div class="spread" id="${x.file}"><p id="${x.file}p">${x.name}</p><img src ="images/${x.file}"></img></div>`;

// add event listeners so when you hover over them they can turn back and stuff
for (const x of data) {
  document.getElementById(x.file).addEventListener("mouseenter", () => {
    document.getElementById(x.file + "p").style.transform = "rotate(0)";
    document.getElementById(x.file + "p").style.transform = "translateY(-3vh)";
    document.getElementById(x.file + "p").style.fontWeight = "600";
    document.getElementById(x.file + "p").innerHTML =
      x.name + "&mdash;" + x.group;
  });
  document.getElementById(x.file).addEventListener("mouseleave", () => {
    document.getElementById(x.file + "p").style.transform = "translateY(0)";
    document.getElementById(x.file + "p").style.fontWeight = "100";
    document.getElementById(x.file + "p").style.transform = "rotate(-90deg)";
  });
}
