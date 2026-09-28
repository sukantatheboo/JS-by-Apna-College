/**
 * Inch to Feet converter
 */

function inchToFeet(inch) {
  const feetFraction = inch / 12;
  console.log(feetFraction);
  const feetNumber = parseInt(feetFraction);
  console.log(feetNumber);
  const inchRemaining = inch % 12;
  console.log(inchRemaining);
  const result = `${feetNumber} ft ${inchRemaining} inch`;
  return result;
}
console.log(inchToFeet(75));

// no-duplicate numbers or strings on array

const names = ["abul", "babul", "cabul", "dabul", "abul", "ebul", "cabul"];
const numbers = [11, 13, 12, 11, 23, 12, 14];

function noDuplicate(arr) {
  const unique = [];
  for (const item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(names);
console.log(uniqueArray);

// more about math methods in js

const math = Math.min(23, 34, 1, 2, 345, 32);
console.log(math);

console.log(Math.round(3.95)); // 4
console.log(Math.floor(3.95)); // 3
console.log(Math.ceil(3.1)); // 4

// Date and time

const today = new Date(2026, 8, 24);
today.setMonth(9); // its the index of the month of october
console.log(today.toLocaleString("en-GB"));

// unix epoc

// swap variable

let a = 5;
let b = 7;

console.log(a, b);

// a = b
// b = a

const temp = a;

a = b;
b = temp;

console.log(a, b);

// another way

let x = 5;
let y = 7;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);

// who is Taller(max)

const heights = [12, 23, 45, 54, 67, 20, 80, 89, 78];

function getMax(numbers) {
  let max = numbers[0];

  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(getMax(heights));

// min(vertically privileged)

const vP = [23, 34, 53, 80, 10, 30, 20];

function measure(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log(measure(vP));

// finding cheapest phone from an array

const mobiles = [
  { name: "Samsung", price: 12000, camera: "12mp", color: "Black" },
  { name: "Apple", price: 15000, camera: "20mp", color: "White" },
  { name: "Xiaomi", price: 2000, camera: "10mp", color: "Black" },
  { name: "Vivo", price: 4000, camera: "12mp", color: "Black" },
  { name: "Motorola", price: 3000, camera: "12mp", color: "Black" },
];

function getCheapest(phones) {
  min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}
console.log(getCheapest(mobiles));

// Multi-layer Discount calculator

/**
 * first 100 --> 100(every hundred must be priced 100)
 * 101 To 200 --> 90
 * above 200 --> 70
 */

function layeredDiscountedTotal(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;
  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 100) {
    const first100Total = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100Total + remainingTotal;
    return total;
  } else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * above200Price;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
}
console.log(layeredDiscountedTotal(220));

// Making calculator

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function calculation(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "multiply") {
    const result = multiply(a, b);
    return result;
  } else if (operation === "divide") {
    const result = divide(a, b);
    return result;
  }
}

console.log(calculation(23, 45, "divide"));

// validation

function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide a number";
  }
  return num1 * num2;
}
console.log(multiply(5, "seven"));
