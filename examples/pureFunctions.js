// Pure functions are a part of the Functional Programming Paradigm

// Why write them?
// 1) result in clean code
// 2) easy to test
// 3) easy to debug
// 4) decoupled and independent
// 5) could be added to your utility functions

// Rules for pure functions:
// 1) same input ALWAYS gives the same output
// 2) No side effects




// --------------------------Same input always give same output --------------------------

const add = (x, y) => x + y;

const fullName = (first, last) => `${first} ${last}`;

// Can replace the function with the output
// Known as referential transparency

// Pure functions should have at least 1 parameter
// Otherwise it is the same as a constant because they only work with their input

// Example
const firstName = () => 'Kyle'



// -------------------------- No side effects --------------------------

// This also means accesing the scope outside the function makes it inpure
const z = 5;
const sum = (x,y) => x + y + z;
// IMPURE ^^

// Pure functions cannot access a database, API, file system, storage, etc.
// Modify the DOM
// Or even log to the console

// That said, clearly "impure" functions are necessary
// but they are harder to test and bug

// Further, no input state can be modified
// That is, no data should be 'mutated'
// Consider all the input data to be immutable



// -------------------------- IMPURE EXAMPLE 1 --------------------------

let x = 1;
const increment = () => x += 1;


// -------------------------- IMPURE Example 2 --------------------------

const myArray = [1,2,3];
const addToArray = (array, data) => {
    array.push(data)
    return array
}

// -------------------------- Refactored Example 1 --------------------------
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(x)); // x = 3
console.log(x); // x = 2
// Because we are not using the global scope anymore !


// -------------------------- Refactored Example 2 --------------------------

const pureAddToArray = (array, data) => [...array, data];
// remember spread operator creates a shallow copy
console.log(pureAddToArray(myArray, 5)) // [1,2,3,4,5]
console.log(myArray) // [1,2,3,4]
// this would not work if it is a nested structure

// Pure functions always return something
// if not returning anything, it is not a pure function


// -------------------------- Common Higher Order Functions --------------------------

// These are pure !

const oneToFive = [1,2,3,4,5]
const oddToFive = oneToFive.filter(elem => elem % 2 !== 0);
console.log(oddToFive); // [1,2,3,4]

const doubled = oneToFive.map(elem => elem * 2);
console.log(doubled); // [1,3,4]

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed); // [2,4,6,8,10]

console.log(oneToFive) // [1,2,3,4,5]


// -------------------------- REVIEW --------------------------

/**
 * 1) The same input always gives the same output (referential trannsparency)
 * 2) No side effects (no mutations)
 */

// The goal: Write small, pure functions when you can for code that is clean, easy to test, and easy to debug.