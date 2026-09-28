let a = 5;
let b = 2 ;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // this is called modulus which is give us reminder
console.log(a ** b); // this is called exponentiation (5^2)

// unary operator
console.log(a++); // increment

console.log(b--); // decrement

// post vs pre increment & decrement
console.log(++a);
console.log(--b); 

// Comparison operators

console.log(a === b);

let c = 5;
let d = `sukanta`;
console.log(c === d);

// Ternary operator
let age = 17;
// let result = age >= 18 ? 'adult' : 'teenager'; // condition ? true output : false output
// console.log(result);

// let res = prompt('hello');
// console.log(res);

const userInput = prompt('Input a number');
if(userInput % 5 === 0) {
    console.log(`${userInput} Multiple of 5`);
} else {
    console.log(`${userInput}  Not`);
}
let marks = prompt('Enter your marks');

if (marks >= 89) {
    console.log(`You got an A`);
} else if (marks >= 70 && marks < 89) {
    console.log(`You got a B`);
} else if (marks >= 60 && marks < 69) {
    console.log(`You got a C`);
} else if (marks >= 50 && marks < 59) {
    console.log(`You got a D`);
} else if (marks <= 49) {
    console.log(`Go kids to ur Papa:)`);
}