import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Register from './pages/Register.jsx';
import Voters from './pages/Voters.jsx';
import Vote from './pages/Vote.jsx';
import Votes from './pages/Votes.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/voters" element={<Voters />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/votes" element={<Votes />} />
    </Routes>
  );
}

export default App;
