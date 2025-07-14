/* In JS objects are KING

Objects are  containers {
Properties
Methods = Functions stored as properties
}
*/
 const person = {
    firstName: 'Nomala',
    surname: 'Greenie',
    age: 26,
    heightInMeters: 1.56,

    greeting: (person) => {
        return 'Bonjour!';     // Alternatively: console.log("Bonjour!")
    }
 }
 
 console.log(person.greeting()); // Alternatively: person.greeting()
 console.log("My name is: ", person.firstName)

 //This isn't a copy, you just creating another way to call the object 
  const zinhle = person;

  console.log('And my name is: '+zinhle.firstName);// it will still write Nomala

  // what you want to do is create other copies. 

  //Game

  const robot1 = {
    color: "Red",
    action: "Stop!",
    doAction: function (){
        return this.action; //'this' refers to the funcion.
    }
  }

  console.log(robot1.doAction())

    const robot2 = {
    color: "Orange",
    action: "Slow-down",
    doAction: function (){
        return this.action; 
    }
  }

  console.log(robot2.doAction())

    const robot3 = {
    color: "Green",
    action: "Go!",
    doAction: function (){
        return this.action; 
    }
  }

  console.log(robot3.doAction())


  // To avoid writing the whole thing over and over again. 
  // We introduce constructors.
  //We turning the object into a template.

  //Because color and action keep changing values, they have to be our parameters.
  function Robot(color, action) {  //constructor function names start with a capital letter, because they are special.
    this.color = color;
    this.action = action;  
    this.doAction = function (){ // we use the = sign because we are assigning the color and action inside the constructor. when we create an object- it's a key-value pair hence the (:)
        return this.action;
    }
  }

  const robot4 = new Robot("blue", "Jump!"); // On line 23 we were not able to do this. this time we are able to because we used a constructor
  console.log(robot4.doAction());

  // create a constructor for book objects.
  // Think of this constructor as a factory for creating many objects.

  function Book(title, author, publishDate) {
    this.title = title; //my property of title, must be the title I am given by the user.
    this.author = author;
    this.publishDate = publishDate;
    this.getTitle = function () {
        return this.title; // we use this.title instead of title because at some point you might alter 'this.title' so it's safe to use yours as an output then what the user entered.
    }
     this.getAuthor = function () {
        return this.author;
    }
     this.getPublishDate = function () {
        return this.publishDate;
    }
  }

  const book1 = new Book ("Damsel", "Nomala", "26 June 2025");
  console.log(book1.getTitle());
  
  console.log(book1.getAuthor());

  console.log(book1.getPublishDate());

  /* Below the 'this' refers to the console and it does not have a doAction() property[method]
  console.log(this.doAction()); is wrong
  */

//Check what type of dataType a method is returning typeof
//console.log(typeof book1.getTitle());

//We can add to object literals with ease as below
person.address = "123 Hola Street";

console.log(person.address)

book1.numOfPages = 432;
console.log(book1.numOfPages)

book1.setTitle = function (title) {
    this.title = title;
}

book1.setTitle("The Little Mermaid")
console.log(book1.getTitle())

//Comment document if you will be running on the terminal
//document.getElementById("demo").innerHTML = book1.getTitle()

//The factory which is book, needs to add a new function
Book.prototype.setTitle = function (title) {
    this.title = title;
}        

//This this to be review:

  const book2 = new Book ("Damsel", "Nomala", "26 June 2025");
  console.log(book2.getTitle());
  
  console.log(book2.getAuthor());

  console.log(book2.getPublishDate());

// The function setTitle only belongs to book1, its not part of the constructor of Book.
book2.setTitle("Hercules") // Error: TypeError book2.setTitle is not a function
console.log(book2.getTitle())

// How do I amend properties of an existing object??

//Classes are similar to constructors

class Car{
    constructor(name, year)
    {
        this.name=name;
        this.year=year;
    }
    age()
    {
        return (2025-this.year)

    }
}

const mazda6 = new Car ("Mazda", 2015);
console.log(mazda6.name);
console.log("It is "+mazda6.age()+" yrs old");

//JSON = JavaScript Object Notation
//We want to take the object and turn it into a string. We are stringifying it. 
document.getElementById("demo").innerHTML = JSON.stringify(book1);