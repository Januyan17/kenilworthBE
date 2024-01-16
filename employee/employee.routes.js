var app = require("express").Router();
const employee = require("./employee.controller.js");

const subUrl = "employee";

// Create a new employee
app.post(`/${subUrl}`, employee.create);

// Retrieve all employee
app.get(`/${subUrl}`, employee.findAll);

// Retrieve a single employee with employeeID
app.get(`/${subUrl}/:employeeID`, employee.findOne);

// Update a employee with employeeID
app.put(`/${subUrl}/:employeeID`, employee.update);

// update single employee collection report
app.put(
  `/${subUrl}/collection/:employeeID`,
  employee.updateEmployeeSingleCollectionReport
);

// Delete a employee with employeeID
app.delete(`/${subUrl}/:employeeID`, employee.delete);

// app.put("/forgetPassword/:email/:token", employee.resetPassword);
// app.post("/sendOTP", employee.sendOTP);
// app.post("/checkOTP", employee.checkOTP);

module.exports = app;
