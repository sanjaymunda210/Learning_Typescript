// Basic Types

// Number
let phone: number = 870980;
console.log(phone);

// String
let surname: string = "Munda";
console.log(surname);

// Boolean
let isTrue: boolean = true;
console.log(isTrue);

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

// Tuple
let person: [string, number] = ["Sanjay", 32];
console.log(person);

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;
let yourColor: Color = Color.Blue;
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
