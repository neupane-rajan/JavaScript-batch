let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString()); // Mon Apr 06 2026
// console.log(myDate.toLocaleString()); // 4/6/2026, 3:54:41 PM
// console.log(myDate.toLocaleDateString()); // 4/6/2026
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 0, 23);
// let myCreatedDate = new Date(2024, 0, 23, 5, 3);
// let myCreatedDate = new Date("2025-01-14"); // here month start with 1
let myCreatedDate = new Date("01-05-2026");
// date start with 0 and end at 11
// if we write 12 as month then we will get jan as return value
// 0 as jan and 11 as december
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // it will give millisecond

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMonth() + 1); // as month start with 0 and adding 1 to get the correct month in number.

newDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Asia/Kathmandu",
});

console.log(newDate.toLocaleString());
