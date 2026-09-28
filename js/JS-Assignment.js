//  problem 1

// let userInput = prompt(`Enter ur area`);
// const area = userInput / 2;
// console.log(area);

// problem 2

const money = 24000;
let result = '';

if (money >= 25000) {
    result = `Macbook kine dibo baba`;
} else if (money >= 10000) {
    result = `Bicyle kine dibo jao`;
} else if(money < 10000) {
    result = `Baba chocolate kine dite parbo`;
}
console.log(result);

// problem 3

/*let lastDay = prompt('Enter your prescribed days');
 
for (i = 1; i <= lastDay; i++) {
   if (i % 3 === 0) {
    console.log(`${i} - medicine`);
   } else {
    console.log(`${i} - rest`);
   }
}*/

// chatgpt problem - 1

/*let lastDay = prompt('Enter ur planned days');

for (i = 1; i <= lastDay; i++) {
    if ( i % 3 === 0) {
        console.log(`${i} - rest`);
    } else {
        console.log(`${i} - exercise`);
    }
}*/

// chatgpt problem - 2

/*let lastDay = prompt('Enter ur planned days');
 
for (i = 1; i <= lastDay; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - 8 glasses`);
    } else if (i % 2 !== 0 && i % 5 === 0) {
        console.log(`${i} - 10 glasses`);
    } else if (i % 2 !== 0›) {
        console.log(`${i} - 6 glasses`);
    }
}*/

/*const fileName = prompt("Enter your file name here");

if (fileName.includes('#')) {
    console.log('store');
} else if (fileName.includes('.pdf')) {
    console.log('store');
} else if (fileName.includes('.docx')) {
    console.log('store');
} else {
    console.log('delete');
}*/

// question - 05

let studentDetails = {
    name: "Sukanta.Pal",
    id: 251,
    department: 'MIS',
};
console.log(`${studentDetails.name.toLowerCase()}.${studentDetails.id}.${studentDetails.department.toLowerCase()}@ph.ac.bd`);

// question - 05

let experience = 5;
let startingSalary = 20000;
const finalSalary = startingSalary * Math.pow(1.07, experience);

console.log(finalSalary);
