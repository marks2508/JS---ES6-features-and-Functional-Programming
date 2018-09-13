console.log('JS loaded');

// Declaring variables in ES6

// Lexical variable scoping - if a variable is created inside of an if/else
// block, that variable is not scoped to the block:
var topic = 'JavaScipt';
if (topic) {
  var topic = 'React'
  console.log('block', topic);
}
console.log('global', topic);
// above the topic variable inside the if block resets the value of topic
// with the let keyword we can scope a varaible to any code block. Using let
// protects the value of the global variable:
var topic = 'JavaScipt';
if (topic) {
  let topic = 'React';
  console.log('block', topic);
}
console.log('global', topic);
// above the value of topic is not reset outside of the block

// Default parameters are included in ES6, so in the event that a value is not
// provided for the argument, the default value will be uesd:
function logActivity(name="Mark", activity="bunning") {
  console.log(`${name} loves ${activity}`);
}
logActivity();

// Arrow functions
// below is old syntax:
var lordify = function(firstname) {
  return `${firstname} of Canterbury`;
};
console.log(lordify('Dane'));
// below is new es6 arrow function syntax:
var lodify = firstname => `${firstname} of Quohoge`;
console.log(lordify('Peter Griffin'));
// more than one argument should be surrounded by parentheses:
var lordify = (firstname, location) => `${firstname} of ${location}`;
console.log(lordify('Mark', 'Potten End'));
// Arrow functions do not block 'this'. Below example shows that this becomes
// something else in the setTimeout callback - not the Tahoe object
var tahoe = {
  resorts: ['Malta', 'Italy', 'Spain'],
  print: function(delay=200) {
    setTimeout(function() {
      console.log(this.resorts.join(','));
    }, delay);
  }
};
tahoe.print();
// its trying to use the .join method on what this is, which here is the window
// object alternatively we can use arrow function syntax to protect the scope
// of this
var tahoe = {
  resorts: ['Malta', 'Italy', 'Spain'],
  print: function(delay=200) {
    setTimeout(() => {
      console.log(this.resorts.join(','));
    }, delay);
  }
};
tahoe.print();

// ES6 Objects and Arrays
// Destructuring assignment
// The Destructuring assignment allows you to locally scope fields within an
//  obect and to delcare which values will be used: Below, we have an object
// with 4 keys, but we only want to use the values of two, we can scope
// bread and meat to be used locally
var sandwich = {
  bread: 'cibatta',
  meat: 'tuna',
  cheese: 'swiss',
  toppings: ['lettuce', 'tomato', 'mustard']
};
var {bread, meat} = sandwich;
console.log(bread, meat);
// the code pulls bread and meat out of the object and creates local variables
// for them. Also, the bread and meat variables can be changed:
var {bread, meat} = sandwich;
bread = 'garlic';
meat = 'turkey';
console.log(bread);
console.log(meat);
// but note:
console.log(sandwich.bread, sandwich.meat);
// we can also destructure incoming function arguments
var lordify = regularPerson => {
  console.log(`${regularPerson.firstname} of Canterbury`);
};
var regularPerson = {
  firstname: 'Bill',
  lastname: 'Williams'
};
lordify(regularPerson);
// instead of using dot notation syntax to dig into objects, we can destructure
// the values that we need out of regularPerson:
var lordify = ({firstname}) => {
  console.log(`${firstname} of Canterbury`);
}
lordify(regularPerson)
// values can also be destructured from arrays. Below we assign the first value
// of an array to a variable name
var [firstResort] = ['Kirkwood', 'squab', 'alpine'];
console.log(firstResort);
// we can also pass over unwanted values with list matching, using commas
var [,,thirdResort] = ['Kirkwood', 'squab', 'alpine'];
console.log(thirdResort);

// Object Literal Enhancement
// OLE is the opposite of destructuring. It is the process of restructuring or
// putting back together. With OLE we can grab variables from the global scope
// and turn them into an object
var name = 'Tallac';
var elevation = 9738;
var funHike = {name,elevation};
console.log(funHike);
// name and elevation are now keys of the funHike object
// we can also create object methods with the OLE or restructuring:
var name = 'Tallac';
var elevation = 9738;
var print = function() {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};
var funHike = {name, elevation, print};
funHike.print();
// in the above we used this to access the object keys
// when defining object methods, it is not longer necessary to use the function
// keyword:
// const skier = {
//   name,
//   sound,
//   powderYell() {
//     let yell = this.sound.toUpperCase();
//     console.log(`${yell} ${yell} ${yell}!!!`);
//   },
//   speed(mph) {
//     this.speed = mph;
//     console.log('speed:', mph);
//   }
// };
// Object Literal Enhancement allows us to pull global variables into Objects
//  and reduces typing by making the function keyword unnecessary

// The Spread Operator
// the spread operator is three dots (...) that perform several different tasks
// we can combine contents of an array:
var peaks = ['Nevis', 'Kilamanjiro', 'Rose'];
var canyons = ['Ward', 'Blackwood'];
var tahoe2 = [...peaks, ...canyons];
console.log(tahoe2.join(', '));
// if we want the last item in the array we could use Array.reverse method:
var peaks = ['Nevis', 'Everst', 'K2'];
var [last] = peaks.reverse();
console.log(last);
console.log(peaks.join(', '));
// the reverse function has actually altered or mutated the array, but with the
// spread operator we don't have to mutate the original array, we can create a
// copy of the array and then reverse interval
var peaks = ['Nevis', 'Everest', 'K2'];
var [last] = [...peaks].reverse();
console.log(last);
console.log(peaks.join(', '));
// since we used the spread operator to copy the array, the peaks array is still
// intact and can be used later in its original form
// the spread operator can also be used to get some, or the rest, of the items
// in the array:
var lakes = ['Donner', 'Marlette', 'Fallen leaf', 'cascade'];
var [first, ...rest] = lakes;
console.log(rest.join(', '));
// we can also use the spread operator to collect function arguments as an array.
// Here we build a function that takes in n argumnets using the spread Operator
// and then use3s those arguments to print some console messages
function directions(...args) {
  var [start, ...remaining] = args;
  var [finish, ...stops] = remaining.reverse();
  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
}
directions(
  'Truckee',
  'Taho City',
  'Sunnyside',
  'Homewood',
  'Tahoma'
);
// the directions function takes in the arguments using the spread operator. the
// number of stops is the length of the arguments array minus the finish stop.
// this provides incredible flexability because we could use the directions
// function to handle any number of stops
// The spread operator can also be used for objects. Using the spread operator
// with objects is similiar to using it with arrays:
var morning = {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly'
};
var dinner = 'mac and cheese';
var backpackingMeals = {
  ...morning,
  dinner
};
console.log(backpackingMeals);
// ES6 class declaration
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`Getting to ${this.destination} will take ${this.length} days.`);
  }
}
// once you've created the class, you can create a new instance of the class
// using the new keyword. then you call the custom method on the class
const trip = new Vacation('Malta', 18);
console.log(trip.print());
// now that a class object has been created you can use it as many times as you'd
// like to create new vacation instances. Classes can also be extended. When a
// class is extended, the subclass inherits the properties and methods of the
// superclass. These properties and methods can be manipulated from here, but
// as a default, all will be inherited. You can also use Vacation as an abstract
// class to create different types of vacations. For instance, an Expedition can
// extend the vacation class to include say gear:
class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(' and your ')}`);
  }
}
// thats simple inheritance: the subclass inherits the properties of the superclass.
// By calling the printDetails method of Vacation, we can append some new content
// onto what is printed in the printDetails method of Expedition. Creating a new
// instance works the exact same way - create a variable and use the new keyword:
const trip2 = new Expedition('Everest', 3, ['sunglasses', 'prayer flags', 'camera']);
trip2.print();
// using a class still means that you are using JavaScipt's prototypal inheritence
// log Vacation.prototype and you'll notice the constructor and printDetails on
// the prototype
console.log(Vacation.prototype);
