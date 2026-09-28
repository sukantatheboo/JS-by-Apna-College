// task-1

let givenNum = [23, 34, 56, 45, 98];

const result = givenNum.reduce((pre, cur) => {
  return pre * cur;
});
// console.log(output);

// task-2

// let userInp = prompt("Enter ur number");

// function output(userInp) {
//     if (userInp % 2 === 0) {
//         return userInp / 2;
//     } else {
//         return userInp * 2;
//     }
// };

// console.log(output(userInp));

// Task-3

let inpInt = [12, 23, 43, 56, 78];
let sizeOfInp = inpInt.length;
const inpInt_Sum = inpInt.reduce((pre, cur) => {
  return pre + cur;
});
const make_avg = inpInt_Sum / sizeOfInp;

console.log(make_avg);

// Task-4

function count(binNum) {
  let count_zero = 0;
  let count_one = 0;
  for (bin of binNum) {
    if (bin === "0") {
      count_zero++;
    } else {
      count_one++;
    }
  }
  return {
    count_zero,
    count_one,
  };
}
let res = count("1110100100101011");
console.log(`Zeros are: ${res.count_zero}
Ones are: ${res.count_one}`);

// Task-5

function odd_even(val) {
  if (val % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(odd_even(123));

// part-1
// Task-2

let numbers = [5, 6, 11, 12, 98, 5];
let find = 5;
function counting(numbers) {
  let count = 0;
  for (number of numbers) {
    if (number === find) {
      count++;
    }
  }
  return count++;
}

console.log(counting(numbers));

// Task-2

const vowels = "aeioubcdefghaeiou";

function counting_vowels(vow) {
  let countVowel = 0;
  for (let vowel of vowels) {
    if (
      vowel === "a" ||
      vowel === "e" ||
      vowel === "i" ||
      vowel === "o" ||
      vowel === "u"
    ) {
      countVowel++;
    }
  }
  return countVowel++;
}
console.log(counting_vowels(vowels));

// let givenString = "I am learning Programming to become a programmer";

// function finalOutput(str) {
//   let words = str.split("");
//   let longestWord = "";
//   for (let word of words) {
//     if (longestWord.length > word.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(finalOutput(givenString));

// part-2 problems
// prb-1
const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

function counting(arr) {
  let small = arr[0];
  for (let piece of arr) {
    if (piece.length < small.length) {
      small = piece;
    }
  }
  return small;
}
console.log(counting(heights2));

// prb-4

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(devices) {
  let phoneQuantity = devices.length;
  let phonePrice = 0;
  let avg = 0;
  for (let mobile of devices) {
    phonePrice = phonePrice + mobile.price;
    avg = Math.round(phonePrice / phoneQuantity);
  }
  return avg;
}
console.log(findAveragePhonePrice(phones));

// prb-5

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculatingSalary(input) {
  let totalSalary = 0;
  for (let employee of input) {
    let experience = employee.experience;
    let increment = employee.increment;
    let originalSalary = employee.starting;
    let bonus = experience * increment;
    totalSalary += originalSalary + bonus;
  }
  return totalSalary;
}
console.log(calculatingSalary(employees));

// Final assignment for Function.....(part-2 PH)

// pr-1

function totalFine(fare) {
  if (typeof fare !== "number") {
    return "Please provide a number";
  } else if (Math.sign(fare) === -1) {
    return "Please provide a positive number";
  } else if (fare === 0) {
    return "Invalid";
  }
  let totalFine = fare + fare * (20 / 100) + 30;
  return totalFine;
}
console.log(totalFine(552));

// pr-2

function onlyCharacter(characters) {
  if (typeof characters !== "string") {
    return "Please provide a string";
  }
  return characters.replaceAll(" ", "").toUpperCase();
}
console.log(onlyCharacter("ha ck m e 1 @ru.c  n"));

// prb-3

let team1 = {
  name: "Brazil",
  foul: 5,
  cardY: 3,
  cardR: 0,
};
let team2 = {
  name: "Argentina",
  foul: 7,
  cardY: 0,
  cardR: 0,
};

function bestTeam(obj1, obj2) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return "Invalid";
  }
  let score1 = obj1.foul + obj1.cardY + obj1.cardR;
  let score2 = obj2.foul + obj2.cardY + obj2.cardR;
  if (score1 < score2) {
    return obj1.name;
  } else if (score1 > score2) {
    return obj2.name;
  } else {
    return "Tie";
  }
}
console.log(bestTeam(team1, team2));

// prb-4

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(isSame([2, 5, 6], [2, 5, 6]));

// same as prb-4.0.1(square types)

function checkSquares(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    let square = arr1[i] * arr1[i];
    if (arr2[i] !== square) {
      return false;
    }
  }
  return true;
}
console.log(checkSquares([2, 3, 4], [4, 9, 16]));

// prb-4.0.2

function checkSum10(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let sumOf10 = arr1[i] + arr2[i];
    if (sumOf10 !== 10) {
      return false;
    }
  }
  return true;
}
console.log(checkSum10([2, 5, 1], [8, 5, 9]));

// prb-4.0.3

function countMatches(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return "Different Lengths";
  }
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count++;
    }
  }
  return count;
}
console.log(countMatches([0, 9, 3], [1, 9, 3]));

// prb-5

function resultReport(marks) {
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }
  let avgMarks = 0;
  let lengthOfMarks = marks.length;
  let isPass = 0;
  let isFail = 0;
  let marksSum = 0;
  for (let mark of marks) {
    marksSum += mark;
  }
  avgMarks = Math.round(marksSum / lengthOfMarks);

  if (lengthOfMarks === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }

  for (let mark of marks) {
    if (mark < 40) {
      isFail++;
    } else if (mark >= 40) {
      isPass++;
    }
  }
  let finalResult = {
    finalScore: avgMarks,
    pass: isPass,
    fail: isFail,
  };
  return finalResult;
}
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
