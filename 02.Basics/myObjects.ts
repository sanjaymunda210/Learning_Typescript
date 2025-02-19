// const User = {
//   name: "Sanjay",
//   email: "sanjay@gmail",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "Sanjay", isPaid: true, email: "sanjay@gmail" }); // extra parameters will give an error

// let newUser = {
//   name: "Sanjay",
//   email: "sanjay@gmail",
//   isPaid: true,
// };
// createUser(newUser);

// function createCourse(): {} {
//     return {}
// }

// function createCourse(): { name: string; price: number } {
//   return { name: "React", price: 100 };
// }

// type aliases

// type User = { name: string; email: string; isPaid: boolean };

// function createNewUser(user: User): User {
//   return { name: "", email: "", isPaid: false };
// }

// createNewUser({ name: "Sanjay", email: "sanjay@gmail", isPaid: true });


type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number 
}

let myUser: User = {
  _id: "1234",
  name: "Sanjay",
  email: "s@gmail.com",
  isActive: false
}

type cardNumber =  {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

export {
  
}