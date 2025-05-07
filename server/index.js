const express = require('express');
const cors = require('cors'); // For cross-origin requests
const path = require('path'); // For file paths
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// Serve static files from React (after building)
app.use(express.static(path.join(__dirname, '../client-new/build')));

// Mock Property Analysis API
app.get('/api/analyze', (req, res) => {
  // In a real app, this would connect to your analysis logic/database
  const mockAnalysis = {
    verdict: "BUY",
    roi: "12%",
    risk: "Low",
    confidence: "High"
  };
  res.json(mockAnalysis);
});

// Handle React routing (return all requests to React app)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client-new/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});