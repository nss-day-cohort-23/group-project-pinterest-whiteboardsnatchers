'use strict';

angular
    .module('pinterest')
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