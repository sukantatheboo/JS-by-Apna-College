let allHeadings = document.querySelectorAll("h1");

for (let heading of allHeadings) {
  console.log(heading.innerText);
}

// Topic on QuerySelector and QuerySelectorAll

let foodHeading = document.querySelector("#food-title");
foodHeading.innerText = "Food that makes my life easier and make me happy:)";

let allAppleGadget = document.querySelectorAll(
  ".gadget-accessories .apple-accessories"
);
console.log(allAppleGadget);

let allSpanTags = document.querySelectorAll("#old-dhaka span"); // old-dhaka -> span tag
console.log(allSpanTags);
console.dir(allSpanTags);

for (let span of allSpanTags) {
  console.log(span.innerText);
}

let loremItem = document.getElementById("lorem");
loremItem.style.color = "coral";
loremItem.style.backgroundColor = "lightblue";
loremItem.style.textAlign = "center ";

// Attributes

let divBox = document.querySelector("div");
console.log(divBox);
let id = divBox.getAttribute("id");
console.log(id);
let nameId = divBox.getAttribute("name");
console.log(nameId);

let paragraph = document.querySelector("p");
console.log(paragraph.setAttribute("class", "newClass"));

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

// divBox.append(newBtn) // node.append(el) ---> adds at the end of the node(inside)
// divBox.prepend(newBtn) // node.prepend(el) ---> adds at the start of the node(inside)
// divBox.before(newBtn) // node.before(el) ---> adds before the node(outside)
divBox.after(newBtn); // node.after(el) ---> adds after the node(outside)

let newHeading = document.createElement("h1");
newHeading.innerHTML =
  "<i>Hlw there this is sukanta and currently doing web dev</i>";
document.querySelector("body").prepend(newHeading);

let blaa = document.querySelector("#player-container").childNodes;
console.log(blaa);

let mainBody = document.querySelector("#main-body");
console.log(mainBody);

let placeSection = document.createElement("section");

let h2 = document.createElement("h2");
h2.innerText = "Happy New Year";

placeSection.appendChild(h2);

let ul = document.createElement("ul");
ul.innerText = "New year's Wishes";
let li1 = document.createElement("li");
li1.innerText = "Graduating from NSU";
let li2 = document.createElement("li");
li2.innerText = "My own Start-Up";
let li3 = document.createElement("li");
li3.innerText = "Google";
let li4 = document.createElement("li");
li4.innerText = "Going Outside";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
placeSection.appendChild(ul);
mainBody.appendChild(placeSection);

let section1 = document.createElement("section");
section1.innerHTML = `
<h3>Different greeting system</h3>
<ul>
<li>Hola</li>
<li>Hlw</li>
<li>Namaste</li>
<li>Salam</li>
</ul>
`;
mainBody.appendChild(section1);
 