console.dir(document); // its give an object of the window
console.log(document);

// let heading = document.getElementById("header"); //h1

// console.dir(heading);

// let para = document.getElementsByClassName("paragraph"); // get element by return a html collection and it is very similar to array

// console.dir(para);

// let paras = document.getElementsByTagName("p");
// console.dir(paras);

/**
 * document.querySelector("myId/myClass/tag") --> it returns the first element
 * document.querySelectorAll("myId/myClass/tag") --> it returns a  node list
 */

// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelectorAll(".paragraph"));

/**
 * Properties
 *
 * tagName: returns tag for element nodes
 * innerText: returns text content of the element and all its children
 * innerHtml: returns the plain text or HTML contents in the element
 * textContent: returns textual content even for hidden elements
 */
// console.dir(para);

// let div = document.querySelector("div");
// console.dir(div);

// let head = document.querySelector("h2");
// console.dir(head);

// console.log((head.innerText = "New text"));
// console.log(head.textContent)

let h2 = document.querySelector("h2");
h2.innerText += " from Sukanta ";

let boxes = document.querySelectorAll(".box");
let idx = 1;
for (let box of boxes) {
  box.innerText = `Unique value ${idx}`;
  idx++;
}
// boxes[0].innerText = 'new unique value 1'
