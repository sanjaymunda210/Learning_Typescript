"use strict";
// in functions we can define the type of the parameters and the return type of the function, espically we do this to avoid type any, and to make code safer as we wont be able to pass a wrong type of parameter to the function and we wont be performing wrong operations which are type related.
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //   num.toUpperCase(); // this will not give an error as the type of num is any
    return num + 2;
}
addTwo(2);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello");
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("Sanjay", "sanjay@gmail.com", true);
loginUser("Sanjay", "sanjay@gmail.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 ok";
}
var getHello = function (s) {
    return "";
};
var heros = ["superman", "batman", "flash"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
    // return 1; // this will give an error as the return type is void
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
