'use strict'

var app = angular.module('practise_app', 
    [
        'ngMaterial',
        'ui.router'
    ]    
)


app.config( [ "$stateProvider" , "$urlRouterProvider", "$locationProvider", 
    function( $stateProvider, $urlRouterProvider, $locationProvider ) {

        $locationProvider.html5Mode({ enabled: true, requireBase: false });
        
        $stateProvider.state("home", {
            url: "/",
            controller: "staticController",
            templateUrl: "../angular-views/static-views/index.html"
        })

        $stateProvider.state("user", {
            url: "/user",
            controller: "userController",
            templateUrl: "../angular-views/user-views/user.html"
        })
    }
])


