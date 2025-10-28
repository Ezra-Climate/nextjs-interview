import "server-only";

type Employee = {
  id: number;
  name: string;
  role: string;
};

let employees: Employee[] = [
  { id: 1, name: "John", role: "Frontend" },
  { id: 2, name: "Mary", role: "Backend" },
  { id: 3, name: "Peter", role: "DevOps" },
];

let roles = ["Frontend", "Backend", "DevOps"];

export async function getRoles() {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay
  return roles;
}

export async function getEmployees() {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay
  return employees;
}

export async function addEmployee(employee: Omit<Employee, "id">) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay
  const id = new Date().valueOf();
  const newEmployee = { id, ...employee };
  employees.push(newEmployee);
  return employee;
}
