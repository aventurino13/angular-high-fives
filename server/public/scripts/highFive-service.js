myApp.service('HighFive', function() {

  var counter = {
    miche: 0,
    leo: 0,
    tello: 0
  };

  this.counterGetter = function() {
    return counter;
  };

  this.totalCount = function(){
  var allCount = (counter.miche + counter.leo + counter.tello);
  return allCount;
};

  this.counterSetter = function(name) {
    console.log("counter setter running");
    if (name === 'miche') {
      counter.miche++;
  } if (name === 'leo') {
      counter.leo++;
  } if ( name === 'tello'){
    counter.tello++;
  }

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
