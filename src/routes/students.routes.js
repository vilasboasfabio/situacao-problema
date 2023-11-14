import { Router } from "express";
import { getStudents, getStudentById, createStudent, updateStudent, deleteStudent } from "../controllers/students.controller.js";

const studentsRoutes = Router();

studentsRoutes.get("/", getStudents);

studentsRoutes.get("/:id", getStudentById);

studentsRoutes.post("/", createStudent);

studentsRoutes.put("/:id", updateStudent);

studentsRoutes.delete("/:id", deleteStudent);

export default studentsRoutes;