// Create an arrow function called squre that takes a number as an argument and returns its square. Use the arrow function to calculate the square of a given number and display the result.

// let squre = num => num * num;
// let numtosquare = 55555;
// let result = squre(numtosquare);
// console.log(result);


// 2 - Create a JavaScript function called generateGreeting that takes a name as an argument and returns a personalized greeting message. Use this function to greet three different people.

// function generateGreeting(name) {
//     return `hello, ${name}!, you are a soooo sweet person`;
// }
// const person1 = "aman"
// const person2 = "Alok"
// const person3 = "Komal"
// console.log(generateGreeting(person1));
// console.log(generateGreeting(person2));
// console.log(generateGreeting(person3));

// 3 - Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and immediately displays the result.

(function(n) {
    let square = n * n;
    console.log(square);
  })(57); //pass any number as an argument
  