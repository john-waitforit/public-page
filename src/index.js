const _ = require("lodash");

function component() {
  let element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

console.log("Tak...");
let interval = setInterval(tik, 1000);
setTimeout(boom, 3000);

function tik() {
  console.log("Tik...");
}

function boom() {
  console.log("Boom");
  clearInterval(interval);
}

let a = 2;
let b = 4;
let c = a + b;
console.log(c);
