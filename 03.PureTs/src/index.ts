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
  protected _courseCount = 1;
  readonly city: string = "Jamshedpur";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  private deleteToken() {
    console.log(" Token Deleted ");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const sanjay = new User("sanjay@gmail.com", "Sanjay");
// sanjay.deleteToken();
