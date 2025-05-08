// basic function with parameters
function howOld(year, name, state) {
    // code goes here
    console.log("You are " + (2025 - year) + " years old, your name is " + name + " and you live in " + state + ".");
}

let a = 1985;
let b = "Chris";
let c = "Texas";

howOld(b, c, a)

// functions with multiple values
const people = ["Alice", "Suzy", "Bob"]

function logNames(people) {
    // code goes here
    console.log("The names are: " + people.join(", ") + ".");
}

logNames(people)

// names do not need to match the function parameters
function dividedByThree(num) {
    return num / 3;
}

let number = 9;

let dividedByThreeResult = dividedByThree(number);
console.log("The result of dividedByThree is: " + dividedByThreeResult);

function shout(someString) {
    // work goes here
    let loudString = someString.toUpperCase();
    return loudString + "!!!";
}

let ourLoudString = shout("I love you mommy");

console.log(ourLoudString);

// arrow function example
const add = (a, b) => a + b;
let total = add(2, 16);
console.log("The total is: " + total);

// functional expression example
const addThreeNumbers = function (x, y, z) {
    return x + y + z;
}

let sum = addThreeNumbers(1, 2, 3);
console.log("The sum is: " + sum);