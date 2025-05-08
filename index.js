
function howOld(year, name, state) {
    // code goes here
    console.log("You are " + (2025 - year) + " years old, your name is " + name + " and you live in " + state + ".");
}

let a = 1985;
let b = "Chris";
let c = "Texas";

howOld(a, b, c)

const people = ["Alice", "Suzy", "Bob"]

function logNames(people) {
    // code goes here
    console.log("The names are: " + people.join(", ") + ".");
}

logNames(people)