/* data types define what type of value a variable holds.
there are two types of datatypes:

# Primitive Data Types(Basic / Immutable)-> we cannot change the 

Primitive data types are basic data types that store a single value directly.
Key Points:

->Store actual value
-> call by value
->Immutable (cannot be changed)
->Compared by value


#Non-Primitive Data Type (Definition/reference)

Non-primitive data types store a reference (memory address) instead of the actual value.
Key Points:
->Store reference (address in memory), not actual value
->Mutable (can be changed)
->Compared by reference
*/

// Primitive
let num = 10; // number
let scoreValue = 100.3;
/* 
Infinity
-Infinity
NaN
*/

let name = "Rajan"; // string (anythings return inside "" or ' ' is string)
let isTrue = true; // boolean (true or false)
let x = null; // null but it return object(javascript bug)
let y; // undefined

let big = 12345678901234567890n; //BigInt very large number
let id = Symbol("unique");

// Reference(Non primitive)
// object
let user = {
  name: "Savage",
  age: 20,
};

// array
let arr = [1, 2, 3, 4];

// function
const myFunction = function () {
  console.log("hello world");
};
// or
function greet() {
  console.log("Hello");
}

// type of is used for check what data type is inside variables

console.log(typeof big);
console.log(typeof NaN); //number
