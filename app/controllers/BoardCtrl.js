"use strict";

angular
  .module("pinterest")
  .controller("BoardCtrl", function ($scope, PinFactory, $routeParams, $window) {


    PinFactory.getBoardPins()
      .then(allPins => {
        if (allPins.length > 0) {
          console.log(allPins, 'all the pins');
          $scope.pins = allPins;
        }
      });

    let boardId = $routeParams.id;
    $scope.pin = {
      link: '',
      title: '',
      BoardId: boardId
    };
    $scope.SavePin = () => {
      PinFactory.addNewPin($scope.pin)
        .then((data) => {
          $window.location.href = '#!/BoardList';
        });
    };

  });