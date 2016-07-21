(function() {

  function HomeController($scope, $filter, service) {

    $scope.title = "Console de Ocorrências";
    $scope.reverse = false;
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pageSizes = [5, 10, 25, 50];
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    service.loadAllItems()
      .then(function(response) {
        console.log(response.data);
        $scope.items = response;
        $scope.getData();
      });

    // inicia os itens filtrados
    $scope.getData = function() {

      $scope.currentPage = 0;
      // agrupa por pagina
      $scope.groupToPages();

    };

    // exibe itens por pagina
    $scope.perPage = function() {
      $scope.groupToPages();
    };
    // muda a ordenação
    $scope.sortBy = function(newSortingOrder) {
      if ($scope.sortingOrder == newSortingOrder)
        $scope.reverse = !$scope.reverse;

      $scope.sortingOrder = newSortingOrder;
    };

    // calcula as páginas no lugar
    $scope.groupToPages = function() {
      $scope.pagedItems = [];

      for (var i = 0; i < $scope.items.length; i++) {
        if (i % $scope.itemsPerPage === 0) { //par
          $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.items[i]];
        } else { //impar
          $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
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


  }

  HomeController.$inject = ['$scope', '$filter', 'service'];

  angular.module('app').controller('HomeController', HomeController);
})();
