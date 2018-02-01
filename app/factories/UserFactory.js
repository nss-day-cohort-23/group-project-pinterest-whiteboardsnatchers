'use strict';

angular.module("pinterest").factory("UserFactory", (FBCreds, $q) => {
    let currentUser = null;

    let googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    console.log("hi");
    return firebase
        .auth()
        .signInWithPopup(provider);
    };

    return {googleLogin};
});