/* exported player, gameObjects, terrainTiles */

// Declaración de los objetos del juego.
  // Carga de sprites
  // Tiles
  var terrainTiles;
  loadSprite("../assets/terrain.png", 64).then(function(data) {
    terrainTiles = data;
  });

  // Player
  // playerWidth, playerHeight, playerX, playerY, playerGold, playerSpeed
  var player = new DSP_Player(40, 80, playerOriginalX, playerOriginalY, 0, 500);

  // Objetos
  // objectWidth, objectHeight, objectX, objectY, collisionable, collectible
  var gameObjects = [
    new DSP_StaticObject(200, 300, 200, 200, true, false),
    new DSP_StaticObject(100, 100, 500, 600, false, true),
    new DSP_StaticObject(100, 100, 800, 600, false, false),
    new DSP_StaticObject(600, 100, 500, 150, true, false)
  ];
