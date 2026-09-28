const URL = "https://poetrydb.org/title/Ozymandias/lines";
const linesPara = document.querySelector("#lines");
const btn = document.querySelector("#btn");

const getlists = async () => {
  let response = await fetch(URL);
  console.log(response); // API uses request and response objects
  let data = await response.json();
  linesPara.innerText = data[0].lines;
};
btn.addEventListener("click", getlists);
