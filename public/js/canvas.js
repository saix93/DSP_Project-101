/* exported ctx */

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
document.body.appendChild(canvas);
