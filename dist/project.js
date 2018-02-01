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


