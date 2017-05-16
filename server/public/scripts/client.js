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

myApp.controller('DefaultController', function(HighFive) {
  console.log('DefaultController loaded');
  // var vm = this;
  //
  // vm.allCount = function (){
  //   vm.count = HighFive.counterGetter();
  // };
});


myApp.controller('Miche', function(HighFive) {
  console.log('NG');

  var vm = this;

  vm.newHighFive = function() {
    vm.allCount = HighFive.counterGetter();
    vm.count = vm.allCount.miche;
    vm.totalCount = HighFive.totalCount();
    vm.skill = HighFive.randomNum(1, 10);
    console.log(vm.skill);
  }; //end new high five function

  vm.highFive = function(skill) {
    var success = HighFive.highFive(skill);
    if (success) {
      HighFive.counterSetter('miche');
    }
    vm.allCount = HighFive.counterGetter();
    vm.count = vm.allCount.miche;
    vm.totalCount = HighFive.totalCount();
  };
  //end high five function
}); //end controller


myApp.controller('Tello', function(HighFive) {
  console.log('NG');

  var vm = this;

  vm.newHighFive = function() {
    vm.allCount = HighFive.counterGetter();
    vm.count = vm.allCount.tello;
    vm.totalCount = HighFive.totalCount();
    vm.skill = HighFive.randomNum(4, 10);
    console.log(vm.skill);
  }; //end new high five function

  vm.highFive = function(skill) {
    var success = HighFive.highFive(skill);
    if (success) {
      HighFive.counterSetter('tello');
    }
    vm.allCount = HighFive.counterGetter();
    vm.count = vm.allCount.tello;
    vm.totalCount = HighFive.totalCount();
  };
  //end high five function
}); //end controller


myApp.controller('Leo', function(HighFive) {
  console.log('NG');

  var vm = this;

  vm.newHighFive = function() {
    vm.allCount = HighFive.counterGetter();
    vm.count = vm.allCount.leo;
    vm.totalCount = HighFive.totalCount();
    vm.skill = HighFive.randomNum(6, 10);
    console.log(vm.skill);
  }; //end new high five function

  vm.highFive = function(skill) {
    var success = HighFive.highFive(skill);
    if (success) {
      HighFive.counterSetter('leo');
    }
    vm.allCount = HighFive.counterGetter();
    vm.count = vm.allCount.leo;
    vm.totalCount = HighFive.totalCount();
  };
  //end high five function
}); //end controller
