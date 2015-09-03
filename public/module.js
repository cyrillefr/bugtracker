var appBugTracker = angular.module('bugTracker', ['ngRoute', 'ui.bootstrap']);

// configure our routes
appBugTracker.config(function($routeProvider) {

    $routeProvider
         .when('/myView', {
            templateUrl : 'templates/myview.html',
            controller  : 'myViewController'
        })    

            .when('/stats', {
                templateUrl : 'templates/stats.html',
                controller  : 'statsController'
        })

  
    

});
