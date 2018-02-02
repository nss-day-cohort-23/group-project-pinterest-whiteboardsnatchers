'use strict';


let isIn = (UserFactory) => {
  new Promise((resolve, reject) => {
    UserFactory.isLoggedIn().then(bool => {
      console.log("user???", bool);
      if (bool) {
        console.log("Logged in . Go ahead");
        resolve();
      } else {
        console.log("Not Logged IN . Go away");
        reject();
      }
    });
  });
};
angular.module("pinterest", ["ngRoute"])
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
      .when('/login', {
        templateUrl: "partials/user.html",
        controller: "UserCtrl"
      })
      .when('/BoardList', {
        templateUrl: 'partials/BoardList.html',
        controller: 'BoardListCtrl',
        resolve: { isIn }
      })

      .when('/newBoard', {
        templateUrl: 'partials/newBoard.html',
        controller: 'NewBoardCtrl',
        resolve: { isIn }
      })
      .when('/board/:id', {
        templateUrl: 'partials/board.html',
        controller: 'BoardCtrl',
        resolve: { isIn }

      })
      .otherwise("/");
  })


  .run(FBCreds => {
    let creds = FBCreds;
    let authConfig = {
      apiKey: creds.apiKey,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  }); 