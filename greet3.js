var Greetr = function(){
  this.greeting = 'Hello World!';
  this.greet = function(){
    console.log(this.greeting);
  };
};

module.exports = Greetr;