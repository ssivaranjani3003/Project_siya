// src/components/Grades.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Grades = () => {
    const [grades, setGrades] = useState([{ subject: '', grade: '' }]);

    const addGrade = () => {
        setGrades([...grades, { subject: '', grade: '' }]);
    };

    const handleChange = (index, event) => {
        const newGrades = [...grades];
        newGrades[index][event.target.name] = event.target.value;
        setGrades(newGrades);
    };

    return (
        <Box mt={5}>
            <h2>Manage Grades</h2>
            {grades.map((grade, index) => (
                <Box key={index}>
                    <TextField
                        name="subject"
                        label="Subject"
                        value={grade.subject}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <TextField
                        name="grade"
                        label="Grade"
                        value={grade.grade}
                        onChange={(e) => handleChange(index, e)}
                    />
                </Box>
            ))}
            <Button onClick={addGrade}>Add Grade</Button>
        </Box>
    );
};

export default Grades;
