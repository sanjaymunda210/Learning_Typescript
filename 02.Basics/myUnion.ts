let score: number | string = 33;
console.log(score);

score = "thirty-three";
console.log(score);

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let sanjay: User | Admin = {
  name: "Sanjay",
  id: 1234,
};
console.log(sanjay);

sanjay = {
  username: "sanjay",
  id: 1234,
};
console.log(sanjay);

function getDbId(id: number | string) {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id;
}
console.log(getDbId("Sanjay"));
console.log(getDbId(1234));

const data: string[] | number[] = []; // this either be completely string array or completely number array

const data1: (string | number)[] = ["1", "2", 3]; // this can be a mix of string and number array

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew"; error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.

export {};
