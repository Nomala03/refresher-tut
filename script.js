const age = 35
const surname = 'Madonsela'
const firstName = 'Mbee'
const ageAsString = `${ age } is my age.` // string literals ,graves, backticks, used to combine the value of the variable with the string. 
let isFemale = true //Boolean
let isRich = undefined
let unAssigned // declaration keyword, variable name == undefined
//console.log(unAssigned); 

//Methods: a function embedded on the datatypes in JS
//console.log(surname.trim());
if (surname.trim() === ''){ // triple = sign is used because it is more precise
     console.log('surname is required');
} else {
    console.log(surname);
}

//property
console.log(surname.length);
isMale = false;
console.log(isMale);

console.log(ageAsString);
console.log(ageAsString.charAt(0));


// Arrays and Objects
//Arrays: Used to store multiple elements in one variable
// how do we see that a code is an array? By identifying the square brackets [].

//Objects: collection of key-value pairs. Where the key is the property and the value is the property value.

let courses = ["Computer Science", "Biological Science", "Information Technology", "Electrical Engineering"]
    
//index: start at 0, making the last element to be at index = courses.length - 1.
//e.g., computer science is at position one but if we use the index fomular it will be index = 1 - 1 = 0. This Makes the position of the course "0".
console.log(course[0]);
console.log(courses[course.length - 1]);

 // brakets are used to open an object
let csCourse = {
    courseName: "Computer Science", // courseName is the key, cs is the value.
    courseDuration: 3,
    apsLimit: 24,
    modules: [
        "Mathemathics ",
        "Systems Design",
        "Database Design"
    ]
}

//How to update the course name:

console.log(csCourse)

csCourse.courseName = "Information Tech"
// To add a module:
csCourse.modules.push("Statistics")
csCourse.modules[4] = "Mobile Computing"
csCourse.modules[0] = csCourse.modules[0].trim()
//If we want to delete a key. we call the object and the key.
delete csCourse.courseName
console.log(csCourse);

//looping to check for values in an array (or object) while not being sure which index something is in. 
// e.g., If we want to check if the Computer Science course has Statistics


 
