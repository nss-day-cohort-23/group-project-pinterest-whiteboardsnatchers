"use strict";

angular
.module("pinterest")
.controller("PinNewCtrl", function($scope, PinFactory, $routeParams, $window){
    $scope.pin = {
        link: '',
        title: '',
        BoardId: $routeParams.id
    };
    $scope.SavePin = () =>{
        PinFactory.addNewPin($scope.pin)
            .then((user) =>{
                $window.location.href = '#!/BoardList';
            });
    };
});