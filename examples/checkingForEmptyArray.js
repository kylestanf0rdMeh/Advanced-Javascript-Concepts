let myArray = [];

// Array of course have a length property
console.log(myArray.length); // 0


// However cannot read the property length if it is an object
// Ex:
myArray = undefined;
// Error
console.log(myArray.length ? true : false) //returns cannot read property of undefined

// So we have learned to do this:
console.log(myArray && myArray.length ? true : false)

// -------------------------- MORE CONCISE WAY --------------------------
myArray = [];
// Optional Chaining
console.log(myArray?.length ? true : false)

// You can use more than one!
myArray = [{"id": 1}];
console.log(myArray?.[0]?.id ? true : false)

// You can use it with the null coalescing operator, too.
console.log(myArray?.[0]?.id ?? "No ID property"); //returns 1 (true)
console.log(myArray?.[0]?.name ?? "No ID property"); //returns No ID property


// -------------------------- Need to find out if it is an array --------------------------
myArray = "Kyle"
// This does not work
console.log(myArray && myArray.length ? true : false)

// Neither does this
console.log(myArray?.length ? true: false)

// This is the way to be sure !
console.log(Array.isArray(myArray));

// So if you are actually completely unsure
myArray = [{"id": 1}]
console.log(Array.isArray(myArray) && myArray.length ? true : false)

// Or to check for a property also
console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false)