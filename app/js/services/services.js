angular.module('app').factory('service', function($http) {
  var promise;
  var service = {
    get: function() {
      if (!promise) {
        promise = $http.get('http://10.0.2.128:5000/ocurrence').then(function(response) {
          return response.data;
        });
      }
      return promise;
    }
  };
  return service;
});
