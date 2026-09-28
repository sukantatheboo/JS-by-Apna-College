function getData(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataID);
      resolve("success");
      // if (getNextData) {
      //   getNextData();
      // }
    }, 2000);
  });
}

// promise chaining
// console.log("getting data 2 ....");
// getData(2)
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
// });

// Async await

// async function outputData() {
//   console.log("getting data 1 ....")
//   await getData(1)
//   console.log("getting data 2 ....")
//   await getData(2)
//   console.log("getting data 3 ....")
//   await getData(3)
//   console.log("getting data 4 ....")
//   await getData(4)
//   console.log("getting data 5 ....")
//   await getData(5)
//   console.log("getting data 6 ....")
//   await getData(6)
// }

// IIFE(advance js)
(async function () {
  console.log("getting data 1 ....");
  await getData(1);
  console.log("getting data 2 ....");
  await getData(2);
  console.log("getting data 3 ....");
  await getData(3);
  console.log("getting data 4 ....");
  await getData(4);
  console.log("getting data 5 ....");
  await getData(5);
  console.log("getting data 6 ....");
  await getData(6);
})();
//callback hell

// console.log("getting data 1 ....");
// getData(1, () => {
//   console.log("getting data 2....");
//   getData(2, () => {
//     console.log("getting data 3....");
//     getData(3, () => {
//       console.log("getting data 4....");
//       getData(4);
//     });
//   });
// });

// --Promises--
// it is an object in js and a solution to callback hell

// let promise = new Promise((resolve, reject) => {
//   console.log("hlw");
//   resolve("succed");
// });

// function getData2(dataID, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataID);
//       resolve("Success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 6000);
//   });
// }
// let promise2 = getData2(123);

// const getPromise = () => {
//   return new Promise((resolve,reject)=>{
//     console.log('I am promise');
//     resolve('Success')
//   })
// };

// let prom = getPromise()
// prom.then((res)=>{
//   console.log('result fulfiled', res);
// })

function asyncFnc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 3000);
  });
}
function asyncFnc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 3000);
  });
}
// console.log("fetching data 1....");
// asyncFnc1().then((res) => {
//   console.log("fetching data 2....");
//   asyncFnc2().then((res) => {});
// });

// --Async await--

function api() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("data");
      resolve(200);
    }, 3000);
  });
}

async function getWeatherData() {
  await api();
  await api();
}

async function hello() {
  console.log("hlww");
}
