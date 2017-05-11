myApp.service('HighFive', function() {

  var counter = 0;

  this.counterGetter = function() {
    return counter;
  };

  this.counterSetter = function() {
    console.log("counter setter running");
    counter++;
  };

  this.randomNum = function(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  };


  this.highFive = function(skill) {
    var quality = this.randomNum(1, 10);
    if (quality >= skill) {
      return true;
    } else {
      return false;
    } //end else
  }; //end highFive

}); //end get
