angular.module("eateryApp").controller('homeCtrl', function($scope, mainService, $state) {

    $scope.getLocation = function(searchTerm) {

        var location = $scope.searchTerm.split(" ").join("+");

        mainService.getLocation(location).then(function(res){
            var lat = res.lat;
            var lng = res.lng;
            location = lat + "," + lng;
            $scope.getInfo(location);
        });
    };


    $scope.getInfo = function(location) {

        mainService.getInfo(location).then(function(res){
        $scope.searchResults = res;   
        $state.go('results', {results: $scope.searchResults} );
        // console.log($scope.searchResults);
        // $scope.searchResults = '';
    }); 
    };

});