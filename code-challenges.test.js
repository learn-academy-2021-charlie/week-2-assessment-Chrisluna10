// ASSESSMENT 2: Coding practical questions with Jest

const { expect } = require("@jest/globals")
const { it, test } = require("jest-circus")
const { describe } = require("yargs")

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// var num1 = 15
// Expected output: "15 is divisible by three"
//write a test for a function that returns "15 is divisible by three."

//create a describe method that has the name of the function
// describe("isDivisible", () => {
    //use the test method that describes what will happen
    // it("returns whether or not 15 is divisible by three", () => {
        //expect method that has what the output should be
        // expect(isDivisible("15 is divisible by three"));
//     })
// });

  
// var num2 = 0
// Expected output: "0 is divisible by three"

// describe("isDivisible", () => {
//     it("returns whether or not 0 is divisible by three", () => {
//         expect(isDivisible("0 is divisible by three"));
//     })
// });

// var num3 = -7
// Expected output: "-7 is not divisible by three"

describe("isDivisible", () => {
    it("returns whether or not -7 is divisible by three", () => {
        expect(isDivisible("-7 is divisible by three"));
    })
});




// b) Create the function that makes the test pass.
// const isDivisible = () => {
    //if statement that takes an argument
    // if (num1 % 3 === 0) {
        //return output that should approve test
//     return "15 is divisible by three"
//    } 
// }
//I keep recieving an error that says "your test suite must contain at least one test."

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

describe("cap", () => {
    test("returns all words capitalized", () => {
    expect(cap(["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"]).toEqual(["streetlamp", "potato", "teeth", "conclusion", "nephew"]))
    })
})

const cap = (array) => {
   let newArr = array.map(value => {
    return value.toUpperCase() 
   })
   return newArr.join("")
}
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2



// b) Create the function that makes the test pass.

//I was having a problem with testing but I still wanted to submit a pull request. 
