var app = require("express").Router();
const employee = require("./employee.controller.js");

const subUrl = "employee";

// Create a new employee
app.post(`/${subUrl}`, employee.create);

// Retrieve all employee
app.get(`/${subUrl}`, employee.findAll);

// app.post("/sendOTP", employee.sendOTP);
// app.post("/checkOTP", employee.checkOTP);

module.exports = app;
