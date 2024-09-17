import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateAdd from './components/CreateAdd/CreateAdd';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="createAdd" element={<CreateAdd />} />
      </Routes>
    </Router>
  );
};

export default App;

