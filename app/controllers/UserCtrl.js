'use strict';

angular.module("pinterest").controller("UserCtrl", function($scope, UserFactory, $window) {
    $scope.message = "This is working";
    // console.log("This is working");

    // 
    $scope.login = () => {
        UserFactory.googleLogin()
            .then((user) => {
                $window.location.href = '#!/BoardList';
            });
    };

    $scope.logout = () => {
        UserFactory.googleLogout()
        .then((user)=>{
            console.log('User Logged out', user);
            $window.location.href = "#!/login";
        });
    };
});