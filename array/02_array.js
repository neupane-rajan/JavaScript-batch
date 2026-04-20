const language = ["Nepali", "Hindi", "English", "mandarin"];
const programming_language = ["python", "JavaScript", "java", "c programming"];

// push method adds new value at the end of the array
// language.push(programming_language)
// console.log(language);
// console.log(language[4][1]);

// concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const newArr = language.concat(programming_language);
// console.log(newArr);

// main difference between push and concat is that push modifies the original array while concat does not modify the original array but instead returns a new array.

// spread operator is used to expand an iterable (like an array) into individual elements. It can be used to create a new array by combining existing arrays or to pass elements of an array as arguments to a function.
// const newArr2 = [...language, ...programming_language];
// console.log(newArr2);
// many senior developer use spread operator instead of concat method to merge arrays because it is more concise and easier to read. Additionally, spread operator can be used in more contexts than concat method, such as when passing arguments to a function or when creating a new array with additional elements.

const nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, [8, 9]],
  [10, 11, 12],
];
// flat remove the nested array and return new single array. It takes an optional argument that specifies the depth level to flatten the array. If no argument is provided, it defaults to 1, meaning it will only flatten one level of nesting.
const newArr = nestedArr.flat(Infinity); // infinity is used to flatten the array to any depth level.
// console.log(newArr);

// we use this many time while data scrapping

// console.log(Array.isArray(Array.isArray("Rajan")));

// console.log(Array.from("Rajan"));
// console.log(Array.from({ name: "Rajan" })); // it will return empty array

let score1 = 100;
let score2 = 122;
let score3 = 123;
console.log(Array.of(score1, score2, score3)); // return new array from sets of new elements
