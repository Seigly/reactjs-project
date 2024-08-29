// src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({ name: '', gender: '', department: '', dob: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch the employee details if ID exists (update mode)
      const fetchEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/api/employee/${id}`);
        setEmployee(result.data);
      };
      fetchEmployee();
    }
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      // Update the existing employee
      await axios.put(`http://localhost:8080/api/employee`, { ...employee, id });
    } else {
      // Create a new employee
      await axios.post('http://localhost:8080/api/employee', employee);
    }
    navigate('/');
  };

  return (
    <div className="container employee-form">
      <h2>{id ? 'Update Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={employee.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={employee.dob}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button">Save</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
