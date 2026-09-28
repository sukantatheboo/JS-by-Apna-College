const numbers = [11, 12, 13, 14];
console.log(Array.isArray(numbers));

// isNaN
console.log(isNaN("2")); // false means its a number
console.log(isNaN("ab")); // its not a number
console.log(isNaN({})); // its not a number
console.log(isNaN([])); // its a number

// default parameter

function sum(a, b = 0) {
  // b = 0 is default parameter
  sum = a + b;
  return sum;
}
console.log(sum(10));

// Arrow Fnc

// Function expression
const addition = function (num1, num2) {
  return num1 + num2;
};
console.log(addition(12, 13));

const fnc1 = () => {};
// --spread operator--

const number = [1, 2, 3, 4, 5, 6];
console.log(number);
console.log(...number);

const max = Math.max(...number);
console.log(max);

const first = [12, 14, 18, 22, 28];
const second = first;
second.push(6);
console.log(first);

const first1 = [12, 14, 18, 22, 28];
const second1 = [...first1];
second1.push(6);
console.log(first1);
console.log(second1);

const person = {
  name: "Sukanta",
  age: 21,
  university: "North South University",
};
const employee = {
  designation: "dev",
  ...person,
};
console.log(employee);

// ---destructuring---

const product = { name: "Brief", price: `350 Bdt`, quantity: 3 };
const { price } = product;
console.log(price);

//-----------------------//

const num = [25, 88, 23, 45, 66];
const [frst, scnd] = num;

// entries

// --keys--
const empId = {
  name: "Sukanta",
  designation: "CTO",
  salary: `1.5 Million USD`,
  experience: 25,
  age:25,
};
const keys = Object.keys(empId);
const values = Object.values(empId);
const entries = Object.entries(empId);
console.log(keys); // returns an array
console.log(values); // returns an array
console.log(entries); // returns a 2D array

// ---freeze--

// Object.freeze(empId)
// delete empId.age
// console.log(empId );

// seal
Object.seal(empId) // We can modify the values but we cant delete also cant add new item
delete empId.age
empId.salary = '2 Million USD'
empId.location = 'California'
console.log(empId );

// Feature                Object.freeze() Object.seal()
// Add new properties?     No.             No
// Delete properties?      No.             No
// Modify existing values? No.             Yes

// object looping

const empId2 = {
  name: "Sukanta",
  designation: "CTO",
  salary: `1.5 Million USD`,
  experience: 25,
  age:25,
};
for(const key in empId2){
  const value = empId2[key]
  console.log(key);
}