(function () {

  var gridSample = function () {
    return {
      restrict: "AE",
      controller: function(){
         alert("vai");
       }
    };
  }
  angular.module('app')
    .directive('gridsample', gridSample);

}());
