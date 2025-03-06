"use strict";
// class User {
//   public email: string;
//   private name: string;
//   private readonly city: string = "Jamshedpur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const sanjay = new User("sanjay@gmail.com", "Sanjay");
// sanjay.city = "Jamshedpur";
// console.log(sanjay);
class User {
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jamshedpur";
    }
    deleteToken() {
        console.log(" Token Deleted ");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
const sanjay = new User("sanjay@gmail.com", "Sanjay");
// sanjay.deleteToken();
