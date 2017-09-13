angular.module("eateryApp").controller('homeCtrl', function($scope, mainService, $state) {

    $scope.getLocation = function(searchTerm) {
        if (document.getElementById('main-input').value) {  
                 
        var location = $scope.searchTerm.split(" ").join("+");

        mainService.getLocation(location).then(function(res){
            var lat = res.lat;
            var lng = res.lng;
            location = lat + "," + lng;
            $scope.getInfo(location);
        });
    } else {
        var input = document.getElementById('main-input');
        input.style.border = "1px solid red";
    }
    };


    $scope.getInfo = function(location) {
            mainService.getInfo(location).then(function(res){
                mainService.searchResults = res;
                $state.go('results');
            // console.log($scope.searchResults);
            // $scope.searchResults = '';
            }); 
        
    };

});