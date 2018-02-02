'use strict';

angular
    .module('pinterest')
    .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
        $scope.sup = 'sup';
        $scope.board = {
            title: ''
        };
        $scope.CreateBoard = () => {
            $scope.board.uid  = firebase.auth().currentUser.uid;
            BoardFactory.addNewBoard($scope.board)
                .then((data) => {
<<<<<<< HEAD
=======
                    console.log('newboard', data);
>>>>>>> master
                    $window.location.href = '#!/BoardList';
                });
        };
    });