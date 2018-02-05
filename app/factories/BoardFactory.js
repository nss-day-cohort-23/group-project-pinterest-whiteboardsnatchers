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

    function getBoards(cuID) {
      return $q((resolve, reject) => {
        $http
          .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${cuID}"`)
          .then(({ data }) => {
            let boardArr = Object.keys(data).map(boardKey => {
              data[boardKey].id = boardKey;
              return data[boardKey];
            });
            resolve(boardArr);

          });
      });
    }

    function deleteBoard(boardId) {
      return $q((resolve, reject) => {
        $http
          .delete(`${FBUrl}/boards/${boardId}.json`)
          .then(() => {
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    }

    return { addNewBoard, getBoards, deleteBoard };
  });