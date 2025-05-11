import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function CGPA() {
    const [courses, setCourses] = useState([{ credit: '', grade: '' }]);
    const [validationErrors, setValidationErrors] = useState({});

    const addCourse = () => {
        setCourses([...courses, { credit: '', grade: '' }]);
    };

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newCourses = [...courses];
        newCourses[index][name] = value;
        setCourses(newCourses);

        // Reset validation errors for the current field
        setValidationErrors((prev) => {
            const newErrors = { ...prev };
            newErrors[index] = {
                ...newErrors[index],
                [name]: ''
            };
            return newErrors;
        });
    };

    const validateGrade = (grade) => {
        const validGrades = ['A', 'B', 'C', 'D', 'F'];
        return validGrades.includes(grade.toUpperCase());
    };

    const validateCourses = () => {
        const errors = {};
        let isValid = true;

        courses.forEach((course, index) => {
            const gradeError = !validateGrade(course.grade);
            const credit = Number(course.credit);
            const creditError = !course.credit || credit <= 0 || credit > 10;

            if (gradeError || creditError) {
                isValid = false;
                errors[index] = {
                    credit: creditError ? 'Credit is required, must be greater than 0, and cannot exceed 10' : '',
                    grade: gradeError ? 'Invalid grade. Use A, B, C, D, F' : ''
                };
            }
        });

        setValidationErrors(errors);
        return isValid;
    };

    const calculateCGPA = () => {
        let totalGradePoints = 0;
        let totalCredits = 0;

        courses.forEach((course) => {
            const gradePoint = getGradePoint(course.grade);
            const credit = Number(course.credit);

            totalGradePoints += gradePoint * credit;
            totalCredits += credit;
        });

        return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    };

    const getGradePoint = (grade) => {
        switch (grade.toUpperCase()) {
            case 'A': return 9;
            case 'B': return 8;
            case 'C': return 7;
            case 'D': return 6;
            case 'F': return 5;
            default: return -1; 
        }
    };

    const handleSubmit = () => {
        if (validateCourses()) {
            // Display CGPA only if there are no validation errors
            alert(`Your CGPA is: ${calculateCGPA()}`);
        }
        // No need for an else block here; errors will be shown inline
    };

    return (
        <Box 
            sx={{ 
                maxWidth: 600, 
                mx: 'auto', 
                mt: 5, 
                p: 3, 
                backgroundColor: '#f4f6f8', 
                border: '1px solid #ddd', 
                borderRadius: 2, 
                boxShadow: 3, 
                textAlign: 'center' 
            }}
        >
            <Typography variant="h4" textAlign="center" gutterBottom>
                CGPA Calculator
            </Typography>

            {courses.map((course, index) => (
                <Box 
                    key={index} 
                    sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2 }}
                >
                    <TextField
                        type="number"
                        name="credit"
                        label="Credits"
                        value={course.credit}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                        fullWidth
                        required
                        error={!!validationErrors[index]?.credit}
                        helperText={validationErrors[index]?.credit}
                    />
                    <TextField
                        type="text"
                        name="grade"
                        label="Grade (A, B, C, D, F)"
                        value={course.grade}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                        fullWidth
                        required
                        error={!!validationErrors[index]?.grade}
                        helperText={validationErrors[index]?.grade}
                    />
                </Box>
            ))}

            <Button 
                onClick={addCourse} 
                variant="contained" 
                color="primary" 
                fullWidth
                sx={{ marginBottom: 2 }}
            >
                Add Another Course
            </Button>

            <Button 
                onClick={handleSubmit} 
                variant="contained" 
                color="secondary" 
                fullWidth
            >
                Calculate CGPA
            </Button>

            <Typography variant="h6" mt={3}>
                Your CGPA: {calculateCGPA()}
            </Typography>
        </Box>
    );
}

export default CGPA;
