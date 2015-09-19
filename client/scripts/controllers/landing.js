'use strict';

angular.module('BoilerPlate')
  .controller('Landing', Landing);

function Landing($scope, $rootScope, $state, $timeout) {

  $scope.init = function() {	
  	console.log('You Made It! Welcome To BoilerPlate');
  };

  Landing.$inject['$scope', '$rootScope', '$state', '$timeout'];
}
