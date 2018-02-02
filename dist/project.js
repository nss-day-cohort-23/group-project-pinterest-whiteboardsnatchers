//====================================================================================================================
// Module:    userNotes
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
  .config($routeProvider => {
      $routeProvider
          .when("/", {
              templateUrl: "partials/mushrooms.html",
              controller: "MushroomController"
          })
          .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/mushroomController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("MushroomController", function($scope, MushroomFactory) {

      MushroomFactory.getMushrooms()
      .then( (mushroomData) => {
          console.log('mushroomData',mushroomData);
          // $scope.mushroomList = mushroomData.data.mushrooms;
          $scope.mushroomList = Object.values(mushroomData.data); //takes all the properties(objects) in your objects and makes it an array of objects
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/mushroomFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("MushroomFactory", function($q, $http) {
      let getMushrooms = () => {
          return $q( (resolve, reject) => {
              $http
              .get("https://fir-101-68ad0.firebaseio.com/mushrooms.json")
              .then ( (mushrooms) => {
                  resolve(mushrooms);
              })
              .catch( (err) => {
                  reject(err);
              });
          });
      };

      return { getMushrooms };
  });

}) (angular.module ('userNotes', ['ngRoute']));



//====================================================================================================================
// Module:    userNotes
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
  .config($routeProvider => {
      $routeProvider
          .when("/", {
              templateUrl: "partials/mushrooms.html",
              controller: "MushroomController"
          })
          .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("MushroomController", function($scope, MushroomFactory) {

      MushroomFactory.getMushrooms()
      .then( (mushroomData) => {
          console.log('mushroomData',mushroomData);
          // $scope.mushroomList = mushroomData.data.mushrooms;
          $scope.mushroomList = Object.values(mushroomData.data); //takes all the properties(objects) in your objects and makes it an array of objects
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/mushroomFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("MushroomFactory", function($q, $http) {
      let getMushrooms = () => {
          return $q( (resolve, reject) => {
              $http
              .get("https://fir-101-68ad0.firebaseio.com/mushrooms.json")
              .then ( (mushrooms) => {
                  resolve(mushrooms);
              })
              .catch( (err) => {
                  reject(err);
              });
          });
      };

      return { getMushrooms };
  });

}) (angular.module ('userNotes', ['ngRoute']));



//====================================================================================================================
// Module:    userNotes
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
  .config($routeProvider => {
      $routeProvider
          .when("/", {
              templateUrl: "partials/mushrooms.html",
              controller: "MushroomController"
          })
          .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("MushroomController", function($scope, MushroomFactory) {

      MushroomFactory.getMushrooms()
      .then( (mushroomData) => {
          console.log('mushroomData',mushroomData);
          // $scope.mushroomList = mushroomData.data.mushrooms;
          $scope.mushroomList = Object.values(mushroomData.data); //takes all the properties(objects) in your objects and makes it an array of objects
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("MushroomFactory", function($q, $http) {
      let getMushrooms = () => {
          return $q( (resolve, reject) => {
              $http
              .get("https://fir-101-68ad0.firebaseio.com/mushrooms.json")
              .then ( (mushrooms) => {
                  resolve(mushrooms);
              })
              .catch( (err) => {
                  reject(err);
              });
          });
      };

      return { getMushrooms };
  });

}) (angular.module ('userNotes', ['ngRoute']));



//====================================================================================================================
// Module:    userNotes
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
  .config($routeProvider => {
      $routeProvider
          .when("/", {
              templateUrl: "partials/mushrooms.html",
              controller: "MushroomController"
          })
          .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("MushroomController", function($scope, MushroomFactory) {

      MushroomFactory.getMushrooms()
      .then( (mushroomData) => {
          console.log('mushroomData',mushroomData);
          // $scope.mushroomList = mushroomData.data.mushrooms;
          $scope.mushroomList = Object.values(mushroomData.data); //takes all the properties(objects) in your objects and makes it an array of objects
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("MushroomFactory", function($q, $http) {
      let getMushrooms = () => {
          return $q( (resolve, reject) => {
              $http
              .get("https://fir-101-68ad0.firebaseio.com/mushrooms.json")
              .then ( (mushrooms) => {
                  resolve(mushrooms);
              })
              .catch( (err) => {
                  reject(err);
              });
          });
      };

      return { getMushrooms };
  });

}) (angular.module ('userNotes', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
  .config($routeProvider => {
      $routeProvider
          .when("/", {
              templateUrl: "partials/mushrooms.html",
              controller: "MushroomController"
          })
          .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {

  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
  .config($routeProvider => {
      $routeProvider
          .when("/", {
              templateUrl: "partials/mushrooms.html",
              controller: "MushroomController"
          })
          .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", function($q, $http) {

  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  // .config($routeProvider => {
  //     $routeProvider
  //         .when("/", {
  //             templateUrl: "",
  //             controller: 
  //         })
  //         .otherwise("/");
  // });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", function($q, $http) {

  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  // .config($routeProvider => {
  //     $routeProvider
  //         .when("/", {
  //             templateUrl: "",
  //             controller: 
  //         })
  //         .otherwise("/");
  // });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", function($q, $http) {

  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  // .config($routeProvider => {
  //     $routeProvider
  //         .when("/", {
  //             templateUrl: "",
  //             controller: 
  //         })
  //         .otherwise("/");
  // });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", function($q, $http) {

  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  // .config($routeProvider => {
  //     $routeProvider
  //         .when("/", {
  //             templateUrl: "",
  //             controller: 
  //         })
  //         .otherwise("/");
  // });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserController.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", function($q, $http) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtr"
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", function($q, $http) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", function($q, $http) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {
      $scope.message = "This is working";
      console.log("This is working");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", function($q, $http) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope) {
      $scope.message = "This is working";
      console.log("This is working");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", function($q, $http) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope) {
      $scope.message = "This is working";
      console.log("This is working");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
      let authObj = {};
      let currentUser = null;

      authObj.login = () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      return firebase
          .auth()
          .signInWithPopup(provider);
      };


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {
      $scope.message = "This is working";
      console.log("This is working");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
      let authObj = {};
      let currentUser = null;

      authObj.login = () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      return firebase
          .auth()
          .signInWithPopup(provider);
      };


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {
      $scope.message = "This is working";
      console.log("This is working");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
      let authObj = {};
      let currentUser = null;

      authObj.login = () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      return firebase
          .auth()
          .signInWithPopup(provider);
      };

      return authObj;
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {
      $scope.message = "This is working";
      console.log("This is working");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
      let authObj = {};
      let currentUser = null;

      authObj.login = () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      console.log("hi");
      return firebase
          .auth()
          .signInWithPopup(provider);
      };

      return authObj;
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {
      $scope.message = "This is working";
      console.log("This is working");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory) {
      $scope.message = "This is working";
      console.log("This is working");

      $scope.login = () => {
          UserFactory.googleLogin()
              .then((user) => {
                  console.log("Is this working?");
              });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) =>
    new Promise((resolve, reject) => {
      AuthFactory.isAuthenticated().then(userBool => {
        console.log("user???", userBool);
        if (userBool) {
          console.log("Authenticated user. Go ahead");
          resolve();
        } else {
          console.log("Not Authenticated user. Go away");
          reject();
        }
      });
    });

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isAuthenticated().then(userBool => {
        console.log("user???", userBool);
        if (userBool) {
          console.log("Authenticated user. Go ahead");
          resolve();
        } else {
          console.log("Not Authenticated user. Go away");
          reject();
        }
      });
    });
  };
  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(userBool => {
        console.log("user???", userBool);
        if (userBool) {
          console.log("Authenticated user. Go ahead");
          resolve();
        } else {
          console.log("Not Authenticated user. Go away");
          reject();
        }
      });
    });
  };
  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
        console.log("user???", bool);
        if (bool) {
          console.log("Authenticated user. Go ahead");
          resolve();
        } else {
          console.log("Not Authenticated user. Go away");
          reject();
        }
      });
    });
  };
  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
        console.log("user???", bool);
        if (bool) {
          console.log("Logged in user. Go ahead");
          resolve();
        } else {
          console.log("Not Authenticated user. Go away");
          reject();
        }
      });
    });
  };
  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
        console.log("user???", bool);
        if (bool) {
          console.log("Logged in . Go ahead");
          resolve();
        } else {
          console.log("Not Authenticated user. Go away");
          reject();
        }
      });
    });
  };
  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
        console.log("user???", bool);
        if (bool) {
          console.log("Logged in . Go ahead");
          resolve();
        } else {
          console.log("Not Logged IN user. Go away");
          reject();
        }
      });
    });
  };
  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
      $scope.message = "This is working";
      console.log("This is working");

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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
              resolve: { isIn }
          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
              resolve: { isIn }
          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
              // resolve: { isIn }
          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              // resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
              // resolve: { isIn }
          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';


  let isIn = (AuthFactory) => {
    new Promise((resolve, reject) => {
      AuthFactory.isLoggedIn().then(bool => {
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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              // resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
              // resolve: { isIn }
          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              // resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
              // resolve: { isIn }
          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              // resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
              // resolve: { isIn }
          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
              resolve: { isIn }
          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .when('/BoardList',{
              templateUrl: 'partials/BoardList.html',
              controller: 'BoardListCtrl',
              resolve: { isIn }
          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })

          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';
          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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

    return {
      googleLogin,
      googleLogout,
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
      isLoggedIn
    };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
              console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boardlist', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boards', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boards', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boards', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';


          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boards', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';

          BoardFactory.getBoards()
          .then((data)=>{
              $scope.boards = data;
              console.log('boards', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';

          BoardFactory.getBoards()
          .then((data)=>{
            let boards = data;
              $scope.boards = data;
              console.log('boards', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';

          BoardFactory.getBoards()
          .then((data)=>{
            let boards = data;
              console.log('boards', $scope.boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';

          BoardFactory.getBoards()
          .then((data)=>{
            let boards = data;
              console.log('boards', boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';

          BoardFactory.getBoards()
          .then((data)=>{
            console.log(data, 'data');
            let boards = data;
              console.log('boards', boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));



//====================================================================================================================
// Module:    pinterest
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

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
  module
  .constant("FBUrl", "https://wbss-38e4b.firebaseio.com/")
  .config($routeProvider => {
      $routeProvider
          .when('/login', {
              templateUrl: "partials/user.html",
              controller: "UserCtrl"
          })
          .when('/BoardList',{
            templateUrl: 'partials/BoardList.html',
            controller: 'BoardListCtrl',
            resolve: { isIn }
        })
          .when('/newBoard',{
              templateUrl: 'partials/newBoard.html',
              controller: 'NewBoardCtrl',
              resolve: { isIn }

          })
          .otherwise("/login");
  })
  .run(FBCreds => {
      let creds = FBCreds;
      let authConfig = {
          apiKey: creds.apiKey,
          authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
  }); 
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BoardListCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('BoardListCtrl', function ($scope, BoardFactory) {
          $scope.sup = 'sup';

          BoardFactory.getBoards()
          .then((data)=>{
            console.log(data, 'data');
            let boards = data;
              console.log('boards', boards);

          });
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewBoardCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .controller('NewBoardCtrl', function ($scope, BoardFactory, $window) {
          $scope.sup = 'sup';
          $scope.board = {
              title: ''
          };
          $scope.CreateBoard = () => {
              console.log('boardTitle', $scope.board);
              $scope.board.uid  = firebase.auth().currentUser.uid;
              BoardFactory.addNewBoard($scope.board)
                  .then((data) => {
                      console.log('newboard', data);
                      $window.location.href = '#!/BoardList.html';
                  });
          };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("UserCtrl", function($scope, UserFactory, $window) {
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
          });
      };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/BoardFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
      .factory('BoardFactory', (FBUrl, $q, $http, UserFactory) => {

          function addNewBoard(boardTitle) {
              return $q((resolve, reject) => {
                  $http
                      .post(`${FBUrl}/boards.json`, JSON.stringify(boardTitle))
                      .then(data => {
                          console.log('new board added', data.data);
                          resolve(data.data);
                      });
              });
          }

          function getBoards() {
            UserFactory.getCurrentUser();
              // console.log(firebase.auth().currentUser, 'current user');
              return $q((resolve, reject) => {
                  $http
                      .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${UserFactory.getCurrentUser()}"`)
                      .then(({ data }) => {
                          let boardArr = Object.keys(data).map(boardKey => {
                              console.log('taskKey', boardKey);
                              data[boardKey].id = boardKey;
                              return data[boardKey];
                          });
                          resolve (boardArr);

                      });
              });
          }
          return { addNewBoard, getBoards };
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/UserFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("UserFactory", (FBCreds, $q) => {
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/Fb-Creds.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.constant("FBCreds", {
      apiKey: `AIzaSyAHPTTv2D8IDy_earZ04qSAyUojS1JNzrw`,
      authDomain: `wbss-38e4b.firebaseapp.com`
  });

}) (angular.module ('pinterest', ['ngRoute']));


