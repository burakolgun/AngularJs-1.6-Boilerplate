angular
    .module('boilerplate')
    .component('footerComponent', {
        controller: footerComponent,
        templateUrl: '../../components/footerComponent/footer.html'
    });
function footerComponent($scope) {
    $scope.footerContent = "Place footer content here."
}
