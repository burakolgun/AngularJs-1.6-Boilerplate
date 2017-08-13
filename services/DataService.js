angular.module('boilerplate')
    .factory('DataService', dataService);

function dataService($http) {
    return {
        listCompanyUsers: listCompanyUsers,
    };

    function listCompanyUsers(callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/company/user/all'
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }
}

