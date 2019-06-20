var app = angular.module('ngOrganizationalUnits', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/axcess-modules/firm-manager',
        {
            templateUrl: '/organizational-units.html',
            controller: 'OUController'
        }
    ).when('/axcess-modules/firm-manager/editOU/:id',
        {
            templateUrl: '/edit-organizational-units.html',
            controller: 'OUEditController'
        }).when('/module-home', {
            template: '<firm-module></firm-module>',
        }).otherwise({
            template: ''
            
        });

    $locationProvider.html5Mode(false);
});

app.controller("OUController", function ($scope, $location,organizationalUnitService) {

    document.addEventListener("setOfficeData", function(event)
    {
        $scope.data = event.detail.data;
        organizationalUnitService.setData($scope.data);
    }, false);

    if(!$scope.data)
      $scope.data = organizationalUnitService.getData();
      
    $scope.onEditClicked = function (id) {
        $location.path('/axcess-modules/firm-manager/editOU/' + id);
    }
    
});


app.controller("OUEditController", function ($scope, $routeParams,organizationalUnitService, $location) {

    $scope.data = organizationalUnitService.getData();

    $scope.ouId = $routeParams.id;
    $scope.ouName = $scope.data.filter(function (office) {
        return (office.id == $routeParams.id);
    })[0].name;

    $scope.changeName = function (id, newName) {
        var event = new CustomEvent(
            "changedFirmData", 
            {
              detail: {
                data: {id:id,name:newName},
                time: new Date(),
              },
              bubbles: true,
              cancelable: true
            }
          );
        document.getElementById('firmContainer').dispatchEvent(event);
        $scope.data.forEach(function(item){
            if(item.id == id){
                item.name = newName;
            }
        });
        organizationalUnitService.setData($scope.data);

        $location.path('/axcess-modules/firm-manager');
    };
});

app.service('organizationalUnitService', function () {
    this.data = [];
  
    this.setData = function(data){
        this.data = data;
    }

    this.getData = function () {
        return this.data;
    }
});