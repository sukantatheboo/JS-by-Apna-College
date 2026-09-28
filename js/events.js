let btn1 = document.querySelector("#btn-1");
// btn1.onclick = (evt) => {
//   // console.log(evt);
//   // console.log(evt.type);
//   // console.log(evt.target);
//   // console.log(evt.clientX, evt.clientY);
// };
// btn1.addEventListener("click", () => {
//   console.log("clicked handler-1");
// });
// btn1.addEventListener("click", () => {
//   console.log("clicked handler-2 ");
// });

// const handler3 = () => {
//   console.log("clicked handler-3");
// };
// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//   console.log("clicked handler-4");
// });

// btn1.removeEventListener("click", handler3);
// Note: the callback reference should be same to remove

let box = document.querySelector("div");
// box.onmouseover = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light"; // dark
modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currentMode = "light";
    body.classList.add("light");
    body.classList.add("dark");
  }
});
