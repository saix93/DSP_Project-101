/* exported loadConfig */

function loadConfig() {
  var deferred = Q.defer();

  $.get('/api/configLoader', function(data) {
    deferred.resolve(data);
  });

  return deferred.promise;
}
