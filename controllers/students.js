const express = require("express");
const mongoose = require("mongoose");

const Student = require("../models/studentdata");

const router = express.Router();

const getStudents = async (req, res) => {
  try {
    const student = await student.find();
    res.json(student);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getspecStudents = async (req, res) => {
  const roll = req.params.roll;
  try {
    const stud = await Student.findOne({ roll: roll });
    res.json(stud);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createStudents = async (req, res) => {
  console.log(req.body);
  const newstudent = new student({
    name: req.body.name,
    roll: req.body.roll,
    registration: req.body.registration,
    subjects: req.body.subjects,
    created_on: req.body.created_on,
  });

  try {
    await newstudent.save();
    res.json(newstudent);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateStudents = async (req, res) => {
  const roll = req.params.roll;
  try {
    await Student.findOneAndUpdate(
      { roll: roll },
      {
        name: req.body.name,
        roll: req.body.roll,
        registration: req.body.registration,
        subjects: req.body.subjects,
        created_on: req.body.created_on,
      }
    );
    res.json({ roll: roll });
  } catch (error) {
    res.json({ message: error.message });
  }

  const deleteStudents = async (req, res) => {
    const roll = req.params.roll;

    try {
      await Student.findOneAndRemove({ roll: roll });
      res.json({ roll: roll });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
};
module.exports.getStudents = getStudents;
module.exports.getspecStudents = getspecStudents;
module.exports.createStudents = createStudents;
module.exports.updateStudents = updateStudents;
module.exports.deleteStudents = deleteStudents;
