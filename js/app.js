var endpoint = "http://localhost:8080/OXIWebService";
var oxiNewsApp = angular.module('oxiNewsApp', ["ui.bootstrap"]);


oxiNewsApp.controller("navMainController", function($scope, $http) {
    $http.get(endpoint + "/getMenu")
        .success(function(response) {$scope.menu = response;});
});

oxiNewsApp.controller('NewListController', function ($scope, $http) {
	$http.get(endpoint + "/getNews")
        .success(function(response) {$scope.news = response;});

});

oxiNewsApp.controller('CarouselCtrl', function ($scope, $http) {

    $scope.myInterval = 5000;
	$http.get(endpoint + "/getNews")
        .success(function(response) {

            $scope.news = response;

        });

});

oxiNewsApp.controller("categoryController", function($scope, $http) {
    $http.get(endpoint +  "/getCategories")
        .success(function(response) {$scope.categories = response;});
});