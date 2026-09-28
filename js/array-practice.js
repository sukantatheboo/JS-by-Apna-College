let fruits = ["Apple", "Mango", "Pinapple", "Blueberry", "Watermelon"];
console.log(fruits[3]);
fruits.splice(1, 1, "Jambura");
console.log(fruits);

const colors = ["red", "blue", "green", "yellow", "orange"];
let reversed = [];

for (let color of colors) {
  reversed.unshift(color);
}
console.log(reversed);

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for (i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);

const number = ["Tom", "Tim", "Tin", "Tik"];
let result = "";
for (num of number) {
  result += num;
}
console.log(result);

const input = [1, 2, 3];
