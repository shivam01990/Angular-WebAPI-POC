var app = angular.module("ApplicationModule", ["ngRoute"]);


//Showing Routing  
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    debugger;
    $routeProvider.when('/page1',
        {
            templateUrl: 'Home/Page1',
            controller: 'Page1Controller'            
        });
    $routeProvider.when('/page2',
        {
            templateUrl: 'Home/Page2',
            controller: 'Page2Controller'
        });
    $routeProvider.when('/page3',
        {
            templateUrl: 'Home/Page3',
            controller: 'Page3Controller'
        });
    $routeProvider.otherwise(
        {
            redirectTo: '/'
        });

    $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);  
