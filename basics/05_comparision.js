// comparision operator are used for comparing the value of variable in javascript . They give either true or false as return value.

/*
> -> greater than
< ->less than
= -> isequal to
>=-> greater than or equal to
<= -> less than or equal to 
!= -> not equal to

*/
/*
# rare case
console.log("2" > 1); //here we got true it automatically convert data types into number

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
 the reason is that an equality check == and comparisons > <> >= <= work differently.
"2" > 1 → true
JS converts "2" to number 2, then compares

null > 0 → false
null becomes 0 → 0 > 0 is false

null == 0 → false
== does NOT convert null to number
null is only equal to undefined

null >= 0 → true
null becomes 0 → 0 >= 0 is true
*/

// incase of undefine
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);

/* undefined == 0 → false
undefined only equals null, not 0

undefined > 0 → false
undefined becomes NaN, and NaN compared to anything is false

undefined < 0 → false
same reason: NaN < 0 is false

undefined >= 0 → false
same: NaN >= 0 is false
*/

// strict check
// strict check not only check value it also check the datatype of the value

console.log("2" == 2); // it will give false value as it not only check value but also its data types