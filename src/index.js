import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListUsers } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ListUsers />} />
        <Route path="/details" element={<h1> details </h1>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
