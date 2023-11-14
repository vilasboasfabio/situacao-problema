import { Router } from "express";
import studentsRoutes from "./students.routes.js";
import coursesRoutes from "./courses.routes.js";



const router = Router();

router.use("/courses", coursesRoutes);

router.use("/students", studentsRoutes);

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello Moto!" });
    }
);

export default router;