'use strict';

angular
    .module('pinterest')
    .controller('BoardListCtrl', function ($scope, BoardFactory, $routeParams, $window, PinFactory) {
       
        BoardFactory.getBoards()
        .then((data)=>{ 
            $scope.boards = data;
            console.log('boards', $scope.boards);
            
        });

    });