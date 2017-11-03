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
          'Content-Type': 'application/x-www-form-urlencoded',
          url: '/login',
          data: {
            email: $scope.user.email
          }
        }).then(function(res) {
          console.log(res)
          window.localStorage.setItem( 'token', res.data )
          $state.go( 'user', { id: res.data.id })
        }).catch(function(err_result) {
          console.log(err_result);
        });
    }

    
}]);