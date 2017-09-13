angular.module('eatsApp').controller('resultsCtrl', function($scope, mainService){

    $scope.searchResults = mainService.searchResults;
    $scope.searchTerm = mainService.searchTerm;
    console.log($scope.result);

});