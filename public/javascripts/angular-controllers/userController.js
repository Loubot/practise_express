'use strict'

angular.module('practise_app').controller( 'userController', [ '$scope', '$http', function( $scope, $http ) {
    console.log( 'userController' )

    $http({
        method: 'get',
        url: 'api/user',
        headers: {
            'Authorization': window.localStorage.getItem( 'token' )
        }
    }).then(function(user) {
        console.log(user)
        
        
    }).catch(function(err) {
        console.log(err);
    });
}])