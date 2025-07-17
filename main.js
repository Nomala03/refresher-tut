import { car } from "./car.js"; //importing the file so you can run it on the main file.
import { isFemale } from "./variables.js";
//import {MyButton} from "./MyButton.js"
import { studentNames, dailyTemps } from "./iterables.js";
import { person } from "./objects.js";
import { favoriteFoods } from "./iterables.js";


const myNewCar = new car("Ford", 1971);

//document.getElementById("garage").innerHTML = myNewCar.age()
//alert (isFemale)

/*const newButton = new MyButton("blue", "Register", "10px", "white")
newButton.render()

const newButton2 = new MyButton("Green", "Register", "10px", "white")
newButton.render()
*/

//Iterables and loops. Discover how to repeat actions, process data and build dynamic web pages.

//For loop, loops through a block of code a number of times. Because we know what it's got, we know the number of times the object is going to be looped through.

//syntax
/* for (express 1; expression 2; expression 3) {
        code block to be executed
}
*/

//we are incrementing here
let i = 0 // i is in the global scope
for (; i < 5; i++) { //let i = 0 can be runned outside
    //console.log("The value of i is: ", i);
}

//i = i + 1 // is the same as i++

// We can even do it in reverse. we are decrementing here.

for (let j = 20; j > 0; j--) {
    //console.log("The value of j is: ", j);
}

//j = j - 1 is the same as j--;

//using a for...loop print out the elements of the studentName array. 

for (i = 0; i < studentNames.length; i++) {
    //console.log(studentNames[i]);
}

/*for even numbers
for (i = 0; i < studentNames.length; i = i+2) { / the reason for no "let" is that we are over writting i since it is already used.
    console.log(studentNames[i]); 
}
*/

//example 2:
/* 
we want this to show on the console.
*****
*****
*****
*****
*****
*/
for (let r = 0; r < 5; r++){
    //console.log("*****")
}

// we want to print one star *. we using a nested loop
let starLine = "";

for (let g = 0; g < 5; g++){ // use the outer loop to print line by line.

    for(let f = 0; f < 5; f++) { // use the inner loop to concatenate the starts.
        starLine+= "*"
    }
    //console.log(starLine)
    starLine = "";
}

//LOOPS

/* FOR..IN, loops through the properties of an object.
syntax:

for(key in the object) { // for as long as there is a key in the following object, then perform the code.
    //code here
}
*/

//we see it end, we know that there are a finite amount of things we need to go through.
/*
let txt = "";
// we want to see the values.
for (let x in person) { // x is standing in for the keys.
    console.log("The value of x: ",x)
}
*/

//Now we want to see the values

//console.log(person["firstName"])
/*
let txt = "";

for (let x in person) {
    txt = txt +person[x]+" "
    if(typeof )
}
console.log(txt)
*/

//How can we skip a function. Let's say a property has a function, how do we skip it, without printing it out.

let txt = "";

for (let x in person) {
    
    if(typeof person[x] !== "function") {
        txt = txt +person[x]+" "
    }
}
//console.log(txt)

//Printing out the dailyTemps.
//The Temperature on Friday is 34.

/*
for (let day in dailyTemps)
{
    console.log(`The temperature on ${day} is ${dailyTemps[day]}`)
}
*/
//which days had a temperature of above 22, not included
//print those days out
/*
for (let day in dailyTemps)
{
    dailyTemps[day] > 22 ? console.log(`The temperature on ${day} is ${dailyTemps[day]}`) : null;
}
*/    

// I want a statement printed that says: there are x days that experience a temperature above 22 degrees.

let count = 0;

for (let day in dailyTemps)
{
   // dailyTemps[day] > 22 ? count+=1 : null;
   //Alternative:
   const temp = dailyTemps[day];
  // console.log(`${day}: ${temp}`)
   if(temp>22)
   {
      count++;
   }
}

//console.log(`There are ${count} days that experieced a temperature above 22 degrees.`)


/* The FOR...OF loops through the values of an iterable object a.k.a arrays. 'OF' is for the arrays
for (variables of iterable) {
              
}
*/

const cities = ["vryheid", "Johannesburg", "Polokwane", "Pretoria"]
const hometown = cities[0]; //bob = ['b', 'o', 'b' ]

let text = "";// empty string
for (let location of cities) {
   // console.log(location) // location = cities[x]
}

for (let character of hometown){
    //console.log(character)
}

/* PROBLEM: How can we manke the city Vryheid appear like this:

R             R
Y             Y
H             H
E             E 
I             I 
D             D
Vryheid
*/

let city = "";

for(let character of hometown) {
    //console.log(`${character}             ${character}`)
    city=city+character;
}
//console.log(city)

//The second type of loops, unknown inputs. Usually use them when we do not know how many times we need to iterate through a loop. 
//WHILE loops
/* Stntax:
while(condition){
    code clock 
}
    since while loops will continuously loop through the condition, we need to add in increment/decrement to constantly be in control of what we are doing

*/
 
//EXAMPLE:

let y = 10;

while(y<20) {
  //  console.log("We good");
    y++
}

// I want to do a countdown from, console, and at the end of the countdown it must say BLAST OFF!

let x = 10;

while(x>0) {
    console.log("countdown: ", x);
    x-- // turning the increasing x to a decreasing x from 10
}
console.log("Blast Off!")

//when you have inputs coming in:

let input = "";

while (input !== 'exit') { // it will stop when you type the word exit.
    input = prompt ("What is your name?")
    document.getElementById("demo").innerHTML=input
}

//DO WHILE loops. A variation of a while loop. 
/* 
do{
    //code must run at least once and then may run again as long as the condition is true
}
while (condition)
*/

txt = "";
i = 0;


do{
    txt += "<br>The number is " +i;
    i++
}
while(i<10)

document.getElementById("demo").innerHTML=txt;

