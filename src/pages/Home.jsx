import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const buttonStyle = {
    margin: '20px',
    padding: '16px 32px',
    fontSize: '18px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1976d2',
    color: 'white',
    cursor: 'pointer',
    minWidth: '200px'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to the Online Voting System</h1>
      <div>
        <button
          style={buttonStyle}
          onClick={() => navigate('/register')}
        >
          Voter
        </button>
      </div>
      <div>
        <button
          style={buttonStyle}
          onClick={() => navigate('/voters')}
        >
          Registered Voters
        </button>
      </div>
      <div>
        <button
          style={buttonStyle}
          onClick={() => navigate('/admin')}
        >
          Admin
        </button>
      </div>
    </div>
  );
}

export default Home;
