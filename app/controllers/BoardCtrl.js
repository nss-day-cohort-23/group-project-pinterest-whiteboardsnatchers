"use strict";


angular
  .module("pinterest")
  .controller("BoardCtrl", function ($scope, PinFactory, $routeParams, $window, $route) {

    
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
        $route.reload();
        
      });
    };
    
    $scope.DeletePin = (pinId) => {
      PinFactory.deletePin(pinId)
      .then(()=>{
        PinFactory.getBoardPins();
        $route.reload();
      });
    };
    
    $scope.togglePin = function(){
      $scope.mustShow = true;
    };

    $scope.searchImages = function () {
      $window.open('https://www.google.com', '_blank');
    };
    
  });


