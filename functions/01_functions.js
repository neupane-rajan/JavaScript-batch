// syntax of function declaration
function functionName(parameters) {
  // code to be executed
}
function greeting() {
  console.log("hello this is javascript course");
}
// calling function
// greeting();

// function to add two numbers

// function sumTwo(num1, num2) {
//here (num1,num2) are parameters

//   console.log(num1 + num2);
// }
// sumTwo(); // if we wont give any argument funciton will return NaN
// sumTwo(3, 4);
// const result = sumTwo(3, 5);
// console.log(result); // here we got undefined because we are not returning any value from the function. To return value from function we have to use return keyword.

function sumTwo(num1, num2) {
  return num1 + num2;
  //  anything after return statement will not be executed because return statement will exit the function and return the value to the caller.
  console.log("this will not be executed");
}
// result = sumTwo(3, 4);
// console.log("results: ", result);

function loginUserMessage(username = "rajanhere") {
  //here above i give username a default value called "rajanhere"
  if (!username) {
    console.log("please enter a username");
    return;
  } else {
    return `${username} just logged in`;
  }
}

// console.log(loginUserMessage("Rajan"));
console.log(loginUserMessage());
