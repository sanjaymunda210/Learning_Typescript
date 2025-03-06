class User {
  email: string;
  name: string;
  readonly city: string = "Jamshedpur";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const sanjay = new User("sanjay@gmail.com", "Sanjay");
// sanjay.city = "Jamshedpur";
console.log(sanjay);
