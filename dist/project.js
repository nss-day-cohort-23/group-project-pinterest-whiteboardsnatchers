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


