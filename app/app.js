var app = angular
    .module('boilerplate', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/home', {
                controller: 'basePageController',
                templateUrl: '../views/basePage.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
