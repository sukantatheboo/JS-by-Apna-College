function myFunction(msg) {
    //  (..) parameter --> input
    console.log(msg);
}
myFunction('hello'); // argument 

// Function ---> 2 numbers sum

function sum(x, y) {
    // parameters are act as local variable of function that belongs to a block scope  
    s = x + y;
    console.log('before return');
    return s;
    console.log('after return');  
}

let value = sum(234.4, 55);
console.log(value);

// Arrow Function
// ---> compact way of writing function 

const arrowFunc = (a, b) => {
    return a + b;
}
console.log(arrowFunc(2, 3)); 

// counting vowels from characters

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++; 
        }
    }
    return(count); 
}

let result = countVowels('Sukanta');
console.log(output);

// Array methods in function 

// forEach (forEach --> Higher order function or Higher order methods)
// arr.forEach( callBackFunction );
// * A callback  is a function passed as an argument to another function

let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function printVal(val, idx, arr) {
    console.log(val, idx, arr); // it can also print value index and also its array(parameters)
})

// practice 1

let givenNumber = [2, 4, 6, 8, 10];

givenNumber.forEach((val) => {
    console.log(val * val) // val ** 2;
});

// map array methods

/* ==> creates a new array with the results of some operation. 
The values its callback returns are used to form a new array */

let num = [1, 2, 3, 4, 5, 6, 7];

num.map((val) => {
    console.log(val);
})

// creates a new array by map method

let newArr = num.map((val) => {
    return val ** 2;
});
console.log(newArr);

// Filter method
// ---> creates a new array of element that gives true for condition.

let nums = [23, 456, 678, 389, 457];

let even = nums.filter((val) => {
    return val % 2 === 0;
});
console.log(even);

// Reduce method
// ---> perform some operations & reduces the arrays to a single value 
// and it returns that single value.


let arr1 = [23, 22, 21, 34];
 
const output = arr1.reduce((pre, cur) => {
    return pre + cur;
});

console.log(output);


// practice question 

let marks = [87, 93, 64, 99, 86];

const finalHighestMarks = marks.filter((val) => {
    if (val > 90) {
        return val;
    }
});
console.log(finalHighestMarks);


let userInp = prompt('Enter ur numbers');

let array = [];

for (i = 1; i <= userInp; i++) {
    array[i - 1] = i;
} 
console.log(array);

let sumIs = array.reduce((pre, cur) => {
    return pre + cur;
});

console.log(`Your numbers sum is ${sumIs}`);
