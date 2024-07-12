// Prototypal Inheritance and the Prototype Chain

// Object literal
const person = {
    alive: true
}

const musician = {
    plays: true
}

// Old way of doing it
musician.__proto__ = person;

// New way of doing it
Object.setPrototypeOf(musician, person)
console.log(Object.getPrototypeOf(musician))

// Extending prototype chain
const guitarist = {
    strings: 6,
    __proto__: musician
}



// -------------------------- Going onto bigger stuff --------------------------


// Object with getter and setter methods
const car = {
    doors: 2,
    seats: 'vinyl',
    get seatMaterial(){
        return this.seats;
    },

    set seatMaterial(material){
        this.seats = material;
    }
}


const luxurycar = {}
Object.setPrototypeOf(luxurycar, car)
luxurycar.seatMaterial = 'leather';

// This would only show the attributes, not actual values within attributes
Object.keys(luxurycar).forEach(key => {
    console.log(key)
})

// This will actually show the values in this for in loop
for(let key in luxurycar){
    console.log(key)
}



// -------------------------- Different Example --------------------------


// Object constructor
function Animal(species){
    this.species = species;
    this.eats = true;
}

// Prototype is a 'bucket' of methods that can be inherited
Animal.prototype.walks = function() {
    return `A ${this.species} is walking.`
};

const Bear = new Animal('bear')

// the prototype property is where inheritable props and methods are
console.log(Bear.__proto__)




// ---------------------- MODERN WAY ----------------------

// ES6 classes and how inheritance is used with them
// Modern way of doing the above

class Vehicle {
    constructor() {
        this.wheels = 4,
        this.motorized = true
    }

    ready() {
        return 'Ready to go!'
    }
}

// New way of setting the prototype
class Motorcycle extends Vehicle {
    constructor(){
        // Inherit tha stuff from vehicle
        super()
        this.wheels = 2
    }

    wheelie() {
        return 'On one wheel now!'
    }
}

const myBike = new Motorcycle();

const myTruck = new Vehicle();