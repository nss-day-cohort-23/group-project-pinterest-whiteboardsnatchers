'use strict';

angular.module('pinterest').factory('PinFactory', (FBUrl, $q, $http) => {

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

  return { addNewPin };

});
