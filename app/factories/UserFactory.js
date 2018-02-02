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

  function isLoggedIn() {
    return $q((resolve, reject) => {
      console.log("firing onAuthStateChanged");
      firebase.auth().onAuthStateChanged((user) => {
        console.log("onAuthStateChanged finished");
        if (user) {
          console.log("user", user);
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