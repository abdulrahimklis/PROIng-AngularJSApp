var myCompany = angular.module('myCompany', ['ngRoute']);

myCompany.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/inprgress', {
            templateUrl: 'views/inprogress.html'
        })
        .otherwise({
            redirecTo: '/home'
        });

}]);

