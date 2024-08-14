// Foundational for understanding pure functions

// Primitive vs Structural

/**
 * Primitive:
 *  1) undefined
 *  2) Boolean
 *  3) Number
 *  4) String
 *  5) BigInt
 *  6) Symbol
 */

/**
 * Structural:
 *  1) Object: (new) Object, Array, Map, Set, WeakMap, Date
 *  2) Function
 */




// -------------------------- EXAMPLE ONE --------------------------

// Value vs Reference
// Primitives pass values:
let x = 2;
let y = x;
y += 1;
console.log(x) // x = 2
console.log(y) // y = 3

// Structural types use references
let xArray = [1,2,3];
// Works as a pointer
let yArray = xArray;
yArray.push(4);
console.log(xArray); // xArray=[1,2,3,4]
console.log(yArray); // yArray=[1,2,3,4]





// -------------------------- EXAMPLE TWO --------------------------

// Mutable vs Immutable

let myName = 'Kyle'

myName[0] = 'C'
console.log(myName) //Logs Kyle because STRINGS ARE IMMUTABLE AS A PRIMITVE DATA TYPE

// Reassignment is not the same as mutable
myName = 'Cyle'

// Structures contain mutable date
yArray[0] = 9
console.log(yArray) // [9,2,3,4]
console.log(xArray) // Remember this changes the 'pointed to' array as well


// -------------------------- EXAMPLE THREE --------------------------

// Pure functions require you to avoid mutating data

// IMPURE FUNCTION THAT MUTATES DATA
const addToScoreHistory = (array, score) => {
    array.push(score)
    return array
}

const scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));

// That mutated the original array
// THis is considered a side effect

// NOTICE: "const" does not make the array immutable

// We need to modify that function so it does not mutate the original data passed in



// -------------------------- EXAMPLE FOUR -------------------------- 

// Shallow copy vs. Deep Copy (clones)

// With the spread operator
const zArray = [...yArray, 10]
console.log(zArray); // [9, 2, 3 , 4, 10]
console.log(yArray)  // [9, 2, 3, 4]

// MADE A SHALLOW COPY USING SPREAD OPERATOR ^^

// with Object.assign()
const tArray = Object.assign([], zArray)
console.log(tArray) // [9, 2, 3, 4, 10]
console.log(tArray === zArray) //return false, even though the contents are the same, BECAUSE WE ARE SHALLOW COPYING

// LIL EXAMPLE
tArray.push(11) // [9, 2, 3, 4, 10, 11]
console.log(zArray) // [9, 2, 3, 4, 10]

// But if there are nested arrays or object...
yArray.push([8,9,10]);
const vArray = [...yArray]
console.log(vArray) // [9, 2, 3, 4, Array(3)]

// Adds to the array in index 4
vArray[4].push(5)
console.log(vArray) // [9, 2, 3, 4, Array(4)]
console.log(yArray) // now contains everything that vArray holds

// nested structural data types still share a reference!

// Note: Array.from() and slice() create shallow copies too.


// -------------------------- EXAMPLE FIVE --------------------------

const scoreObj = {
    "first": 44,
    "second": 12,
    "third": {"a": 1, "b": 2}
}

Object.freeze(scoreObj)
scoreObj.third.a = 8;
console.log(scoreObj) //Returns the a as an 8
// still mutates - it is a shallow freeze



// HOW DO WE AVOID THESE MUTATIONS?
// DEEP COPY IS NEEDED TO AVOID

// This does not work with Dates, functions, undefied, Infinity, RegExps, Maps, Sets, Blobs, FileLists, IMageDates, and other complex data types
// QUICK SOLUTION HOWEVER
const newScoreObj = JSON.parse(JSON.stringify(scoreObj));

// Vanillla JS function
const deepClone = (obj) => {
    if(typeof obj !== "object" || obj === null) return obj

    // create an array or object to hold values
    const newObject = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        const value = obj[key]
        // recursive call for nested objects & arrays
        newObject[key] = deepClone(value)
    }

    return newObject;
}

const newScoreArray = deepClone(scoreArray)


// -------------------------- PURE FUNCTION --------------------------

const pureAddToScoreHistory = (array, score, cloneFunc) => {
    const newArray = cloneFunc(array)
    newArray.push(score)
    return newArray
}

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone)



// -------------------------- REVIEW --------------------------

// Primitive vs Structural Data Types

// Primitive data types pass values

// Structural data types pass references

// Primitives data types are immutable

// Reassignment is not the same as mutable

// Structural data types contain mutable data

// Shallow vs. Deep copy (clones of data structures)

// Shallow copies still share references of nested structures
// which allows for mutation of the original data

// Object.freeze() creates a shallow freeze (does not freeze nested structures)

// Deep copies share no references

// All of this is important to know when constructing Pure Functions
// Because they require you to avoid mutating the orignal data