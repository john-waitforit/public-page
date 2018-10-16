const _ = require("lodash");
require("bootstrap");

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
