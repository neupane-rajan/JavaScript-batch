// array
// creating empty array
// const myArray = []
// javascript array are resizable and can contain mix of different datatypes
//javascript array are zero-indexed(index start with zero)
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
const myArray = [0, 1, 2, 3, 4, 5];

// accessing array elements
first_element = myArray[0];
// console.log(first_element);

const language = ["Nepali", "English", "Hindi", "japnese", "Mandarin"];

// const myArr = new Array(1, 2, 3, 4, 5);

// Array methods
// push: add new value at the end of the array
// myArray.push(6);
// myArray.push(8);

// pop : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// myArray.pop();

// unshift and shift: unshift adds new value at the beginning of the array and shift removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// myArray.unshift(9)
// myArray.shift()

// includes: check if the array contains a specific value and returns true or false accordingly
// console.log(myArray.includes(3)); // true
// console.log(myArray.includes(10)); // false

// indexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present.
// console.log(myArray.indexOf(3)); // 3
// console.log(myArray.indexOf(10)); // -1

// join : creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// const newArr = myArray.join();
// console.log(typeof newArr);
// console.log("before using slice:",myArray);
const newArr1 = myArray.slice(1, 3); // slice(start, end) end is exclusive
// console.log(newArr1);
// console.log("after using slice",myArray);

console.log("before using splice:", myArray);

const newArr2 = myArray.splice(1, 3); // splice(start, deleteCount) it modifies the original array and returns the deleted elements.splice returns an array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
console.log(newArr2);
console.log("after using splic:", myArray);
