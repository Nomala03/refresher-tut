let x = 5;
// console.logging conditional statements
console.log("1. ", 5 > 3); // comparison operators (greater than sign)
console.log("2. ", 12===2); // equals to
console.log("3. ", 4!==6); // not equals to
console.log("4. ",x<8); // less than sign
console.log("5. ",(7%2 > 0)); // remainder
console.log("6. ",(6%2 === 0)); // remainder

let age = 14;

// Ternary Operator syntax: 
// variableName = (condition) ? value1: value2;
let canVote = (age < 18) ? "Too young to vote": "Yes, voter allowed."; // best way to name a boolean variable is by writing it as if you're asking a question. e.g., (canVote?)

console.log("7. Can You Vote? ", canVote)

// Conditional Statement
// IF = to specify a block of code that can run if the condition is true

let greet = () => {
    console.log("Hello World")
}

//greet(); // you always have to call the function.

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

//let year = 2016;

//Determine if the year is a leap year
/*
if (year%4 === 0){
    console.log("Is a leap year")
}else {
    console.log("Is not a leap year.")
}
*/

let leapYearChecker = (year) => {
    if (year%4===0) {
    console.log("It's a leap year")
    }
    else
    {
    console.log("Not a leap year.")
    }
}

leapYearChecker(2016); // had to call the function.

//Write a function that checks if a munber is odd or even

let num = 29;

let oddEvenChecker = (number) => {
    if(number%2 === 0) {
        console.log("This number is even")
    } else {
        console.log("This number is odd.")
    }
} 

oddEvenChecker(num);

//Back to Grades
// when you want too test for two conditions.
// upgraded else/if statement.

grade = -90;
/*
90 and above grade A 
75 and above is Grade B
50 and above is Grade C
*/

let gradeScore = (marks) => {
    if(marks >= 90 && marks<= 100) {
        console.log('Grade is A');
    }
    else if(marks >= 75 && marks <= 90) {
        console.log('Grade is B');
    }
    else if(marks >= 50 && marks <=75) {
        console.log('Grade is C');
    }
    else {
        console.log('Grade is F');
    }
}

//gradeScore(grade)
gradeScore(Math.abs(grade))// this is used to run an input that has a negative grade mark. when we want the nunber to turn positve (absolute number)

//Another way to Call a function:

let myGrade = 90; 

let gradeScore2 = (marks) => {

    if(marks>=90 && marks<=100) {
        myGrade = 'A'
    }
    else if (marks>=75 && marks<90) {
        myGrade = 'B'
    }
    else if (marks>=60 && marks<75) {
        myGrade = 'C'
    }
    else if (marks>=50 && marks<60) {
        myGrade = 'D'
    }
    else if (marks>=0 && marks<50) {
        myGrade = 'F'
    }
    else {
        myGrade = 'Summa Cum Laude'
    }      

    console.log("My grade is:"+ myGrade);
}

gradeScore2(myGrade)

//Switch statements. they are not that good to use in conditional statements that fall within a rather like the example on else/if statements.
// they need to have one thing to test for. 

let y = 7;

switch(y) {
    case 5: 
        console.log("It's a 5")
        break;
    case 6:
        console.log("It's a 6") 
        break;
    case 7:
        console.log("It is a 7")   
        break;
    default: 
        console.log("Default statement: I don't know this number")        
}


// No default statement because we are sure of what we want the Switch Statement to return. The function will give us one of the 7 numbers.
// In situations where you might get an outlier, an unknown, you use the default statement.

let day;

switch(new Date().getDay()) 
{
    case 0:
        day = "Sun"; 
        break;

    case 1:
        day = "Mon"; 
        break;

    case 2:
        day = "Tues"; 
        break;

    case 3:
        day = "Wed"; 
        break;

    case 4:
        day = "Thurs"; 
        break;

    case 5:
        day = "Fri"; 
        break;

    case 6:
        day = "Sat"; 
        break;
}

console.log("The day is:", day) // How do we get the day if the declared variable does not have a value

//Write a function using switch to determine the action based on the color of the traffic light.
 
let robot = "orange";

switch(robot.toLowerCase()) {
    case "red":
        action = "Stop!";
        break;

    case "orange":
        action = "Slow Down"; 
        break;
       
    case "green":
        action = "Go!";  
        break;  
    
    default:
        console.log("The robot is off")    
}

console.log("robot: ", action);

// Write a simple calculator function using switch statements that adds, subtracts, multiplies and divides 2 numbers together.
let num1 = 1;
let num2 = 3;
let operator = "/";

function calculator(number1, number2, ops) {
    switch(ops) {
        case "+":
            return number1+number2
        
        case "-":
            return number1-number2

        case "*":
            return number1*number2  
        
        case "/":
            return (number2!==0) ? number1/number2: "cannot divide by zero [0]"// To avoid getting an infinity, we tell the program that if number2 = 0, we run the "Cannot divide by zero" statement.
// So if the condition is true, the first statement is runned; if condition is false, we run the second statement
        default:
          return "Invalid Operator"    
//return does the same work as 'break' but it is more advanced.
    }

}

console.log(calculator(num1, num2, operator));
console.log("This too is an end")
//console.log("The total is: ", output)



