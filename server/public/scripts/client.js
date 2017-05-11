var myApp = angular.module('myApp', []);

myApp.controller('HighFiving', function ( HighFive ){
  console.log('NG');

  function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var vm = this;

  vm.newHighFive = function (){
    vm.count = HighFive.counterGetter();
    vm.skill = randomNum(1,10);
    console.log(vm.skill);
  };

  vm.highFive = function (skill) {
    var success = HighFive.highFive(skill);
      if ( success ) {
       HighFive.counterSetter();
     }
    vm.count = HighFive.counterGetter();
  };

});//end controller
