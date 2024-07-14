const express = require("express");
const fs = require("fs");

const db = require("../mockdata/db.json");

const StudentsRouter = express.Router();

StudentsRouter.get("/", (req, res) => {
  res.json({
    message: "Students list",
    data: db["students"],
  });
});

StudentsRouter.put("/:id", (req, res) => {
  const studentId = req.params.id;
  const updatedStudent = req.body;

  // Find the student with the matching id
  const studentIndex = db["students"].findIndex(
    (student) => student.id === parseInt(studentId)
  );

  if (studentIndex !== -1) {
    // Update the student's data
    db["students"][studentIndex] = updatedStudent;

    // Save the updated data to the file
    fs.writeFileSync(__dirname + "/../mockdata/db.json", JSON.stringify(db));

    res.json({
      message: "Student data updated",
      data: updatedStudent,
    });
  } else {
    res.status(404).json({
      error: "Student not found",
    });
  }
});

StudentsRouter.post("/", (req, res) => {
  const newStudents = req.body;
  db["students"].push(newStudents);

  fs.writeFileSync(__dirname + "/../mockdata/db.json", JSON.stringify(db));

  res.json({
    message: "Store Students",
    data: req.body,
  });
});

StudentsRouter.delete("/:id", (req, res) => {
  const studentId = req.params.id;
  const students = db["students"];
  const index = students.findIndex(
    (student) => student.id === parseInt(studentId)
  );

  if (index !== -1) {
    students.splice(index, 1);
    fs.writeFileSync(__dirname + "/../mockdata/db.json", JSON.stringify(db));
    res.json({
      message: `Deleted student with ID ${studentId}`,
      data: db["students"],
    });
  } else {
    res.status(404).json({
      message: `Student with ID ${studentId} not found`,
      data: db["students"],
    });
  }
});
StudentsRouter.put("/:id", (req, res) => {
  const studentId = req.params.id;
  const students = db["students"];
  const index = students.findIndex(
    (student) => student.id === parseInt(studentId)
  );

  if (index !== -1) {
    students.splice(index, 1);
    fs.writeFileSync(__dirname + "/../mockdata/db.json", JSON.stringify(db));
    res.json({
      message: `Deleted student with ID ${studentId}`,
      data: db["students"],
    });
  } else {
    res.status(404).json({
      message: `Student with ID ${studentId} not found`,
      data: db["students"],
    });
  }
});

module.exports = StudentsRouter;
