let age = prompt("Enter your age");
const isStudent = true;
let discount = "";
if (age <= 10) {
  discount = "Free";
} else if ((age <= 18 && isStudent) || age <= 22) {
  discount = `You'll get a 50% discount`;
} else if (age >= 60) {
  discount = "You'll get a 15% discount";
} else {
  discount = "Regular fare 800 BDT";
}
alert(discount);
