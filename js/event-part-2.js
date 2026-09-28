function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// let btnDark = document.querySelector("#btn-dark");
// btnDark.onclick = function makeDark() {
//   document.body.style.backgroundColor = "black";
// };
let heading = document.getElementById("heading-1");
let btnHead = document.getElementById("update-title");
let mainBody = document.getElementById("main-body");
btnHead.addEventListener("click", function () {
  heading.style.color = "white";
  document.body.style.color = "white";
  mainBody.style.backgroundColor = "black";

  btnHead.innerText = "Updated";
});

let inputPara = document.getElementById("name");
let nameHolder = document.getElementById("name-holder");
let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
  submitBtn.innerText = "Submitted";
  const name = nameHolder.value;
  inputPara.innerText = name;
});

let cmtContainer = document.getElementById("comment-container");
let commonParas = document.getElementsByClassName(".comment");
let pstBtn = document.getElementById("pst-btn");
let cmtBox = document.getElementById("comment-box");

pstBtn.addEventListener("click", () => {
  const newComment = cmtBox.value; // innerText vs .value (when to use)
  const commentElement = document.createElement("p");
  commentElement.innerText = newComment;
  commentElement.classList.add("comment");
  cmtContainer.appendChild(commentElement);
  cmtBox.value = "";
});

let btnMouse = document.getElementById("btn-mouse");
// btnMouse.addEventListener('mouseenter', () => {
//   console.log('event triggered')
// })
// btnMouse.addEventListener('mousemove', () => {
//   console.log('event triggered')
// })
// btnMouse.addEventListener("mouseout", () => {
//   console.log("event triggered");
// });
let userName = document.getElementById("user-name");
userName.addEventListener("focus", () => {
  console.log("User about to write");
});
userName.addEventListener("blur", () => {
  console.log("User done with writting his/her name");
});
// userName.addEventListener('keydown', function(event){
//   console.log('typing', event.target.value)
// })
userName.addEventListener("keyup", function (event) {
  console.log("typing", event.target.value);
});

const inpDel = document.getElementById("input-delete");
const delBtn = document.getElementById("btn-delete");
const secInfo = document.getElementById("sec-info");
inpDel.addEventListener("keyup", function (event) {
  const text = event.target.value;
  if (text === "Delete") {
    console.log("typed");
    delBtn.removeAttribute("disabled");
  } else {
    console.log("none");
    delBtn.setAttribute("disabled", true);
  }
});
delBtn.addEventListener("click", () => {
  secInfo.style.display = "none";
});

document.getElementById("item-2").addEventListener("click", () => {
  console.log("hlw u got me item-2");
});
document.getElementById("list-items").addEventListener("click", () => {
  console.log("hlw u got me list (2)");
});
document.getElementById("list-container").addEventListener("click", () => {
  console.log("hlw u got me section(3)");
});

const items = document.getElementsByClassName("item");
const ol = document.getElementById('item-list')
// for (const item of items) {
//   item.addEventListener('click', function(event){
//     // console.log(event.target.parentNode)
//     event.target.parentNode.removeChild(event.target)
//   })
// }

ol.addEventListener('click', function(event){
  event.target.parentNode.removeChild(event.target)
})
document.getElementById('add-new-item').addEventListener('click', ()=> {
  const li = document.createElement('li')
  li.innerText = 'New item added '
  li.classList.add('item')
  ol.appendChild(li)
}) 