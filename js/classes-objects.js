 /**
 * class ---> templates
 *
 * object
 */

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
    // console.log("Calling the constructor", name);
  }
  goal() {
    console.log("Do a goal");
  }
}
const player1 = new Player("Tom the boss", 30);
console.log(player1);

// player1.goal()
// console.log(player1)

// Inheritance

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking...`);
  }
}

const dog1 = new Do ("Balmold",2, "German Shepard");
console.log(dog1);
dog1.eat();

// explain this in js

// # ---> encapsulation(hiding data)