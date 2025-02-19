// in functions we can define the type of the parameters and the return type of the function, espically we do this to avoid type any, and to make code safer as we wont be able to pass a wrong type of parameter to the function and we wont be performing wrong operations which are type related.

function addTwo(num: number) {
  //   num.toUpperCase(); // this will not give an error as the type of num is any
  return num + 2;
}

addTwo(2);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("hello");

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

signUpUser("Sanjay", "sanjay@gmail.com", true);
loginUser("Sanjay", "sanjay@gmail.com");

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 ok";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["superman", "batman", "flash"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
  // return 1; // this will give an error as the return type is void
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}
// this function will never return anything, it will throw an error and stop the execution of the program

export {};
