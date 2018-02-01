'use strict';

angular
    .module('pinterest')
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