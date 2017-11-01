'use strict'


'use strict';
angular.module('practise_app').controller('staticController', ['$scope','$http', '$state', function( $scope, $http, $state ) {
    console.log('staticController')

    $scope.user = {
            email: "lllouis@yahoo.com",
            password: 'test'
        }
    $scope.login = function () {

        $http({
          method: 'POST',
          url: '/login',
          data: {
            email: $scope.user.email,
            password: $scope.user.password
          }
        }).then(function(res) {
          console.log(res)
          window.localStorage.setItem( 'token', res.data.token )

        }).catch(function(err_result) {
          console.log(err_result);
        });
    }

    
}]);