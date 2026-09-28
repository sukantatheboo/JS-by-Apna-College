// JSON ----> JS object with Notation

// const person = {
//   name: "Sukanta",
//   occupation: "Student",
//   fav_dish: ["Kacchi", "Mejbani", "Chiken bhuna", "Mutton"],
//   friends: "i have no friends:(",
//   isRich: false,
// };
// console.log(person, typeof person);

// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));