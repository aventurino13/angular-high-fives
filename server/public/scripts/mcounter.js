myApp.service('mCounter', function() {

  var counter = 0;

  this.counterGetter = function() {
    return counter;
  };

  this.counterSetter = function() {
    console.log("counter setter running");
    counter++;
  };

});
