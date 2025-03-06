"use strict";
class User {
    constructor(email, name) {
        this.city = "Jamshedpur";
        this.email = email;
        this.name = name;
    }
}
const sanjay = new User("sanjay@gmail.com", "Sanjay");
// sanjay.city = "Jamshedpur";
console.log(sanjay);
