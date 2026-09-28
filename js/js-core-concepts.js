// JS is a dynamic type programming language

// js: primitive data type

// js: non-primitive data typed

// undefined ----> not defined

// --truthy and falsy values--

let money;
money = 0;
money = ""; // falsy..
money = " "; // truthy..
money = "0";
money = null;
money = {};
// money = [];
// money = false;
// money = true;
// money = [];

if (money) {
  console.log(money, "is truthy");
} else {
  console.log(money, "is falsy");
}

// if i need to capture the falsy value to go inside if block
// use logical not
if (!money) {
  console.log("inside if with a falsy value");
}

// capture all positive values
// double not!!
if (!!money === true) {
  console.log("only true inside the double not ");
}

// --double equal(==) vs triple equal(===)--

// (===)--->
/*
 * first check type if the type is different then they are different
 * but if the type is same then checks the value and if the value is different they are different
 */

console.log(2 === 2);
console.log(2 === "2");
console.log(true === 1);
console.log(null === undefined);
// console.log([]==='');

// (==) ---> type coercion(type convert)
/**
 *  if one value is string and another value is number ---> converts strings into number then compare

 * */

// console.log(2 == "2");
// console.log(true ==1);
// console.log(null==undefined);
console.log([] == "");

// --Scope--

// Hoisting in scope

// Temporal dead zone

// pass by reference

// all primitive values(num,str,bool) always --pass by values(creates a copy)--

/** 
 * Pass by Value (Primitive Types)
This applies to:

number
string
boolean
null
undefined
symbol
bigint

--Original stays safe ✅
--Changes don’t affect original ❌
*/
function changeValue(x) {
  x = 100;
}

let a = 10;
changeValue(a);

console.log(a); // still 10

// non primitive values are --pass by reference(memory address)--
/**
 * Original can change ✅
 * Because both point to same thing
 */

const manik = { name: "Manik", balance: 120000 };
const roton = { name: "Roton", balance: 130000 };

console.log("before call", manik, roton);

function totalMoney(person1, person2) {
  person1.balance = 0;
  person2.balance = person2.balance / 2;
  const total = person1.balance + person2.balance;
  return total;
}
// exp-2
const balance = totalMoney(manik, roton);
console.log(balance);
console.log("after function call", manik, roton);

function changeObject(obj) {
  return (obj.name = "Sukanta");
}

let user = { name: "Paul" };
console.log(changeObject(user));

console.log(user.name); // Sukanta ----> you CANNOT change the original reference by reassigning

// --arguments--

function add(a, b) {
  console.log(arguments); // it returns us an array like object
  const params = [...arguments];
  console.log(params);
}
add(10, 20, 3, 203, 292, 2);

//  --closure--
//--- A closure happens when a function remembers variables from its outer scope, even after that outer function has finished executing.
function counter() {
  let count = 0;
  function innerFnc() {
    count++;
    console.log(count);

    console.log("Someone called me:(");
  }
  return innerFnc;
}
const output = counter();
console.log(output());

function createBankAccount() {
  let balance = 0;

  return {
    deposit: function (amount) {
      balance += amount;
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account = createBankAccount();

account.deposit(100);
console.log(account.getBalance()); // 100
//here we cant directly access the balance(Encapsulation)