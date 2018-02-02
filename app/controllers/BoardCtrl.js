
'use strict';
angular.module('pinterest').controller('BoardCtrl', function ($scope, BoardFactory, $routeParams, PinFactory, $window) {
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