(function() {

  function HomeController($scope, $filter, service) {

    $scope.title = "Console de Ocorrências";
    $scope.reverse = false;
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    // service mock
    $scope.items = [{
      "_id": "56d6f3da2901e6cf052b322f",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:08:26 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "bla",
      "system": "SLF",
      "__v": 0
    }, {
      "_id": "56d6f4072901e6cf052b3230",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:09:11 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "car",
      "system": "SLF",
      "__v": 0
    }, {
      "_id": "56d6f40e2901e6cf052b3231",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:09:18 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "hotdog",
      "system": "SLF",
      "__v": 0
    }, {
      "_id": "56d6f4142901e6cf052b3232",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:09:24 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "overwatch",
      "system": "SLF",
      "__v": 0
    }, {
      "_id": "56d6f4252901e6cf052b3233",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:09:41 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "warcraft",
      "system": "BLA",
      "__v": 0
    }, {
      "_id": "56d6f4302901e6cf052b3234",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:09:52 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "a very serious description",
      "system": "BLA",
      "__v": 0
    }, {
      "_id": "56d6f4422901e6cf052b3235",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:10:10 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "heroes of the storm",
      "system": "SLF",
      "__v": 0
    }, {
      "_id": "56d6f44e2901e6cf052b3236",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:10:22 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "dar souls",
      "system": "SLF",
      "__v": 0
    }, {
      "_id": "56d6f4572901e6cf052b3237",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:10:31 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "stardew valley",
      "system": "SLF",
      "__v": 0
    }, {
      "_id": "56d6f4602901e6cf052b3238",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:10:40 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "darkest dungeon",
      "system": "SLF",
      "__v": 0
    }, {
      "_id": "56d6f4892901e6cf052b3239",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:11:21 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "D.Va",
      "system": "SLF",
      "__v": 0
    }, {
      "_id": "56d6f4902901e6cf052b323a",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:11:28 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "Mercy",
      "system": "OVW",
      "__v": 0
    }, {
      "_id": "56d6f4942901e6cf052b323b",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:11:32 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "Mei",
      "system": "OVW",
      "__v": 0
    }, {
      "_id": "56d6f49c2901e6cf052b323c",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:11:40 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "Tracer",
      "system": "OVW",
      "__v": 0
    }, {
      "_id": "56d6f4a32901e6cf052b323d",
      "assigned": false,
      "createdDate": "Wed Mar 02 2016 11:11:47 GMT-0300 (BRT)",
      "ocurrenceDate": "2016-02-03T02:00:00.000Z",
      "description": "McGree",
      "system": "OVW",
      "__v": 0
    }];

    var searchMatch = function(haystack, needle) {
      if (!needle) {
        return true;
      }
      return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.getData = function() {

      $scope.filteredItems = $filter('filter')($scope.items, function(item) {
        for (var attr in item) {
          if (searchMatch(item[attr], $scope.query)) //id query
            return true;
        }
        return false;
      });

      $scope.currentPage = 0;
      // group
      $scope.groupToPages();

    };

    // calculate page in place
    $scope.groupToPages = function() {
      $scope.pagedItems = [];

      for (var i = 0; i < $scope.filteredItems.length; i++) {
        if (i % $scope.itemsPerPage === 0) {
          $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
        } else {
          $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
        }
      }
    };

    $scope.range = function(start, end) {
      var ret = [];
      if (!end) {
        end = start;
        start = 0;
      }
      for (var i = start; i < end; i++) {
        ret.push(i);
      }
      return ret;
    };

    $scope.setPage = function() {
      $scope.currentPage = this.n;
    };

    $scope.prevPage = function() {
      if ($scope.currentPage > 0) {
        $scope.currentPage--;
      }
    };

    $scope.nextPage = function() {
      if ($scope.currentPage < $scope.pagedItems.length - 1) {
        $scope.currentPage++;
      }
    };

    $scope.getData();
  }

  HomeController.$inject = ['$scope', '$filter', 'service'];

  angular.module('app').controller('HomeController', HomeController);
})();
