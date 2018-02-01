'use strict';

angular.module("pinterest", ["ngRoute"])
.constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
.config($routeProvider => {
    $routeProvider
        .when('/login', {
            templateUrl: "partials/user.html",
            controller: "UserCtrl"
        })
        .when('/newBoard',{
            templateUrl: 'partials/newBoard.html',
            controller: 'NewBoardCtrl'
        })
        .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl'
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