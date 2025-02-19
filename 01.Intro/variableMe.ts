let greetings: string = "Hello, World!";
console.log(greetings);

// number
let userId = 334455.6;
userId.toFixed();
// userId = "Sanjay"; // Error: Type 'string' is not assignable to type 'number'.
console.log(userId);

// boolean
let isLogged: boolean = true;
console.log(isLogged);

// any

let hero;

function getHero() {
  return "IronMan";
}

hero = getHero(); //hero type: any
console.log(hero);

export {};
