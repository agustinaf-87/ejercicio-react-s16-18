import React from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Taskdashboard from '../pages/TaskDashboard';

export default function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/dashboard" element={<Taskdashboard />} />
        </Routes>
      </BrowserRouter>

  )
}
