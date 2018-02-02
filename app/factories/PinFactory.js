'use strict';

angular.module('pinterest').factory('PinFactory', (FBUrl, $q, $http) => {

    function addNewPin(pin){
      return $q((resolve, reject)=>{
        $http
          .get(`$FBURL/pins.json`, 
        JSON.stringigy(pin))
        .then(pinData =>{
          console.log(pinData, 'Posted New Pin');
          resolve(pinData.data);
        })
        .catch(err =>{
          console.log(err);
        });
      });
    }

});
