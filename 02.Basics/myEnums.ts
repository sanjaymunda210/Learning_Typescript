// enums is used for limited set of values
// enum SeatChoice {
//   AISLE = "aisle",
//   MIDDLE = 3,
//   WINDOW,
// }

const enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
} // by using const enum, we can avoid generating extra code at the js code

const sanjaySeat = SeatChoice.AISLE;

export {};
