/* exported render */

// Draw everything
function render() {
  // clear the canvas
  ctx.clear();

  // Se crea el terreno
  if (terrainLoaded) {
    loadMap("firstMap");
  }

  // Se crea el jugador
  ctx.fillStyle = "#DDD";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Se crea el HUD
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  // Gold
  ctx.fillText(`Gold: ${player.gold}`, 32, 32);

  // Se crean los gameObjects
  ctx.fillStyle = "#0F0";
  for (var i = 0; i < gameObjects.length; i++) {
    ctx.fillRect(gameObjects[i].x, gameObjects[i].y, gameObjects[i].width, gameObjects[i].height);
  }
}
