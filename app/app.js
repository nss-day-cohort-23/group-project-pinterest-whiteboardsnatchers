'use strict';

angular.module("pinterest", ["ngRoute"])
.constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
.config($routeProvider => {
    $routeProvider
        .when('/login', {
            templateUrl: "partials/user.html",
            controller: "UserCtrl"
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