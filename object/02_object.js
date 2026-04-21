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

console.log(regularUser.fullname.userfullname.firstname);
