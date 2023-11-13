import { Router } from "express";

const studentsRoutes = Router();

studentsRoutes.get("/", (req, res) => {
    return res.status(200).send({ message: "Get all students" });
    }
);

studentsRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Get student ${id}` });
    }
);

studentsRoutes.post("/", (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send({ message: "Missing fields" });
    }
    return res.status(200).send({ message: `Create student ${name} with an e-mail as ${email} and ${age} yers old` });
    }
);

studentsRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send({ message: "Missing fields" });
    }
    return res.status(200).send({ message: `Update student ${id} with name ${name}, email ${email} and ${age} years old` });
    }
);

studentsRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Delete student ${id}` });
    }
);

export default studentsRoutes;