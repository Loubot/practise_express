'use strict'


'use strict';
angular.module('practise_app').controller('staticController', ['$scope','$http', function($scope,$http) {
    console.log('staticController')

    $scope.login = function () {

        $http({
          method: 'POST',
          url: '/login',
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email: 'lllouis',
            password: 'test'
          }
        }).then(function(result) {
          console.log(result)
        }).catch(function(err_result) {
          console.log(err_result);
        });
    }

    
}]);