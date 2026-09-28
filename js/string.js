let str = 'sukanta';

console.log(str[0]); // it will give  "s" 
console.log(str[3]); 

// Template literals
let str1 = "Sukanta\tPal" //    \t -> takes an extra length

let newStr = str1.toUpperCase(); // because js strings are immutable.....

console.log(str1.length);

console.log(newStr)
// str.trim() --> remove whitespaces

let string = "0123456";
console.log(string.slice(1, 3)); // ending index is non-inclusive thats why its print 1 and 2 only

console.log(string.concat(str1)); // adding string together

console.log(string.replace(0, 2));
console.log(string.charAt(2));

const sentence = 'I am a good and hard working person';
console.log(sentence.split(' '));

const friendStr = 'Rahim,Karim,Marim,Sarim,Larim';
const friend = friendStr.split(',');
console.log(friend);

// reverse a string 

const topic = 'I am a good boy but sometimes bad things happened with me';

let reverse = '';

for (i = 0; i < topic.length; i++) {
    // console.log(i)
    const letter = topic[i];
    reverse = letter + reverse;
}
console.log(reverse)
  

// practice(Apna college)

let userInput = prompt('Enter your full name:');
const generateName = `@${userInput.toLowerCase()}${userInput.length}`;
console.log(generateName); 


