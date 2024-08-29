// src/components/EmployeeDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/api/employee/${id}`);
    setEmployee(result.data);
  };

  return (
    <div>
      {employee ? (
        <div>
          <h2>Employee Details</h2>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Gender: {employee.gender}</p>
          <p>Department: {employee.department}</p>
          <p>Date of Birth: {employee.dob}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmployeeDetail;
