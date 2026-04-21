// let talk about singleton and constructor
const niijoUser = new Object();
niijoUser.id = "123abcd";
niijoUser.name = "Random";
niijoUser.isLoggedIn = false;

// console.log(niijoUser);

// declaring object under object

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Rajan",
      lastname: "Neupane",
    },
  },
};
// this way we can excess object inside object
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// object.assign(target,..,..,source)
// const obj3 = Object.assign({}, obj1, obj2);
// in object.assign() we have used empty object as first parameter because we want to create a new object and copy the properties of obj1 and obj2 into it. If we use obj1 as first parameter then it will modify obj1 and add the properties of obj2 into it.so in object.assign() first parameter is the target object and the rest of the parameters are source objects. It will copy the properties of source objects into target object and return the target object. If there are properties with same name in source objects then it will overwrite the value of that property in target object with the value of that property in last source object.
// console.log(obj3);

// we have better way to copy object and this is much cleaner and easier to read than object.assign() and that is spread operator(...)
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// from data base we many get value on array like

const users = [
  {
    id: 1,
    email: "r@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
];
// we can excess value if we have object which is inside array
// first excess array items using square notation and then we can use .email or .anything method to acess object items
console.log(users[0].email);

// object.keys() method used to get all the keys of an object in an array format
console.log(Object.keys(niijoUser));

// object.value() method used to get all values of an object in an array format
console.log(Object.values(niijoUser));

// object.entries() method used to get all key value pair of an object in an array format
// same like we have have .item method in python dictionary
console.log(Object.entries(niijoUser));

// object.hasOwnProperty() method used to check if a object has a property or not
console.log(niijoUser.hasOwnProperty("name")); // it will return true because niijoUser has name property
console.log(niijoUser.hasOwnProperty("age")); // it will return false because niijoUser does not have age property
