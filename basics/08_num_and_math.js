const score = 400;
// console.log(typeof 400);
// console.log(score);
// const balance = new Number(100);
// console.log(balance.toString()); // convert number  into string

// console.log(balance.toFixed(2));
// toFixed() method is used to format a number with a specific number of digits after the decimal point. it return string value of number with specified number of digits after the decimal point. if the number has more digits than the specified number, it will be rounded to fit the specified number. if the number has fewer digits than the specified number, it will be padded with zeros.

const otherNumber = 1123.89;

// console.log(otherNumber.toPrecision(3));
// to Precision() method is used to format a number to a specified length. it return string value of number with specified length. if the number is shorter than the specified length, it will be padded with zeros. if the number is longer than the specified length, it will be rounded to fit the specified length.

const someNum = 100000;
// console.log(someNum.toLocaleString("en-Np"));
// toLocaleString() method is used to convert a number into a string, using locale-specific formatting. it return string value of number with specified locale formatting. if we pass "en-Np" as argument then it will format the number according to Nepali locale. if we pass "en-US" as argument then it will format the number according to US locale. if we pass "en-ZA" as argument then it will format the number according to South African locale. if we pass "en-NZ" as argument then it will format the number according to New Zealand locale.

//  +++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// abs convert negative number into positive number. it only work for negative number it won't convert postive to negative

// console.log(Math.round(4.49));
// round() is used to round off decimal numbers. If the fractional part is less than 0.5, it returns the integer part (e.g. 4.3 or 4.4 becomes 4). If the fractional part is 0.5 or greater, it returns the next integer (e.g. 4.5 becomes 5).

// console.log(Math.ceil(4.2));
// ceil() is used to round up a number to the nearest integer. It always rounds up, regardless of the fractional part. For example, 4.2 becomes 5, and 4.8 also becomes 5.

// console.log(Math.floor(4, 9));

// floor() is used to round down a number to the nearest integer. It always rounds down, regardless of the fractional part. For example, 4.9 becomes 4, and 4.2 also becomes 4.

// console.log(Math.max(1, 2, 3, 4, 5));
// max() is used to find the maximum value among the given numbers. It takes any number of arguments and returns the largest one. For example, Math.max(1, 2, 3) returns 3.

// console.log(Math.min(1, 2, 3, 4, 5));
// min() is used to find the minimum value among the given numbers. It takes any number of arguments and returns the smallest one. For example, Math.min(1, 2, 3) returns 1.

// console.log(Math.random());
// random() is used to generate a random decimal number between 0 (inclusive) and 1 (exclusive). Each time you call Math.random(), it will return a different random number. For example, it might return 0.123456 or 0.987654.

// console.log(Math.floor(Math.random() * 10));
// To generate a random integer between 0 and 9, you can use Math.random() to get a random decimal number, multiply it by 10 to scale it up to the range of 0 to 10, and then use Math.floor() to round it down to the nearest integer. This will give you a random integer from 0 to 9. For example, if Math.random() returns 0.5678, multiplying by 10 gives you 5.678, and Math.floor(5.678) will return 5.

// console.log(Math.floor(Math.random() * 20) + 1);
const min = 5;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// To generate a random integer between a specific minimum and maximum value, you can use the following formula: Math.floor(Math.random() * (max - min + 1) + min). This formula works by first generating a random decimal number between 0 and 1 using Math.random(), then scaling it to the desired range by multiplying it by (max - min + 1), and finally shifting it to start from the minimum value by adding min. The Math.floor() function is used to round down the result to the nearest integer. For example, if you want a random integer between 10 and 20, you would set min = 10 and max = 20, and the formula would give you a random integer in that range.
