const score: Array<number> = [];
const idName: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identitytwo(val: any): any {
  return val;
}

function identitiyThree<Type>(val: Type): Type {
  return val;
}
// once the input is number then the output will be number, if the input is string then the output will be string, the output value is locked to the same data type as the input
// identitiyThree("sanjay")
// identitiyThree(3)

// shortcut version
function identityFour<T>(val: T): T {
  return val;
}
// we can use any letter for the type but it should be as same as the syntax and we can define any type of our own

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "Pepsi", type: 1 });
