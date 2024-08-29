// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetail from './components/EmployeeDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Employee Manager</h1>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/update/:id" element={<EmployeeForm />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
