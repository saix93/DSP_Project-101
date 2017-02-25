/* exported loadSprite */

function loadSprite(spriteSheetUrl, pixelPerSprite) {
  var deferred = Q.defer();
  var spriteArray = [];
  var image = new Image();
  var name = spriteSheetUrl.split('/')[spriteSheetUrl.split('/').length - 1].split('.')[0];
  image.src = spriteSheetUrl;
  image.onload = function() {
    var widthSprites = image.width / pixelPerSprite;
    var heightSprites = image.height / pixelPerSprite;

    for (var i = 0; i < heightSprites; i++) {   // Filas
      for (var j = 0; j < widthSprites; j++) {  // Columnas
        spriteArray.push(
          new DSP_Sprite(
            ctx,                                    // Contexto del canvas
            pixelPerSprite,                         // Anchura del sprite
            pixelPerSprite,                         // Altura del sprite
            pixelPerSprite * j,                     // Posicion X del sprite
            pixelPerSprite * i,                     // Posicion Y del sprite
            image,                                  // Imagen del sprite
            `${name}_${i}x${j}_${pixelPerSprite}px` // Nombre del sprite
          )
        );
      }
    }

    deferred.resolve(spriteArray);
  };

  return deferred.promise;
}
