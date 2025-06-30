console.log("1. ", 5 > 3);
console.log("2. ", 12===2);
console.log("3. ", 4!==6);
console.log("4. ", x<8);
console.log("5. ",(7%2))

let age = 34;

// Ternary Operator syntax: variableName = (condition) ? value1: value2;
let canVote = (age<18) ? "Too young to vote": "Yes, voter allowed.";

console.log("5. Can You Vote? ", canVote)

// Conditional Statement
// IF = to specify a block of code that can run if the condition is true

let greet = () => {
    console.log("Hello World")
}

greet();

let permission = false;

//if (condition) {
// whatever you want to run, to run if the condition is true, goes in here 
// }

if(permission) {
    greet();
}

console.log("At the end")

let grade = 79;

// if your mark is 80 and above you get a distinction

if(grade>=80) {
    console.log("You get a distinction!")
}
else
{
    console.log("You passed, but no distinction.")
}

let year = 2016;

//Determine if the year is a leap year
let leapYearChecker = (year) => {
    if (year%4===0) {
    console.log("It's a leap year")
    }
    else
    {
    console.log("Not a leap year.")
    }
}