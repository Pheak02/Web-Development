const express = require('express');
const cors = require('cors');
const fs = require('fs');

const db = require('../mockdata/db.json');

const categoryRouter = express.Router();

// Use cors middleware to handle CORS headers
categoryRouter.use(cors());
categoryRouter.use(express.json()); // Parse JSON requests

categoryRouter.get('/', (req, res) => {
    res.json({
        'message': 'Student list',
        'data': db['Students']
    });
});

categoryRouter.post('/', (req, res) => {
    try {
        const newStudent = req.body;
        db['Students'].push(newStudent);

        fs.writeFileSync(__dirname + '/../mockdata/db.json', JSON.stringify(db));

        res.json({
            'message': 'Store Student',
            'data': newStudent
        });
    } catch (error) {
        console.error('Error processing POST request:', error);
        res.status(500).json({
            'message': 'Internal Server Error'
        });
    }
});

categoryRouter.put('/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const updatedData = req.body;

    const students = db['Students'];
    const studentIndex = students.findIndex(student => student.id === studentId);

    if (studentIndex !== -1) {
        students[studentIndex] = {
            id: studentId,
            ...updatedData
        };

        fs.writeFileSync(__dirname + '/../mockdata/db.json', JSON.stringify(db));

        res.json({
            'message': 'Student updated successfully',
            'data': students[studentIndex]
        });
    } else {
        res.status(404).json({
            'message': 'Student not found'
        });
    }
});


categoryRouter.delete('/:id', (req, res) => {
    const studentId = req.params.id;

    const index = db['Students'].findIndex(student => student.id === studentId);

    if (index !== -1) {
        const deletedStudent = db['Students'].splice(index, 1)[0];

        fs.writeFileSync(__dirname + '/../mockdata/db.json', JSON.stringify(db));

        res.json({
            'message': 'Delete Student',
            'data': deletedStudent
        });
    } else {
        res.status(404).json({
            'message': 'Student not found'
        });
    }
});


module.exports = categoryRouter;
