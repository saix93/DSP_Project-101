/* exported render */

// Draw everything
function render() {
  // clear the canvas
  ctx.clear();

  // Create player
  ctx.fillStyle = "#DDD";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Text options
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  // Player money
  ctx.fillText(`Money: ${player.money}`, 32, 32);

  // Render staticObjects
  ctx.fillStyle = "#0F0";
  for (var i = 0; i < staticObjects.length; i++) {
    ctx.fillRect(staticObjects[i].x, staticObjects[i].y, staticObjects[i].width, staticObjects[i].height);
  }
}
