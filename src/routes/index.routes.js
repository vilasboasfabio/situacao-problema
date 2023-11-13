import { Router } from "express";
import studentsRoutes from "./students.routes.js";

const router = Router();

router.use("/students", studentsRoutes);

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello Moto!" });
    }
);

export default router;