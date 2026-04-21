const course = {
  coursename: "javascript for beginner",
  price: "1500",
  tutor: "Rajan",
};

// course.tutor
// const { tutor } = course;
// here in above code we have used object destructuring to extract the value of tutor property from course object and assign it to a variable name tutor.
// if we want to assign different variable name than the property name then we can use colon(:) to assign different variable name like this
const { tutor: teacher } = course;
console.log(teacher);
