// Named after Haskell B. Curry
// Concept from lambda calculus

// Takes a function that received more than one paramter
// and breaks it into a series of unary (one parameter) functions

// Therefore, a carried function only takes one parameter at a time



// ----------------------------- Example one -----------------------------
const buildSandwich = (ingredient1) => {
    return(ingredient2) => {
        return(ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`
        }
    }
}

// Call it
const mySandwich = buildSandwich('bacon')('lettuce')('tomato')


// Nesting can get ugly and nested further we go

const buildSammy = ingred1 => ingred2 => ingred3 => 
    `${ingred1}, ${ingred2}, ${ingred3}`

const mySammy = buildSammy('turkey')('cheese')('bread')


// ----------------------------- Another example -----------------------------

const multiply = (x,y) => x * y;

// Function does not complete until it received all params
const curriedMultiply = x => y => x*y;

// Partially applied function
const timesTen = curriedMultiply(10)

// returns what the function still needs, this case would be y
// we can call it again with another param and it takes place of 1st seen param
timesTen(8)



// ----------------------------- Another Example -----------------------------
const updateElement = id => content => document.querySelector(`#${id}`).textContent = content;
const updateHeaderText = updateElement('header')
updateHeaderText('Hello Kyle!')


// ----------------------------- COMMON USE -----------------------------

// Function Composition
// Throw a function inside of a function inside of a function

const addCustomer = fn => (...args) => {
    console.log('saving customer info')
    return fn(...args)
}

const processOrder = fn => (...args) => {
    console.log(`processing order ${args[0]}`)
    return fn(...args)
}

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed.`)
}

completeOrder = (processOrder(completeOrder))
// Again, would return what is missing
console.log(completeOrder);
completeOrder = (addCustomer(completeOrder))
completeOrder('1000')


// This does the same thing, but easier to read IMO
function addCustomer(...args) {
    return function processOrder(...args){
        return function completeOrder(...args){
            // end
        }
    }
}


// ----------------------------- LAST EXAMPLE -----------------------------

// Requires a function with a fixed number of parameters
const curry = (fn) => {
    return curried = (...args) => {
        if(fn.length !== args.length) {
            return curried.bind(null, ...args) //bind creates a new function
        }
        return fn(...args);
    }
}

const total = (x,y,z) => x + y + z;

// Pass da function ina function
const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));