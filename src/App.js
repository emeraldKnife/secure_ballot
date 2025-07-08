import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Voters from './pages/Voters';
import Vote from './pages/Vote';
import Votes from './pages/Votes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/voters" element={<Voters />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/votes" element={<Votes />} />
      </Routes>
    </Router>
  );
}

export default App;
