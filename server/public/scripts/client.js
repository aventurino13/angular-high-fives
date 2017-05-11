var myApp = angular.module('myApp', []);

myApp.controller('HighFiving', function(HighFive) {
  console.log('NG');

  var vm = this;

  vm.newHighFive = function() {
    vm.count = HighFive.counterGetter();
    vm.skill = HighFive.randomNum(1, 10);
    console.log(vm.skill);
  }; //end new high five function

  vm.highFive = function(skill) {
    var success = HighFive.highFive(skill);
    if (success) {
      HighFive.counterSetter();
    }
    vm.count = HighFive.counterGetter();
  }; //end high five function

}); //end controller
