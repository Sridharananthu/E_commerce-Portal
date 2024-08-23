import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Buyer/signup/signup';
import Login from './components/Buyer/login/login';
import './index.css'; // General CSS styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />  {/* Add this line */} 
    </Routes>
  </BrowserRouter>
);
