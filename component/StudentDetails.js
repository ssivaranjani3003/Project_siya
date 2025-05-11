import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const apiUrl = "http://localhost:8081/students"; // JSON server URL

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(apiUrl);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if age is invalid
    if (age <= 0) {
      setError("Age must be a positive number");
      return;
    }

    setError(""); // Clear any previous error

    if (editingStudent) {
      // Update existing student
      await axios.put(`${apiUrl}/${editingStudent.id}`, { name, age, email });
      setEditingStudent(null);
    } else {
      // Add new student
      const newStudent = { name, age, email };
      await axios.post(apiUrl, newStudent);
    }

    setName("");
    setAge("");
    setEmail("");
    fetchStudents();
  };

  const handleEdit = (student) => {
    setName(student.name);
    setAge(student.age);
    setEmail(student.email);
    setEditingStudent(student);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    fetchStudents();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      mt={5} 
      p={3} 
      sx={{ 
        backgroundColor: "#f9f9f9", 
        borderRadius: "8px", 
        boxShadow: 3 
      }}>
      <Typography variant="h4" gutterBottom>
        Student Details
      </Typography>

      <TextField
        label="Search by Name"
        value={searchTerm}
        onChange={handleSearchChange}
        margin="normal"
        fullWidth
      />

      {error && (
        <Typography color="error" sx={{ marginBottom: 2 }}>
          {error}
        </Typography>
      )}

      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center" mt={2}>
        <TextField
          type="text"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          margin="normal"
          fullWidth
        />
        <TextField
          type="number"
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          margin="normal"
          fullWidth
          inputProps={{ min: "1" }} // Prevent negative and zero values in the input field
        />
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
          fullWidth
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: 2 }}>
          {editingStudent ? "Update Student" : "Add Student"}
        </Button>
      </Box>

      <Typography variant="h6" mt={3}>
        Students List
      </Typography>
      <ul style={{ listStyleType: "none", padding: 0, width: "100%" }}>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #ddd" }}>
              <span>{student.name}, Age: {student.age}, Email: {student.email}</span>
              <div>
                <Button 
                  onClick={() => handleEdit(student)} 
                  variant="contained" 
                  color="secondary" 
                  size="small" 
                  sx={{ marginRight: 1 }}>
                  Edit
                </Button>
                <Button 
                  onClick={() => handleDelete(student.id)} 
                  variant="contained" 
                  color="error" 
                  size="small">
                  Delete
                </Button>
              </div>
            </li>
          ))
        ) : (
          <li>No students found</li>
        )}
      </ul>
    </Box>
  );
};

export default StudentDetails;

