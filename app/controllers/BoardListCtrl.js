'use strict';

angular
    .module('pinterest')
    .controller('BoardListCtrl', function ($scope, BoardFactory) {
        $scope.sup = 'sup';

        
        BoardFactory.getBoards()
        .then((data)=>{
            $scope.boards = data;
            console.log('boardlist', $scope.boards);
            
        });
    });