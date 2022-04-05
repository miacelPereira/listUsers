import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Sidebar } from './layouts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListUsers } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<ListUsers />} />
          <Route path="/details" element={<h1> details </h1>} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
