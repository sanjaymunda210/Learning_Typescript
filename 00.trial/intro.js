// Basic Types
// Number
var phone = 870980;
console.log(phone);
// String
var surname = "Munda";
console.log(surname);
// Boolean
var isTrue = true;
console.log(isTrue);
// Array
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// Tuple
var person = ["Sanjay", 32];
console.log(person);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
var yourColor = Color.Blue;
console.log(myColor);
console.log(yourColor);
// let user = { name: "Sanjay", age: 32 };
// console.log("Hello, World!");
// console.log(user.name);
// Type Guards
// Type guards allow you to narrow down the type of a variable inside a conditional block. These guards help in handling union types or working with unknown types.
// Example: Using typeof and instanceof
// function padLeft(value: string, padding: string | number) {
//   if (typeof padding === "number") {
//     return Array(padding + 1).join(" ") + value;
//   }
//   if (typeof padding === "string") {
//     return padding + value;
//   }
//   throw new Error(`Expected string or number, got '${typeof padding}'`);
// }
// console.log(padLeft("Hello world", 5));
// console.log(padLeft("Hello world", "Sanjay "));
