"use strict";
// to get things in order we use tuple but with array methods we can override the order of the tuple
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string | number)[] = [1, "sm"]
var tUser = ["Sanjay", 1234, false];
var rgb = [255, 0, 0];
var newUser = [1234, "Sanjay"];
console.log(newUser);
// newUser[1] = 1234; // error: Type 'number' is not assignable to type 'string'.
newUser.push(1234); // no error
console.log(newUser);
newUser.unshift("Munda"); // no error
console.log(newUser);
