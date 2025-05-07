import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Neev – Property Investment & Development Analysis</h1>
      <p>Analyze properties smartly. Invest with confidence.</p>
      <button onClick={() => navigate('/analyze')}>Start Analyzing</button>
    </div>
  );
}

export default Home;
