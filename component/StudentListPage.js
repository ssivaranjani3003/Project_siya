import React, { useState } from 'react';
import StudentList from '../components/StudentList';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const StudentListPage = ({ students, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-list-page">
      <h1>Student List</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StudentList 
        students={filteredStudents} 
        onEdit={onEdit} 
        onDelete={onDelete} 
      />
      <div className="center-button-container">
        <button
          className="back-to-home-button"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default StudentListPage;
