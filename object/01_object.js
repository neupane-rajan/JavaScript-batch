// creating object

// singleton object is an object that can only have one instance. It is used to create a single instance of a class and provide a global point of access to that instance. In JavaScript, we can create a singleton object using an immediately invoked function expression (IIFE) or by using a class with a static method.

// Object.create()

// object literal

const mySym = Symbol("key1");

const User = {
  name: "Rajan",
  "full name": "Rajan Neupane",
  [mySym]: "myvalue",
  age: "18",
  address: "kailali",
  email: "rajan@niijo.com",
  language: "javascript",
};

// accessing value
// method one
// console.log(User.email);

// method two
// console.log(User["email"]); // while excessing value using square notation we have  to wrap the key in quotes
// console.log(User["full name"]); // if we have spac in key we can only access it using  square notation
// console.log(User[mySym]); // while accessing value using symbol we have to use square notation and pass the symbol as key

const key = "email";
// console.log(User[key]); // we can also access value using variable as key

// modiying value
User.address = "kathmandu";
// console.log(User);

// freezing object
// Object.freeze(User); // it will prevent any modification to the object
// User.name = "hidden"; // it will not change the value of name property because the object is frozen

User.greeting = function () {
  console.log("hello this is random guy");
};
User.greetingTwo = function () {
  console.log(`hello this is ${this.name}`);
};
console.log(User.greeting());
console.log(User.greetingTwo());
