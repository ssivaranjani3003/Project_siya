// src/components/Dashboard.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard = ({ studentData }) => {
    return (
        <Box textAlign="center" mt={5}>
            <Typography variant="h4">Dashboard</Typography>
            <Typography variant="h6">Total Courses: {studentData.totalCourses}</Typography>
            <Typography variant="h6">Average CGPA: {studentData.averageCGPA}</Typography>
            <Typography variant="h6">Upcoming Deadlines: {studentData.upcomingDeadlines.join(', ')}</Typography>
        </Box>
    );
};

export default Dashboard;
