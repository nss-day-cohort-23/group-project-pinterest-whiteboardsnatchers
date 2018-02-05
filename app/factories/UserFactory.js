'use strict';

angular.module("pinterest").factory("UserFactory", (FBCreds, $q) => {
  let currentUser = null;
  const provider = new firebase.auth.GoogleAuthProvider();

  let googleLogin = () => {
    return firebase
      .auth()
      .signInWithPopup(provider);
  };

  let googleLogout = () => {
    return firebase.auth().signOut();
  };

  function isLoggedIn() {
    return $q((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          currentUser = user.uid;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }


  function getCurrentUser() {
    return currentUser;
  }


  return {
    googleLogin,
    googleLogout,
    isLoggedIn,
    getCurrentUser
  };
});