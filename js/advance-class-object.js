// const student = {
//   fullName: "Sukanta Pal",
//   marks: 87,
//   printMarks: function () {
//     return this.marks;
//   },
// };
// console.log(student.printMarks());

// console.log(student);

// prototype object

const employee = {
  calTax() {
    console.log("tax rate is 10%");
  },
};
const Sukanta = {
  salary: 30000,
  calTax() {
    console.log("tax rate is 20%");
  },
};
Sukanta.__proto__ = employee;

// Class

class Toyota {
  constructor(brand) {
    console.log("This is constructor");
    this.brand = brand;
  }
  start() {
    console.log("Started");
  }
  stop() {
    console.log("Stopped");
  }
}
const fortuner = new Toyota("Toyota");

// Inheritance

class Parent {
  constructor() {
    this.species = "homo_sapience";
  }
  hello() {
    console.log("hlw");
  }
  work() {
    console.log("do nothing");
  }
}
class Child extends Parent {
  work() {
    console.log("working....."); // method overriding
  }
}
const obj = new Child();

class Parent1 {
  constructor(name) {
    this.species = "homo_sapience";
    this.name = name
  }
  eat() {
    console.log("eat");
  }
}

class Engineer extends Parent1 {
  constructor(name) {
    super(name) // to invoke parent constructor 
  }
  work() {
    super.eat()
    console.log("Solve problems");
  }
}
const newEng = new Engineer('Sukanta')


// practice problem

const data ='viewing......'
class User{
  constructor(name, email){
    this.name = name
    this.email = email
  }
  viewData(){
    console.log(data);
  }
}

class Admin extends User {
  constructor(name, email){
    super(name,email) 
   }
  editData(){
    data = '..........'
  }
}

const student1 = new User('Sukanta','sukantapal240@gmail.com')
const admin1 =new Admin('admin', 'admin@northsouth.edu')