// Update game objects
function update(modifier) {

  // Se comprueba lo que el usuario está pulsando
  // El jugador está pulsando W
  if (inputAction['up']) {
    var oldY = player.y;
    player.y -= player.speed * modifier;

    if (player.y <= 0) {
      player.y = 0;
    } else {
      player.y = checkCollisions(player, staticObjects, player.y, oldY);
    }
  }

  // El jugador está pulsando A
  if (inputAction['left']) {
    var oldX = player.x;
    player.x -= player.speed * modifier;

    if (player.x <= 0) {
      player.x = 0;
    } else {
      player.x = checkCollisions(player, staticObjects, player.x, oldX);
    }
  }

  // El jugador está pulsando S
  if (inputAction['down']) {
    var oldY = player.y;
    player.y += player.speed * modifier;

    var limit = canvas.height - player.height;
    if (player.y >= limit) {
      player.y = limit;
    } else {
      player.y = checkCollisions(player, staticObjects, player.y, oldY);
    }
  }

  // El jugador está pulsando D
  if (inputAction['right']) {
    var oldX = player.x;
    player.x += player.speed * modifier;

    var limit = canvas.width - player.width;
    if (player.x >= limit) {
      player.x = limit;
    } else {
      player.x = checkCollisions(player, staticObjects, player.x, oldX);
    }
  }
}

// Función que comprueba si un objeto está chocando con otro
function checkCollisions(object, arrayOfObjects, newCoordinate, oldCoordinate) {
  var objectCoordinate;
  for (var i = 0; i < arrayOfObjects.length; i++) {
    if (
      object.x < arrayOfObjects[i].x + arrayOfObjects[i].width  && object.x + object.width  > arrayOfObjects[i].x &&
      object.y < arrayOfObjects[i].y + arrayOfObjects[i].height && object.y + object.height > arrayOfObjects[i].y
    ) {
      // The objects are touching
      objectCoordinate = oldCoordinate;
    } else {
      objectCoordinate = newCoordinate;
    }
  }

  return objectCoordinate;
}
