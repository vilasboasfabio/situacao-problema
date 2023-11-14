export const getCourses = (req, res) => {
    return res.status(200).send({ message: "Get all courses controller" });
}

export const getCourseById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Get course ${id} controller` });
}

export const createCourse = (req, res) => {
    const { name, description, students } = req.body;

    students <= 10 ? res.status(401).send({ message: `Your course must have to content more than 10 students` }) : res.status(201).send({ message: `Course ${name} with description ${description} controller and ${students} of students` });

    if (!name || !description || !students ) {
        return res.status(400).send({ message: "Missing fields controller" });
    }
    return res.status(200).send({ message: `Create course ${name} with description ${description} controller and ${students} of students` });
}

export const updateCourse = (req, res) => {
    const { id } = req.params;
    const { name, description, students } = req.body;

    students <= 10 ? res.status(401).send({ message: `Your course must have to content more than 10 students` }) : res.status(201).send({ message: `Update course ${id} with name ${name}, description ${description} and ${students} of students` });

    if (!name || !description || !students) {
        return res.status(400).send({ message: "Missing fields" });
    }
    return res.status(200).send({ message: `Update course ${id} with name ${name}, description ${description} and ${students} of students` });
}

export const deleteCourse = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Delete course ${id}` });
}