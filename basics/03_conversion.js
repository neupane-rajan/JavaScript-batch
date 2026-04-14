// note

// if we try to convert string which have mixed of letter and number it will conver it into number but when we try to  print this value we get "NaN"
// type of return value in string so if we do typeof score+10 it will give number10 as output and
// typeof(score)+10 is same as typeof score+10
// converting any datatypes into Number
// if we try to convert null value to Number then it the value will 0
// but in case of undefined we will get NaN
// while converting boolean into Number true will be convert into 1 and false will be convert into 0
/*
"12"-> 33
"12xyz"->NaN
true->1
false->0
null-> 0
undefined->NaN
*/
let score = 1;
// console.log(typeof score + 10);
// console.log(typeof (score) + 10);
// this will conver string number into Number
let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// converting other data types to number
/* 
undefined-> false 
any empty data types convert into false value
"",''->false
null->false
1->true
0->false
"rajan"->true

*/
let num = undefined;
let num_bol = Boolean(num);
// console.log(num_bol);


// converting anydata types  into string

let number = 1
let conv_num = String(number);
let bool_value = true
let conv_bool= String(bool_value)
// console.log(conv_num);
// console.log(conv_bool);


// ---------------------------------------operations-----------------------------------
let value =3
let negValue = -value
console.log(negValue);

