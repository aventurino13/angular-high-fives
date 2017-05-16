var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    template:'<div> PICK YOUR APPONENT</div>',
    controller: 'DefaultController as deftCtrl'
  }).when('/michelangelo', {
    templateUrl: 'views/miche.html',
    controller: 'Miche as Ctrl'
  }).when('/donatello', {
    templateUrl: 'views/tello.html',
    controller: 'Tello as Ctrl'
  }).when('/leonardo', {
    templateUrl: 'views/leo.html',
    controller: 'Leo as Ctrl'
    }).otherwise('/');

    $locationProvider.html5Mode(true);

});//end ang-route config

myApp.controller('DefaultController', function(mCounter, lCounter, tCounter) {
  console.log('DefaultController loaded');
  var vm = this;

  vm.allCount = function (){
    vm.mcount = mCounter.counterGetter();
    vm.lcount = lCounter.counterGetter();
    vm.tcount = tCounter.counterGetter();
  };
});

// vm.newHighFive = function( min, max ) {
//   vm.count = HighFive.counterGetter();
//   vm.skill = HighFive.randomNum(min, max);
//   return(vm.skill);
// };
//
// vm.highFive = function(skill) {
//   var success = HighFive.highFive(skill);
//   if (success) {
//     HighFive.counterSetter();
//   }
//   vm.count = HighFive.counterGetter();
// }; //end high five function
// });


myApp.controller('Miche', function(HighFive, mCounter) {
  console.log('NG');

  var vm = this;

  vm.newHighFiveM = function() {
    vm.count = mCounter.counterGetter();
    vm.skill = HighFive.randomNum(1, 10);
    console.log(vm.skill);
  }; //end new high five function

  vm.highFiveM = function(skill) {
    var success = HighFive.highFive(skill);
    if (success) {
      mCounter.counterSetter();
    }
   vm.count = mCounter.counterGetter();
  };
  //end high five function
}); //end controller

myApp.controller('Tello', function(HighFive, tCounter) {
  console.log('NG');

  var vm = this;

  vm.newHighFiveT = function() {
    vm.tcount = tCounter.counterGetter();
    vm.tskill = HighFive.randomNum(4, 10);
    console.log(vm.tskill);
  }; //end new high five function

  vm.highFiveT = function(skill) {
    var success = HighFive.highFive(skill);
    if (success) {
      tCounter.counterSetter();
    }
    vm.tcount = tCounter.counterGetter();
  }; //end high five function
}); //end controller

myApp.controller('Leo', function(HighFive, lCounter) {
  console.log('NG');

  var vm = this;

  vm.newHighFiveL = function() {
    vm.lcount = lCounter.counterGetter();
    vm.lskill = HighFive.randomNum(6, 10);
    console.log(vm.lskill);
  }; //end new high five function

  vm.highFiveL = function(skill) {
    var success = HighFive.highFive(skill);
    if (success) {
      lCounter.counterSetter();
    }
    vm.lcount = lCounter.counterGetter();
  }; //end high five function
}); //end controller
