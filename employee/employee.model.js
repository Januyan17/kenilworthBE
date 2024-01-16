const sql = require("../_helpers/db.js");
const tableName = "employees";

// constructor
const Employee = function (employee) {
  this.userId = employee.userId;
  this.mobile = employee.mobile;
  this.firstName = employee.firstName;
  this.lastName = employee.lastName;
  this.dateOfBirth = employee.dateOfBirth;
  this.email = employee.email;
  this.status = employee.status;
};

const ModelName = Employee;

ModelName.create = (newEmployee, result) => {
  sql.query(`INSERT INTO ${tableName} SET ?`, newEmployee, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newEmployee });
  });
};

ModelName.findById = (employeeId, result) => {
  sql.query(
    `SELECT * FROM ${tableName} WHERE id = ${employeeId}`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res[0]);
        return;
      }

      // not found Employee with the id
      result({ kind: "not_found" }, null);
    }
  );
};

ModelName.getAll = (result) => {
  sql.query(``, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = ModelName;
