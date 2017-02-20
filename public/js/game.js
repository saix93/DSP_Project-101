/* exported player */

// Game objects

  // Player
  var playerWidth = 40;
  var playerHeight = 80;

  var player = {
    width: playerWidth,
    height: playerHeight,
    x: playerX,
    y: playerY,
    speed: 500
  }

  // staticObjects
  var staticObjects = [];

  var static1 = {
    width: 200,
    height: 300,
    x: 200,
    y: 200
  }

  var static2 = {
    width: 600,
    height: 100,
    x: 500,
    y: 150
  }

  staticObjects.push(static1, static2);
