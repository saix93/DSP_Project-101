/* exported loadMaps */

function loadMaps() {
  var deferred = Q.defer();

  $.get('/api/mapsLoader', function(data) {
    deferred.resolve(data);
  });

  return deferred.promise;
}
