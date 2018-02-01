'use strict';

angular.module("pinterest").controller("UserCtrl", function($scope, UserFactory) {
    $scope.message = "This is working";
    console.log("This is working");

    $scope.login = () => {
        UserFactory.googleLogin()
            .then((user) => {
                console.log("Is this working?");
            });
    };
});