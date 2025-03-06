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
  private readonly city: string = "Jamshedpur";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}
}
