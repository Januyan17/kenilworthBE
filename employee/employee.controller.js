const Employee = require("./employee.model.js");

const ModelName = Employee;

// Create and Save a new employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create
  const EmployeeClass = new Employee({
    userId: req.body.userId,
    mobile: req.body.mobile,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    email: req.body.email,
    status: req.body.status,
  });

  // Save in the database
  ModelName.create(EmployeeClass, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee.",
      });
    else res.send(data);
  });
};

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
  ModelName.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Employee.",
      });
    else res.send(data);
  });
};

exports.sendOTP = (req, res, next) => {
  ModelName.sendOTP(req.params.email, req.body)
    .then(function (user) {
      res.json(user);
    })
    .catch(next);
};

exports.checkOTP = (req, res, next) => {
  userService
    .checkOTP(req.params.email, req.body)
    .then(function (user) {
      res.json({ user });
    })
    .catch(next);
};
