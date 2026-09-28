let marks = [97,65,654,4465,22,443];
console.log(marks);

// Array is a type of objects where it uses index instead of keys

console.log(marks[0]);

console.log(marks[3] = 444);  // because in JS arrays are mutable thats why we can change any indices
console.log(marks);


let heroes = ['IronMan', 'BatMan', 'AquaMan'];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

for (let hero of heroes) {
    console.log(hero);
}

let cities = ['dhaka', 'chittagong', "cox's Bazar", 'rajshahi', 'comilla', 'nator'];

for (let city of cities) {
    console.log(city.toUpperCase());
}

// question 1

let studentMarks = [85, 97, 44, 37, 76, 60];
let sum = 0; 

for (let val of studentMarks) {
    sum += val;
}
let avg = sum / studentMarks.length;
console.log(avg);
console.log(sum);

// question 2

let items = [250, 344, 394, 400, 540]
// let i = 0;

// for (let val of items) {
//     console.log(`index is ${i} and value is ${val}`);
//     let offer = val * 0.3;
//     items[i] -= offer;
//     console.log(`value after 30% discount ${items[i]}`);
//     i++;
// }
// doin' this problem by for loop

for (i = 0; i < items.length; i++) {
    let offer = items[i] * 0.3;
    items[i] -= offer;
}
console.log(`value after 30% discount ${items }`);


// Array Methods

let foodItems =['Rezela', 'Kacchi', 'Beef or Mutton'];
console.log(foodItems.push('Daal', 'Panner')) // push adds index to end 

let fruitsItem =['Apple', 'Mango', 'Pinapple', 'Banana'];
console.log(fruitsItem);
let deletedItem = fruitsItem.pop()     // it delete the last index and return it 
console.log(`Ur deleted item is : ${deletedItem}`)

console.log(foodItems.toString());    // it convert array into a string 



let marvelsHeroes = ['thor', 'spiderman ', 'ironman', 'Dr.Strange', 'Antman'];
let dcHeroes = ['batman', 'superman'];

let heroPacks = marvelsHeroes.concat(dcHeroes);
console.log(heroPacks );

console.log(marvelsHeroes.slice(1, 3))   // it dont change anything on original array



let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 192, 2339);    // (index from, delete count, add new index)

// Add Element

// arr.splice(2, 0, 101)

// Delete Element 
// arr.splice(3, 1)
// console.log(arr);

// Replace Element 

arr.splice(3, 1, 101);
console.log(arr)


let mncCompanies = ['Google','Bloomberg','Microsoft','Netflix','IBM','Uber'];

mncCompanies.shift();
console.log(mncCompanies);      // its basically delete from end and return its deleted value 

mncCompanies.splice(3, 1, 'Ola');

console.log(mncCompanies);

mncCompanies.push('Amazon');
console.log(mncCompanies)



// reverse an array 

const numbers = [0, 2, 4, 6, 8];

const reversed = [];

for(i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
    reversed.unshift(numbers[i]);   // basically its add indices at first 
}
console.log(reversed); 

// re-arrange an array(Ascending and Descending)

const number = [2, 6, 9,  4, 0, 7];

console.log(number);
number.sort();  // used for ascending
console.log(number);

const ages = [1, 3, 100, 14, 8 , 4, 28];
ages.sort();
console.log(ages);

// copy array elements to another array

const num = [25, 35, 23];
const copyNum = num;

copyNum[0] = 233;

console.log(copyNum);       // it will change the root array cause its non-primitive types
console.log(num);

// but when comes to primitive types

let price = 245;
let compPrice = price;

compPrice = 234;

console.log(price);
console.log(compPrice);  // it cant change the root element cause its primitive types 


const nm = [0, 1, 2, 3, 4, 5];

const cpNm = Array.from(nm);

cpNm.push(24);

console.log(nm);
console.log(cpNm);