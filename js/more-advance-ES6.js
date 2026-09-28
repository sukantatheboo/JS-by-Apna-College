const student = {
  name: "Sukanta",
  1: 50,
  marks: "B+",
  family: {
    title: `Paul's family`,
    // grandMother: {
    //   name: "Laxmi Paul",
    //   age: 60,
    // },
  },
};

// console.log(student.family.grandMother.age);
console.log(student.family.grandMother?.age); // optional chain

// Dot Notation
const studentName = student.name;

// bracket notation
const studentOne = student["1"];

// Array map ---> returns us a new array

const numbers = [4, 8, 10, 12];
// const doubledIt = x => x*2
// const doubled = numbers.map(doubledIt)

const doubled = numbers.map((x) => x * 2);
console.log(doubled);

const friends = ["Zaved", "Pavel", "Jamun", "Rosemery"];
const nameLengths = friends.map((name) => name.length);
const firstLetters = friends.map((name) => name[0]);
console.log(nameLengths);
console.log(firstLetters);

// for each

const number = [0, 12, 3, 45, 33, 345, 3, 224, 5334];
number.forEach((x) => console.log(x));

// filter

const greaterThan10 = number.filter((x) => x > 10);
console.log(greaterThan10);

// find

const firstEven = number.find((x) => x % 2 == 0);
console.log(firstEven);

const students = [
  { id: 1, name: "Sukanta", marks: 50 },
  { id: 2, name: "Abul", marks: 40 },
  { id: 3, name: "Dabul", marks: 30 },
  { id: 4, name: "Kabul", marks: 80 },
  { id: 5, name: "Labul", marks: 70 },
];

const names = students.map((student) => student.name);
console.log(names);

// reduce

const total = number.reduce((acc, cur) => acc + cur, 0);
console.log(total);


//  note

// map: Returns a new array containing the modified items. (It always returns an array of the exact same length as the original).

// filter: Returns a new array containing only the items that passed your true/false condition. (If nothing passes, it returns an empty array []).

// find: Returns the first single element that matches your condition. (If it can't find anything, it returns undefined).

// forEach: Returns undefined. It doesn't hand anything back at all; it simply executes a piece of code for every item in the array.