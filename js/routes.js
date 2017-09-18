angular.module('eatsApp').config(function($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/');
    
        $stateProvider
            .state('home', {
                templateUrl: './views/home.html',
                url: '/',
                controller: 'homeCtrl'
            })

            .state('results', {
                templateUrl: './views/results.html',
                url: '/results',
                controller: 'resultsCtrl'
            })

            .state('map', {
                templateUrl: './views/map.html',
                url: '/map',
                controller: 'mapCtrl'
            })
    
    });