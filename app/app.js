var app = angular
    .module('boilerplate', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                controller: 'basePageController',
                templateUrl: '../views/basePage.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
