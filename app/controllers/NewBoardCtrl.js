'use strict';

angular
    .module('pinterest')
    .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
        $scope.sup = 'sup';
        $scope.board = {
            title: ''
        };
        $scope.CreateBoard = () => {
            console.log('boardTitle', $scope.board);
            $scope.board.uid  = firebase.auth().currentUser.uid;
            BoardFactory.addNewBoard($scope.board)
                .then((data) => {
                    console.log('newboard', data);
                    $window.location.href = '#!/BoardList';
                });
        };
    });