const addNumberToLS = () => {
  const number = Math.ceil(Math.random() * 100);
  console.log(number);
  localStorage.setItem("number", number);
};
const getNumberFromLs = () => {
  const number = localStorage.getItem("number");
  console.log("from saved local storage", number);
};
const setObjectToLS = () => {
  const customer = { name: "Sukanta", products: 3, price: 7500 };
  const customerJSON = JSON.stringify(customer);    // converted to string from object by sringify()
  localStorage.setItem("customer", customerJSON);
};
const readObjectFromLS = () => {
  const customerJSON = localStorage.getItem("customer");
  const customerObj = JSON.parse(customerJSON)  // converted to object from string by parse()
  console.log(customerObj.products);
  
};
