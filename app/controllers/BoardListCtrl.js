'use strict';

angular
    .module('pinterest')
    .controller('BoardListCtrl', function ($scope, BoardFactory, $routeParams, $location, PinFactory, $route, UserFactory) {
       
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

      $scope.deleteBoard = (boardId) => {
        BoardFactory.deleteBoard(boardId)
          .then(() => {
            console.log("current user", UserFactory.getCurrentUser());
            $route.reload();
            let user = UserFactory.getCurrentUser();
            BoardFactory.getBoards(user.uid)
              .then(boardData => {
                console.log('boardData',boardData);
              });
          });
      };

        $scope.redirect = (boardId) => {
          $location.url(`/board/${boardId}`);
        };
    });
