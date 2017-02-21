/* exported loadMap */

function loadMap(mapName) {
  $.get(`/server/maps/${mapName}.map`, function(data) {
    // TODO: Cargar mapa para generar el terreno
  });
}
