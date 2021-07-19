// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer: This will return an output of each index being its own string.
// b) Verify and explain: .split with quotes splits each index up and makes it an array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: There is no return so this will have an output of undefined.
// b) Verify and explain: return has to be included before the string inside of the brackets in order to have an output of "Hello, LEARN student"


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: Each value in the array will double
// b) Verify and explain: .map makes each value have an argument of the value * 2.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: this will return an array of just odd numbers
// b) Verify and explain: This returned an array of just the even numbers. I am assuming it is because the value % 2 should have strictly equaled 1 instead of 0.


// --------------------5) What will this log?

// class Learn {
//   constructor(){
//     this.student = "George",
//     this.cohort = "Charlie",
//     this.year = 2021
//   }
// }
// var learnStudent = new Learn
// console.log(learnStudent)

// a) Your answer: 
// "[
//   student: "George"
//   cohort: "Charlie"
//   year: 2021
// ]"
// b) Verify and explain: the variable learnStudent is taking in the class of Learn which has an output of all the data within the learn class.
