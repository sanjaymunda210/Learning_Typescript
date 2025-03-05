// demonstrating two ways of defining a function in an interface
// 1. startTrial: () => string;
// 2. startTrial(): string;

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

// we can redefine the interface with the same name
interface User {
  githubToken: string;
}

// we can also extend Interface
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const sanjay: User = {
  dbId: 1,
  email: "sanjay@gmail.com",
  userId: 101,
  githubToken: "1234",
  startTrial: () => "Trial Started",
  getCoupon: () => {
    return 10;
  },
};

console.log(sanjay.getCoupon("10OFF", 12));
