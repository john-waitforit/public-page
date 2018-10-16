const _ = require("lodash");
require("bootstrap");
require("smartmenus");
const $ = require("jquery");

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

$(function() {
  $("#main-menu").smartmenus();
});
