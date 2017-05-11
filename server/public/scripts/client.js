var myApp = angular.module('myApp', []);

myApp.controller('HighFiving', function ( $http, HighFive ){
  console.log('NG');

  var vm = this;

  vm.count = HighFive.counterGetter();

  vm.highFive = function () {
    var success = HighFive.highFive();
    if ( success === true){
      HighFive.counterSetter();
      }
    vm.count = HighFive.counterGetter();
  };

});//end controller
