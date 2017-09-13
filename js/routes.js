angular.module('eateryApp').config(function($stateProvider, $urlRouterProvider) {
    
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
            });
    
    });