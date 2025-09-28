const employees = require("../db/employees");

class EmployeeService {
  getEmployeeById(id) {
    return employees.find((employee) => employee.id === id);
  }

  getEmployees(id) {
    return id
      ? employees.filter((employee) => employee.teamId === id)
      : employees;
  }

  createEmployee(employee) {
    return employees.push(employee);
  }
}

module.exports = new EmployeeService();
