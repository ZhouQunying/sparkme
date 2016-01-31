'use strict';

// class MainController {

//     constructor($http, $scope, scoket) {
//         this.$http = $http;
//         this.main = [];

//         $http.get('http://localhost:9099/main').then(res => {
//             this.main = res.data;
//         })
//     }
// }

// export default angular.module('fullstackApp')
//     .controller('MainController', MainController);

import fullstackApp from '../app';

export default fullstackApp.controller('MainController', ['$scope', '$http', ($scope, $http) => {
        $http.get('http://localhost:9099/main').then(res => {
            $scope.data = res.data;
        })
    }]);