angular.module('eateryApp').service('mainService',function($http){

    this.searchResults = '';

    this.getLocation = function(location) {

        var locationUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location +"&key=AIzaSyBk28FI1UwSYVxXuwWsghXYAe3ptBXI0HQ"
  
        return $http.get(locationUrl).then(function(res){
            return res.data.results[0].geometry.location;
        });
    };



    this.getInfo = function(term){
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + term + "&type=restaurant&rankby=distance&key=AIzaSyAu0kbhIMYpqogbdqV4D2j3miy1VmorOqw";

        return $http.get(url).then(function(res){
            this.searchResults = res.data.results;
             return res.data.results;
        });
    };

});