"use strict";

angular
  .module("pinterest")
  .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

    $scope.isUserActive = function(viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.navItems = [
     
      {
        name: "Login",
        url: "#!/login",
        bang: "!"
      },
      {
        name: "Logout",
        url: "#!/logout"
      },
      {
        name: "Board List",
        url: "#!/BoardList"
      },
      {
        name: "Add New Board",
        url: "#!/newBoard"
      }
    ];

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $scope.$apply(($scope.isLoggedIn = true));
        console.log("is the currentUser logged in", user.uid);
        console.log('$scope.isLoggedIn',$scope.isLoggedIn);
      } else {
        $scope.isLoggedIn = false;
        console.log('$scope.isLoggedIn',$scope.isLoggedIn);
        $scope.apply(); //this is to make it update scope

        $window.location.href = "#!/login";
      }
    });

    $scope.navigate = navUrl => {
      console.log("navUrl", navUrl);
      if (navUrl === "#!/logout") {
        UserFactory.googleLogout();
      } else {
        $window.location.href = navUrl;
      }
    };
  });


  