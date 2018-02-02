

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory, PinFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "All Items",
          url: "#!/items/list"
        },
        {
          name: "Add New Item",
          url: "#!/items/new"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "All Items",
          url: "#!/items/list"
        },
        {
          name: "Add New Item",
          url: "#!/items/new"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/items/list"
        },
        {
          name: "Add New Item",
          url: "#!/items/new"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/boardlist"
        },
        {
          name: "Add New Item",
          url: "#!/items/new"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Item",
          url: "#!/items/new"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Item",
          url: "#!/items/new"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.isActive = viewLocation => viewLocation === $location.path();

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          $scope.$apply($scope.isLoggedIn = true);
          console.log("currentUser logged in?", user.uid);
          console.log("logged in t-f", $scope.isLoggedIn);
        } else {
          $scope.isLoggedIn = false;
          console.log("user logged in?", $scope.isLoggedIn);
          $scope.$apply();
          $window.location.href = "#!/login";
        }
      });

      $scope.navigate = navUrl => {
        console.log("navUrl", navUrl);
        if (navUrl === "#!/logout") {
          UserFactory.logoutUser();
        } else {
          $window.location.href = navUrl;
        }
      };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.isActive = viewLocation => viewLocation === $location.path();

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          $scope.$apply($scope.isLoggedIn = true);
          console.log("currentUser logged in?", user.uid);
          console.log("logged in t-f", $scope.isLoggedIn);
        } else {
          $scope.isLoggedIn = false;
          console.log("user logged in?", $scope.isLoggedIn);
          $scope.$apply();
          $window.location.href = "#!/login";
        }
      });

      $scope.navigate = navUrl => {
        console.log("navUrl", navUrl);
        if (navUrl === "#!/logout") {
          UserFactory.googleLogout();
        } else {
          $window.location.href = navUrl;
        }
      };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [

        {
          name: "Login",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [

        {
          name: "Login/Logout",
          url: "#!/login",
          bang: "!"
        },
        {
          name: "Logout",
          url: "#!/logout"
        },
        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [

        {
          name: "Login/Logout",
          url: "#!/login",
          bang: "!"
        },

        {
          name: "Board List",
          url: "#!/Boardlist"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
    .controller("NavCtrl", function($scope, $location, $rootScope, $window, UserFactory, BoardFactory) {

      $scope.navItems = [

        {
          name: "Login/Logout",
          url: "#!/login",
          bang: "!"
        },

        {
          name: "Board List",
          url: "#!/BoardList"
        },
        {
          name: "Add New Board",
          url: "#!/newBoard"
        }
      ];

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


