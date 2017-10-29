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
        $stateProvider.state("contacts", {
            url: "/",
            controller: "staticController" 
        })
    }
])


