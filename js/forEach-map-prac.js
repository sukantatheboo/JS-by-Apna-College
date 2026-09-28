const employees = [
  {
    id: 101,
    name: "Sarah",
    department: "Engineering",
    salary: 85000,
    isActive: true,
  },
  { id: 102, name: "John", department: "HR", salary: 62000, isActive: true },
  {
    id: 103,
    name: "Michael",
    department: "Engineering",
    salary: 92000,
    isActive: false,
  },
  {
    id: 104,
    name: "Emma",
    department: "Marketing",
    salary: 74000,
    isActive: true,
  },
  {
    id: 105,
    name: "Chris",
    department: "Engineering",
    salary: 78000,
    isActive: true,
  },
];

let totalPayroll = 0;

const names = employees.map((employee) => employee.name);
console.log(names);

const engDept = employees.filter(
  (employee) => employee.department === "Engineering",
);
console.log(engDept);

const id104 = employees.find((employee) => employee.id === 104);
console.log(id104);

employees.forEach(
  (employee) => (totalPayroll += employee.salary),
);
console.log(totalPayroll);

const sortedEmployees = employees.filter((employee)=> employee.isActive && employee.salary > 80000).map((employee)=>employee.name)
console.log(sortedEmployees);

const idOfEmployees = employees.filter((employee)=> employee.isActive ===false).map((employee)=>employee.id)
console.log(idOfEmployees);

const engineeringNames =[]
employees.forEach((employee)=> {
  if (employee.department === 'Engineering'){
    engineeringNames.push(employee.name)
  }
})
console.log(engineeringNames);

