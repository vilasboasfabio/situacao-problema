import { Student } from "../models/students/Student.js";
import { StudentList } from "../models/students/StudentsList.js";

const list = new StudentList();


export const getStudents =  (req, res) => {
   
    const students = list.getAllStudents();

    if (students.length) {
        return res.status(200).send(students);
    }
    return res.status(404).send({ message: "No students found" });
}

export const getStudentById = (req, res) => {
    const { id } = req.params;

    const student = list.getStudentById(id);

    if(!student){
        return res.status(404).send({ message: "Student not found" });
    }

    return res.status(200).send({ message: `Get student ${id} controller` });b
}

export const createStudent = (req, res) => {
    const { name, email, age } = req.body;
   
    if (!name || !email || !age) {
        return res.status(400).send({ message: "Missing fields controller" });
    }
    const student = new Student(name, email, age);

    list.addStudent(student);
   return res.status(201).send({ message: `Student created sucessfuly`, student });
}

export const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send({ message: "Missing fields" });
    }
   const student = list.getStudentById(id);
    if(!student){
         return res.status(404).send({ message: "Student not found" });
    }

    const updatedStudent = list.updateStudent(id, name, email, age);
    return res.status(200).send({ message: `Student updated sucessfuly`, updatedStudent });

}
    
export const deleteStudent = (req, res) => {
    const { id } = req.params;
    const student = list.getStudentById(id);

    if(!student){
        return res.status(404).send({ message: "Student not found" });
    }
    list.removeStudent(id);
    return res.status(200).send({ message: `Student deleted sucessfuly`, student});
}
