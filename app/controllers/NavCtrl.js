"use strict";

angular
  .module("pinterest")
  .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

    $scope.navItems = [
     
      {
        name: "Login/Logout",
        url: "#!/login",
        bang: "!"
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

  });


  