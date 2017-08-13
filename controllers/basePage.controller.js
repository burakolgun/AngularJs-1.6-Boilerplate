angular
    .module('boilerplate')
    .controller('basePageController', basePageController);

    function basePageController($scope){
        $scope.title = "BasePage"
    }