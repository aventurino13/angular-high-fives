myApp.service('HighFive', function(){

  var counter = 0;

  this.counterGetter = function(){
  return counter;
  };

  this.counterSetter = function(){
   console.log("counter setter running");
   counter++;
 };

this.highFive = function (){
  var randomNum = function (max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  var quality = randomNum(1, 10);
  var skill = randomNum(1, 10);
  if ( quality >= skill ) {
   return true;
 } else {
   return false;
 }//end if
};//end highFive

});//end get