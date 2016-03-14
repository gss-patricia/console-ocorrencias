(function () {
   'use strict';

  var app = angular.module('app', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {

    $routeProvider

      .when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'HomeController'
    })

    .otherwise({
      redirectTo: '/'
    });
  })

})();
