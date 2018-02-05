'use strict';

angular
    .module('pinterest')
    .controller('BoardListCtrl', function ($scope, BoardFactory, $routeParams, $location, PinFactory) {
       
      firebase.auth().onAuthStateChanged((user) => {
        if (user){
        BoardFactory.getBoards(user.uid)
        .then((data)=>{ 
            $scope.boards = data;            
        });
      }else{
        console.log('there is no user');
      }
    });


        $scope.redirect = (boardId) => {
          $location.url(`/board/${boardId}`);
        };
    });
