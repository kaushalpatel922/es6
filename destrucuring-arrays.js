//Destructuring Array

// Initialize the variables `one`, `two` and `three
// with colors from the `things`array

const things = ['red', 'basketball', 'green', 'computer', 'earth', 'blue'];

//setting variables and allowing to skip using comma and setting equal to things.
const [one,, two,,, three] = things;

//using template literals and assigning to const
const colors = `List of Colors: ${one}, ${two}, ${three}`;

console.log(colors);
