console.log('JS loaded');

// JavaScipt supports functional programming because JS functions are first-class
// citizens. This means that functions can do the same thing that variables can do
// In JS, functions can represent data in your application. In ES6, we can write
// functions using arrow function:
const log = message => console.log(message);
log('In JS functions are variables');
// Since functions are variables, we can add them to objects:
const obj = {
  message: 'They can be added to objects like variables',
  log(message) {
    console.log(message);
  }
};
obj.log(obj.message);
// Both of these statements do the same thing, they store a function in a variable
// called log. Additionally, the const keyword was used to declare the second function
// which will prevent it from being overwritten
// We can also add functions to arrays in JS:
const messages = [
  'They can be inserted into arrays',
  message => console.log(message),
  'like variables',
  message => console.log(message)
];
messages[1](messages[0]);
messages[3](messages[2]);

// Functions can be sent to other functions as arguments, just like other variables:
const insideFn = logger => logger('They can be sent to other functions as arguments');
insideFn(message => console.log(message));

// They can also be returned from other functions, just like variables:
var createScream = function(logger) {
  return function(message) {
    logger(message.toUpperCase() + '!!!');
  };
};
const scream = createScream(message => console.log(message));
scream('functions can be returned from other functions');
scream('createScreme returns a function');
scream('scream invokes that returned function');
// The last two examples were of higher-order functions, functions that either
// take or return other Functions
// Using ES6 Syntax, we could descibe the same createScream higher-order function
// with arrows:
const createScream2 = logger => message => logger(message.toUpperCase() + '!!!');
// More than one arrow means that we have a higher-order function
// We can say that JS is a functional language because its functions are first-class
// citizens. This means that functions are data. They can be saved, retrieved, or
// flow through your applications just like variables
