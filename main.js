import {car} from "./car.js";
import { isFemale } from "./variables.js";
import {MyButton} from "./MyButton.js"

const myNewCar = new car("Ford", 1971);

document.getElementById("garage").innerHTML = myNewCar.age()
alert (isFemale)

const newButton = new MyButton("blue", "Register", "10px", "white")
newButton.render()

const newButton2 = new MyButton("Green", "Register", "10px", "white")
newButton.render()
