// This script uses the arena wrapper I wrote to make working with the arena api easier. An updated version can be found on my github.
// https://github.com/caizoryan/arena-wrapper

// channel slug
let process = new Arena("gd2-project1-process");
process.everything().then((res) => console.log(res));

// input
process.everything().then((res) => {
  res.forEach((element) => {
    if (element.title == "input") {
      if (element.class == "Image")
        document.querySelector(
          ".input"
        ).innerHTML += `<a href="${element.image.display.url}"><img style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></a>`;
      else if (element.class == "Media" || element.class == "Link")
        document.querySelector(
          ".input"
        ).innerHTML += `<a href="${element.source.url}"><img style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></a>`;
      else if (element.class == "Text")
        document.querySelector(
          ".input"
        ).innerHTML += `<div style=" margin: 10px; padding: 10px;  font-family: sans-serif; line-height: 1.5em; color: white">${element.content_html}</div>`;
    } else if (element.title == "process" || element.title == "output") {
      if (element.class == "Image")
        document.querySelector(
          ".input"
        ).innerHTML += `<div class="blackbox"><img  style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></div>`;
      else if (element.class == "Media" || element.class == "Link")
        document.querySelector(
          ".input"
        ).innerHTML += `<a href="${element.source.url}"><div class="blackbox"><img style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></div></a>`;
      else if (element.class == "Text")
        document.querySelector(
          ".input"
        ).innerHTML += `<div class="blackbox" style=" margin: 10px; padding: 10px;  font-family: sans-serif; line-height: 1.5em; color: white">${element.content_html}</div>`;
    }
  });
});

// process
process.everything().then((res) => {
  res.forEach((element) => {
    if (element.title == "process") {
      if (element.class == "Text")
        document.querySelector(
          ".process"
        ).innerHTML += `<div style=" margin: 10px; padding: 10px;  font-family: sans-serif; line-height: 1.5em; color: white">${element.content_html}</div>`;
      if (element.class == "Image")
        document.querySelector(
          ".process"
        ).innerHTML += `<a href="${element.image.display.url}"><img style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></a>`;
    } else if (element.title == "output" || element.title == "input") {
      if (element.class == "Image")
        document.querySelector(
          ".process"
        ).innerHTML += `<div class="blackbox"><img  style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></div>`;
      else if (element.class == "Media" || element.class == "Link")
        document.querySelector(
          ".process"
        ).innerHTML += `<a href="${element.source.url}"><div class="blackbox"><img style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></div></a>`;
      else if (element.class == "Text")
        document.querySelector(
          ".process"
        ).innerHTML += `<div class="blackbox" style=" margin: 10px; padding: 10px; font-family: sans-serif; line-height: 1.5em; color: white">${element.content_html}</div>`;
    }
  });
});

// output
process.everything().then((res) => {
  res.forEach((element) => {
    if (element.title == "output") {
      if (element.class == "Image")
        document.querySelector(
          ".output"
        ).innerHTML += `<a href="${element.image.display.url}"><img style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></a>`;
    } else if (element.title == "process" || element.title == "input") {
      if (element.class == "Image")
        document.querySelector(
          ".output"
        ).innerHTML += `<div class="blackbox"><img  style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></div>`;
      else if (element.class == "Media" || element.class == "Link")
        document.querySelector(
          ".output"
        ).innerHTML += `<a href="${element.source.url}"><div class="blackbox"><img style="margin: 10px 0; width: 95%" src="${element.image.display.url}"></img></div></a>`;
      else if (element.class == "Text")
        document.querySelector(
          ".output"
        ).innerHTML += `<div class="blackbox" style=" margin: 10px; padding: 10px;  font-family: sans-serif; line-height: 1.5em; color: white">${element.content_html}</div>`;
    }
  });
});
