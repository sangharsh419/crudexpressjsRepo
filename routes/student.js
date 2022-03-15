const express = require("express");
const req = require("express/lib/request");

const student_Act = require("./controllers/students");

const router = express.Router();

router.get("/", student_Act.getStudents);
router.get("/:roll", student_Act.getspecStudents);
router.post("/", student_Act.createStudents);
router.patch("/:roll", student_Act.updateStudents);
router.delete("/:roll", student_Act.deleteStudents);
