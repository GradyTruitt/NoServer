angular.module('eatsApp').controller('resultsCtrl', function($scope, mainService){

    $scope.searchResults = mainService.searchResults;
    $scope.searchTerm = mainService.searchTerm;


    console.log($scope.searchResults);


    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position){
            $scope.ln = position.coords.longitude;
            $scope.la = position.coords.latitude;
        })
    }
    else {console.log('none')}

    $scope.expand = function($index){
        if(clicked === false) {
    document.getElementById('map-'+ $index).style.borderLeft= "25px solid #C5F018";
        }
    };

    var clicked = false;

    $scope.unexpand = function($index){
        if (clicked === false){
        document.getElementById('map-'+$index).style.borderLeft= "none";
        }
        };

    $scope.showMap = function($index){

        setTimeout( function() {console.log($scope.searchResults[$index].location.lng, $scope.searchResults[$index].location.lat);
        mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhZHl0cnVpdHQiLCJhIjoiY2o3MnZlOGhjMDFlZzMyb2MybWZ0cHVmMiJ9.rFInG0dBQqNlpfxP7sC8MQ';
        var map = new mapboxgl.Map({
            container: 'map-'+$index, // container id
            style: 'mapbox://styles/mapbox/streets-v10', // stylesheet location
            center: [$scope.searchResults[$index].location.lng, $scope.searchResults[$index].location.lat], // starting position [lng, lat]
            zoom: 15 // starting zoom 
        });

        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));

        map.on('load', function() {
            map.loadImage('http://www.bentonvillemerchants.net/wp-content/uploads/2017/09/locationicon-1.png', function(error, image) {
                if (error) throw error;
                map.addImage('cat', image);
                map.addLayer({
                    "id": "points",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [$scope.searchResults[$index].location.lng, $scope.searchResults[$index].location.lat]
                                }
                            }]
                        }
                    },
                    "layout": {
                        "icon-image": "cat",
                        "icon-size": 0.15
                    }
                });
            });
        });

        }, 500);

        clicked = true;
        document.getElementById('map-'+ $index).style.borderLeft= "8px solid #C5F018";
        document.getElementById('content-align'+$index).style.width= "0px";
        document.getElementById('center-content'+$index).style.display= 'none';
        console.log(document.getElementById('hide'+$index));
        document.getElementById('hide'+$index).style.display = 'flex';
        document.getElementById('show'+$index).style.display = 'none';
        document.getElementById('map-'+ $index).style.width = '95%';
        document.getElementById('padding'+$index).style.paddingLeft = '0px';
        document.getElementById('shrink'+$index).style.width = '10vw' ;

    }

    $scope.hideMap = function($index){
        clicked = false;
        document.getElementById('map-'+ $index).style.borderLeft= "none";
        document.getElementById('content-align'+$index).style.width= "75%";
        document.getElementById('hide'+$index).style.display = 'none';
        document.getElementById('show'+$index).style.display = 'flex';
        document.getElementById('map-'+ $index).style.width = '0px';
        document.getElementById('padding'+$index).style.paddingLeft = '4%';
        document.getElementById('shrink'+$index).style.width = '30vw' ;
        setTimeout(function(){ console.log(document.getElementById('center-content'+$index)); document.getElementById('center-content'+$index).style.display= 'block'; }, 200);
    };

    $scope.hideModal = function(){
        document.getElementById('map-modal').style.display = 'none';
        document.getElementById('x').style.display = 'none';
        instructions.innerHTML = '';
    };


    $scope.getDirections = function($index){
        var name = $scope.searchResults[$index].name;
        document.getElementById('x').style.display = 'block';
        document.getElementById('map-modal').style.display = 'block';

        setTimeout( function() { 
            mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhZHl0cnVpdHQiLCJhIjoiY2o3MnZlOGhjMDFlZzMyb2MybWZ0cHVmMiJ9.rFInG0dBQqNlpfxP7sC8MQ';
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [$scope.searchResults[$index].location.lng, $scope.searchResults[$index].location.lat],
          zoom: 15
        });
        map.on('load', function() {
      getRoute();
    });
    
    function getRoute() {
      var start = [$scope.ln, $scope.la];
      var end = [$scope.searchResults[$index].location.lng, $scope.searchResults[$index].location.lat];
      var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
      $.ajax({
        method: 'GET',
        url: directionsRequest,
      }).done(function(data) {
        var route = data.routes[0].geometry;
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: route
            }
          },
          paint: {
            'line-width': 4
          }
        });
        map.addLayer({
      id: 'start',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: start
          }
        }
      }
    });
    map.addLayer({
      id: 'end',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: end
          }
        }
      }
    });
    var instructions = document.getElementById('instructions');
    steps = data.routes[0].legs[0].steps;
    steps.forEach(function(step) {
      instructions.insertAdjacentHTML('beforeend', '<p>' + step.maneuver.instruction + '</p>');
    });
    instructions.insertAdjacentHTML('afterbegin', "<h1 class='name'>" + name + "</h1>");
    instructions.insertAdjacentHTML('beforeend', "<hr>");
      });
    }
    },300);


    };

});