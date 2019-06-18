var app = angular.module('ngOrganizationalUnits', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider ) {
     
    $routeProvider.when('/', {
        templateUrl: '/editOrganizationalUnits.html',
        controller: 'OUController'
    }).when('/axcess-modules/firm-manager/editOU', {
        templateUrl: '/editOrganizationalUnits.html',
        controller: 'OUController'
    }).when('/module-home', {
        template: '<firm-module></firm-module>',
    }).otherwise({
        redirectTo: "/"
    });
  
    $locationProvider.html5Mode(false);
});

app.controller("OUController", function ($scope, $location,$rootScope) {
    $scope.changeName = function (id,newName) {
        window.changedNameOfOU(id,newName);
    };
});

app.service('organizationalUnitService', function() {
    this.getData = function () {
      return true;
    }
  });