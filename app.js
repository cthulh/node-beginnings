// require module
var greeting = require('./greet');

greeting.english();
greeting.spanish();

var greet2 = require('./greet2');
greet2.greet();
greet2.greeting = "Changed!";
// returns the same object as above
var greet2b = require('./greet2');
greet2b.greet();
// workaround is to export a constructor
var grtr = require('./greet3');
var greet3 = new grtr();
greet3.greet();
greet3.greeting = "Changed again!";
var greet4 = new grtr();
greet4.greet();