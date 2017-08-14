angular
    .module('boilerplate')
    .component('headerComponent', {
        controller: headerComponent,
        templateUrl: '../../components/headerComponent/header.html'
    });
function headerComponent($scope) {
    $scope.headerVersion = "Version Angular 1.6.5"
    }
