import { Router } from "express";
import { getCourses, getCourseById, createCourse, updateCourse, deleteCourse } from "../controllers/courses.cintroller.js";

const coursesRoutes = Router();

coursesRoutes.get("/", getCourses);

coursesRoutes.get("/:id", getCourseById);

coursesRoutes.post("/", createCourse);

coursesRoutes.put("/:id", updateCourse);

coursesRoutes.delete("/:id", deleteCourse);

export default coursesRoutes;

