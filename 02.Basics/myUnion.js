"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
console.log(score);
score = "thirty-three";
console.log(score);
var sanjay = {
    name: "Sanjay",
    id: 1234,
};
console.log(sanjay);
sanjay = {
    username: "sanjay",
    id: 1234,
};
console.log(sanjay);
function getDbId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return id;
}
console.log(getDbId("Sanjay"));
console.log(getDbId(1234));
var data = []; // this either be completely string array or completely number array
var data1 = ["1", "2", 3]; // this can be a mix of string and number array
var seatAllotment;
seatAllotment = "aisle";
