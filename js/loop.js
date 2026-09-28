// For loops

for (let i = 1; i <= 5; i++) {
  // initialize; stopping condition; updation
  console.log(`i = ${i}`);
}
console.log("loop has ended");

// calculate sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);

// While loops

// let i = 1;
// while (i <= 5) { //stopping condition
//     console.log(`i = ${i}`);
//     i++;
// }

// Do-While loop

let i = 1;
do {
  console.log("Sukanta");
  i++;
} while (i <= 10);

// for-of loop (only used for strings and arrays)

let str = "sukanta";
let size = 0;

for (let val of str) {
  // val(iterator) -> characters
  console.log(val);
  size++;
}
console.log(`String size is: ${size}`);

// for-in loop (only for objects and arrays)

let studentInformation = {
  name: "Sukanta",
  age: 20,
  cgpa: 1.96,
  isPassed: true,
};

for (let key in studentInformation) {
  console.log(key, studentInformation[key]);
}

// Practice Question

// print 0 to 100

for (i = 0; i <= 100; i++) {
  console.log(i);
}

// print all even number from 0 to 100

// for (i = 0;i <= 100;i = i + 2) {
//     console.log(i);
// }
// or
// for (i = 0;i <= 100;i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// question 2

let randomNumber = 100;
let guessNumber = prompt("Enter your number"); // prompt gives us number in string format

while (guessNumber != randomNumber) {
  guessNumber = prompt("Enter again");
}
console.log("Yahhh, u did it!");
