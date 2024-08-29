// src/components/EmployeeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get('http://localhost:8080/api/employee');
    setEmployees(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/api/employee/${id}`);
    loadEmployees(); // Reload the list after deletion
  };

  return (
    <div className="container employee-list">
      <h2>Employee List</h2>
      <Link to="/add" className="button">Add New Employee</Link>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.gender}</td>
                <td>{employee.department}</td>
                <td>{employee.dob}</td>
                <td>
                  <Link to={`/update/${employee.id}`} className="button">Edit</Link>
                  <button onClick={() => deleteEmployee(employee.id)} className="button delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
