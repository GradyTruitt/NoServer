angular.module('eatsApp').controller('mainCtrl', function($scope){

    $scope.openNav = function(){
        function openNav(){
            console.log('fired')
            document.getElementById('tray').style.width = "450px";
            }
    };

});