let newBtn = document.createElement("button");
newBtn.innerText = "Click me"
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white"; 
console.log(newBtn);
document.querySelector("body").prepend(newBtn);

// Qs-2

let para = document.querySelector("p");
// para.setAttribute("class", "newClass" );
para.classList.add('newClass') //    
