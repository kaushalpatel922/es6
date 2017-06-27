//use the spread operator to combine arrays.

const fruits = ["apples", "banana", "oranges"];
const vegetables = ["corn", "potatotes", "carrots"];

//using ...donation allows us to call all array values and by using a comma it will concanate two arrays into one.
const produce = [...fruits, ...vegetables];
console.log(produce);

//outputs ["apples", "banana", "oranges", "corn", "potatotes", "carrots"]
