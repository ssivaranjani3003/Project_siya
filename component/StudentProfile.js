// StudentProfile.js
import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Paper } from '@mui/material';

function StudentProfile() {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    gender: '',
    class: '',
    address: '',
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert('Student Information Saved!');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Student Profile
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={student.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Age"
            name="age"
            value={student.age}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Gender"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Class"
            name="class"
            value={student.class}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={student.address}
            onChange={handleChange}
            fullWidth
          />
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default StudentProfile;
