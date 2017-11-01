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


app.directive('file', function() {
  return {
    restrict: 'AE',
    scope: {
      file: '@'
    },
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        scope.file = file;
        scope.$parent.file = file;
        scope.$apply();
      });
    }
  };
});


