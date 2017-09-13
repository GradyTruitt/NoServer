angular.module('eatsApp').controller('homeCtrl', function($scope, $state, mainService){

    $scope.getLocation = function(searchTerm) {
        if (document.getElementById('main-input').value) {
            
            mainService.searchTerm = $scope.searchTerm;

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
                var results = [];

                for (var i = 0; i < res.length ; i++) {

                    var photoUrl = function() {
                        if (res[i].photos) {
                            return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference=" + res[i].photos[0].photo_reference + "&key=AIzaSyBk28FI1UwSYVxXuwWsghXYAe3ptBXI0HQ";
                        }
                        else {return "/images/noimage.jpg";}
                    };
                    
                    var openNow = function(){
                        if (res[i].opening_hours) {
                            if (res[i].opening_hours.open_now === true){
                                return "open";
                            }
                            else { return "closed";}
                        }
                        else {return 'unavailable';}
                    }

                    var rating = function() {
                        if (res[i].rating < 0.5) {
                            return '/images/0st.svg';
                        }
                        else if (res[i].rating >= 0.5 && res[i].rating < 1) {
                            return '/images/0_5st.svg';
                        }
                        else if (res[i].rating >= 1 && res[i].rating < 1.5) {
                            return '/images/1st.svg';
                        }
                        else if (res[i].rating >= 1.5 && res[i].rating < 2) {
                            return '/images/1_5st.svg';
                        }
                        else if (res[i].rating >= 2 && res[i].rating < 2.5) {
                            return '/images/2st.svg';
                        }
                        else if (res[i].rating >= 2.5 && res[i].rating < 3) {
                            return '/images/2_5st.svg';
                        }
                        else if (res[i].rating >= 3 && res[i].rating < 3.5) {
                            return '/images/3st.svg';
                        }
                        else if (res[i].rating >= 3.5 && res[i].rating < 4) {
                            return '/images/3_5st.svg';
                        }
                        else if (res[i].rating >= 4 && res[i].rating < 4.5) {
                            return '/images/4st.svg';
                        }
                        else if (res[i].rating >= 4.5 && res[i].rating < 5) {
                            return '/images/4_5st.svg';
                        }
                        else if (res[i].rating >= 5) {
                            return '/images/5st.svg';
                        }
                        else return '/images/0st.svg';
                    }

                    var price = function(){
                        if (res[i].price_level <= 1) {
                            return "/images/money1.svg";
                        }
                        else if (res[i].price_level > 1 && res[i].price_level <= 2) {
                            return "/images/money2.svg";
                        }
                        else if (res[i].price_level > 2 && res[i].price_level <= 3) {
                            return "/images/money3.svg";
                        }
                        else if (res[i].price_level > 3 && res[i].price_level <= 4) {
                            return "/images/money4.svg";
                        }
                        else if (res[i].price_level > 4 && res[i].price_level <= 5) {
                            return "/images/money5.svg";
                        }
                        else return "/images/money2.svg";
                    }
                    
                    var obj = {
                        location: res[i].geometry.location || null,
                        name: res[i].name || null,
                        photo: photoUrl(),
                        open: openNow(),
                        price: price(),
                        rating: rating(),
                        address: res[i].vicinity || null,
                    };
                    results.push(obj);
                }
                mainService.searchResults = results;
                $state.go('results');               
        }); 
            
    };
        
});