(function() {
  'use strict';

  angular.module('app')
    .service('service', ['$q', service]);

  /**
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAllItems: Function}}
   * @constructor
   */
  function service($q) {

    var items = [{
      "_id": "56d6f3da2901e6cf052b322f",
      "assigned": true,
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
      "assigned": true,
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


    // Promise-based API
    return {
      loadAllItems: function() {
        // Simulate async nature of real remote calls
        return $q.when(items);
      }
    };
  }

})();
