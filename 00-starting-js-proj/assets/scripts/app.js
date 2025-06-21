//import { apiKey, abcKey } from "./util.js";
//import defKey from "./util.js";
//console.log(apiKey, abcKey, defKey);
/*import * as utils from "./util.js";
console.log(utils);*/

/*
function createGreeting(userName, message = "Hello!"){ 
    return "Hi, I am " +  userName + ". " + message;
}

const greeting = createGreeting("Max");
console.log(greeting);
*/


/*  Object methods!
  const user = {
    name: "max",
    age: 34,
    greet() {
        console.log("Hello " + this.name + ". You are " + this.age + " years old");
    }
}

user.greet();*/

/* destructuring! 

const [firstName, lastName] = ["Max", "Mccormack"];
console.log(`firstname: ${firstName} and last name: ${lastName}`);
// equivalent of doing: firstName = userData[0]; lastName = userData[1];
// you can also destructure objects!


// slow way: const name = user.name; const age = user.age;
//fast way below. You pull out values by name and not position this time:
const {name: userName, age} = user;
console.log(userName);
console.log(age); */

// spread operator. lets you add in values from old arrays
/*
const user = {
    name: "Max", 
    age: 34,
};
const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading", "Running"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
    isAdmin: true,
    ...user,
}

console.log(extendedUser);
*/

// Control Structures - if, if-else, else-if. for loops.
/* 
const password = prompt('Your password');

if (password === 'Hello') {
    alert("Hello works")
} else if (password === 'hello') {
    alert("hello works");
} else {
    alert("Access not granted");
    console.log("access not granted");
}

const hobbies = ["Sports", "Cooking"];
for (let i =0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

for (let hobby of hobbies) {
    console.log(hobby);
}
*/

// DOM Manipulation. React doesn't do this much (is handled during the react build) screw it we ain't covering it

// using functions as values
/*
function handleTimeout() {
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("Timed out... again!");
}
// by passing just the function's name, you pass the function as a value. Using the parentheses makes the funciton run immediately
// this would cause a return value to come back, which we don't want to do here. we want the function itself.
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("Anotha time out");
}, 4000);

*/
