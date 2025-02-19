// to get things in order we use tuple but with array methods we can override the order of the tuple

// const user: (string | number)[] = [1, "sm"]
let tUser: [string, number, boolean] = ["Sanjay", 1234, false];
let rgb: [number, number, number] = [255, 0, 0];

type User = [number, string];
const newUser: User = [1234, "Sanjay"];
console.log(newUser);

// newUser[1] = 1234; // error: Type 'number' is not assignable to type 'string'.
newUser.push(1234); // no error
console.log(newUser);

newUser.unshift("Munda"); // no error
console.log(newUser);

export {};
