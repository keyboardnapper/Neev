import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Analyze from './Analyze'; // we'll create this next

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
      </Routes>
    </Router>
  );
}

export default App;
