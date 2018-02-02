'use strict';

angular.module('pinterest').factory('PinFactory', (FBUrl, $q, $http, $routeParams) => {


  function addNewPin(pin) {
    return $q((resolve, reject) => {
      $http
        .post(`${FBUrl}pins.json`,
        JSON.stringify(pin))
        .then(pinData => {
          console.log(pinData, 'Posted New Pin');
          resolve(pinData.config.data);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

    function getBoardPins(){
      console.log($routeParams.id, 'rps');
      return $q((resolve, reject )=>{
        $http
        .get(`${FBUrl}pins.json?orderBy="BoardId"&equalTo="${$routeParams.id}"`)
        .then (({data})=>{
          console.log('pins', data);
          let pinArr = Object.keys(data).map(pinKey =>{
            data[pinKey].id = pinKey;
            return data[pinKey];
          });
          resolve(pinArr);
        });
      });
    }

    function deletePin(pinId){
      return $q((resolve, reject)=>{
        $http
        .delete(`${FBUrl}pins/${pinId}.json`)
        .then((data) =>{
          resolve(data);
        })
        .catch((err)=>{
          reject(err);
        });
      });
    }

    return{addNewPin, getBoardPins, deletePin};
});
