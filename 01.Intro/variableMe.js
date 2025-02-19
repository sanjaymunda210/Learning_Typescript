"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, World!";
console.log(greetings);
// number
var userId = 334455.6;
userId.toFixed();
// userId = "Sanjay"; // Error: Type 'string' is not assignable to type 'number'.
console.log(userId);
// boolean
var isLogged = true;
console.log(isLogged);
// any
var hero;
function getHero() {
    return "IronMan";
}
hero = getHero(); //hero type: any
console.log(hero);
