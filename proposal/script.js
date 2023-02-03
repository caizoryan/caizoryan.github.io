// create DOM elements
let introduction = document.createElement("p");
introduction.style.cssText = `padding: 30px;font-size: 40px; font-family: sans-serif`;
document.querySelector(".introduction").append(introduction);

let project1Head = document.createElement("h1");
project1Head.style.cssText = `padding: 30px;font-size: 40px; font-family: sans-serif; font-weight: 100`;
document.querySelector(".project1").append(project1Head);

let project2Head = document.createElement("h1");
project2Head.style.cssText = `padding: 30px;font-size: 40px; font-family: sans-serif; font-weight: 100`;
document.querySelector(".project2").append(project2Head);

let channel = new Arena("gd2-project2/");
let projects = [];

channel
  .channel()
  .then((res) => {
    for (const x of res) projects.push(new Arena(x.slug));
  })
  .then(() => hydrateProjects());
channel
  .everything()
  .then(
    (res) =>
      (introduction.innerHTML =
        res.channel.metadata.description +
        'This is also an Arena <a href="https://www.are.na/aaryan-pashine/gd2-project2">channel</a>, check that too')
  );

function hydrateProjects() {
  for (let i = 0; i < projects.length; i++) {
    projects[i].everything().then((res) => {
      if (i == 0) {
        project1Head.innerText = res.channel.title;
        for (const x of res.content) {
          let dom = document.querySelector(".project1");
          if (x.class == "Text")
            dom.innerHTML += `<p style="width: 600px; font-family: sans-serif; font-size: 20px; margin: 10px 40px">${x.content}</p>`;
          if (x.class == "Media" || x.class == "Link")
            dom.innerHTML += `<a href="${x.source.url}"><img style="margin: 10px 40px; width: 45vw: " src="${x.image.thumb.url}"></img></a>`;
          // if(x.class == 'Link')
        }
        console.log("1", res);
      }
      if (i == 1) {
        project2Head.innerText = res.channel.title;
        for (const x of res.content) {
          let dom = document.querySelector(".project2");
          if (x.class == "Text")
            dom.innerHTML += `<p style="width: 600px; font-family: sans-serif; font-size: 20px; margin: 10px 40px">${x.content}</p>`;
          if (x.class == "Image")
            dom.innerHTML += `<a href="${x.image.display.url}"><img style="margin: 10px 40px; width: 45vw: " src="${x.image.thumb.url}"></img></a>`;
          if (x.class == "Media" || x.class == "Link")
            dom.innerHTML += `<a href="${x.source.url}"><img style="margin: 10px 40px; width: 45vw: " src="${x.image.thumb.url}"></img></a>`;
        }
        console.log("2", res);
      }
    });
  }
}
