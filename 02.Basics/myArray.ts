const superHeros: string[] = [];
superHeros.push("spiderman");
console.log(superHeros);

// const heroPower: number[] = [];
const heroPower: Array<number> = [];
heroPower.push(1);
heroPower.push(2);
console.log(heroPower);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "Sanjay", isActive: true });
allUsers.push({ name: "Raj", isActive: false });
console.log(allUsers);

const mlModels: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(mlModels);

export {};
