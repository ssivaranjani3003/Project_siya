import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddStudent from '../components/AddStudent';

const AddStudentPage = ({ onAdd }) => {
  const navigate = useNavigate();

  return (
    <div className="add-student-page">
      <h1>Add Student</h1>
      <AddStudent onAdd={onAdd} />
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

export default AddStudentPage;

