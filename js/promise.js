const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Nums", num);

  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "Data is not available" });
  }
});
getData.then((data) => console.log(data)).catch((err) => console.log(err));

const getData2 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Nums", num);

  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "Data is not available" });
  }
});
getData2.then((data) => console.log(data)).catch((err) => console.log(err));

const getData3 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Nums", num);

  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "Data is not available" });
  }
});
getData3.then((data) => console.log(data)).catch((err) => console.log(err));

Promise.all([getData, getData2, getData3]) // promise.all() Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//

const loadData = async () => {
  console.log(1);
  console.log(2);
  try {
    const URL = await fetch("https://jsonplaceholder.typicode.com/comments");
    const response = await URL.json();
    console.log("Succesfully fetched", response.length);
  } catch (err) {
    console.log("Error!");
  }
  console.log(3);
  console.log(4);
};
// loadData();


// clearTimeout
let count = 0
const intervalId = setInterval(()=>{
  console.log(count++)
  if(count>10){
    clearInterval(intervalId)
  }
}, 2000)

