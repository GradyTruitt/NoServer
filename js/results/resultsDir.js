angular.module('eateryApp').directive('resultsDir', function($http, $document) {
    return {
        templateUrl: './views/resultCard.html',
        restrict: 'E',
        scope: {
            result: "="
        },
        link: function(scope, elems, attrs){

            $document.ready(function(){
                
                var photoId = scope.result.photos[0].photo_reference;
                var photoUrl = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference=" + photoId + "&key=AIzaSyBk28FI1UwSYVxXuwWsghXYAe3ptBXI0HQ"
                console.log(photoUrl)
                return $http.get(photoUrl).then(function(res){
                    console.log("this is response")
                    console.log(res.data)
                });
            });
            }
            
            // console.log(scope.result.photos[0].photo_reference)
            
        };
    
});