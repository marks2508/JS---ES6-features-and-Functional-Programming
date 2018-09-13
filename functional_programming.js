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


// Functional Concepts

// Immutability
let color_lawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0
};
// we could build a function that would rate colors and use that function to
// change the rating of the color object:
function rateColor(color,rating) {
  color.rating = rating;
  return color;
}
console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);
// in JS, function arguments are references to the actual data. Setting the color's
// rating like this is bad because it changes or mutates the original color object.
// We can rewrite the rate color function so that it does not harm the original goods
var rateColor = function(color, rating) {
  return Object.assign({}, color, {rating: rating});
};
console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);
// Here we used Object.assign to change the color rating. Object.assign is the copy
// machine; it takes a black object, copies the color to that object and overwrites
// the rating on the copy. Now we can have a newly rated color object without having
// to change the original

// We can rewrite the same function using ES6 arrow function along with ES7 object
// spread operator. This rateColor function uses the spread operator to copy the color
// into a new object and then overwrite its rating:
const rateColor2 = (color, rating) => ({...color, rating });
// this emerging JS version of the rateColor function is exactly the same as the previous
// one. It treats color as an immutable object, does so with less syntax amd looks a
// little bit cleaner. We wrap the returned object in parentheses. With arrow functions
// this is a requried step since the arow can't just point to an objects curly braces

// Consider an array of color names:
let list = [
  { title: 'Red Red' },
  { title: 'Lawn' },
  { title: 'Party Pink'}
];
// We could create a function that will add colors to that arrat using Array.push:
var addColor = function(title, colors) {
  colors.push({title: title});
  return colors;
};
console.log(addColor('Glam Green', list).length);
console.log(list.length);
// However, Array.push is not an immutable function. This addColo function changes
// the original array by adding another field to it. In order to keep the colors
// array immutable, we must use Array.concat instead:
const addColor = (title, array) => array.concat({title});
console.log(addColor('Glam Green', list).length);
console.log(list.length);
