'use strict';

angular.module("pinterest").factory("UserFactory", (FBCreds, $q) => {
    let currentUser = null;
    const provider = new firebase.auth.GoogleAuthProvider();

    let googleLogin = () => {

    console.log("hi");
    return firebase
        .auth()
        .signInWithPopup(provider);
    };

    let googleLogout = () => {
        return firebase.auth().signOut();
    };

    return {googleLogin , googleLogout};
});