// declearing string
// empty string
// character in string have their position number called string. each character have on position called index. index start from 0 .
const gameName = new String();
const emptyString = ""; // both are the way to create empty string
// console.log(gameName);
const name = "rajan";
const repoCount = 14;
// console.log(name + repoCount + "Value");

// string interpolation is same as f-string in python which is used to print variable inside string without using + operator or comma operator
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const myName = new String("rajanneupane");
// console.log(myName[0]);
// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(-1)); // used to get a  character from a string at a specific index or position .if we put -1 inside charAt() we got nothing . but if we put any empty string or any string value inside charAt() we always get first character.

// console.log(myName.indexOf("n")); // used to find the index or postion of character or substring. if it not found character then we will get -1 as value

// #slice
let str1 = "JavaScript";

// slice(start, end) → get part of string
console.log(str1.slice(-1)); // "t" → takes last character

// negative number → count from the end
console.log(str1.slice(-6)); // "Script" → last 6 characters

// start > end → gives empty string
console.log(str1.slice(5, 2)); // ""

// substring

let str2 = "JavaScript";

// substring(start, end) → get part of string
// console.log(str2.substring(0, 4)); // "Java"

// negative → becomes 0 automatically
// console.log(str2.substring(-3, 4)); // "Java"

// start > end → it swaps the numbers automatically
// console.log(str2.substring(5, 2)); // "vaS"

console.log(str1.trim());
// trim is used to remove whitespace from both side of string

const url = "https://github.com/neupane-rajan";
console.log(url.replace("r", "R"));
console.log(url.includes("rajan"));
//check   if any character or substring present in string or not and return either true or false

/*split 
syntax:
split(separator);
split(separator, limit);
*/
console.log(url.split("-"));
